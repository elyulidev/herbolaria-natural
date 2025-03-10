import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Users, Clock, MapPin, BookOpen, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
	title: "Talleres y Eventos | Herbolaria Natural",
	description:
		"Talleres, cursos y eventos sobre medicina natural, nutrición y bienestar.",
};

export default function TalleresEventosPage() {
	// Eventos próximos (simulados)
	const proximosEventos = [
		{
			id: 1,
			titulo: "Taller de Fitoterapia Básica",
			descripcion:
				"Aprende sobre las propiedades medicinales de las plantas más comunes y cómo utilizarlas en tu día a día.",
			fecha: "15 de Junio, 2023",
			hora: "10:00 AM - 1:00 PM",
			lugar: "Sede Principal Herbolaria Natural",
			precio: "$45",
			imagen: "/placeholder.svg?height=200&width=400",
			plazas: "Limitado a 20 participantes",
			categoria: "Taller Práctico",
			destacado: true,
		},
		{
			id: 2,
			titulo: "Curso de Nutrición Natural",
			descripcion:
				"Un curso completo de 4 sesiones sobre los principios de la alimentación natural y cómo implementarlos.",
			fecha: "Todos los sábados de Julio",
			hora: "9:00 AM - 12:00 PM",
			lugar: "Sede Principal Herbolaria Natural",
			precio: "$160",
			imagen: "/placeholder.svg?height=200&width=400",
			plazas: "Limitado a 15 participantes",
			categoria: "Curso",
			destacado: false,
		},
		{
			id: 3,
			titulo: "Conferencia: Medicina Natural y Ciencia",
			descripcion:
				"Charla sobre las últimas investigaciones científicas que respaldan los tratamientos naturales.",
			fecha: "22 de Junio, 2023",
			hora: "6:00 PM - 8:00 PM",
			lugar: "Auditorio Central",
			precio: "$25",
			imagen: "/placeholder.svg?height=200&width=400",
			plazas: "Limitado a 100 participantes",
			categoria: "Conferencia",
			destacado: false,
		},
		{
			id: 4,
			titulo: "Taller de Elaboración de Remedios Caseros",
			descripcion:
				"Aprende a preparar tinturas, infusiones, ungüentos y otros remedios naturales en casa.",
			fecha: "29 de Junio, 2023",
			hora: "3:00 PM - 6:00 PM",
			lugar: "Sede Principal Herbolaria Natural",
			precio: "$55",
			imagen: "/placeholder.svg?height=200&width=400",
			plazas: "Limitado a 15 participantes",
			categoria: "Taller Práctico",
			destacado: true,
		},
	];

	return (
		<div className='space-y-8'>
			<div className='space-y-4'>
				<h1 className='text-3xl font-bold tracking-tight'>
					Talleres y Eventos
				</h1>
				<p className='text-muted-foreground'>
					Participa en nuestros talleres, cursos y eventos para profundizar tus
					conocimientos sobre medicina natural, nutrición y bienestar.
				</p>
			</div>

			<div className='relative h-[300px] w-full overflow-hidden rounded-lg'>
				<Image
					src='/placeholder.svg?height=600&width=1200'
					alt='Talleres y eventos'
					fill
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
					<div className='text-center text-white p-6 max-w-xl'>
						<h2 className='text-2xl font-bold mb-2'>Aprende con Expertos</h2>
						<p className='text-white/90'>
							Nuestros talleres y eventos son impartidos por profesionales con
							años de experiencia en medicina natural y bienestar.
						</p>
					</div>
				</div>
			</div>

			<div className='space-y-6'>
				<div className='flex items-center justify-between'>
					<h2 className='text-2xl font-bold'>Próximos Eventos</h2>
					<Link href='#' className='text-primary hover:underline text-sm'>
						Ver calendario completo
					</Link>
				</div>

				<div className='grid gap-6 md:grid-cols-2'>
					{proximosEventos.map((evento) => (
						<Card
							key={evento.id}
							className={evento.destacado ? "border-primary" : ""}
						>
							<div className='relative h-[200px] w-full overflow-hidden'>
								<Image
									src={evento.imagen || "/placeholder.svg"}
									alt={evento.titulo}
									fill
									className='object-cover'
								/>
								<div className='absolute top-2 right-2'>
									<Badge variant={evento.destacado ? "default" : "secondary"}>
										{evento.categoria}
									</Badge>
								</div>
							</div>
							<CardContent className='p-6'>
								<h3 className='text-xl font-bold mb-2'>{evento.titulo}</h3>
								<p className='text-muted-foreground mb-4'>
									{evento.descripcion}
								</p>
								<div className='space-y-2'>
									<div className='flex items-center gap-2 text-sm'>
										<Calendar className='h-4 w-4 text-primary' />
										<span>{evento.fecha}</span>
									</div>
									<div className='flex items-center gap-2 text-sm'>
										<Clock className='h-4 w-4 text-primary' />
										<span>{evento.hora}</span>
									</div>
									<div className='flex items-center gap-2 text-sm'>
										<MapPin className='h-4 w-4 text-primary' />
										<span>{evento.lugar}</span>
									</div>
									<div className='flex items-center gap-2 text-sm'>
										<Users className='h-4 w-4 text-primary' />
										<span>{evento.plazas}</span>
									</div>
									<div className='flex items-center gap-2 text-sm'>
										<Tag className='h-4 w-4 text-primary' />
										<span>{evento.precio}</span>
									</div>
								</div>
							</CardContent>
							<CardFooter className='px-6 pb-6 pt-0'>
								<Button className='w-full'>Reservar Plaza</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>

			<div className='space-y-6'>
				<h2 className='text-2xl font-bold'>Tipos de Eventos</h2>
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<BookOpen className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Talleres Prácticos</h3>
								<p className='text-sm text-muted-foreground'>
									Sesiones prácticas donde aprenderás habilidades específicas
									como elaboración de remedios, identificación de plantas
									medicinales o técnicas de cocina saludable.
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<Users className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Cursos</h3>
								<p className='text-sm text-muted-foreground'>
									Programas educativos estructurados que se desarrollan a lo
									largo de varias sesiones, ofreciendo una formación más
									completa sobre un tema específico.
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
								<h3 className='text-xl font-bold'>Conferencias</h3>
								<p className='text-sm text-muted-foreground'>
									Charlas informativas impartidas por expertos en medicina
									natural, nutrición y bienestar, con espacio para preguntas y
									respuestas.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className='bg-muted rounded-lg p-6 space-y-4'>
				<h2 className='text-2xl font-bold'>Eventos para Empresas</h2>
				<p>
					Ofrecemos talleres y charlas personalizadas para empresas que desean
					promover el bienestar y la salud natural entre sus empleados. Nuestros
					programas corporativos incluyen:
				</p>
				<ul className='space-y-2 mt-4'>
					<li className='flex items-start gap-2'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<span>Talleres de gestión del estrés con técnicas naturales</span>
					</li>
					<li className='flex items-start gap-2'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<span>
							Charlas sobre alimentación saludable en el entorno laboral
						</span>
					</li>
					<li className='flex items-start gap-2'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<span>Programas de bienestar integral para equipos</span>
					</li>
					<li className='flex items-start gap-2'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<span>
							Consultoría para implementar iniciativas de salud en la empresa
						</span>
					</li>
				</ul>
				<div className='pt-4'>
					<Button>Solicitar Información para Empresas</Button>
				</div>
			</div>

			<div className='space-y-6'>
				<h2 className='text-2xl font-bold'>Testimonios de Participantes</h2>
				<div className='grid gap-6 md:grid-cols-2'>
					<Card>
						<CardContent className='p-6'>
							<div className='space-y-4'>
								<p className='italic text-muted-foreground'>
									"El taller de fitoterapia superó todas mis expectativas.
									Aprendí muchísimo sobre las propiedades de las plantas
									medicinales y ahora puedo preparar mis propios remedios en
									casa. Los instructores son verdaderos expertos en la materia."
								</p>
								<div className='flex items-center gap-4'>
									<div className='relative h-12 w-12 overflow-hidden rounded-full'>
										<Image
											src='/placeholder.svg?height=48&width=48'
											alt='María L.'
											fill
											className='object-cover'
										/>
									</div>
									<div>
										<p className='font-medium'>María L.</p>
										<p className='text-sm text-muted-foreground'>
											Taller de Fitoterapia Básica
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<div className='space-y-4'>
								<p className='italic text-muted-foreground'>
									"El curso de nutrición natural cambió completamente mi forma
									de alimentarme. Las recetas son deliciosas y fáciles de
									preparar, y he notado una gran mejora en mi energía y
									bienestar general. Totalmente recomendable."
								</p>
								<div className='flex items-center gap-4'>
									<div className='relative h-12 w-12 overflow-hidden rounded-full'>
										<Image
											src='/placeholder.svg?height=48&width=48'
											alt='Carlos R.'
											fill
											className='object-cover'
										/>
									</div>
									<div>
										<p className='font-medium'>Carlos R.</p>
										<p className='text-sm text-muted-foreground'>
											Curso de Nutrición Natural
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className='bg-primary/10 rounded-lg p-6 space-y-4'>
				<h2 className='text-2xl font-bold'>¿Quieres proponer un tema?</h2>
				<p>
					Estamos siempre abiertos a sugerencias para futuros talleres y
					eventos. Si hay algún tema relacionado con la medicina natural,
					nutrición o bienestar que te gustaría que abordáramos, háznoslo saber.
				</p>
				<div className='pt-4'>
					<Link href='#contacto'>
						<Button>Sugerir un Tema</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
