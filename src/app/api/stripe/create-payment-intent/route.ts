import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2025-01-27.acacia", // Use the latest API version
});

export async function POST(req: Request) {
	const { amount, items, user_id, email } = await req.json();

	const metadata = JSON.stringify({ items, user_id, email });

	const customer = await stripe.customers.create({
		email,
		metadata: { user_id }, // Vincula a tu usuario interno
	});

	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: amount as number,

			currency: "usd",
			// In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
			automatic_payment_methods: {
				enabled: true,
			},
			customer: customer.id,
			metadata: {
				metadata,
			},
		});

		return NextResponse.json({ clientSecret: paymentIntent.client_secret });
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	}
}
