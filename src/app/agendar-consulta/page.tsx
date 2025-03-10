import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AgendarConsultaForm from "@/components/agendar-consultas-form";

export const metadata: Metadata = {
	title: "Agendar Consulta | NaturalVida",
	description:
		"Agenda una consulta con nuestros especialistas en medicina natural y productos naturales.",
};

export default function AgendarConsultaPage() {
	return (
		<div className='w-full max-w-[1400px] mx-auto px-4 py-8 md:py-12'>
			<div className='flex items-center gap-1 text-sm text-muted-foreground mb-8'>
				<Link href='/' className='hover:text-primary transition-colors'>
					Inicio
				</Link>
				<ChevronRight className='h-4 w-4' />
				<span>Agendar Consulta</span>
			</div>

			<div className='grid md:grid-cols-5 gap-8'>
				<div className='md:col-span-3 space-y-8'>
					<div className='space-y-4'>
						<h1 className='text-3xl font-bold tracking-tight'>
							Agendar Consulta
						</h1>
						<p className='text-muted-foreground'>
							Completa el formulario para agendar una consulta con nuestros
							especialistas. Recibirás una confirmación por correo electrónico y
							SMS una vez que tu cita sea confirmada.
						</p>
					</div>

					<AgendarConsultaForm />
				</div>

				<div className='md:col-span-2 space-y-8'>
					<div className='bg-muted rounded-lg p-6 space-y-4'>
						<h2 className='text-xl font-bold'>Información Importante</h2>
						<div className='space-y-3'>
							<div className='space-y-1'>
								<h3 className='font-medium'>Política de Cancelación</h3>
								<p className='text-sm text-muted-foreground'>
									Puedes cancelar o reprogramar tu cita hasta 24 horas antes sin
									costo. Cancelaciones con menos de 24 horas de anticipación
									tendrán un cargo del 30% del valor de la consulta.
								</p>
							</div>

							<div className='space-y-1'>
								<h3 className='font-medium'>Llegada a la Consulta</h3>
								<p className='text-sm text-muted-foreground'>
									Te recomendamos llegar 15 minutos antes de tu cita para
									completar cualquier documentación necesaria. Las consultas
									comienzan puntualmente.
								</p>
							</div>

							<div className='space-y-1'>
								<h3 className='font-medium'>Preparación</h3>
								<p className='text-sm text-muted-foreground'>
									Para tu primera consulta, es recomendable traer cualquier
									análisis médico reciente y una lista de medicamentos o
									suplementos que estés tomando actualmente.
								</p>
							</div>
						</div>
					</div>

					<div className='rounded-lg overflow-hidden'>
						<Image
							src='/placeholder.svg?height=500&width=500'
							alt='Consulta personalizada'
							width={500}
							height={500}
							className='w-full h-auto object-cover'
						/>
					</div>

					<div className='bg-primary/10 rounded-lg p-6 space-y-3'>
						<h2 className='text-xl font-bold'>¿Necesitas ayuda?</h2>
						<p className='text-sm'>
							Si tienes dudas sobre cuál es la consulta más adecuada para ti o
							necesitas asistencia con el formulario, no dudes en contactarnos.
						</p>
						<div className='pt-2'>
							<p className='text-sm font-medium'>Teléfono: +1 (555) 123-4567</p>
							<p className='text-sm font-medium'>
								Email: consultas@naturalvida.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
