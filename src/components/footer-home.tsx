import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className='w-full border-t bg-background py-6 md:py-12'>
			<div className='container px-4 md:px-6'>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<div className='space-y-4'>
						<Link href='/' className='flex items-center gap-2'>
							<span className='flex justify-center items-center h-8 w-8 rounded-full'>
								🌿
							</span>
							<span className='text-xl font-bold'> Herbolaria Natural</span>
						</Link>
						<p className='text-sm text-muted-foreground'>
							Comprometidos con tu bienestar a través de productos naturales de
							la más alta calidad.
						</p>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Facebook className='h-5 w-5' />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Instagram className='h-5 w-5' />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Twitter className='h-5 w-5' />
								<span className='sr-only'>Twitter</span>
							</Link>
						</div>
					</div>
					<div className='space-y-4'>
						<h3 className='text-base font-medium'>Enlaces Rápidos</h3>
						<nav className='flex flex-col space-y-2 text-sm'>
							<Link
								href='/'
								className='text-muted-foreground hover:text-primary'
							>
								Inicio
							</Link>
							<Link
								href='#doctor'
								className='text-muted-foreground hover:text-primary'
							>
								Nuestro Doctor
							</Link>
							<Link
								href='#productos'
								className='text-muted-foreground hover:text-primary'
							>
								Productos
							</Link>
							<Link
								href='#testimonios'
								className='text-muted-foreground hover:text-primary'
							>
								Testimonios
							</Link>
							<Link
								href='#contacto'
								className='text-muted-foreground hover:text-primary'
							>
								Contacto
							</Link>
						</nav>
					</div>
					<div className='space-y-4'>
						<h3 className='text-base font-medium'>Servicios</h3>
						<nav className='flex flex-col space-y-2 text-sm'>
							<Link
								href='/tienda'
								className='text-muted-foreground hover:text-primary'
							>
								Tienda Online
							</Link>
							<Link
								href='/servicios/consultas-personalizadas'
								className='text-muted-foreground hover:text-primary'
							>
								Consultas Personalizadas
							</Link>
							<Link
								href='/servicios/asesoria-nutricional'
								className='text-muted-foreground hover:text-primary'
							>
								Asesoría Nutricional
							</Link>
							<Link
								href='/servicios/talleres-eventos'
								className='text-muted-foreground hover:text-primary'
							>
								Talleres y Eventos
							</Link>
						</nav>
					</div>
					<div className='space-y-4'>
						<h3 className='text-base font-medium'>Legal</h3>
						<nav className='flex flex-col space-y-2 text-sm'>
							<Link
								href='/legal/terminos-condiciones'
								className='text-muted-foreground hover:text-primary'
							>
								Términos y Condiciones
							</Link>
							<Link
								href='/legal/politica-privacidad'
								className='text-muted-foreground hover:text-primary'
							>
								Política de Privacidad
							</Link>
							<Link
								href='/legal/politica-cookies'
								className='text-muted-foreground hover:text-primary'
							>
								Política de Cookies
							</Link>
							<Link
								href='/legal/aviso-legal'
								className='text-muted-foreground hover:text-primary'
							>
								Aviso Legal
							</Link>
						</nav>
					</div>
				</div>
				<div className='mt-8 border-t pt-8 text-center text-sm text-muted-foreground'>
					<p>
						© {new Date().getFullYear()} Herbolaria Natural. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
