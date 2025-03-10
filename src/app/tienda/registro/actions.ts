"use server";

import { z } from "zod";

const schema = z.object({
	name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
	lastname: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
	email: z.string().email("Correo electrónico inválido"),
	password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export async function register(prevState: any, formData: FormData) {
	const validatedFields = schema.safeParse({
		name: formData.get("name"),
		lastname: formData.get("lastname"),
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Falló la validación.",
		};
	}

	// Aquí iría la lógica para registrar al usuario en la base de datos
	// Por ahora, solo simularemos un retraso y devolveremos un mensaje de éxito
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return {
		message: "Registro exitoso!",
	};
}
