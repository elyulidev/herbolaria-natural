"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCartStore } from "@/lib/store/cart-store";

export default function Confirmacion() {
	const [status, setStatus] = useState<"success" | "processing" | "error">(
		"processing"
	);
	const searchParams = useSearchParams();
	const clearCart = useCartStore((state) => state.clearCart);

	useEffect(() => {
		const paymentIntent = searchParams.get("payment_intent");
		const paymentIntentClientSecret = searchParams.get(
			"payment_intent_client_secret"
		);

		if (paymentIntent && paymentIntentClientSecret) {
			// Here you would typically check the status of the payment intent with your backend
			// For this example, we'll just simulate a successful payment
			setStatus("success");
			clearCart();
		} else {
			setStatus("error");
		}
	}, [searchParams, clearCart]);

	return (
		<main className='flex-grow container mx-auto px-4 py-8'>
			<div className='bg-white p-6 rounded-lg shadow'>
				<h1 className='text-2xl font-bold mb-4'>Confirmación de Pago</h1>
				{status === "success" && (
					<p className='text-green-600'>
						¡Tu pago ha sido procesado exitosamente!
					</p>
				)}
				{status === "processing" && (
					<p className='text-yellow-600'>Estamos procesando tu pago...</p>
				)}
				{status === "error" && (
					<p className='text-red-600'>
						Hubo un error al procesar tu pago. Por favor, intenta de nuevo.
					</p>
				)}
			</div>
		</main>
	);
}
