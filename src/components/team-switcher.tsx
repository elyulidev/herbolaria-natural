"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher({
	departments,
}: {
	departments: {
		name: string;
		logo: React.ElementType;
		type: string;
	}[];
}) {
	const { isMobile } = useSidebar();
	const [activeDepartment, setActiveDepartment] = React.useState(
		departments[0]
	);

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size='lg'
							className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
						>
							<div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
								<activeDepartment.logo className='size-4' />
							</div>
							<div className='grid flex-1 text-left text-sm leading-tight'>
								<span className='truncate font-semibold'>
									{activeDepartment.name}
								</span>
								<span className='truncate text-xs'>
									{activeDepartment.type}
								</span>
							</div>
							<ChevronsUpDown className='ml-auto' />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
						align='start'
						side={isMobile ? "bottom" : "right"}
						sideOffset={4}
					>
						<DropdownMenuLabel className='text-xs text-muted-foreground'>
							Departamentos
						</DropdownMenuLabel>
						{departments.map((department, index) => (
							<DropdownMenuItem
								key={department.name}
								onClick={() => setActiveDepartment(department)}
								className='gap-2 p-2'
							>
								<div className='flex size-6 items-center justify-center rounded-sm border'>
									<department.logo className='size-4 shrink-0' />
								</div>
								{department.name}
								<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
							</DropdownMenuItem>
						))}
						<DropdownMenuSeparator />
						<DropdownMenuItem className='gap-2 p-2'>
							<div className='flex size-6 items-center justify-center rounded-md border bg-background'>
								<Plus className='size-4' />
							</div>
							<div className='font-medium text-muted-foreground'>
								Añadir Departamento
							</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
