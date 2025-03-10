"use client";

import { Product } from "@/lib/store/product-store";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/store/cart-store";
import { Input } from "./ui/input";
import { useState } from "react";

type ProductBtnCartProps = {
	product: Partial<Product>;
};

const ProductBtnCart = ({ product }: ProductBtnCartProps) => {
	const [quantity, setQuantity] = useState(1);
	const addItem = useCartStore((state) => state.addItem);

	const handleAddToCart = () => {
		addItem({
			id: product.id as string,
			name: product.name as string,
			price: product.price as number,
			quantity: quantity,
		});
	};
	return (
		<>
			<Input
				type='number'
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
				min='1'
				max={product.stock}
				className='w-20'
			/>
			<Button size='lg' className='flex-grow' onClick={handleAddToCart}>
				<ShoppingCart className='mr-2 h-5 w-5' />
				Agregar al carrito
			</Button>
		</>
	);
};

export default ProductBtnCart;
