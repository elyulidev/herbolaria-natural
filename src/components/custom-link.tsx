import { cn } from "@/lib/utils";
import Link from "next/link";

type CustomLinkProps = {
	href: string;
	disabled?: boolean;
	children: React.ReactNode;
	className?: string;
};

export default function CustomLink({
	href,
	disabled,
	className,
	children,
	...props
}: CustomLinkProps) {
	// Si está deshabilitado, devolver un span estilizado

	if (disabled) {
		return (
			<span
				className={cn(className, "cursor-not-allowed")}
				role='link'
				aria-disabled={true}
				{...props}
			>
				{children}
			</span>
		);
	}

	// Si no está deshabilitado, devolver el Link normal
	return (
		<Link href={href} {...props} className={cn("cursor-pointer", className)}>
			{children}
		</Link>
	);
}
