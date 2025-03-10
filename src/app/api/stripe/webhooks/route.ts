import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import Stripe from "stripe";
import { buffer } from "node:stream/consumers";
import { errorHandlerStripe } from "@/lib/utils";
import { createClient } from "@/lib/supabase/server";
import { CartItem } from "@/lib/store/cart-store";
import { it } from "node:test";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2025-01-27.acacia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
	//const body = await buffer(req.body as unknown as NodeJS.ReadableStream);
	const headersList = await headers();
	const signature = headersList.get("stripe-signature") as string;

	let event: Stripe.Event;

	const cookieStore = await cookies();
	const supabase = await createClient(cookieStore);

	const handleSaveOrderProductData = async (charge: Stripe.Charge) => {
		const metadata = JSON.parse(charge.metadata.metadata);
		const items = metadata?.items;
		const user_id = metadata?.user_id;
		const amount = charge.amount;
		const status = charge.status;
		const payment_id = charge.payment_intent;
		const currency = charge.currency;
		const payment_method = charge.payment_method;
		const refund_status = charge.refunds?.object;
		const receipt_url = charge.receipt_url;
		const paymentIntent = await stripe.paymentIntents.retrieve(
			payment_id as string
		);
		const customer = paymentIntent.customer;

		try {
			// 1. Crear orden
			const { data, error } = await supabase.rpc("create_order_with_products", {
				p_user_id: user_id,
				p_amount: amount,
				p_items: items, // <-- Convierte automáticamente a JSON array
				p_status: status,
				p_payment_id: payment_id,
				p_currency: currency,
				p_payment_method: payment_method,
				p_refund_status: refund_status ? refund_status : "",
				p_receipt_url: receipt_url,
				p_customer: customer,
			});

			if (error) throw error;

			return NextResponse.json({ data }, { status: 200 });
		} catch (error) {
			return NextResponse.json({ error }, { status: 400 });
		}
	};

	try {
		event = stripe.webhooks.constructEvent(
			await req.text(),
			signature,
			webhookSecret
		);
	} catch (err) {
		errorHandlerStripe(err as Stripe.errors.StripeError);
		return NextResponse.json({ error: err }, { status: 400 });
	}

	// Handle the event
	switch (event.type) {
		case "charge.succeeded":
			//console.log(`Charge for ${event.data.object} was successful!`);
			// Then define and call a method to handle the process charge.
			handleSaveOrderProductData(event.data.object);
			break;

		default:
			// Unexpected event type
			console.log(`Unhandled event type ${event.type}.`);
	}

	// Return a 200 response to acknowledge receipt of the event
	return NextResponse.json({ received: true });
}

export const config = {
	api: {
		bodyParser: false,
	},
};
