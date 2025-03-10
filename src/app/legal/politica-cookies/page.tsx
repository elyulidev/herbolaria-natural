import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Política de Cookies | Herbolaria Natural",
	description:
		"Política de cookies de Herbolaria Natural, clínica de productos naturales.",
};

export default function PoliticaCookiesPage() {
	return (
		<>
			<h1 className='text-center text-4xl font-bold mb-4'>
				Política de Cookies
			</h1>

			<p>
				Última actualización:{" "}
				{new Date().toLocaleDateString("es-ES", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</p>

			<h2>1. ¿Qué son las Cookies?</h2>
			<p>
				Las cookies son pequeños archivos de texto que se almacenan en su
				dispositivo (computadora, tableta o móvil) cuando visita un sitio web.
				Las cookies son ampliamente utilizadas para hacer que los sitios web
				funcionen, o funcionen de manera más eficiente, así como para
				proporcionar información a los propietarios del sitio.
			</p>

			<h2>2. Cómo Utilizamos las Cookies</h2>
			<p>
				Utilizamos cookies por varias razones que se detallan a continuación.
				Desafortunadamente, en la mayoría de los casos, no existen opciones
				estándar de la industria para deshabilitar las cookies sin deshabilitar
				por completo la funcionalidad y características que agregan a este
				sitio. Se recomienda que deje activadas todas las cookies si no está
				seguro de si las necesita o no, en caso de que se utilicen para
				proporcionar un servicio que usted utiliza.
			</p>

			<h2>3. Las Cookies que Establecemos</h2>

			<h3>Cookies relacionadas con la cuenta</h3>
			<p>
				Si crea una cuenta con nosotros, utilizaremos cookies para la gestión
				del proceso de registro y administración general. Estas cookies
				generalmente se eliminarán cuando cierre sesión, sin embargo, en algunos
				casos, pueden permanecer después para recordar sus preferencias del
				sitio cuando cierre sesión.
			</p>

			<h3>Cookies relacionadas con el inicio de sesión</h3>
			<p>
				Utilizamos cookies cuando inicia sesión para que podamos recordar este
				hecho. Esto evita que tenga que iniciar sesión cada vez que visita una
				nueva página. Estas cookies normalmente se eliminan o borran cuando
				cierra sesión para garantizar que solo pueda acceder a funciones y áreas
				restringidas cuando inicie sesión.
			</p>

			<h3>Cookies relacionadas con formularios</h3>
			<p>
				Cuando envía datos a través de un formulario como los que se encuentran
				en las páginas de contacto o formularios de comentarios, las cookies
				pueden establecerse para recordar sus detalles de usuario para
				correspondencia futura.
			</p>

			<h3>Cookies de preferencias del sitio</h3>
			<p>
				Para proporcionarle una gran experiencia en este sitio, proporcionamos
				la funcionalidad para establecer sus preferencias sobre cómo se ejecuta
				este sitio cuando lo usa. Para recordar sus preferencias, necesitamos
				establecer cookies para que esta información pueda ser llamada cada vez
				que interactúa con una página que se ve afectada por sus preferencias.
			</p>

			<h2>4. Cookies de Terceros</h2>
			<p>
				En algunos casos especiales, también utilizamos cookies proporcionadas
				por terceros de confianza. La siguiente sección detalla qué cookies de
				terceros puede encontrar a través de este sitio.
			</p>
			<ul>
				<li>
					Este sitio utiliza Google Analytics, que es una de las soluciones de
					análisis más extendidas y confiables en la web, para ayudarnos a
					comprender cómo utiliza el sitio y las formas en que podemos mejorar
					su experiencia. Estas cookies pueden rastrear cosas como cuánto tiempo
					pasa en el sitio y las páginas que visita para que podamos continuar
					produciendo contenido atractivo.
				</li>
				<li>
					De vez en cuando, probamos nuevas características y hacemos cambios
					sutiles en la forma en que se entrega el sitio. Cuando todavía estamos
					probando nuevas características, estas cookies pueden usarse para
					garantizar que reciba una experiencia consistente mientras está en el
					sitio, al tiempo que nos aseguramos de que entendemos qué
					optimizaciones aprecian más nuestros usuarios.
				</li>
				<li>
					A medida que vendemos productos, es importante que entendamos las
					estadísticas sobre cuántos visitantes de nuestro sitio realmente
					compran, y por lo tanto, este es el tipo de datos que rastrearán estas
					cookies. Esto es importante para usted ya que significa que podemos
					hacer predicciones comerciales con precisión que nos permiten
					monitorear nuestros costos de publicidad y productos para garantizar
					el mejor precio posible.
				</li>
			</ul>

			<h2>5. Más Información</h2>
			<p>
				Con suerte, eso ha aclarado las cosas para usted y, como se mencionó
				anteriormente, si hay algo que no está seguro de si necesita o no,
				generalmente es más seguro dejar las cookies habilitadas en caso de que
				interactúen con una de las funciones que utiliza en nuestro sitio.
			</p>
			<p>
				Sin embargo, si todavía está buscando más información, puede
				contactarnos a través de uno de nuestros métodos de contacto preferidos:
			</p>
			<p>
				Email: cookies@herbolarianatural.com
				<br />
				Teléfono: +1 (555) 123-4567
			</p>
		</>
	);
}
