import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Términos y Condiciones | Herbolaria Natural",
	description:
		"Términos y condiciones de uso de Herbolaria Natural, clínica de productos naturales.",
};

export default function TerminosCondicionesPage() {
	return (
		<>
			<h1 className='text-center text-4xl font-bold mb-4'>
				Términos y Condiciones
			</h1>

			<p>
				Última actualización:{" "}
				{new Date().toLocaleDateString("es-ES", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</p>

			<h2>1. Introducción</h2>
			<p>
				Bienvenido a Herbolaria Natural. Estos Términos y Condiciones rigen su
				uso de nuestro sitio web ubicado en www.herbolarianatural.com (en
				adelante, "el Sitio") y todos los servicios relacionados proporcionados
				por Herbolaria Natural (en adelante, "nosotros", "nuestro" o "la
				Empresa").
			</p>
			<p>
				Al acceder o utilizar el Sitio, usted acepta estar sujeto a estos
				Términos y Condiciones. Si no está de acuerdo con alguna parte de estos
				términos, no podrá acceder al Sitio.
			</p>

			<h2>2. Uso del Sitio</h2>
			<p>
				El contenido de las páginas de este Sitio es para su información general
				y uso personal únicamente. Está sujeto a cambios sin previo aviso.
			</p>
			<p>
				Este Sitio utiliza cookies para monitorear las preferencias de
				navegación. Si permite el uso de cookies, aceptamos el almacenamiento de
				dicha información en su dispositivo.
			</p>
			<p>
				Ni nosotros ni terceros proporcionamos ninguna garantía o seguridad con
				respecto a la precisión, puntualidad, rendimiento, integridad o
				idoneidad de la información y los materiales encontrados u ofrecidos en
				este Sitio para cualquier propósito particular.
			</p>

			<h2>3. Productos y Servicios</h2>
			<p>
				Todos los productos y servicios mostrados en nuestro Sitio están sujetos
				a disponibilidad. Nos reservamos el derecho de descontinuar cualquier
				producto o servicio en cualquier momento.
			</p>
			<p>
				Los precios de los productos están sujetos a cambios sin previo aviso.
				Nos reservamos el derecho de modificar o descontinuar el Sitio (o
				cualquier parte o contenido del mismo) sin previo aviso en cualquier
				momento.
			</p>
			<p>
				No seremos responsables ante usted o cualquier tercero por cualquier
				modificación, cambio de precio, suspensión o discontinuidad del Sitio.
			</p>

			<h2>4. Compras y Pagos</h2>
			<p>
				Al realizar una compra en nuestro Sitio, usted declara que tiene al
				menos la edad de mayoría legal en su estado o provincia de residencia, y
				que nos ha dado su consentimiento para permitir que cualquier menor a su
				cargo use este Sitio.
			</p>
			<p>
				Nos reservamos el derecho de rechazar cualquier pedido que realice con
				nosotros. Podemos, a nuestra discreción, limitar o cancelar las
				cantidades compradas por persona, por hogar o por pedido.
			</p>
			<p>
				Nos comprometemos a proporcionar los productos más seguros y efectivos
				posibles. Sin embargo, no podemos garantizar que el uso de nuestros
				productos resultará en ningún beneficio específico para la salud o
				bienestar.
			</p>

			<h2>5. Propiedad Intelectual</h2>
			<p>
				A menos que se indique lo contrario, nosotros y/o nuestros licenciantes
				poseemos los derechos de propiedad intelectual de todo el material en
				Herbolaria Natural. Todos los derechos de propiedad intelectual están
				reservados.
			</p>
			<p>
				Puede ver y/o imprimir páginas desde el Sitio para su uso personal,
				sujeto a las restricciones establecidas en estos términos y condiciones.
			</p>
			<p>No debe:</p>
			<ul>
				<li>
					Republicar material de este Sitio (incluyendo la republicación en otro
					sitio web)
				</li>
				<li>Vender, alquilar o sublicenciar material del Sitio</li>
				<li>Reproducir, duplicar o copiar material del Sitio</li>
				<li>
					Redistribuir contenido de Herbolaria Natural (a menos que el contenido
					esté específicamente hecho para redistribución)
				</li>
			</ul>

			<h2>6. Limitación de Responsabilidad</h2>
			<p>
				En ningún caso Herbolaria Natural, nuestros directores, funcionarios,
				empleados, afiliados, agentes, contratistas, pasantes, proveedores,
				prestadores de servicios o licenciantes serán responsables por cualquier
				lesión, pérdida, reclamo, o cualquier daño directo, indirecto,
				incidental, punitivo, especial o consecuente de cualquier tipo.
			</p>

			<h2>7. Indemnización</h2>
			<p>
				Usted acepta indemnizar, defender y mantener indemne a Herbolaria
				Natural y a nuestras matrices, subsidiarias, afiliadas, socios,
				funcionarios, directores, agentes, contratistas, licenciantes,
				proveedores de servicios, subcontratistas, proveedores, pasantes y
				empleados, de cualquier reclamo o demanda.
			</p>

			<h2>8. Ley Aplicable</h2>
			<p>
				Estos Términos y Condiciones se regirán e interpretarán de acuerdo con
				las leyes de [País], y usted se somete a la jurisdicción no exclusiva de
				los tribunales estatales y federales ubicados en [Ciudad, País] para la
				resolución de cualquier disputa.
			</p>

			<h2>9. Cambios en los Términos y Condiciones</h2>
			<p>
				Nos reservamos el derecho, a nuestra sola discreción, de actualizar,
				cambiar o reemplazar cualquier parte de estos Términos y Condiciones
				publicando actualizaciones y cambios en nuestro Sitio. Es su
				responsabilidad revisar nuestro Sitio periódicamente para ver los
				cambios.
			</p>

			<h2>10. Información de Contacto</h2>
			<p>
				Preguntas sobre los Términos y Condiciones deben enviarse a
				contacto@Herbolaria Natural.com.
			</p>
		</>
	);
}
