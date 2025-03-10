import Image from "next/image";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DoctorProfile() {
	return (
		<section id='doctor' className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Nuestro Especialista
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Conoce al profesional que cuida de tu salud con un enfoque natural
							y holístico
						</p>
					</div>
				</div>
				<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
					<div className='flex justify-center'>
						<div className='relative h-[400px] w-[300px] overflow-hidden rounded-xl'>
							<Image
								src='/placeholder.svg?height=400&width=300'
								alt='Dr. Alejandro Martínez'
								fill
								className='object-cover'
							/>
						</div>
					</div>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='space-y-2'>
							<h3 className='text-2xl font-bold'>Dr. Alejandro Martínez</h3>
							<p className='text-primary font-medium'>
								Especialista en Medicina Natural
							</p>
						</div>
						<p className='text-muted-foreground'>
							Con más de 15 años de experiencia en medicina natural y
							fitoterapia, el Dr. Martínez ha ayudado a cientos de pacientes a
							mejorar su calidad de vida a través de tratamientos naturales y
							personalizados.
						</p>
						<div className='space-y-2'>
							<p className='font-medium'>Especialidades:</p>
							<ul className='grid grid-cols-2 gap-2 text-sm'>
								<li className='flex items-center gap-2'>
									<span className='h-2 w-2 rounded-full bg-primary'></span>
									<span>Fitoterapia</span>
								</li>
								<li className='flex items-center gap-2'>
									<span className='h-2 w-2 rounded-full bg-primary'></span>
									<span>Nutrición Holística</span>
								</li>
								<li className='flex items-center gap-2'>
									<span className='h-2 w-2 rounded-full bg-primary'></span>
									<span>Medicina Preventiva</span>
								</li>
								<li className='flex items-center gap-2'>
									<span className='h-2 w-2 rounded-full bg-primary'></span>
									<span>Terapias Naturales</span>
								</li>
							</ul>
						</div>
						<Button variant='outline' className='w-fit gap-2'>
							<Download className='h-4 w-4' /> Descargar Curriculum
						</Button>
					</div>
				</div>
				<div className='grid gap-6 md:grid-cols-3'>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<span className='text-2xl font-bold text-primary'>15+</span>
								</div>
								<h3 className='text-xl font-bold'>Años de Experiencia</h3>
								<p className='text-sm text-muted-foreground'>
									Trayectoria profesional dedicada a la medicina natural
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<span className='text-2xl font-bold text-primary'>500+</span>
								</div>
								<h3 className='text-xl font-bold'>Pacientes Atendidos</h3>
								<p className='text-sm text-muted-foreground'>
									Casos de éxito con tratamientos naturales personalizados
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<span className='text-2xl font-bold text-primary'>3</span>
								</div>
								<h3 className='text-xl font-bold'>Certificaciones</h3>
								<p className='text-sm text-muted-foreground'>
									Especialización en medicina natural y terapias alternativas
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
