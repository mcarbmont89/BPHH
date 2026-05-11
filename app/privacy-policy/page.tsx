"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Política de Privacidad</h1>
          <p className="text-sm text-gray-500 mb-10">Última actualización: 24/03/2026</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Responsable del tratamiento </h2>
            <p>En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos que el responsable del tratamiento de tus datos personales es:</p>
            <ul className="mt-3 space-y-1 list-none pl-0">
              <li><strong>Nombre:</strong> Borja Moreno-Luque Aguirre</li>
              <li><strong>NIF:</strong> 71678470M</li>
              <li><strong>Domicilio:</strong> Madrid, España</li>
              <li><strong>Correo electrónico:</strong> <a href="mailto:borjamoreno@boticpartners.com" className="text-blue-600 hover:underline">borjamoreno@boticpartners.com</a></li>
              <li><strong>Sitio web:</strong> www.boticpartners.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Datos que recopilamos</h2>
            <p>Podemos recopilar los siguientes datos personales cuando interactúas con nuestro sitio web:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Información profesional (CV, experiencia, sector)</li>
              <li>Datos de navegación (cookies, dirección IP)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Finalidad del tratamiento</h2>
            <p>Tus datos se tratan con las siguientes finalidades:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Gestionar las solicitudes de contacto y consultas recibidas a través del sitio web.</li>
              <li>Gestionar procesos de selección de personal y headhunting.</li>
              <li>Enviar comunicaciones comerciales sobre nuestros servicios, previo consentimiento.</li>
              <li>Cumplir con obligaciones legales aplicables.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Legitimación del tratamiento</h2>
            <p>La base jurídica para el tratamiento de tus datos es:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li><strong>Ejecución de un contrato</strong> o aplicación de medidas precontractuales (Art. 6.1.b RGPD).</li>
              <li><strong>Interés legítimo</strong> en la gestión de nuestra actividad empresarial (Art. 6.1.f RGPD).</li>
              <li><strong>Consentimiento</strong> del interesado para el envío de comunicaciones comerciales (Art. 6.1.a RGPD).</li>
              <li><strong>Cumplimiento de obligaciones legales</strong> (Art. 6.1.c RGPD).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. Conservación de los datos</h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para atender las posibles responsabilidades legales derivadas de su tratamiento. En general, los datos de contacto se conservarán durante <strong>3 años</strong> desde el último contacto, salvo que solicites su supresión antes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Destinatarios</h2>
            <p>
              No cedemos tus datos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio. Podemos compartir datos con los siguientes proveedores de servicios que actúan como encargados del tratamiento:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Vercel Inc. (alojamiento web) — con sede en EE.UU., bajo decisión de adecuación y cláusulas contractuales tipo.</li>
            </ul>
            <p className="mt-3">Todos ellos cuentan con las garantías adecuadas conforme al RGPD.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Transferencias internacionales</h2>
            <p>
              Con carácter general, no realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo. En el caso del proveedor de alojamiento (Vercel Inc.), los datos pueden procesarse en servidores ubicados en Estados Unidos, con las garantías establecidas mediante cláusulas contractuales tipo aprobadas por la Comisión Europea.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Tus derechos</h2>
            <p>Puedes ejercer en cualquier momento los siguientes derechos:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li><strong>Acceso:</strong> saber qué datos tenemos sobre ti.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
              <li><strong>Limitación:</strong> solicitar que restrinjamos el tratamiento.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
              <li><strong>Retirada del consentimiento</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
            </ul>
            <p className="mt-3">
              Para ejercer tus derechos, escríbenos a:{" "}
              <a href="mailto:borjamoreno@boticpartners.com" className="text-blue-600 hover:underline">borjamoreno@boticpartners.com</a>,
              indicando &quot;Protección de Datos&quot; en el asunto, junto con una copia de tu documento de identidad.
            </p>
            <p className="mt-3">
              Si consideras que el tratamiento de tus datos no es correcto, tienes derecho a presentar una reclamación ante la{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Agencia Española de Protección de Datos (AEPD)
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">9. Cookies</h2>
            <p>
              Este sitio web utiliza únicamente cookies técnicas estrictamente necesarias para el funcionamiento del sitio, que no requieren consentimiento previo del usuario. No utilizamos cookies de seguimiento ni de publicidad de terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">10. Cambios en esta política</h2>
            <p>
              Nos reservamos el derecho a actualizar esta Política de Privacidad para adaptarla a cambios legislativos o modificaciones en nuestros servicios. La fecha de la última actualización aparece al inicio del documento.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
