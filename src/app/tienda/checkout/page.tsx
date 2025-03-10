"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import { useCartStore } from "@/lib/store/cart-store";
import { CheckoutForm } from "@/components/checkout-form";
import { createClient } from "@/lib/supabase/client";
import { formatCurrency } from "@/lib/formatters";
import { errorHandlerStripe } from "@/lib/utils";
import Stripe from "stripe";
import { toast } from "sonner";
import { AuthError } from "@supabase/supabase-js";

export default function Checkout() {
	const [isLoading, setIsLoading] = useState(true);
	const [clientSecret, setClientSecret] = useState("");
	const router = useRouter();
	const { items, getTotalPriceInCents } = useCartStore();
	const supabase = createClient();

	const createPaymentIntent = async () => {
		try {
			setIsLoading(false);

			// Fetch the client secret from your server
			const response = await fetch("/api/stripe/create-payment-intent", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					amount: getTotalPriceInCents(), // amount in cents
					items,
					user_id: (await supabase.auth.getUser()).data.user?.id,
					email: (await supabase.auth.getUser()).data.user?.email,
				}),
			});
			const { clientSecret, error } = await response.json();

			//console.log("clientSecret>>>", clientSecret);
			if (error) throw error;

			setClientSecret(clientSecret);
		} catch (error) {
			
			errorHandlerStripe(error as Stripe.errors.StripeError);
		}
	};

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const {
					data: { user },
					error,
				} = await supabase.auth.getUser();

				if (!user) throw error;
			} catch (error) {
				const authError = error as AuthError; // Aserción de tipo
				toast.error(authError?.message || "Error de autenticación");
				router.push(
					`/tienda/inicio-sesion?${new URLSearchParams({
						callbackUrl: "/tienda/checkout",
					})}`
				);
			}
		};

		checkAuth();
		createPaymentIntent();
	}, [router, getTotalPriceInCents]);

	if (isLoading || !clientSecret) {
		return (
			<div className='bg-white p-6 rounded-lg shadow min-h-[400px]'>
				<h2 className='text-xl font-semibold mb-4 flex'>
					Espere un momento <span className='animate-pulse'> ...</span>
				</h2>
				{items.map((item) => (
					<div
						key={item.id}
						className='flex justify-between mb-2 h-full w-full bg-gray-200 animate-pulse p-4 rounded-md'
					>
						<span>Product X x {item.quantity}</span>
						<span>$xxx</span>
					</div>
				))}

				<div className='border-t pt-4 mt-4'>
					<div className='flex justify-between font-bold'>
						<span>Total:</span>
						<span>$xxx</span>
					</div>
				</div>
				<div className='mt-6'></div>
			</div>
		);
	}

	return (
		<main className='flex-grow container mx-auto px-4 py-8'>
			<h1 className='text-2xl font-bold mb-6'>Checkout</h1>
			<div className='bg-white p-6 rounded-lg shadow'>
				<h2 className='text-xl font-semibold mb-4'>Resumen del pedido</h2>
				{items.map((item) => (
					<div key={item.id} className='flex justify-between mb-2'>
						<span>
							{item.name} x {item.quantity}
						</span>
						<span>{formatCurrency(item.price * item.quantity)}</span>
					</div>
				))}
				<div className='border-t pt-4 mt-4'>
					<div className='flex justify-between font-bold'>
						<span>Total:</span>
						<span>{formatCurrency(getTotalPriceInCents() / 100)}</span>
					</div>
				</div>
				<div className='mt-6'>
					<Elements stripe={stripePromise} options={{ clientSecret }}>
						<CheckoutForm />
					</Elements>
				</div>
			</div>
		</main>
	);
}
