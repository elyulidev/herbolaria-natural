import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 border-t'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Suscríbete a Nuestro Boletín
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Recibe consejos de salud, promociones exclusivas y las últimas
							novedades en productos naturales
						</p>
					</div>
					<div className='w-full max-w-md space-y-2'>
						<form className='flex space-x-2'>
							<Input
								className='max-w-lg flex-1'
								placeholder='Ingresa tu correo electrónico'
								type='email'
							/>
							<Button type='submit'>Suscribirse</Button>
						</form>
						<p className='text-xs text-muted-foreground'>
							Al suscribirte, aceptas nuestra política de privacidad. Puedes
							darte de baja en cualquier momento.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
