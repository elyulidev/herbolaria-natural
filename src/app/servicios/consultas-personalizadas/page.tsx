import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
	title: "Consultas Personalizadas | Herbolaria Natural",
	description:
		"Consultas personalizadas con nuestros especialistas en medicina natural.",
};

export default function ConsultasPersonalizadasPage() {
	return (
		<div className='space-y-8'>
			<div className='space-y-4'>
				<h1 className='text-3xl font-bold tracking-tight'>
					Consultas Personalizadas
				</h1>
				<p className='text-muted-foreground'>
					Nuestro equipo de especialistas en medicina natural está listo para
					atenderte y diseñar un plan de tratamiento adaptado a tus necesidades
					específicas.
				</p>
			</div>

			<div className='relative h-[300px] w-full overflow-hidden rounded-lg'>
				<Image
					src='/placeholder.svg?height=600&width=1200'
					alt='Consulta personalizada'
					fill
					className='object-cover'
				/>
			</div>

			<div className='space-y-6'>
				<h2 className='text-2xl font-bold'>
					¿Por qué elegir nuestras consultas?
				</h2>
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<User className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Atención Personalizada</h3>
								<p className='text-sm text-muted-foreground'>
									Cada paciente es único, por eso nuestras consultas se adaptan
									a tus necesidades específicas.
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<Clock className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Tiempo de Calidad</h3>
								<p className='text-sm text-muted-foreground'>
									Dedicamos el tiempo necesario para entender tu situación y
									ofrecerte las mejores soluciones.
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<Calendar className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Seguimiento Continuo</h3>
								<p className='text-sm text-muted-foreground'>
									No te dejamos solo. Realizamos un seguimiento de tu evolución
									para ajustar el tratamiento si es necesario.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<Tabs defaultValue='primera-consulta' className='w-full'>
				<TabsList className='grid w-full grid-cols-3'>
					<TabsTrigger value='primera-consulta'>Primera Consulta</TabsTrigger>
					<TabsTrigger value='seguimiento'>Consulta de Seguimiento</TabsTrigger>
					<TabsTrigger value='online'>Consulta Online</TabsTrigger>
				</TabsList>
				<TabsContent value='primera-consulta' className='space-y-4 pt-4'>
					<div className='space-y-2'>
						<h3 className='text-xl font-bold'>Primera Consulta</h3>
						<p className='text-muted-foreground'>
							En tu primera visita, realizaremos una evaluación completa de tu
							estado de salud, historial médico y estilo de vida para diseñar un
							plan de tratamiento personalizado.
						</p>
						<ul className='space-y-2 mt-4'>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Duración: 60 minutos</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Evaluación completa de salud</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Análisis de hábitos alimenticios</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Plan de tratamiento personalizado</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Recomendaciones de productos naturales</span>
							</li>
						</ul>
						<p className='font-bold mt-4'>Precio: $80</p>
					</div>
					<Button className='w-full sm:w-auto'>Agendar Primera Consulta</Button>
				</TabsContent>
				<TabsContent value='seguimiento' className='space-y-4 pt-4'>
					<div className='space-y-2'>
						<h3 className='text-xl font-bold'>Consulta de Seguimiento</h3>
						<p className='text-muted-foreground'>
							Las consultas de seguimiento nos permiten evaluar tu progreso,
							realizar ajustes en tu tratamiento y resolver cualquier duda que
							pueda surgir.
						</p>
						<ul className='space-y-2 mt-4'>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Duración: 30 minutos</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Evaluación de progreso</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Ajustes al tratamiento</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Resolución de dudas</span>
							</li>
						</ul>
						<p className='font-bold mt-4'>Precio: $50</p>
					</div>
					<Button className='w-full sm:w-auto'>
						Agendar Consulta de Seguimiento
					</Button>
				</TabsContent>
				<TabsContent value='online' className='space-y-4 pt-4'>
					<div className='space-y-2'>
						<h3 className='text-xl font-bold'>Consulta Online</h3>
						<p className='text-muted-foreground'>
							Si no puedes acudir a nuestra clínica, ofrecemos consultas online
							con la misma calidad y atención personalizada.
						</p>
						<ul className='space-y-2 mt-4'>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Duración: 45 minutos</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Videoconferencia privada</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Evaluación completa</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Plan de tratamiento digital</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Seguimiento por email</span>
							</li>
						</ul>
						<p className='font-bold mt-4'>Precio: $65</p>
					</div>
					<Button className='w-full sm:w-auto'>Agendar Consulta Online</Button>
				</TabsContent>
			</Tabs>

			<div className='space-y-6'>
				<h2 className='text-2xl font-bold'>Nuestros Especialistas</h2>
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					<div className='flex flex-col items-center space-y-2 text-center'>
						<div className='relative h-40 w-40 overflow-hidden rounded-full'>
							<Image
								src='/placeholder.svg?height=160&width=160'
								alt='Dr. Alejandro Martínez'
								fill
								className='object-cover'
							/>
						</div>
						<h3 className='text-xl font-bold'>Dr. Alejandro Martínez</h3>
						<p className='text-sm text-primary font-medium'>
							Especialista en Medicina Natural
						</p>
						<p className='text-sm text-muted-foreground'>
							15 años de experiencia en fitoterapia y medicina preventiva.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-2 text-center'>
						<div className='relative h-40 w-40 overflow-hidden rounded-full'>
							<Image
								src='/placeholder.svg?height=160&width=160'
								alt='Dra. Laura Gómez'
								fill
								className='object-cover'
							/>
						</div>
						<h3 className='text-xl font-bold'>Dra. Laura Gómez</h3>
						<p className='text-sm text-primary font-medium'>
							Nutricionista Holística
						</p>
						<p className='text-sm text-muted-foreground'>
							Especialista en nutrición basada en plantas y suplementación
							natural.
						</p>
					</div>
					<div className='flex flex-col items-center space-y-2 text-center'>
						<div className='relative h-40 w-40 overflow-hidden rounded-full'>
							<Image
								src='/placeholder.svg?height=160&width=160'
								alt='Dr. Carlos Ruiz'
								fill
								className='object-cover'
							/>
						</div>
						<h3 className='text-xl font-bold'>Dr. Carlos Ruiz</h3>
						<p className='text-sm text-primary font-medium'>
							Terapeuta Natural
						</p>
						<p className='text-sm text-muted-foreground'>
							Experto en terapias alternativas y medicina tradicional.
						</p>
					</div>
				</div>
			</div>

			<div className='bg-muted rounded-lg p-6 space-y-4'>
				<h2 className='text-2xl font-bold'>Información Práctica</h2>
				<div className='grid gap-4 sm:grid-cols-2'>
					<div className='flex items-start gap-3'>
						<MapPin className='h-5 w-5 text-primary mt-0.5' />
						<div>
							<h3 className='font-medium'>Dirección</h3>
							<p className='text-sm text-muted-foreground'>
								Av. Principal 123, Ciudad
							</p>
						</div>
					</div>
					<div className='flex items-start gap-3'>
						<Clock className='h-5 w-5 text-primary mt-0.5' />
						<div>
							<h3 className='font-medium'>Horario de Consultas</h3>
							<p className='text-sm text-muted-foreground'>
								Lunes a Viernes: 9:00 AM - 6:00 PM
							</p>
							<p className='text-sm text-muted-foreground'>
								Sábados: 9:00 AM - 1:00 PM
							</p>
						</div>
					</div>
				</div>
				<div className='pt-4'>
					<Link href='#contacto'>
						<Button>Contactar para más información</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
