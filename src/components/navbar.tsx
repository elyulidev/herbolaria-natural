"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, ChevronDown, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/lib/store/cart-store";
import { CartDropdown } from "./cart-dropdown";
import SearchProduct from "./search-product";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const totalItems = useCartStore((state) => state.getTotalItems());
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return;

	return (
		<div className='w-full'>
			{/* <div className='bg-[#2D5A27] text-white px-4 py-2 text-sm'>
				<div className='container mx-auto flex justify-between items-center'>
					<div className='flex items-center gap-2'>
						<span className='hidden sm:inline'>📞 +0123456789</span>
					</div>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<span>Español</span>
							<ChevronDown className='h-4 w-4' />
						</div>
						<div className='flex items-center gap-2'>
							<MapPin className='h-4 w-4' />
							<span className='hidden sm:inline'>Ubicación</span>
							<ChevronDown className='h-4 w-4' />
						</div>
					</div>
				</div>
			</div> */}
			<div className='border-b'>
				<div className='container mx-auto py-4 px-4'>
					<div className='flex items-center justify-between'>
						<Link
							href='/tienda'
							className='flex items-center gap-2 font-semibold text-xl'
						>
							🌿 Herbolaria Natural
						</Link>
						<div className='hidden md:flex flex-1 items-center gap-6 mx-6'>
							{/* <div className='flex items-center gap-2'>
								<span className='font-medium'>Categorías</span>
								<ChevronDown className='h-4 w-4' />
							</div>
							<Link href='/ofertas' className='hover:text-[#2D5A27]'>
								Ofertas
							</Link>
							<Link href='/novedades' className='hover:text-[#2D5A27]'>
								Novedades
							</Link>
							<Link href='/consultas' className='hover:text-[#2D5A27]'>
								Consultas
							</Link> */}
						</div>
						<div className='flex items-center gap-4'>
							<SearchProduct />
							<div className='relative'>
								<Button
									variant='ghost'
									className='hidden sm:flex relative'
									onClick={() => setIsCartOpen(!isCartOpen)}
								>
									<ShoppingCart className='h-5 w-5' />
									<span className='ml-2'>Carrito</span>
									{totalItems > 0 && (
										<span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
											{totalItems}
										</span>
									)}
								</Button>
								{isCartOpen && <CartDropdown setIsCartOpen={setIsCartOpen} />}
							</div>
							<Button
								variant='ghost'
								className='sm:hidden relative'
								onClick={() => setIsCartOpen(!isCartOpen)}
							>
								<ShoppingCart className='h-5 w-5' />
								{totalItems > 0 && (
									<span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
										{totalItems}
									</span>
								)}
							</Button>
							<Button
								variant='ghost'
								className='md:hidden'
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								{isMenuOpen ? (
									<X className='h-5 w-5' />
								) : (
									<Menu className='h-5 w-5' />
								)}
							</Button>
						</div>
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className='md:hidden bg-white border-b'>
					<div className='container mx-auto py-4 px-4'>
						<nav className='flex flex-col space-y-4'>
							<Link
								href='/categorias'
								className='text-lg font-medium hover:text-[#2D5A27]'
							>
								Categorías
							</Link>
							<Link href='/ofertas' className='text-lg hover:text-[#2D5A27]'>
								Ofertas
							</Link>
							<Link href='/novedades' className='text-lg hover:text-[#2D5A27]'>
								Novedades
							</Link>
							<Link href='/consultas' className='text-lg hover:text-[#2D5A27]'>
								Consultas
							</Link>
							<div className='pt-4'>
								<Input
									type='search'
									placeholder='Buscar producto natural'
									className='w-full'
								/>
							</div>
						</nav>
					</div>
				</div>
			)}
		</div>
	);
}
