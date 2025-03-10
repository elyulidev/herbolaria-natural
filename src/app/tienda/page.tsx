import { HeroBanner } from "@/components/hero-banner";
import { ProductFilters } from "@/components/product-filters";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { CustomToast } from "@/components/custom-toast";
import { PaginationProducts } from "@/components/pagination-products";
import ProductsStore from "@/components/products-store";

export default async function Tienda({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const params = await searchParams;
	const pageSize = 7;
	const rangeStart = Number(params?.page ? params?.page : 0) * pageSize;
	const rangeEnd = rangeStart + pageSize;

	const cookieStore = await cookies();
	const supabase = await createClient(cookieStore);

	let query = supabase.from("product").select("*");
	let filterCategoryId, msgError, products;

	if (params?.categoria) {
		const queryCategory = await supabase
			.from("category")
			.select("id")
			.eq("name", params?.categoria.toString())
			.single();

		if (queryCategory.error) {
			msgError = queryCategory.error.message;
		}
		filterCategoryId = queryCategory?.data?.id;
	}

	if (filterCategoryId) {
		query = query.eq("category", filterCategoryId);
	}

	if (params?.precio) {
		switch (params?.precio) {
			case "10_a_20":
				query = query.gte("price", 10).lte("price", 20);
				break;
			case "20_a_30":
				query = query.gte("price", 20).lte("price", 30);
				break;
			case "30_a_40":
				query = query.gte("price", 30).lte("price", 40);
				break;
			case "40_a_50":
				query = query.gte("price", 40).lte("price", 50);
				break;
			case "mayor_a_50":
				query = query.gte("price", 50);
				break;
			default:
				query = query.lte("price", 10);
				break;
		}
	}

	if (params?.valoracion) {
		switch (params?.valoracion) {
			case "5":
				query = query.eq("rating", 5);
				break;
			case "4":
				query = query.gte("rating", 4).lt("rating", 5);
				break;
			case "3":
				query = query.gte("rating", 3).lt("rating", 4);
				break;
			case "2":
				query = query.gte("rating", 2).lt("rating", 3);
				break;
			default:
				query = query.gte("price", 1).lt("price", 2);
				break;
		}
	}

	if (params?.origen) {
		switch (params?.origen) {
			case "produccion_local":
				query = query.eq("origen", "Producción local");
				break;
			case "produccion_local_organica":
				query = query.eq("origen", "Producción local orgánica");
				break;
			case "produccion_organica":
				query = query.eq("origen", "Producción local orgánica");
				break;
			case "importado_confiables":
				query = query.eq("origen", "Importado de fuentes confiables");
				break;
			case "importado_no_confiables":
				query = query.eq("origen", "Importado de fuentes no confiables");
				break;
			default:
				query = query.eq("origen", "Producción certificada orgánica");
				break;
		}
	}

	if (params?.beneficios) {
		switch (params?.beneficios) {
			case "fortalecimiento_inmunitario":
				query = query.contains(
					"benefits",
					'[{"name": "Fortalecimiento inmunitario"}]'
				);
				break;
			case "mejora_del_sueno":
				query = query.contains("benefits", '[{"name": "Mejora del sueño"}]');
				break;
			case "cuidado_diario":
				query = query.contains("benefits", '[{"name": "Cuidado diario"}]');
				break;
			case "reduccion_del_estres":
				query = query.contains(
					"benefits",
					'[{"name": "Reducción del estrés"}]'
				);
				break;
			case "aumento_energético":
				query = query.contains(
					"benefits",
					'[{"name": "Aumento de la energía"}]'
				);
				break;
			case "fortalecimiento_del_cabello":
				query = query.contains(
					"benefits",
					'[{"name": "Fortalecimiento del cabello"}]'
				);
				break;
			case "mantenimiento_de_la_piel":
				query = query.contains(
					"benefits",
					'[{"name": "Mantenimiento de la piel"}]'
				);
				break;
			case "alivio_del_dolor_articular":
				query = query.contains(
					"benefits",
					'[{"name": "Alivio del dolor articular"}]'
				);
				break;
			default:
				query = query.contains("benefits", '[{"name": "Alivio del estrés"}]');
				break;
		}
	}

	if (params?.ordenar) {
		switch (params?.ordenar) {
			case "nuevos":
				query = query.order("created_at", { ascending: false });
				break;
			case "vendidos":
				query = supabase
					.from("order_product")
					.select(`product(*), order!inner(amount_total:amount.sum())`)
					.order("order(amount_total)", {
						ascending: false,
					})
					.limit(6);
				break;

			default:
				query = query.order("created_at", { ascending: false });
				break;
		}
	}

	const totalItems = (await query).data?.length;
	const { data, error } = await query.range(rangeStart, rangeEnd);

	if (error) {
		msgError = error.message;
	} else if (params?.ordenar === "vendidos") {
		products = [
			...data?.map(({ product }) => {
				const {
					id,
					name,
					price,
					description,
					image,
					rating,
					category,
					origen,
					stock,
					stock_min,
					date_update,
					benefits,
					ingredients,
				} = product;
				return {
					id,
					name,
					price,
					description,
					image,
					rating,
					category,
					origen,
					stock,
					stock_min,
					date_update,
					benefits,
					ingredients,
				};
			}),
		];
	} else {
		products = [...data];
	}

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col'>
			<main className='container mx-auto px-4 py-8 flex-grow'>
				<HeroBanner />
				<div className='mt-8'>
					<h2 className='text-2xl font-bold mb-4'>
						Productos Medicinales Destacados
					</h2>
					<ProductFilters params={params} />
					<div className='min-h-[500px] w-full relative'>
						{products && products?.length > 0 ? (
							<>
								<ProductsStore data={products} />
								<div className='relative bottom-0 mt-6'>
									<PaginationProducts
										totalItems={totalItems as number}
										pageSize={pageSize + 1}
										siblingCount={1} //se refiere al número de páginas hermanas que se muestran alrededor de la página actual. 1 ... 4 5 6 ... 10. Páginas hermanas: 4 y 6 (una a cada lado de la página actual 5).
									/>
								</div>
							</>
						) : (
							<span>No hay productos</span>
						)}
					</div>
					{msgError && (
						<CustomToast message={msgError} type='error' trigger={true} />
					)}
				</div>
			</main>
		</div>
	);
}
