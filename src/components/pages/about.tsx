import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPaw,
  FaLightbulb,
  FaEye,
  FaHandsHelping,
  FaBook,
} from "react-icons/fa";

// Importa la imagen directamente
import valoresImage from "@/assets/valores/valores.jpg"; // Ajusta la ruta según sea necesario

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "María García",
      text: "Gracias a esta plataforma, encontré a mi compañero perfecto. ¡El proceso fue tan fácil y reconfortante!",
    },
    {
      name: "Juan Pérez",
      text: "Como dueño de un refugio, esta herramienta ha sido invaluable para conectar a nuestras mascotas con hogares amorosos.",
    },
    {
      name: "Ana Martínez",
      text: "La dedicación y pasión del equipo es evidente en cada aspecto de la plataforma. ¡Increíble trabajo!",
    },
  ];

  return (
    <div className="min-h-screen bg-radial-gradient from-[#00DAFE] to-white">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl mb-6 text-center font-bold text-sky-900">
            Sobre Nosotros
          </h1>
          <p className="text-lg text-sky-700 mb-4">
            Somos un apasionado grupo de desarrolladores que, en colaboración
            con NoCountry, hemos creado este sitio web para facilitar la
            adopción de mascotas y apoyar a los refugios en su noble labor.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-sky-900 mb-4">
            Misión y Visión
          </h2>
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg border-2 border-[#00DAFE] hover:border-[#0097B2] transition duration-300 ease-in-out">
            <p className="text-lg text-sky-700 mb-4">
              <strong>Misión:</strong> Conectar a mascotas necesitadas con
              familias amorosas, utilizando tecnología innovadora para
              simplificar el proceso de adopción.
            </p>
            <p className="text-lg text-sky-700 mb-4">
              <strong>Visión:</strong> Crear un mundo donde cada mascota tenga
              un hogar y cada familia pueda experimentar la alegría de tener una
              mascota.
            </p>
          </div>
        </section>

        <section className="mb-12 flex items-center">
          <div className="w-2/3 pr-4">
            <h2 className="text-3xl font-semibold text-sky-900 mb-4">
              Nuestros Valores
            </h2>
            <ul className="list-disc list-inside">
              <li className="flex items-center text-lg text-sky-700 mb-4">
                <FaPaw className="mr-2 text-[#00DAFE]" /> Compasión por los
                animales
              </li>
              <li className="flex items-center text-lg text-sky-700 mb-4">
                <FaLightbulb className="mr-2 text-[#00DAFE]" /> Innovación
                tecnológica
              </li>
              <li className="flex items-center text-lg text-sky-700 mb-4">
                <FaEye className="mr-2 text-[#00DAFE]" /> Transparencia en
                nuestras operaciones
              </li>
              <li className="flex items-center text-lg text-sky-700 mb-4">
                <FaHandsHelping className="mr-2 text-[#00DAFE]" /> Colaboración
                con refugios y comunidades
              </li>
              <li className="flex items-center text-lg text-sky-700 mb-4">
                <FaBook className="mr-2 text-[#00DAFE]" /> Educación sobre la
                tenencia responsable de mascotas
              </li>
            </ul>
          </div>
          <motion.img
            src={valoresImage} // Usa la imagen importada
            alt="Valores"
            className="w-1/3 rounded-lg shadow-lg w-full max-w-[300px] ml-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-sky-900 mb-4">
            Testimonios
          </h2>
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg border-2 border-[#00DAFE] hover:border-[#0097B2] transition duration-300 ease-in-out">
            <p className="mb-4 italic text-center text-lg text-sky-700 mb-4">
              "{testimonials[activeTestimonial].text}"
            </p>
            <p className="font-semibold text-center text-lg text-sky-700 mb-4">
              - {testimonials[activeTestimonial].name}
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial ? "bg-[#00DAFE]" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold font-semibold text-sky-900 mb-4">
            Compromiso Social
          </h2>
          <p className="text-lg text-sky-700 mb-4">
            Además de facilitar adopciones, trabajamos activamente en programas
            de educación sobre tenencia responsable de mascotas y colaboramos
            con refugios locales para mejorar las condiciones de vida de los
            animales.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold font-semibold text-sky-900 mb-4">
            ¡Únete a Nuestra Misión!
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#00DAFE] text-white font-bold py-2 px-4 rounded"
          >
            <Link to="/pets">Explorar Mascotas en Adopción</Link>
          </motion.button>
        </section>
      </main>
    </div>
  );
}
