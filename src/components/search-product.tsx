"use client";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { searchProducts } from "@/app/tienda/action";
import { useActionState } from "react";
import { useProductStore } from "@/lib/store/product-store";
import { toast } from "sonner";

const SearchProduct = () => {
	const setProducts = useProductStore((state) => state.setProducts);
	/* const [state, formAction, isPending] = useActionState(searchProducts, {
		search: "",
	}); */

	const handleOnKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		setTimeout(
			async (str) => {
				if (str !== "") {
					const { data, error } = await searchProducts(str);
					if (error) {
						toast.error(error.message, { id: crypto.randomUUID() });
					} else {
						setProducts(data);
					}
				}
			},
			2000,
			e.currentTarget.value
		);
	};

	return (
		<div className='hidden sm:block flex-1 max-w-xs'>
			<div className='relative'>
				<Input
					type='search'
					name='search'
					placeholder='Buscar producto natural'
					className='w-full pl-10'
					onKeyUp={handleOnKeyUp}
				/>
				<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
			</div>
		</div>
	);
};

export default SearchProduct;
