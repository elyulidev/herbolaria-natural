import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { CartItem } from "@/lib/store/cart-store";

const productsMock = [
	{
		id: 1,
		name: "Extracto de Moringa",
		description:
			"Suplemento natural rico en antioxidantes y nutrientes esenciales.",
		price: "$24.99",
		image: "/placeholder.svg?height=200&width=200",
		badge: "Más Vendido",
	},
	{
		id: 2,
		name: "Aceite de CBD Orgánico",
		description: "Alivia el dolor y reduce la inflamación de forma natural.",
		price: "$39.99",
		image: "/placeholder.svg?height=200&width=200",
		badge: "Nuevo",
	},
	{
		id: 3,
		name: "Cápsulas de Cúrcuma",
		description:
			"Potente antiinflamatorio natural con propiedades antioxidantes.",
		price: "$19.99",
		image: "/placeholder.svg?height=200&width=200",
		badge: null,
	},
	{
		id: 4,
		name: "Té de Hierbas Digestivo",
		description:
			"Mezcla especial para mejorar la digestión y reducir la hinchazón.",
		price: "$15.99",
		image: "/placeholder.svg?height=200&width=200",
		badge: null,
	},
];

export default async function ProductsSection() {
	const cookieStore = await cookies();
	const supabase = await createClient(cookieStore);

	const [{ data: productsDB }, { data: produtMoreSelling }] = await Promise.all(
		[
			supabase
				.from("product")
				.select("*")
				.order("created_at", { ascending: false })
				.limit(3),
			supabase.rpc("get_best_selling_product"),
		]
	);

	type Products = CartItem & {
		badge?: string;
		image: string;
		description: string;
	};

	let products: Products[] = [];

	if (productsDB && productsDB.length > 0 && produtMoreSelling) {
		console.log("productMoreSelling>>>>", produtMoreSelling);
		products = [
			{ ...produtMoreSelling, badge: "Más Vendido" },
			{ ...productsDB[0], badge: "Más Nuevo" },
			{ ...productsDB[1] },
			{ ...productsDB[2] },
		];
	}

	return (
		<section
			id='productos'
			className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-green-50'
		>
			{}
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Nuestros Productos
						</h2>
						<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Descubre nuestra selección de productos naturales de la más alta
							calidad
						</p>
					</div>
				</div>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8'>
					{products.length > 0
						? products.map((product) => (
								<Card key={product.id} className='overflow-hidden'>
									<CardHeader className='relative'>
										{product?.badge && (
											<Badge className='absolute top-2 right-2 bg-primary'>
												{product?.badge}
											</Badge>
										)}
									</CardHeader>
									<CardContent className='p-4 flex-grow'>
										<div className='aspect-square relative'>
											<Image
												src={product?.image || "/placeholder.svg"}
												alt={product.name || "Producto"}
												fill
												className='object-cover'
											/>
										</div>
										<h2>{product.name}</h2>
										<p className='text-sm text-muted-foreground'>
											{product?.description}
										</p>
										<p className='mt-2 font-bold text-lg'>{product.price}</p>
									</CardContent>
									<CardFooter>
										<Link href='/tienda' className='w-full'>
											<Button variant='outline' className='w-full'>
												Ver Detalles
											</Button>
										</Link>
									</CardFooter>
								</Card>
						  ))
						: productsMock.map((product) => (
								<Card key={product.id} className='overflow-hidden'>
									<CardHeader className='relative'>
										{product?.badge && (
											<Badge className='absolute top-2 right-2 bg-primary'>
												{product?.badge}
											</Badge>
										)}
									</CardHeader>
									<CardContent className='p-4 flex-grow'>
										<div className='aspect-square relative'>
											<Image
												src={product?.image || "/placeholder.svg"}
												alt={product.name}
												fill
												className='object-cover'
											/>
										</div>
										<h2>{product.name}</h2>
										<p className='text-sm text-muted-foreground'>
											{product?.description}
										</p>
										<p className='mt-2 font-bold text-lg'>{product.price}</p>
									</CardContent>
									<CardFooter>
										<Link href='/tienda' className='w-full'>
											<Button variant='outline' className='w-full'>
												Ver Detalles
											</Button>
										</Link>
									</CardFooter>
								</Card>
						  ))}
				</div>
				<div className='flex justify-center mt-12'>
					<Link href='/tienda'>
						<Button size='lg' className='gap-2'>
							Visitar Tienda <ArrowRight className='h-4 w-4' />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
