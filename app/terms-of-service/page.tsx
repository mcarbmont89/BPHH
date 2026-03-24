"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Aviso Legal y Términos de Servicio</h1>
          <p className="text-sm text-gray-500 mb-10">Última actualización: 24/03/2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Datos identificativos</h2>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:</p>
            <ul className="mt-3 space-y-1 list-none pl-0">
              <li><strong>Nombre:</strong> Borja Moreno-Luque Aguirre</li>
              <li><strong>NIF:</strong> 71678470M</li>
              <li><strong>Actividad:</strong> Servicios de headhunting, selección de personal y consultoría de recursos humanos</li>
              <li><strong>Domicilio:</strong> Madrid, España</li>
              <li><strong>Correo electrónico:</strong> <a href="mailto:borjamoreno@boticpartners.com" className="text-blue-600 hover:underline">borjamoreno@boticpartners.com</a></li>
              <li><strong>Sitio web:</strong> www.boticpartners.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Objeto y ámbito de aplicación</h2>
            <p>
              El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.boticpartners.com</strong> (en adelante, &quot;el sitio web&quot;), titularidad de Borja Moreno-Luque Aguirre.
            </p>
            <p className="mt-3">
              El acceso al sitio web implica la aceptación plena y sin reservas de las condiciones recogidas en este Aviso Legal. Si no estás de acuerdo con alguna de estas condiciones, te rogamos que no utilices este sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Descripción de los servicios</h2>
            <p>A través de este sitio web ofrecemos los siguientes servicios:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Servicios de headhunting y selección de personal especializado.</li>
              <li>Intermediación entre empresas y candidatos cualificados.</li>
              <li>Consultoría de recursos humanos y adquisición de talento.</li>
              <li>Gestión de talento freelance y perfiles especializados.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Condiciones de uso</h2>
            <p>El usuario se compromete a:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Hacer un uso lícito del sitio web y no contrario a la ley, la moral o el orden público.</li>
              <li>No realizar actividades que puedan dañar, inutilizar o sobrecargar el sitio web.</li>
              <li>No introducir ni difundir contenidos falsos, fraudulentos o que atenten contra derechos de terceros.</li>
              <li>No utilizar el sitio web con fines comerciales sin autorización expresa.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web —incluyendo, a título enunciativo pero no limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales— son propiedad de Borja Moreno-Luque Aguirre o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial.
            </p>
            <p className="mt-3">
              Queda expresamente prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito del titular.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Limitación de responsabilidad</h2>
            <p>Borja Moreno-Luque Aguirre no se hace responsable de:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Los daños o perjuicios derivados del uso incorrecto del sitio web.</li>
              <li>Los contenidos de sitios web de terceros a los que se enlace desde este sitio.</li>
              <li>Las interrupciones o errores en el acceso al sitio web por causas ajenas a nuestra voluntad.</li>
              <li>La veracidad, exactitud o actualización de la información proporcionada por los usuarios.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Política de privacidad y protección de datos</h2>
            <p>
              El tratamiento de los datos personales que el usuario facilite a través de este sitio web se rige por nuestra{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">Política de Privacidad</a>,
              que forma parte integrante de este Aviso Legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Cookies</h2>
            <p>
              Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para su funcionamiento. No se utilizan cookies de seguimiento ni de publicidad de terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">9. Modificaciones</h2>
            <p>
              Borja Moreno-Luque Aguirre se reserva el derecho a modificar unilateralmente, en cualquier momento y sin previo aviso, la presentación y configuración del sitio web, así como las presentes condiciones. El usuario es responsable de revisarlas periódicamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">10. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a los Juzgados y Tribunales de <strong>Madrid</strong>, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
