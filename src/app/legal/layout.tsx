import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
	title: "Información Legal | Herbolaria Natural",
	description:
		"Información legal de Herbolaria Natural, clínica de productos naturales.",
};

export default function LegalLayout({
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
				<span>Legal</span>
			</div>

			<div className='grid md:grid-cols-4 gap-8'>
				<aside className='md:col-span-1'>
					<div className='sticky top-20'>
						<h3 className='font-medium text-lg mb-4'>Documentos Legales</h3>
						<nav className='flex flex-col space-y-2'>
							<Link
								href='/legal/terminos-condiciones'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								Términos y Condiciones
							</Link>
							<Link
								href='/legal/politica-privacidad'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								Política de Privacidad
							</Link>
							<Link
								href='/legal/politica-cookies'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								Política de Cookies
							</Link>
							<Link
								href='/legal/aviso-legal'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								Aviso Legal
							</Link>
						</nav>
					</div>
				</aside>

				<main className='md:col-span-3'>
					<div className='prose prose-green max-w-none'>{children}</div>
				</main>
			</div>
		</div>
	);
}
