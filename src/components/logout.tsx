import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";
import { useEffect } from "react";

const LogoutSession = () => {
	useEffect(() => {
		const supabase = createClient();
	}, []);

	return (
		<div>
			<LogOut />
		</div>
	);
};

export default LogoutSession;
