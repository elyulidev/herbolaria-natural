"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeClosed, EyeIcon, Loader } from "lucide-react";
import { toast } from "sonner";
import CustomLink from "@/components/custom-link";
import { useEffect, useState } from "react";

const signInUpShema = z
	.object({
		email: z
			.string({
				message: "El campo email es requerido y debe ser una cadena de texto",
			})
			.email({ message: "Email inválido" }),
		password: z
			.string({
				message:
					"El campo password es requerido y debe ser una cadena de texto",
			})
			.min(3, { message: "La contraseña debe tener al menos 3 caracteres" }),
	})
	.required();

export default function LoginPage() {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const callbackUrl = useSearchParams().get("callbackUrl") || "/tienda";
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		getValues,
		register,
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(signInUpShema),
		mode: "all",
	});
	const supabase = createClient();

	useEffect(() => {
		const getUser = async () => {
			const { data } = await supabase.auth.getUser();

			if (data.user?.email) return router.push(callbackUrl);
		};
		getUser();
	}, []);

	const onSubmit = async (data: z.infer<typeof signInUpShema>) => {
		const { email, password } = data;

		try {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) throw error;

			toast.success("Login exitoso!");
			router.push("/tienda");
		} catch (error) {
			toast.error("Error al registrarse: " + error);
		}
	};

	return (
		<main className='flex-grow container mx-auto px-4 py-8'>
			<div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow'>
				<h1 className='text-2xl font-bold mb-6'>Inicio de Sesión</h1>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<div>
						<label htmlFor='email' className='block mb-1'>
							Email
						</label>
						<Input
							id='email'
							type='email'
							{...register("email")}
							className={
								errors.email ? "focus-visible:ring-0 border-red-500" : ""
							}
							required
							autoFocus
						/>
						{errors.email && (
							<p className='text-red-400'>{errors.email.message}</p>
						)}
					</div>

					<div>
						<label htmlFor='password' className='relative mb-1'>
							Contraseña
							<Input
								id='password'
								type={open ? "text" : "password"}
								{...register("password")}
								className={`${
									errors.password ? "focus-visible:ring-0 border-red-500" : ""
								}`}
								required
								autoComplete='off'
							/>
							{open ? (
								<EyeClosed
									className='absolute top-1/2 right-2  text-gray-400'
									onClick={() => setOpen((prev) => !prev)}
								/>
							) : (
								<EyeIcon
									className='absolute top-1/2 right-2 text-gray-400'
									onClick={() => setOpen((prev) => !prev)}
								/>
							)}
						</label>
						{errors.password && (
							<p className='text-red-400'>{errors.password.message}</p>
						)}
					</div>

					<Button
						type='submit'
						className='w-full bg-primary'
						disabled={
							isSubmitting ||
							Object.keys(errors).length > 0 ||
							!getValues().email ||
							!getValues().password
						}
					>
						{isSubmitting ? <Loader className='animate-spin' /> : "Entrar"}
					</Button>
				</form>

				<CustomLink
					href='/tienda/registro'
					className='hover:text-green-500 text-sm font-semibold cursor-pointer underline underline-offset-2 decoration-1 transition-all duration-300 ease-in-out'
					disabled={isSubmitting}
				>
					No tienes cuenta?
				</CustomLink>
			</div>
		</main>
	);
}
