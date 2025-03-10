import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

if (!stripePromise) {
	throw new Error("Stripe.js has not been loaded");
}
