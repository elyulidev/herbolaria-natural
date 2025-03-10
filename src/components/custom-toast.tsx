"use client";

import { toast } from "sonner";
import { useEffect } from "react";

interface CustomToastProps {
	message: string;
	type?: "success" | "error" | "warning" | "info";
	trigger: boolean;
}

export const CustomToast = ({
	message,
	type = "success",
	trigger,
}: CustomToastProps) => {
	useEffect(() => {
		if (trigger) {
			switch (type) {
				case "success":
					toast.success(message, {
						id: crypto.randomUUID(),
					});
					break;
				case "error":
					toast.error(message, {
						id: crypto.randomUUID(),
					});
					break;
				case "warning":
					toast.warning(message, {
						id: crypto.randomUUID(),
					});
					break;
				default:
					
					toast(message, {
						id: crypto.randomUUID(),
					});
			}
		}
	}, [trigger, message, type]);

	return null;
};
