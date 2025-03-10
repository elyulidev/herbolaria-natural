import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Pill, Users, DollarSign, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

// Datos de muestra para el gráfico de inventario
const inventoryData = [
	{ category: "Analgésicos", amount: 2500 },
	{ category: "Antibióticos", amount: 1800 },
	{ category: "Antiinflamatorios", amount: 2200 },
	{ category: "Antidepresivos", amount: 1500 },
	{ category: "Antihipertensivos", amount: 2000 },
];

// Datos de muestra para medicamentos principales
const topMedications = [
	{ name: "Paracetamol", prescriptions: 450, stock: 3000 },
	{ name: "Ibuprofeno", prescriptions: 380, stock: 2500 },
	{ name: "Amoxicilina", prescriptions: 300, stock: 2000 },
	{ name: "Omeprazol", prescriptions: 250, stock: 1800 },
	{ name: "Loratadina", prescriptions: 200, stock: 1500 },
];

// Datos de muestra para recetas recientes
const recentPrescriptions = [
	{
		id: "RX001",
		patient: "María García",
		medication: "Paracetamol",
		dosage: "500mg",
		frequency: "Cada 8 horas",
	},
	{
		id: "RX002",
		patient: "Juan Pérez",
		medication: "Ibuprofeno",
		dosage: "400mg",
		frequency: "Cada 6 horas",
	},
	{
		id: "RX003",
		patient: "Ana Martínez",
		medication: "Amoxicilina",
		dosage: "500mg",
		frequency: "Cada 12 horas",
	},
	{
		id: "RX004",
		patient: "Carlos Rodríguez",
		medication: "Omeprazol",
		dosage: "20mg",
		frequency: "Una vez al día",
	},
	{
		id: "RX005",
		patient: "Laura Sánchez",
		medication: "Loratadina",
		dosage: "10mg",
		frequency: "Una vez al día",
	},
];

// Datos de muestra para alertas de inventario
const inventoryAlerts = [
	{
		medication: "Insulina",
		currentStock: 50,
		minStock: 100,
		status: "Crítico",
	},
	{
		medication: "Atorvastatina",
		currentStock: 150,
		minStock: 200,
		status: "Bajo",
	},
	{
		medication: "Metformina",
		currentStock: 80,
		minStock: 150,
		status: "Crítico",
	},
	{
		medication: "Levotiroxina",
		currentStock: 180,
		minStock: 200,
		status: "Bajo",
	},
];

export default function Page() {
	return (
		<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Inventario Total
						</CardTitle>
						<Pill className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>12,345</div>
						<p className='text-xs text-muted-foreground'>
							+2.5% desde el mes pasado
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Pacientes Activos
						</CardTitle>
						<Users className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>1,234</div>
						<p className='text-xs text-muted-foreground'>
							+5.2% desde el mes pasado
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Ingresos</CardTitle>
						<DollarSign className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>$54,321</div>
						<p className='text-xs text-muted-foreground'>
							+12.3% desde el mes pasado
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Recetas Activas
						</CardTitle>
						<Activity className='h-4 w-4 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>3,456</div>
						<p className='text-xs text-muted-foreground'>
							+7.8% desde el mes pasado
						</p>
					</CardContent>
				</Card>
			</div>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
				<Card className='col-span-4'>
					<CardHeader>
						<CardTitle>Resumen de Inventario</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='space-y-4'>
							{inventoryData.map((item) => (
								<div key={item.category} className='flex items-center'>
									<div className='w-[100px] flex-shrink-0'>{item.category}</div>
									<div className='flex-1'>
										<Progress
											value={(item.amount / 3000) * 100}
											className='h-2'
										/>
									</div>
									<div className='w-[60px] flex-shrink-0 text-right'>
										{item.amount}
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
				<Card className='col-span-3'>
					<CardHeader>
						<CardTitle>Medicamentos Principales</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Medicamento</TableHead>
									<TableHead className='text-right'>Recetas</TableHead>
									<TableHead className='text-right'>Stock</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{topMedications.map((med) => (
									<TableRow key={med.name}>
										<TableCell>{med.name}</TableCell>
										<TableCell className='text-right'>
											{med.prescriptions}
										</TableCell>
										<TableCell className='text-right'>{med.stock}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
				<Card className='col-span-4'>
					<CardHeader>
						<CardTitle>Recetas Recientes</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>ID</TableHead>
									<TableHead>Paciente</TableHead>
									<TableHead>Medicamento</TableHead>
									<TableHead>Dosis</TableHead>
									<TableHead>Frecuencia</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{recentPrescriptions.map((rx) => (
									<TableRow key={rx.id}>
										<TableCell>{rx.id}</TableCell>
										<TableCell>{rx.patient}</TableCell>
										<TableCell>{rx.medication}</TableCell>
										<TableCell>{rx.dosage}</TableCell>
										<TableCell>{rx.frequency}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
				<Card className='col-span-3'>
					<CardHeader>
						<CardTitle>Alertas de Inventario</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Medicamento</TableHead>
									<TableHead className='text-right'>Stock Actual</TableHead>
									<TableHead className='text-right'>Stock Mínimo</TableHead>
									<TableHead>Estado</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{inventoryAlerts.map((alert) => (
									<TableRow key={alert.medication}>
										<TableCell>{alert.medication}</TableCell>
										<TableCell className='text-right'>
											{alert.currentStock}
										</TableCell>
										<TableCell className='text-right'>
											{alert.minStock}
										</TableCell>
										<TableCell>
											<div
												className={`flex items-center ${
													alert.status === "Crítico"
														? "text-red-500"
														: "text-yellow-500"
												}`}
											>
												<AlertTriangle className='mr-2 h-4 w-4' />
												{alert.status}
											</div>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
