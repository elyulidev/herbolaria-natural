import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type ProductFiltersProps = {
	params: { [key: string]: string | string[] | undefined };
};

const categories = [
	{ name: "Suplementos", id: 1, href: "suplementos" },
	{ name: "Infusiones", id: 2, href: "infusiones" },
	{ name: "Cuidado de la piel", id: 3, href: "piel" },
	{ name: "Cuidado del cabello", id: 4, href: "cabello" },
	{ name: "Cuidado del cuerpo", id: 5, href: "cuerpo" },
];

const prices = [
	{ name: "Menor a 10", id: 1, href: "menor_a_10" },
	{ name: "10 a 20", id: 2, href: "10_a_20" },
	{ name: "20 a 30", id: 3, href: "20_a_30" },
	{ name: "30 a 40", id: 4, href: "30_a_40" },
	{ name: "40 a 50", id: 5, href: "40_a_50" },
	{ name: "Mayor a 50", id: 6, href: "mayor_a_50" },
];

const valorations = [
	{ name: "Excelente", id: 1, href: "5" },
	{ name: "Buena", id: 2, href: "4" },
	{ name: "Regular", id: 3, href: "3" },
	{ name: "Poco Bueno", id: 4, href: "2" },
	{ name: "Malo", id: 5, href: "1" },
];

const origens = [
	{ name: "Producción orgánica", id: 1, href: "produccion_organica" },
	{ name: "Producción local", id: 2, href: "produccion_local" },
	{
		name: "Producción local orgánica",
		id: 3,
		href: "produccion_local_organica",
	},
	{
		name: "Importado de fuentes confiables",
		id: 4,
		href: "importado_confiables",
	},
	{
		name: "Importado de fuentes no confiables",
		id: 5,
		href: "importado_no_confiables",
	},
	{
		name: "Producción certificada orgánica",
		id: 6,
		href: "produccion_certificada_organica",
	},
];

const benefits = [
	{
		name: "Fortalecimiento Inmunitario",
		id: 1,
		href: "fortalecimiento_inmunitario",
	},
	{ name: "Mejora del sueño", id: 2, href: "mejora_del_sueno" },
	{ name: "Cuidado diario", id: 3, href: "cuidado_diario" },
	{ name: "Reducción del estrés", id: 4, href: "reduccion_del_estres" },
	{
		name: "Fortalecimiento del cabello",
		id: 5,
		href: "fortalecimiento_del_cabello",
	},

	{ name: "Aumento de la energía", id: 6, href: "aumento_energético" },
	{
		name: "Mantenimiento de la piel",
		id: 7,
		href: "mantenimiento_de_la_piel",
	},
	{
		name: "Alivio del dolor articular",
		id: 8,
		href: "alivio_del_dolor_articular",
	},
	{
		name: "Alivio del estrés",
		id: 9,
		href: "alivio_del_estres",
	},
];

const sortOptions = [
	{ name: "Más nuevos", id: 1, href: "nuevos" },
	{ name: "Más vendidos", id: 2, href: "vendidos" },
];

export async function ProductFilters({ params }: ProductFiltersProps) {
	const concatParams = (str: string, value?: string) => {
		if (
			str === "ordenar" ||
			(params.hasOwnProperty("ordenar") && str !== "ordenar")
		) {
			return new URLSearchParams({ [str]: value as string });
		}

		const queryParams = Object.fromEntries(
			Object.entries(params).map(([key, value]) => [key, String(value)])
		);

		if (queryParams.hasOwnProperty(str) && queryParams[str] === value) {
			const { [str]: _, ...modifiedParams } = queryParams;
			return new URLSearchParams({ ...modifiedParams });
		} else {
			return new URLSearchParams({ ...queryParams, [str]: value as string });
		}
	};

	return (
		<div className='flex flex-wrap items-center gap-2 py-4 text-sm'>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' className='text-gray-600 w-full sm:w-auto'>
						Categorías
						<ChevronDown className='ml-2 h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						{categories.map((cat) => (
							<Link
								key={cat.id}
								href={`?${concatParams("categoria", cat.href)}`}
							>
								<DropdownMenuItem>{cat.name}</DropdownMenuItem>
							</Link>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' className='text-gray-600 w-full sm:w-auto'>
						Precios
						<ChevronDown className='ml-2 h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						{prices.map((p) => (
							<Link key={p.id} href={`?${concatParams("precio", p.href)}`}>
								<DropdownMenuItem>{p.name}</DropdownMenuItem>
							</Link>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' className='text-gray-600 w-full sm:w-auto'>
						Valoraciones
						<ChevronDown className='ml-2 h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						{valorations.map((val) => (
							<Link
								key={val.id}
								href={`?${concatParams("valoracion", val.href)}`}
							>
								<DropdownMenuItem>{val.name}</DropdownMenuItem>
							</Link>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' className='text-gray-600 w-full sm:w-auto'>
						Origen
						<ChevronDown className='ml-2 h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						{origens.map((o) => (
							<Link key={o.id} href={`?${concatParams("origen", o.href)}`}>
								<DropdownMenuItem>{o.name}</DropdownMenuItem>
							</Link>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' className='text-gray-600 w-full sm:w-auto'>
						Beneficios
						<ChevronDown className='ml-2 h-4 w-4' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuGroup>
						{benefits.map((b) => (
							<Link key={b.id} href={`?${concatParams("beneficios", b.href)}`}>
								<DropdownMenuItem>{b.name}</DropdownMenuItem>
							</Link>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			<Link href={`?${new URLSearchParams({})}`}>
				<Button variant='outline' className='text-gray-600 w-full sm:w-auto'>
					Reestablecer filtros
				</Button>
			</Link>
			<div className='w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0'>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='outline'
							className='text-gray-600 w-full sm:w-auto'
						>
							Ordenar por
							<ChevronDown className='ml-2 h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuGroup>
							{sortOptions.map((opt) => (
								<Link
									key={opt.id}
									href={`?${concatParams("ordenar", opt.href)}`}
								>
									<DropdownMenuItem>{opt.name}</DropdownMenuItem>
								</Link>
							))}
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
