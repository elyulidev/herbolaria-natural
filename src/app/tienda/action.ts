"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function searchProducts(str: string) {
	const cookieStore = await cookies();
	const supabase = await createClient(cookieStore);
	const { data, error } = await supabase
		.from("product")
		.select("*")
		.ilike("name", `%${str}%`)
		.limit(6);

	if (error) {
		return { error };
	} 
	
	return { data };
}
