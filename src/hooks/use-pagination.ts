"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface UsePaginationProps {
	totalItems: number;
	pageSize: number;
	siblingCount?: number;
	currentPage?: number;
}

export function usePagination({
	totalItems,
	pageSize,
	siblingCount = 1,
	currentPage: initialPage = 1,
}: UsePaginationProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || initialPage;

	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalItems / pageSize);
		const totalPageNumbers = siblingCount + 5;

		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			currentPage + siblingCount,
			totalPageCount
		);

		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = 3 + 2 * siblingCount;
			const leftRange = range(1, leftItemCount);

			return [...leftRange, "...", totalPageCount];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = 3 + 2 * siblingCount;
			const rightRange = range(
				totalPageCount - rightItemCount + 1,
				totalPageCount
			);
			return [firstPageIndex, "...", ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			const middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
		}

		// Ensure we always return an array, even if it's empty
		return [];
	}, [totalItems, pageSize, siblingCount, currentPage]);

	const changePage = (page: number) => {
		const totalPageCount = Math.ceil(totalItems / pageSize);
		if (page >= 1 && page <= totalPageCount) {
			const params = new URLSearchParams(searchParams.toString());
			params.set("page", page.toString());
			router.push(`?${params.toString()}`);
		}
	};

	return {
		currentPage,
		paginationRange,
		changePage,
	};
}

function range(start: number, end: number) {
	const length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
}
