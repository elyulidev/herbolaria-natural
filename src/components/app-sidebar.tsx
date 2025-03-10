"use client";

import {
	Settings2,
	Pill,
	Stethoscope,
	Clipboard,
	Activity,
	FileText,
	BarChart2,
	Users,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";

const data = {
	user: {
		name: "Dr. García",
		email: "dr.garcia@medhub.com",
		avatar: "/avatars/doctor.jpg",
	},
	departments: [
		{
			name: "Cardiología",
			logo: Activity,
			type: "Departamento",
		},
		{
			name: "Neurología",
			logo: Stethoscope,
			type: "Departamento",
		},
		{
			name: "Farmacia",
			logo: Pill,
			type: "Departamento",
		},
	],
	navMain: [
		{
			title: "Panel de Control",
			url: "/dashboard",
			icon: BarChart2,
			isActive: true,
		},
		{
			title: "Inventario",
			url: "#",
			icon: Clipboard,
			items: [
				{
					title: "Medicamentos",
					url: "/dashboard/inventario/medicamentos",
				},
				{
					title: "Suministros",
					url: "/dashboard/inventario/suministros",
				},
				{
					title: "Equipamiento",
					url: "/dashboard/inventario/equipamiento",
				},
			],
		},
		{
			title: "Pacientes",
			url: "#",
			icon: Users,
			items: [
				{
					title: "Registros",
					url: "/dashboard/pacientes/registros",
				},
				{
					title: "Recetas",
					url: "/dashboard/pacientes/recetas",
				},
				{
					title: "Citas",
					url: "/dashboard/pacientes/citas",
				},
			],
		},
		{
			title: "Informes",
			url: "#",
			icon: FileText,
			items: [
				{
					title: "Análisis de Uso",
					url: "/dashboard/informes/análisis-de-uso",
				},
				{
					title: "Resumen Financiero",
					url: "/dashboard/informes/resumen-financiero",
				},
				{
					title: "Estado del Inventario",
					url: "/dashboard/informes/estado-del-inventario",
				},
			],
		},
		{
			title: "Configuración",
			url: "#",
			icon: Settings2,
			items: [
				{
					title: "General",
					url: "/dashboard/configuracion/general",
				},
				{
					title: "Notificaciones",
					url: "/dashboard/configuracion/notificaciones",
				},
				{
					title: "Seguridad",
					url: "/dashboard/configuracion/seguridad",
				},
			],
		},
	],
	quickAccess: [
		{
			name: "Gestor de Recetas",
			url: "/dashboard/pacientes/recetas",
			icon: Pill,
		},
		{
			name: "Registros de Pacientes",
			url: "/dashboard/pacientes/registros",
			icon: FileText,
		},
		{
			name: "Revisión de Inventario",
			url: "/dashboard/inventario/resumen",
			icon: Clipboard,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<TeamSwitcher departments={data.departments} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.quickAccess} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
