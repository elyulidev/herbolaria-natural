import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

interface CartStore {
	items: CartItem[];
	addItem: (item: CartItem) => void;
	removeItem: (id: string) => void;
	clearCart: () => void;
	getTotalItems: () => number;
	getTotalPriceInCents: () => number;
	message: { msg: string; type?: string | undefined };
	getMessage: () => { msg: string; type?: string | undefined };
	setMessage: (message: string, type?: string | undefined) => void;
}

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			items: [],
			addItem: (item) =>
				set((state) => {
					const existingItem = state.items.find((i) => i.id === item.id);
					if (existingItem) {
						return {
							items: state.items.map((i) =>
								i.id === item.id
									? { ...i, quantity: i.quantity + item.quantity }
									: i
							),
						};
					}
					return { items: [...state.items, item] };
				}),
			removeItem: (id) =>
				set((state) => ({
					items: state.items.filter((i) => i.id !== id),
				})),
			clearCart: () => set({ items: [] }),
			getTotalItems: () =>
				get().items.reduce((total, item) => total + item.quantity, 0),
			getTotalPriceInCents: () =>
				get().items.reduce(
					(total, item) => total + item.price * 100 * item.quantity,
					0
				),
			message: { msg: "", type: "" },
			setMessage: (msg, type = "") =>
				set((state) => ({
					message: { msg, type },
				})),
			getMessage: () => get().message,
		}),
		{
			name: "cart-storage",
			storage:
				typeof window !== "undefined"
					? createJSONStorage(() => localStorage)
					: undefined,
		}
	)
);
