import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Política de Privacidad | Herbolaria Natural",
	description:
		"Política de privacidad de Herbolaria Natural, clínica de productos naturales.",
};

export default function PoliticaPrivacidadPage() {
	return (
		<>
			<h1 className='text-center text-4xl font-bold mb-4'>
				Política de Privacidad
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
				En Herbolaria Natural, respetamos su privacidad y nos comprometemos a
				proteger sus datos personales. Esta política de privacidad le informará
				sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web
				y le informará sobre sus derechos de privacidad y cómo la ley lo
				protege.
			</p>

			<h2>2. Datos que Recopilamos</h2>
			<p>
				Podemos recopilar, usar, almacenar y transferir diferentes tipos de
				datos personales sobre usted, que hemos agrupado de la siguiente manera:
			</p>
			<ul>
				<li>
					<strong>Datos de identidad:</strong> incluye nombre, apellido, nombre
					de usuario o identificador similar.
				</li>
				<li>
					<strong>Datos de contacto:</strong> incluye dirección de facturación,
					dirección de entrega, dirección de correo electrónico y números de
					teléfono.
				</li>
				<li>
					<strong>Datos financieros:</strong> incluye detalles de tarjetas de
					pago.
				</li>
				<li>
					<strong>Datos de transacción:</strong> incluye detalles sobre pagos
					hacia y desde usted, y otros detalles de productos y servicios que ha
					comprado de nosotros.
				</li>
				<li>
					<strong>Datos técnicos:</strong> incluye dirección de protocolo de
					Internet (IP), datos de inicio de sesión, tipo y versión de navegador,
					configuración de zona horaria y ubicación, tipos y versiones de
					complementos del navegador, sistema operativo y plataforma, y otra
					tecnología en los dispositivos que utiliza para acceder a este sitio
					web.
				</li>
				<li>
					<strong>Datos de perfil:</strong> incluye su nombre de usuario y
					contraseña, compras o pedidos realizados por usted, sus intereses,
					preferencias, comentarios y respuestas a encuestas.
				</li>
				<li>
					<strong>Datos de uso:</strong> incluye información sobre cómo utiliza
					nuestro sitio web, productos y servicios.
				</li>
				<li>
					<strong>Datos de marketing y comunicaciones:</strong> incluye sus
					preferencias para recibir marketing de nosotros y de nuestros
					terceros, y sus preferencias de comunicación.
				</li>
			</ul>

			<h2>3. Cómo Recopilamos sus Datos Personales</h2>
			<p>
				Utilizamos diferentes métodos para recopilar datos de y sobre usted,
				incluyendo:
			</p>
			<ul>
				<li>
					<strong>Interacciones directas:</strong> Puede proporcionarnos sus
					datos de identidad, contacto y financieros al completar formularios o
					al corresponderse con nosotros por correo postal, teléfono, correo
					electrónico o de otra manera.
				</li>
				<li>
					<strong>Tecnologías o interacciones automatizadas:</strong> A medida
					que interactúa con nuestro sitio web, podemos recopilar
					automáticamente datos técnicos sobre su equipo, acciones de navegación
					y patrones.
				</li>
				<li>
					<strong>Terceros o fuentes disponibles públicamente:</strong> Podemos
					recibir datos personales sobre usted de varios terceros y fuentes
					públicas.
				</li>
			</ul>

			<h2>4. Cómo Utilizamos sus Datos Personales</h2>
			<p>
				Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más
				comúnmente, utilizaremos sus datos personales en las siguientes
				circunstancias:
			</p>
			<ul>
				<li>
					Donde necesitemos ejecutar el contrato que estamos a punto de celebrar
					o hemos celebrado con usted.
				</li>
				<li>
					Donde sea necesario para nuestros intereses legítimos (o los de un
					tercero) y sus intereses y derechos fundamentales no anulen esos
					intereses.
				</li>
				<li>
					Donde necesitemos cumplir con una obligación legal o regulatoria.
				</li>
			</ul>

			<h2>5. Divulgación de sus Datos Personales</h2>
			<p>
				Podemos compartir sus datos personales con las partes establecidas a
				continuación para los fines establecidos en la sección 4 anterior:
			</p>
			<ul>
				<li>
					Proveedores de servicios que proporcionan servicios de TI y
					administración de sistemas.
				</li>
				<li>
					Asesores profesionales, incluidos abogados, banqueros, auditores y
					aseguradores.
				</li>
				<li>Autoridades fiscales, reguladoras y otras autoridades.</li>
				<li>
					Terceros a quienes podemos elegir vender, transferir o fusionar partes
					de nuestro negocio o nuestros activos.
				</li>
			</ul>
			<p>
				Requerimos a todos los terceros que respeten la seguridad de sus datos
				personales y los traten de acuerdo con la ley.
			</p>

			<h2>6. Seguridad de Datos</h2>
			<p>
				Hemos implementado medidas de seguridad apropiadas para evitar que sus
				datos personales se pierdan, usen o accedan accidentalmente de manera no
				autorizada, se alteren o divulguen. Además, limitamos el acceso a sus
				datos personales a aquellos empleados, agentes, contratistas y otros
				terceros que tienen una necesidad comercial de saber.
			</p>

			<h2>7. Retención de Datos</h2>
			<p>
				Solo conservaremos sus datos personales durante el tiempo que sea
				necesario para cumplir con los fines para los que los recopilamos,
				incluso para satisfacer cualquier requisito legal, contable o de
				informes.
			</p>

			<h2>8. Sus Derechos Legales</h2>
			<p>
				Bajo ciertas circunstancias, tiene derechos bajo las leyes de protección
				de datos en relación con sus datos personales, incluyendo el derecho a:
			</p>
			<ul>
				<li>Solicitar acceso a sus datos personales.</li>
				<li>Solicitar la corrección de sus datos personales.</li>
				<li>Solicitar la eliminación de sus datos personales.</li>
				<li>Oponerse al procesamiento de sus datos personales.</li>
				<li>
					Solicitar la restricción del procesamiento de sus datos personales.
				</li>
				<li>Solicitar la transferencia de sus datos personales.</li>
				<li>Derecho a retirar el consentimiento.</li>
			</ul>

			<h2>9. Cambios a la Política de Privacidad</h2>
			<p>
				Cualquier cambio que podamos hacer a nuestra política de privacidad en
				el futuro se publicará en esta página. Por favor, revise esta página con
				frecuencia para ver cualquier actualización o cambio en nuestra política
				de privacidad.
			</p>

			<h2>10. Contacto</h2>
			<p>
				Si tiene alguna pregunta sobre esta política de privacidad o nuestras
				prácticas de privacidad, contáctenos en:
			</p>
			<p>
				Email: privacidad@Herbolaria Natural.com
				<br />
				Teléfono: +1 (555) 123-4567
				<br />
				Dirección: Av. Principal 123, Ciudad
			</p>
		</>
	);
}
