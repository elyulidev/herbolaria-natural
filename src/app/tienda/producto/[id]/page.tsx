import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Truck, ArrowRight, ShieldCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import ProductBtnCart from "@/components/product-btn-cart";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";

// Esta función simularía la obtención de datos del producto desde una API o base de datos
async function getProductData(id: string) {
	/* const products = [
		{
			id: "1",
			name: "Manzanilla Orgánica",
			price: 12.99,
			description:
				"Té de manzanilla 100% orgánica, cultivada en campos libres de pesticidas. Ayuda a la digestión, reduce el estrés y promueve un sueño reparador. Nuestro té de manzanilla es conocido por su sabor suave y aroma relajante.",
			image: "/placeholder.svg?height=600&width=600",
			rating: 4.5,
			reviews: 128,
			stock: 50,
			benefits: [
				"Ayuda a la digestión",
				"Reduce el estrés",
				"Promueve el sueño reparador",
				"100% orgánico",
			],
		},
		{
			id: "2",
			name: "Aceite de Eucalipto",
			price: 18.99,
			description:
				"Aceite esencial puro de eucalipto, ideal para problemas respiratorios. Ayuda a despejar las vías respiratorias y proporciona una sensación refrescante.",
			image: "/placeholder.svg?height=600&width=600",
			rating: 4.2,
			reviews: 95,
			stock: 30,
			benefits: [
				"Despeja las vías respiratorias",
				"Proporciona sensación refrescante",
				"100% puro y natural",
				"Múltiples usos terapéuticos",
			],
		},
		{
			id: "3",
			name: "Moringa en Polvo",
			price: 24.99,
			description:
				"Superalimento rico en nutrientes y antioxidantes. La moringa es conocida por sus propiedades antiinflamatorias y su alto contenido en vitaminas y minerales.",
			image: "/placeholder.svg?height=600&width=600",
			rating: 4.8,
			reviews: 150,
			stock: 40,
			benefits: [
				"Rico en nutrientes y antioxidantes",
				"Propiedades antiinflamatorias",
				"Alto contenido en vitaminas y minerales",
				"Fácil de incorporar en la dieta diaria",
			],
		},
	]; */
	const cookieStore = await cookies();
	const supabase = await createClient(cookieStore);
	const { data: product } = await supabase
		.from("product")
		.select("*")
		.eq("id", id)
		.single();

	if (!product) {
		return notFound();
	}
	return { product };
}

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const { product } = await getProductData(id);

	return (
		<main className='flex-grow container mx-auto px-4 py-8'>
			<div className='grid md:grid-cols-2 gap-8'>
				<div className='md:sticky md:top-24'>
					<div className='aspect-square relative'>
						<Image
							src={product?.image || "/placeholder.svg"}
							alt={product?.name}
							fill
							className='object-cover rounded-lg'
						/>
					</div>
				</div>
				<div>
					<h1 className='text-3xl font-bold mb-2'>{product.name}</h1>
					<div className='flex items-center mb-4'>
						<div className='flex items-center'>
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className={`h-5 w-5 ${
										i < Math.floor(product.rating)
											? "text-yellow-400 fill-current"
											: "text-gray-300"
									}`}
								/>
							))}
						</div>
						<span className='ml-2 text-sm text-gray-600'>
							{product.rating} ({product.reviews} reseñas)
						</span>
					</div>
					<div className='text-3xl font-bold mb-4'>${product.price}</div>
					<p className='text-gray-700 mb-6'>{product.description}</p>
					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2'>Beneficios:</h2>
						<ul className='list-disc pl-5 space-y-1'>
							{/* {product.benefits.map((benefit, index) => (
								<li key={index}>{benefit}</li>
							))} */}
						</ul>
					</div>
					<div className='flex items-center space-x-4 mb-6'>
						<ProductBtnCart product={product} />
					</div>
					<div className='border-t border-b py-4 mb-6'>
						<div className='flex items-center mb-2'>
							<Truck className='h-5 w-5 mr-2 text-green-600' />
							<span className='text-sm'>
								Envío gratis en pedidos superiores a $50
							</span>
						</div>
						<div className='flex items-center'>
							<ShieldCheck className='h-5 w-5 mr-2 text-green-600' />
							<span className='text-sm'>Garantía de devolución de 30 días</span>
						</div>
					</div>
					<Button
						variant='outline'
						className='w-full flex items-center justify-center'
					>
						<span>Ver más detalles</span>
						<ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</div>
			</div>
		</main>
	);
}
