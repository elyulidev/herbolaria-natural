import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Aviso Legal | Herbolaria Natural",
	description:
		"Aviso legal de Herbolaria Natural, clínica de productos naturales.",
};

export default function AvisoLegalPage() {
	return (
		<>
			<h1 className='text-center text-4xl font-bold mb-4'>Aviso Legal</h1>

			<p>
				Última actualización:{" "}
				{new Date().toLocaleDateString("es-ES", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</p>

			<h2>1. Información General</h2>
			<p>
				En cumplimiento con el deber de información dispuesto en la Ley 34/2002
				de Servicios de la Sociedad de la Información y el Comercio Electrónico
				(LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes
				datos de información general de este sitio web:
			</p>
			<p>
				La titularidad de este sitio web, www.Herbolaria Natural.com, (en
				adelante, Sitio Web) la ostenta: Herbolaria Natural S.A., provista de
				NIF: A-12345678 e inscrita en: Registro Mercantil de [Ciudad] con los
				siguientes datos registrales: Tomo X, Folio Y, Hoja Z, y cuyos datos de
				contacto son:
			</p>
			<p>
				Dirección: Av. Principal 123, Ciudad
				<br />
				Teléfono de contacto: +1 (555) 123-4567
				<br />
				Email de contacto: info@Herbolaria Natural.com
			</p>

			<h2>2. Términos y Condiciones Generales de Uso</h2>
			<p>
				El objeto de las condiciones: El Sitio Web
				<br />
				El objeto de las presentes Condiciones Generales de Uso (en adelante,
				Condiciones) es regular el acceso y la utilización del Sitio Web. A los
				efectos de las presentes Condiciones se entenderá como Sitio Web: la
				apariencia externa de los interfaces de pantalla, tanto de forma
				estática como de forma dinámica, es decir, el árbol de navegación; y
				todos los elementos integrados tanto en los interfaces de pantalla como
				en el árbol de navegación (en adelante, Contenidos) y todos aquellos
				servicios o recursos en línea que en su caso ofrezca a los Usuarios (en
				adelante, Servicios).
			</p>
			<p>
				Herbolaria Natural se reserva la facultad de modificar, en cualquier
				momento, y sin aviso previo, la presentación y configuración del Sitio
				Web y de los Contenidos y Servicios que en él pudieran estar
				incorporados. El Usuario reconoce y acepta que en cualquier momento
				Herbolaria Natural pueda interrumpir, desactivar y/o cancelar cualquiera
				de estos elementos que se integran en el Sitio Web o el acceso a los
				mismos.
			</p>
			<p>
				El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla
				general, es gratuito sin que el Usuario tenga que proporcionar una
				contraprestación para poder disfrutar de ello, salvo en lo relativo al
				coste de conexión a través de la red de telecomunicaciones suministrada
				por el proveedor de acceso que hubiere contratado el Usuario.
			</p>
			<p>
				La utilización de alguno de los Contenidos o Servicios del Sitio Web
				podrá hacerse mediante la suscripción o registro previo del Usuario.
			</p>

			<h2>3. El Usuario</h2>
			<p>
				El acceso, la navegación y uso del Sitio Web, así como por los espacios
				habilitados para interactuar entre los Usuarios, y el Usuario y
				Herbolaria Natural, como los comentarios y/o espacios de blogging,
				confiere la condición de Usuario, por lo que se aceptan, desde que se
				inicia la navegación por el Sitio Web, todas las Condiciones aquí
				establecidas, así como sus ulteriores modificaciones, sin perjuicio de
				la aplicación de la correspondiente normativa legal de obligado
				cumplimiento según el caso. Dada la relevancia de lo anterior, se
				recomienda al Usuario leerlas cada vez que visite el Sitio Web.
			</p>
			<p>
				El Sitio Web de Herbolaria Natural proporciona gran diversidad de
				información, servicios y datos. El Usuario asume su responsabilidad para
				realizar un uso correcto del Sitio Web. Esta responsabilidad se
				extenderá a:
			</p>
			<ul>
				<li>
					Un uso de la información, Contenidos y/o Servicios y datos ofrecidos
					por Herbolaria Natural sin que sea contrario a lo dispuesto por las
					presentes Condiciones, la Ley, la moral o el orden público, o que de
					cualquier otro modo puedan suponer lesión de los derechos de terceros
					o del mismo funcionamiento del Sitio Web.
				</li>
				<li>
					La veracidad y licitud de las informaciones aportadas por el Usuario
					en los formularios extendidos por Herbolaria Natural para el acceso a
					ciertos Contenidos o Servicios ofrecidos por el Sitio Web. En todo
					caso, el Usuario notificará de forma inmediata a Herbolaria Natural
					acerca de cualquier hecho que permita el uso indebido de la
					información registrada en dichos formularios, tales como, pero no
					solo, el robo, extravío, o el acceso no autorizado a identificadores
					y/o contraseñas, con el fin de proceder a su inmediata cancelación.
				</li>
			</ul>

			<h2>4. Medidas de Seguridad</h2>
			<p>
				Los datos personales comunicados por el Usuario a Herbolaria Natural
				pueden ser almacenados en bases de datos automatizadas o no, cuya
				titularidad corresponde en exclusiva a Herbolaria Natural, asumiendo
				ésta todas las medidas de índole técnica, organizativa y de seguridad
				que garantizan la confidencialidad, integridad y calidad de la
				información contenida en las mismas de acuerdo con lo establecido en la
				normativa vigente en protección de datos.
			</p>
			<p>
				La comunicación entre los usuarios y Herbolaria Natural utiliza un canal
				seguro, y los datos transmitidos son cifrados gracias a protocolos a
				https, por tanto, garantizamos las mejores condiciones de seguridad para
				que la confidencialidad de los usuarios esté garantizada.
			</p>

			<h2>5. Plataforma de Resolución de Conflictos</h2>
			<p>
				Ponemos también a disposición de los usuarios la plataforma de
				resolución de litigios que facilita la Comisión Europea y que se
				encuentra disponible en el siguiente enlace:
				http://ec.europa.eu/consumers/odr/
			</p>

			<h2>6. Derechos de Propiedad Intelectual e Industrial</h2>
			<p>
				En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de
				la Ley de Propiedad Intelectual, quedan expresamente prohibidas la
				reproducción, la distribución y la comunicación pública, incluida su
				modalidad de puesta a disposición, de la totalidad o parte de los
				contenidos de esta página web, con fines comerciales, en cualquier
				soporte y por cualquier medio técnico, sin la autorización de Herbolaria
				Natural.
			</p>
			<p>
				El Usuario se compromete a respetar los derechos de Propiedad
				Intelectual e Industrial titularidad de Herbolaria Natural. Podrá
				visualizar los elementos del portal e incluso imprimirlos, copiarlos y
				almacenarlos en el disco duro de su ordenador o en cualquier otro
				soporte físico siempre y cuando sea, única y exclusivamente, para su uso
				personal y privado.
			</p>

			<h2>7. Exclusión de Garantías y Responsabilidad</h2>
			<p>
				Herbolaria Natural no otorga ninguna garantía ni se hace responsable, en
				ningún caso, de los daños y perjuicios de cualquier naturaleza que
				pudieran traer causa de:
			</p>
			<ul>
				<li>
					La falta de disponibilidad, mantenimiento y efectivo funcionamiento
					del Sitio Web o de sus servicios y contenidos.
				</li>
				<li>
					La existencia de virus, programas maliciosos o lesivos en los
					contenidos.
				</li>
				<li>
					El uso ilícito, negligente, fraudulento o contrario a este Aviso
					Legal.
				</li>
				<li>
					La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de
					los servicios prestados por terceros y puestos a disposición de los
					usuarios en el sitio web.
				</li>
			</ul>

			<h2>8. Legislación Aplicable y Jurisdicción</h2>
			<p>
				Las presentes Condiciones se regirán por la legislación española.
				Herbolaria Natural y el Usuario, con renuncia expresa a cualquier otro
				fuero que pudiera corresponderles, se someten a la Jurisdicción de los
				Juzgados y Tribunales del domicilio del Usuario para cuantas cuestiones
				pudieran suscitarse o acciones ejercitarse derivadas de la prestación
				del servicio del Sitio Web y de sus servicios y contenidos y sobre la
				interpretación, aplicación, cumplimiento o incumplimiento de lo aquí
				establecido.
			</p>
			<p>
				En el supuesto de que el Usuario tenga su domicilio fuera de España,
				Herbolaria Natural y el Usuario se someten, con renuncia expresa a
				cualquier otro fuero, a los juzgados y tribunales de la ciudad de
				[Ciudad, País].
			</p>
		</>
	);
}
