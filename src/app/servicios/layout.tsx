import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
	title: "Servicios | Herbolaria Natural",
	description:
		"Servicios ofrecidos por Herbolaria Natural, clínica de productos naturales.",
};

export default function ServiciosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='w-full max-w-[1400px] mx-auto px-4 py-8 md:py-12'>
			<div className='flex items-center gap-1 text-sm text-muted-foreground mb-8'>
				<Link href='/' className='hover:text-primary transition-colors'>
					Inicio
				</Link>
				<ChevronRight className='h-4 w-4' />
				<span>Servicios</span>
			</div>

			<div className='grid md:grid-cols-4 gap-8'>
				<aside className='md:col-span-1'>
					<div className='sticky top-20'>
						<h3 className='font-medium text-lg mb-4'>Nuestros Servicios</h3>
						<nav className='flex flex-col space-y-2'>
							<Link
								href='/servicios/consultas-personalizadas'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								Consultas Personalizadas
							</Link>
							<Link
								href='/servicios/asesoria-nutricional'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								Asesoría Nutricional
							</Link>
							<Link
								href='/servicios/talleres-eventos'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								Talleres y Eventos
							</Link>
							<Link
								href='/tienda'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								Tienda Online
							</Link>
						</nav>
					</div>
				</aside>

				<main className='md:col-span-3'>{children}</main>
			</div>
		</div>
	);
}
