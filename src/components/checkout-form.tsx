"use client";

import { useState } from "react";
import {
	useStripe,
	useElements,
	PaymentElement,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { errorHandlerStripe } from "@/lib/utils";
import Stripe from "stripe";

export function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);

		try {
			const { error } = await stripe.confirmPayment({
				elements,
				confirmParams: {
					return_url: `${process.env.NEXT_PUBLIC_URL_SERVER}/tienda/confirmacion`,
				},
			});

			if (error) throw error;
		} catch (error) {
			const stripeError = error as Stripe.errors.StripeError;
			errorHandlerStripe(stripeError);
		}

		setIsLoading(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<PaymentElement />
			<Button
				type='submit'
				disabled={!stripe || isLoading}
				className='w-full mt-4'
			>
				{isLoading ? "Procesando..." : "Pagar ahora"}
			</Button>
		</form>
	);
}
