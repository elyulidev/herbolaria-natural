"use client";

import { usePagination } from "@/hooks/use-pagination";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useParams } from "next/navigation";

interface PaginationProductsProps {
	totalItems: number;
	pageSize: number;
	siblingCount?: number;
}

export function PaginationProducts({
	totalItems,
	pageSize,
	siblingCount = 1,
}: PaginationProductsProps) {
	const { currentPage, paginationRange, changePage } = usePagination({
		totalItems,
		pageSize,
		siblingCount,
	});
	const params = useParams();

	// Siempre renderizamos el componente, pero adaptamos su contenido
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href={`?page=${Math.max(1, currentPage - 1)}`}
						onClick={(e) => {
							e.preventDefault();
							changePage(Math.max(1, currentPage - 1));
						}}
					/>
				</PaginationItem>
				{paginationRange && paginationRange.length > 0 ? (
					paginationRange.map((pageNumber, index) => {
						if (pageNumber === "...") {
							return (
								<PaginationItem key={index}>
									<PaginationEllipsis />
								</PaginationItem>
							);
						}

						return (
							<PaginationItem key={index}>
								<PaginationLink
									href={`?${new URLSearchParams({
										...params,
										page: pageNumber.toString(),
									})}`}
									onClick={(e) => {
										e.preventDefault();
										changePage(pageNumber as number);
									}}
									isActive={currentPage === pageNumber}
								>
									{pageNumber}
								</PaginationLink>
							</PaginationItem>
						);
					})
				) : (
					<PaginationItem>
						<PaginationLink href='#' isActive>
							1
						</PaginationLink>
					</PaginationItem>
				)}
				<PaginationItem>
					<PaginationNext
						href={`?${new URLSearchParams({
							...params,
							page: Math.min(
								Math.ceil(totalItems / pageSize),
								currentPage + 1
							).toString(),
						})}`}
						onClick={(e) => {
							e.preventDefault();

							changePage(
								Math.min(Math.ceil(totalItems / pageSize), currentPage + 1)
							);
						}}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
