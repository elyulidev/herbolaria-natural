import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCartStore } from "@/lib/store/cart-store";

export interface ProductCardProps {
	id: string;
	name: string;
	price: number;
	description: string;
	image: string;
	rating?: number;
}

export function ProductCard({
	id,
	name,
	price,
	description,
	image,
	rating,
}: ProductCardProps) {
	const addItem = useCartStore((state) => state.addItem);

	const handleAddToCart = () => {
		addItem({ id, name, price, quantity: 1 });
	};

	return (
		<Card className='group relative flex flex-col h-full'>
			<button className='absolute right-2 top-2 p-2 rounded-full bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10'>
				<Heart className='h-4 w-4' />
			</button>
			<CardContent className='p-4 flex-grow'>
				<div className='aspect-square relative mb-4'>
					<img
						src={image || "/placeholder.svg"}
						alt={name}
						className='w-full h-full object-cover rounded-lg'
					/>
				</div>
				<div className='space-y-1'>
					<h3 className='font-medium line-clamp-1'>{name}</h3>
					<p className='text-sm text-gray-500 line-clamp-2'>{description}</p>
					<div className='flex items-center justify-between'>
						<span className='font-bold'>${price}</span>
						{rating && (
							<div className='flex items-center'>
								{"★".repeat(rating)}
								{"☆".repeat(5 - rating)}
								<span className='text-xs text-gray-500 ml-1'>(121)</span>
							</div>
						)}
					</div>
				</div>
			</CardContent>
			<CardFooter className='p-4 pt-0 mt-auto'>
				<Button
					className='w-full bg-[#2D5A27] hover:bg-[#1E3F1C]'
					onClick={handleAddToCart}
				>
					<ShoppingCart className='mr-2 h-4 w-4' /> Agregar al carrito
				</Button>
			</CardFooter>
		</Card>
	);
}
