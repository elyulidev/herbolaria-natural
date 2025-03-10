"use client";

import Link from "next/link";
import { ProductCard } from "./product-card";
import { useProductStore } from "@/lib/store/product-store";
import { useEffect, useState } from "react";

export interface Products {
	data: {
		id: string;
		name: string;
		price: number;
		description: string;
		image: string;
		rating?: number;
	}[];
}

const ProductsStore = ({ data }: Products) => {
	const [isHydrated, setIsHydrated] = useState(false);
	const setProducts = useProductStore((state) => state.setProducts);
	const products = useProductStore((state) => state.products);

	useEffect(() => {
		setIsHydrated(true);

		if (isHydrated && data) {
			setProducts(data);
		}
	}, [data, setProducts, isHydrated]);

	if (!isHydrated) return <div>Loading...</div>;

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6'>
			{products.map((product) => (
				<Link
					key={product.id}
					href={`/tienda/producto/${product.id}`}
					className='h-full'
				>
					<ProductCard {...product} />
				</Link>
			))}
		</div>
	);
};

export default ProductsStore;
