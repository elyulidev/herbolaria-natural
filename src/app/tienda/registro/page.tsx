"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { AuthError } from "@supabase/supabase-js";

const signInUpShema = z
	.object({
		email: z.string().email(),
		password: z
			.string()
			.min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
		confirmed_password: z.string().min(6, {
			message: "La contraseña confirmada debe tener al menos 6 caracteres",
		}),
	})
	.required()
	.refine(
		({ password, confirmed_password }) => password === confirmed_password,
		{
			message: "Las contraseñas no coinciden",
			path: ["confirmed_password"],
		}
	);

export default function RegisterPage() {
	const router = useRouter();
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		getValues,
		register,
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			confirmed_password: "",
		},
		resolver: zodResolver(signInUpShema),
		mode: "all",
	});

	const onSubmit = async (data: z.infer<typeof signInUpShema>) => {
		const { email, password } = data;

		try {
			const supabase = createClient();
			const { data: emailExists } = await supabase.rpc("check_email_exists", {
				email_to_check: email,
			});

			if (emailExists) throw `El ${email} ya está registrado 💥`;

			const { error } = await supabase.auth.signUp({ email, password });

			if (error) throw error;

			toast.success("Registro exitoso!");
			router.push("/tienda/inicio-sesion");
		} catch (error) {
			const authError = error as AuthError;
			toast.error(authError.message || "Error al registrar", {
				id: crypto.randomUUID(),
			});
		}
	};

	return (
		<main className='flex-grow container mx-auto px-4 py-8'>
			<div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow'>
				<h1 className='text-2xl font-bold mb-6'>Registrarse</h1>
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
						/>
						{errors.email && <p className='text-red-400'>Email inválido</p>}
					</div>

					<div>
						<label htmlFor='password' className='block mb-1'>
							Contraseña
						</label>
						<Input
							id='password'
							type='password'
							{...register("password")}
							className={
								errors.password ? "focus-visible:ring-0 border-red-500" : ""
							}
							required
						/>
						{errors.password && (
							<p className='text-red-400'>{errors.password.message}</p>
						)}
					</div>
					<div>
						<label htmlFor='password' className='block mb-1'>
							Confirmar Contraseña
						</label>
						<Input
							id='confirmed_password'
							type='password'
							{...register("confirmed_password")}
							className={
								errors.password ? "focus-visible:ring-0 border-red-500" : ""
							}
							required
						/>
						{errors.confirmed_password && (
							<p className='text-red-400'>Las contraseñas no coinciden </p>
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
						{isSubmitting ? <Loader className='animate-spin' /> : "Registrar"}
					</Button>
				</form>
			</div>
		</main>
	);
}
