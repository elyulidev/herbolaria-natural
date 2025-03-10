import { Button } from "@/components/ui/button";

export function HeroBanner() {
	return (
		<div className='bg-[#F3F9F1] rounded-lg overflow-hidden'>
			<div className='container mx-auto px-4 py-8 flex flex-col md:flex-row items-center'>
				<div className='flex-1 text-center md:text-left mb-6 md:mb-0'>
					<h1 className='text-3xl md:text-4xl font-bold text-[#2D5A27] mb-4'>
						Productos Naturales
						<br />
						Hasta 30% de Descuento
					</h1>
					<p className='text-[#2D5A27] mb-6 text-base md:text-lg'>
						Descubre el poder curativo de la naturaleza
					</p>
					<Button className='bg-[#2D5A27] hover:bg-[#1E3F1C]'>
						Ver Ofertas
					</Button>
				</div>
				<div className='flex-1 flex justify-center'>
					<img
						src='/placeholder.svg?height=400&width=400'
						alt='Hierbas medicinales'
						className='w-3/4 md:w-full max-w-md h-auto object-contain'
					/>
				</div>
			</div>
		</div>
	);
}
