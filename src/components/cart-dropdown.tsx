import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/cart-store";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Dispatch, SetStateAction } from "react";

export function CartDropdown({
	setIsCartOpen,
}: {
	setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}) {
	const { items, removeItem, getTotalPriceInCents } = useCartStore();
	const router = useRouter();

	const handleCheckout = async () => {
		const supabase = createClient();
		try {
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (user) {
				router.push("/tienda/checkout");
			} else {
				router.push("/tienda/inicio-sesion");
			}
		} catch (error) {
			router.push("/tienda/inicio-sesion");
		} finally {
			setIsCartOpen(false);
		}
	};

	return (
		<div className='absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-20'>
			<div className='p-4'>
				<h3 className='text-lg font-semibold mb-2'>Carrito</h3>
				{items.length === 0 ? (
					<p>Tu carrito está vacío</p>
				) : (
					<>
						{items.map((item) => (
							<div
								key={item.id}
								className='flex justify-between items-center mb-2'
							>
								<div>
									<p className='font-medium'>{item.name}</p>
									<p className='text-sm text-gray-500'>
										{item.quantity} x ${item.price.toFixed(2)}
									</p>
								</div>
								<Button
									variant='ghost'
									size='sm'
									onClick={() => removeItem(item.id)}
								>
									<X className='h-4 w-4' />
								</Button>
							</div>
						))}
						<div className='mt-4 pt-4 border-t'>
							<div className='flex justify-between items-center'>
								<span className='font-semibold'>Total:</span>
								<span className='font-bold'>
									${getTotalPriceInCents() / 100}
								</span>
							</div>
						</div>
						<Button
							className='w-full mt-4 bg-[#2D5A27] hover:bg-[#1E3F1C]'
							onClick={handleCheckout}
						>
							Ir al checkout
						</Button>
					</>
				)}
			</div>
		</div>
	);
}
