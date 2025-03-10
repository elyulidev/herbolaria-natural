import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
	image: string;
	rating?: number;
	stock?: number;
}

interface ProductStore {
	products: Product[];
	setProducts: (products: Product[]) => void;
	getProducts: () => Product[];
	getOneProduct: (id: string) => Product | undefined;
	updateProduct: (id: string, product: Partial<Product>) => void;
	addProduct: (product: Product) => void;
	removeProduct: (id: string) => void;
}

export const useProductStore = create<ProductStore>()(
	persist(
		(set, get) => ({
			products: [],
			setProducts: (products) => set({ products: [...products] }),
			getProducts: () => get().products,
			getOneProduct: (id) => get().products.find((p) => p.id === id),
			updateProduct: (id, product) =>
				set((state) => ({
					products: state.products.map((p) =>
						p.id === id ? { ...p, ...product } : p
					),
				})),
			addProduct: (product) =>
				set((state) => ({
					products: [...state.products, product],
				})),
			removeProduct: (id) =>
				set((state) => ({
					products: state.products.filter((p) => p.id !== id),
				})),
		}),
		{
			name: "product-storage",
			storage:
				typeof window !== "undefined"
					? createJSONStorage(() => localStorage)
					: undefined,
		}
	)
);
