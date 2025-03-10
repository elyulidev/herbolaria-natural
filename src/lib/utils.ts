import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import Stripe from "stripe";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function errorHandlerStripe(err: Stripe.errors.StripeError) {
	switch (err?.type) {
		case "StripeCardError":
			// A declined card error
			toast.error(err?.raw?.message || err?.type, {
				id: crypto.randomUUID(),
			});
			break;
		case "StripeRateLimitError":
			// Too many requests made to the API too quickly
			toast.error(err?.raw?.message || err?.type, {
				id: crypto.randomUUID(),
			});
			break;
		case "StripeInvalidRequestError":
			// Invalid parameters were supplied to Stripe's API
			toast.error(err?.raw?.message || err?.type, {
				id: crypto.randomUUID(),
			});
			break;
		case "StripeAPIError":
			toast.error(err?.raw?.message || err?.type, {
				id: crypto.randomUUID(),
			});
			// An error occurred internally with Stripe's API
			break;
		case "StripeConnectionError":
			// Some kind of error occurred during the HTTPS communication
			toast.error(err?.raw?.message || err?.type, {
				id: crypto.randomUUID(),
			});
			break;
		case "StripeAuthenticationError":
			// You probably used an incorrect API key
			break;
		default:
			// Handle any other types of unexpected errors
			toast.error(err?.raw?.message || err?.type, {
				id: crypto.randomUUID(),
			});
			break;
	}
}
