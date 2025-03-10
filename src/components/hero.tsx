import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-background'>
			<div className='container px-4 md:px-6'>
				<div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16'>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
								Salud Natural para una Vida Plena
							</h1>
							<p className='max-w-[600px] text-muted-foreground md:text-xl'>
								Descubre el poder de la naturaleza para mejorar tu bienestar.
								Productos naturales respaldados por ciencia y tradición.
							</p>
						</div>
						<div className='flex flex-col gap-2 min-[400px]:flex-row'>
							<Link href='/tienda'>
								<Button size='lg' className='gap-1'>
									Explorar Productos <ArrowRight className='h-4 w-4' />
								</Button>
							</Link>
							<Link href='/agendar-consulta'>
								<Button size='lg' variant='outline'>
									Agendar Consulta
								</Button>
							</Link>
						</div>
					</div>
					<div className='flex items-center justify-center'>
						<div className='relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]'>
							<Image
								src='/placeholder.svg?height=500&width=500'
								alt='Productos naturales'
								fill
								className='object-cover rounded-full'
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
