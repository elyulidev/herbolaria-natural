import Footer from "@/components/footer-home";
import { Navbar } from "@/components/navbar";
import React from "react";

export default function StoreLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col'>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
