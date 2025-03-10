import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 items-center justify-between'>
				<Link href='/' className='flex items-center gap-2'>
					<span className='flex justify-center items-center h-8 w-8 rounded-full'>
						🌿
					</span>
					<span className='text-xl font-bold'> Herbolaria Natural</span>
				</Link>
				<nav className='hidden md:flex gap-6'>
					<Link href='/' className='text-sm font-medium hover:text-primary'>
						Inicio
					</Link>
					<Link
						href='#doctor'
						className='text-sm font-medium hover:text-primary'
					>
						Nuestro Doctor
					</Link>
					<Link
						href='#productos'
						className='text-sm font-medium hover:text-primary'
					>
						Productos
					</Link>
					<Link
						href='#testimonios'
						className='text-sm font-medium hover:text-primary'
					>
						Testimonios
					</Link>
					<Link
						href='#contacto'
						className='text-sm font-medium hover:text-primary'
					>
						Contacto
					</Link>
				</nav>
				<div className='flex items-center gap-4'>
					<Link href='/tienda'>
						<Button
							variant='outline'
							className='hidden md:flex hover:bg-green-50 hover:text-primary'
						>
							Visitar Tienda
						</Button>
					</Link>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant='outline' size='icon' className='md:hidden'>
								<Menu className='h-5 w-5' />
								<span className='sr-only'>Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side='right'>
							<nav className='flex flex-col gap-4 mt-8'>
								<Link
									href='/'
									className='text-sm font-medium hover:text-primary'
								>
									Inicio
								</Link>
								<Link
									href='#doctor'
									className='text-sm font-medium hover:text-primary'
								>
									Nuestro Doctor
								</Link>
								<Link
									href='#productos'
									className='text-sm font-medium hover:text-primary'
								>
									Productos
								</Link>
								<Link
									href='#testimonios'
									className='text-sm font-medium hover:text-primary'
								>
									Testimonios
								</Link>
								<Link
									href='#contacto'
									className='text-sm font-medium hover:text-primary'
								>
									Contacto
								</Link>
								<Link
									href='/tienda'
									className='text-sm font-medium hover:text-primary'
								>
									Tienda
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
