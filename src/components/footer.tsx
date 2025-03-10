import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
	return (
		<footer className='bg-[#2D5A27] text-white'>
			<div className='container mx-auto px-4 py-8'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Herbolaria Natural</h3>
						<p className='text-sm'>
							Tu fuente confiable de productos medicinales tradicionales y
							naturales.
						</p>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-4'>Enlaces Rápidos</h4>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/sobre-nosotros'
									className='text-sm hover:underline'
								>
									Sobre Nosotros
								</Link>
							</li>
							<li>
								<Link href='/productos' className='text-sm hover:underline'>
									Productos
								</Link>
							</li>
							<li>
								<Link href='/blog' className='text-sm hover:underline'>
									Blog
								</Link>
							</li>
							<li>
								<Link href='/contacto' className='text-sm hover:underline'>
									Contacto
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-4'>Atención al Cliente</h4>
						<ul className='space-y-2'>
							<li>
								<Link href='/faq' className='text-sm hover:underline'>
									Preguntas Frecuentes
								</Link>
							</li>

							<li>
								<Link href='/terminos' className='text-sm hover:underline'>
									Términos y Condiciones
								</Link>
							</li>
							<li>
								<Link href='/privacidad' className='text-sm hover:underline'>
									Política de Privacidad
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-4'>Síguenos</h4>
						<div className='flex space-x-4'>
							<a href='#' className='hover:text-gray-300'>
								<Facebook size={24} />
							</a>
							<a href='#' className='hover:text-gray-300'>
								<Instagram size={24} />
							</a>
							<a href='#' className='hover:text-gray-300'>
								<Twitter size={24} />
							</a>
						</div>
					</div>
				</div>
				<div className='mt-8 pt-8 border-t border-[#1E3F1C] text-center text-sm'>
					<p>
						&copy; {new Date().getFullYear()} Herbolaria Natural. Todos los
						derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
