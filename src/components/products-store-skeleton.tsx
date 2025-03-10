const ProductsStoreSkeleton = () => {
	return (
		<section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6'>
			{Array.from({ length: 8 }).map((_, i) => (
				<div key={i} className='h-full'>
					<div className='h-full w-full aspect-[290/454] bg-gray-200 animate-pulse rounded-lg'></div>
				</div>
			))}
		</section>
	);
};

export default ProductsStoreSkeleton;
