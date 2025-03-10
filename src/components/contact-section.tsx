import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
	return (
		<section
			id='contacto'
			className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-background'
		>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Contáctanos
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Estamos aquí para responder tus preguntas y ayudarte en tu camino
							hacia una vida más saludable
						</p>
					</div>
				</div>
				<div className='mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2'>
					<div className='space-y-6'>
						<div className='space-y-2'>
							<h3 className='text-2xl font-bold'>Información de Contacto</h3>
							<p className='text-muted-foreground'>
								Visítanos o contáctanos a través de cualquiera de estos medios
							</p>
						</div>
						<div className='grid gap-4'>
							<Card>
								<CardContent className='p-4 flex items-start space-x-4'>
									<MapPin className='h-5 w-5 text-primary mt-0.5' />
									<div>
										<h4 className='font-medium'>Dirección</h4>
										<p className='text-sm text-muted-foreground'>
											Av. Principal 123, Ciudad
										</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className='p-4 flex items-start space-x-4'>
									<Phone className='h-5 w-5 text-primary mt-0.5' />
									<div>
										<h4 className='font-medium'>Teléfono</h4>
										<p className='text-sm text-muted-foreground'>
											+1 (555) 123-4567
										</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className='p-4 flex items-start space-x-4'>
									<Mail className='h-5 w-5 text-primary mt-0.5' />
									<div>
										<h4 className='font-medium'>Email</h4>
										<p className='text-sm text-muted-foreground'>
											contacto@Herbolaria Natural.com
										</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className='p-4 flex items-start space-x-4'>
									<Clock className='h-5 w-5 text-primary mt-0.5' />
									<div>
										<h4 className='font-medium'>Horario de Atención</h4>
										<p className='text-sm text-muted-foreground'>
											Lunes a Viernes: 9:00 AM - 6:00 PM
										</p>
										<p className='text-sm text-muted-foreground'>
											Sábados: 9:00 AM - 1:00 PM
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
					<div className='space-y-6'>
						<div className='space-y-2'>
							<h3 className='text-2xl font-bold'>Envíanos un Mensaje</h3>
							<p className='text-muted-foreground'>
								Completa el formulario y te responderemos a la brevedad
							</p>
						</div>
						<form className='space-y-4'>
							<div className='grid grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<label htmlFor='name' className='text-sm font-medium'>
										Nombre
									</label>
									<Input id='name' placeholder='Tu nombre' />
								</div>
								<div className='space-y-2'>
									<label htmlFor='email' className='text-sm font-medium'>
										Email
									</label>
									<Input id='email' type='email' placeholder='tu@email.com' />
								</div>
							</div>
							<div className='space-y-2'>
								<label htmlFor='subject' className='text-sm font-medium'>
									Asunto
								</label>
								<Input id='subject' placeholder='Asunto de tu mensaje' />
							</div>
							<div className='space-y-2'>
								<label htmlFor='message' className='text-sm font-medium'>
									Mensaje
								</label>
								<Textarea
									id='message'
									placeholder='Escribe tu mensaje aquí...'
									className='min-h-[120px]'
								/>
							</div>
							<Button type='submit' className='w-full'>
								Enviar Mensaje
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
