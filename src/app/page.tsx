import Header from "@/components/header";
import Hero from "@/components/hero";
import DoctorProfile from "@/components/doctor-profile";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer-home";
import ProductsSection from "@/components/products-section";

export default function Home() {
	return (
		<div className='min-h-screen bg-background'>
			<Header />
			<main>
				<Hero />
				<DoctorProfile />
				<ProductsSection />
				<Testimonials />
				<ContactSection />
				<Newsletter />
			</main>
			<Footer />
		</div>
	);
}
