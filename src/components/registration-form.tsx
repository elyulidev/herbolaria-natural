"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { register } from "@/app/tienda/registro/actions";

export function RegistrationForm() {
	const [state, formAction, isPending] = useActionState(register, {
		errors: {},
		message: "",
	});

	return (
		<Card className='w-full max-w-md mx-auto'>
			<CardHeader>
				<CardTitle>Registro</CardTitle>
				<CardDescription>Crea una nueva cuenta</CardDescription>
			</CardHeader>
			<form action={formAction}>
				<CardContent className='space-y-4'>
					<div className='space-y-2'>
						<Label htmlFor='name'>Nombre</Label>
						<Input id='name' name='name' required />
						{state.errors?.name && (
							<p className='text-sm text-red-500'>{state.errors.name[0]}</p>
						)}
					</div>
					<div className='space-y-2'>
						<Label htmlFor='lastname'>Apellido</Label>
						<Input id='lastname' name='lastname' required />
						{state.errors?.lastname && (
							<p className='text-sm text-red-500'>{state.errors.lastname[0]}</p>
						)}
					</div>
					<div className='space-y-2'>
						<Label htmlFor='email'>Correo electrónico</Label>
						<Input id='email' name='email' type='email' required />
						{state.errors?.email && (
							<p className='text-sm text-red-500'>{state.errors.email[0]}</p>
						)}
					</div>
					<div className='space-y-2'>
						<Label htmlFor='password'>Contraseña</Label>
						<Input id='password' name='password' type='password' required />
						{state.errors?.password && (
							<p className='text-sm text-red-500'>{state.errors.password[0]}</p>
						)}
					</div>
				</CardContent>
				<CardFooter>
					<Button type='submit' className='w-full' disabled={isPending}>
						{isPending ? "Registrando..." : "Registrarse"}
					</Button>
				</CardFooter>
			</form>
			{state.message && (
				<p
					className={`text-center mt-4 ${
						state.errors ? "text-red-500" : "text-green-500"
					}`}
				>
					{state.message}
				</p>
			)}
		</Card>
	);
}
