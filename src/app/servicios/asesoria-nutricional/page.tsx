import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Apple, Utensils, BookOpen, Users, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
	title: "Asesoría Nutricional | Herbolaria Natural",
	description:
		"Servicios de asesoría nutricional personalizada basada en productos naturales.",
};

export default function AsesoriaNutricionalPage() {
	return (
		<div className='space-y-8'>
			<div className='space-y-4'>
				<h1 className='text-3xl font-bold tracking-tight'>
					Asesoría Nutricional
				</h1>
				<p className='text-muted-foreground'>
					Descubre cómo una alimentación basada en productos naturales puede
					transformar tu salud y bienestar con nuestros planes nutricionales
					personalizados.
				</p>
			</div>

			<div className='relative h-[300px] w-full overflow-hidden rounded-lg'>
				<Image
					src='/placeholder.svg?height=600&width=1200'
					alt='Asesoría nutricional'
					fill
					className='object-cover'
				/>
			</div>

			<div className='space-y-6'>
				<h2 className='text-2xl font-bold'>Nuestro Enfoque</h2>
				<p>
					En Herbolaria Natural, creemos que la nutrición es la base de una
					buena salud. Nuestro enfoque combina los conocimientos científicos
					modernos con la sabiduría de la medicina tradicional para crear planes
					nutricionales que:
				</p>
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<Leaf className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Nutrición Natural</h3>
								<p className='text-sm text-muted-foreground'>
									Priorizamos alimentos integrales y productos naturales que
									nutren tu cuerpo de forma óptima.
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<Apple className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Personalización</h3>
								<p className='text-sm text-muted-foreground'>
									Cada plan se adapta a tus necesidades específicas, objetivos
									de salud y preferencias personales.
								</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<div className='flex flex-col items-center space-y-2 text-center'>
								<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
									<Utensils className='h-6 w-6 text-primary' />
								</div>
								<h3 className='text-xl font-bold'>Sostenibilidad</h3>
								<p className='text-sm text-muted-foreground'>
									Desarrollamos hábitos alimenticios que puedas mantener a largo
									plazo, no dietas temporales.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className='space-y-6'>
				<h2 className='text-2xl font-bold'>Nuestros Servicios</h2>
				<div className='grid gap-6 md:grid-cols-2'>
					<div className='bg-muted rounded-lg p-6 space-y-4'>
						<div className='flex items-center gap-3'>
							<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
								<Users className='h-5 w-5 text-primary' />
							</div>
							<h3 className='text-xl font-bold'>Consulta Individual</h3>
						</div>
						<ul className='space-y-2'>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Evaluación nutricional completa</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Plan alimenticio personalizado</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Recomendaciones de suplementos naturales</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Seguimiento mensual</span>
							</li>
						</ul>
						<div className='pt-2'>
							<p className='font-bold'>Desde $90 / sesión</p>
							<Button className='mt-4 w-full'>Agendar Consulta</Button>
						</div>
					</div>
					<div className='bg-muted rounded-lg p-6 space-y-4'>
						<div className='flex items-center gap-3'>
							<div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10'>
								<Calendar className='h-5 w-5 text-primary' />
							</div>
							<h3 className='text-xl font-bold'>Plan Trimestral</h3>
						</div>
						<ul className='space-y-2'>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Consulta inicial detallada</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>3 consultas de seguimiento</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Plan alimenticio con ajustes periódicos</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>Recetas y guía de compras</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
								<span>15% de descuento en productos recomendados</span>
							</li>
						</ul>
						<div className='pt-2'>
							<p className='font-bold'>$240 (ahorra $60)</p>
							<Button className='mt-4 w-full'>Contratar Plan</Button>
						</div>
					</div>
				</div>
			</div>

			<div className='space-y-6'>
				<h2 className='text-2xl font-bold'>Áreas de Especialización</h2>
				<div className='grid gap-4 sm:grid-cols-2'>
					<div className='flex items-start gap-3'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<div>
							<h3 className='font-medium'>
								Nutrición para Condiciones Específicas
							</h3>
							<p className='text-sm text-muted-foreground'>
								Planes alimenticios para diabetes, hipertensión, colesterol
								alto, etc.
							</p>
						</div>
					</div>
					<div className='flex items-start gap-3'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<div>
							<h3 className='font-medium'>Alimentación Basada en Plantas</h3>
							<p className='text-sm text-muted-foreground'>
								Asesoría para transición a dietas vegetarianas o veganas
								equilibradas.
							</p>
						</div>
					</div>
					<div className='flex items-start gap-3'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<div>
							<h3 className='font-medium'>Nutrición Deportiva Natural</h3>
							<p className='text-sm text-muted-foreground'>
								Optimización del rendimiento con alimentos y suplementos
								naturales.
							</p>
						</div>
					</div>
					<div className='flex items-start gap-3'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<div>
							<h3 className='font-medium'>Desintoxicación y Limpieza</h3>
							<p className='text-sm text-muted-foreground'>
								Programas de desintoxicación seguros basados en alimentos
								naturales.
							</p>
						</div>
					</div>
					<div className='flex items-start gap-3'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<div>
							<h3 className='font-medium'>Nutrición para la Salud Digestiva</h3>
							<p className='text-sm text-muted-foreground'>
								Planes para mejorar la salud intestinal y tratar problemas
								digestivos.
							</p>
						</div>
					</div>
					<div className='flex items-start gap-3'>
						<span className='h-2 w-2 rounded-full bg-primary mt-2'></span>
						<div>
							<h3 className='font-medium'>Nutrición Anti-inflamatoria</h3>
							<p className='text-sm text-muted-foreground'>
								Alimentación para reducir la inflamación crónica y sus síntomas.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='space-y-6'>
				<h2 className='text-2xl font-bold'>Preguntas Frecuentes</h2>
				<Accordion type='single' collapsible className='w-full'>
					<AccordionItem value='item-1'>
						<AccordionTrigger>
							¿Cómo se desarrolla un plan nutricional personalizado?
						</AccordionTrigger>
						<AccordionContent>
							Nuestro proceso comienza con una evaluación completa que incluye
							tu historial médico, hábitos alimenticios actuales, preferencias,
							alergias y objetivos de salud. Con esta información, nuestros
							especialistas diseñan un plan nutricional que se adapta
							específicamente a tus necesidades, incorporando alimentos
							naturales y, cuando sea necesario, suplementos de origen natural.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger>
							¿Cuánto tiempo se tarda en ver resultados?
						</AccordionTrigger>
						<AccordionContent>
							Los resultados varían según cada persona y sus objetivos
							específicos. Algunos cambios, como mejoras en la energía y la
							digestión, pueden notarse en las primeras semanas. Otros
							objetivos, como la pérdida de peso o la mejora de condiciones
							crónicas, pueden requerir de 2 a 3 meses de adherencia constante
							al plan. Nuestro enfoque prioriza cambios sostenibles a largo
							plazo sobre resultados rápidos pero temporales.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-3'>
						<AccordionTrigger>
							¿Los planes incluyen suplementos?
						</AccordionTrigger>
						<AccordionContent>
							Nuestro enfoque principal es obtener nutrientes a través de
							alimentos integrales y naturales. Sin embargo, en algunos casos,
							recomendamos suplementos de origen natural para complementar la
							dieta. Estas recomendaciones se basan en tus necesidades
							específicas y nunca reemplazarán una alimentación equilibrada.
							Todos los suplementos que recomendamos son de alta calidad y han
							sido cuidadosamente seleccionados por nuestro equipo.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-4'>
						<AccordionTrigger>
							¿Puedo seguir el plan si tengo restricciones alimentarias?
						</AccordionTrigger>
						<AccordionContent>
							Absolutamente. Nuestros planes nutricionales se adaptan a todo
							tipo de restricciones alimentarias, ya sean por alergias,
							intolerancias, condiciones médicas o elecciones personales como
							vegetarianismo o veganismo. Nuestro objetivo es crear un plan que
							sea nutritivo, satisfactorio y alineado con tus necesidades
							dietéticas específicas, sin importar cuáles sean tus
							restricciones.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-5'>
						<AccordionTrigger>
							¿Ofrecen planes para familias completas?
						</AccordionTrigger>
						<AccordionContent>
							Sí, ofrecemos asesoría nutricional para familias completas.
							Entendemos que es más fácil adoptar hábitos saludables cuando toda
							la familia participa. Nuestros planes familiares consideran las
							necesidades individuales de cada miembro, mientras crean un
							enfoque cohesivo que facilita la planificación de comidas y la
							compra de alimentos.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>

			<div className='bg-primary/10 rounded-lg p-6 space-y-4'>
				<div className='flex items-center gap-3'>
					<BookOpen className='h-6 w-6 text-primary' />
					<h2 className='text-2xl font-bold'>Recursos Educativos</h2>
				</div>
				<p>
					Complementamos nuestras asesorías con recursos educativos para
					ayudarte a entender mejor la nutrición natural:
				</p>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					<Card>
						<CardContent className='p-4'>
							<h3 className='font-bold'>Guías Nutricionales</h3>
							<p className='text-sm text-muted-foreground'>
								Documentos descargables sobre principios de nutrición natural.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-4'>
							<h3 className='font-bold'>Recetarios</h3>
							<p className='text-sm text-muted-foreground'>
								Colecciones de recetas saludables adaptadas a diferentes
								necesidades.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-4'>
							<h3 className='font-bold'>Webinars Mensuales</h3>
							<p className='text-sm text-muted-foreground'>
								Sesiones educativas sobre temas específicos de nutrición y
								salud.
							</p>
						</CardContent>
					</Card>
				</div>
				<div className='pt-2'>
					<Link href='#contacto'>
						<Button>Solicitar Información</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
