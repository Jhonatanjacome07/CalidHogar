import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, House, PawPrint, Cat } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <main>
          {/* Sección de bienvenida */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h2 className="text-4xl font-bold text-sky-900 mb-4 text-center md:text-left">
                Encuentra a tu compañero perfecto
              </h2>
              <p className="text-lg text-sky-700 mb-6">
                Dale un hogar a una mascota necesitada y llena tu vida de amor
                incondicional. Al adoptar, no solo cambias la vida de una
                mascota, sino que también enriqueces la tuya con un vínculo
                único. Nuestras mascotas están esperando a alguien como tú, que
                les brinde una segunda oportunidad y un hogar para siempre.
              </p>
              {/* Botones con íconos */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <Button
                  className="bg-[#00DAFE] hover:bg-sky-600 transition-colors duration-300 flex items-center space-x-2 py-3 px-6 text-lg"
                  asChild
                >
                  <Link to="/register">
                    <PawPrint className="w-5 h-5" />
                    <span>Registrarse</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#00DAFE] text-[#00DAFE] hover:bg-[#00DAFE] hover:text-white transition-colors duration-300 flex items-center space-x-2 py-3 px-6 text-lg"
                  asChild
                >
                  <Link to="/pets">
                    <Cat className="w-5 h-5" />
                    <span>Adopta ahora</span>
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Imagen ajustada más a la derecha y hecha responsive */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:w-1/2"
            >
              <img
                src="/src/assets/imghome/dog.jpg"
                alt="Mascota feliz"
                className="rounded-lg shadow-lg w-full max-w-[600px] h-auto aspect-square object-cover hover:scale-105 transition-transform duration-300 ml-auto"
              />
            </motion.div>
          </div>

          {/* Sección de compromiso con las mascotas */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-center md:text-center text-4xl font-bold text-sky-900 mb-9">
              Nuestro Compromiso con las Mascotas
            </h2>

            {/* Tarjetas en una cuadrícula */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tarjeta 1 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00DAFE] to-[#00DAFE] rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <House className="w-12 h-12 text-[#00DAFE] mb-4" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold mb-2 text-sky-900">
                      Conectar con Refugios y Adoptantes
                    </h3>
                    <p className="text-sky-700 text-lg">
                      Permitimos que los refugios exhiban a los animales en
                      adopción, ayudando a encontrarles un hogar seguro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00DAFE] to-[#00DAFE] rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <Heart className="w-12 h-12 text-[#00DAFE] mb-4" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold mb-2 text-sky-900">
                      Fomentar el Amor y Cuidado
                    </h3>
                    <p className="text-sky-700 text-lg">
                      Promovemos la adopción responsable, asegurando que cada
                      animal reciba amor y atención en su nuevo hogar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00DAFE] to-[#00DAFE] rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <PawPrint className="w-12 h-12 text-[#00DAFE] mb-4" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold mb-2 text-sky-900">
                      Te Guiamos a tu Compañero Ideal
                    </h3>
                    <p className="text-sky-700 text-lg">
                      Aquí encontrarás a tu mascota perfecta que se adaptará a
                      tu estilo de vida y te brindará amor incondicional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Sección ¿Por qué adoptar? */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center mb-16"
          >
            {/* Imagen a la izquierda */}
            <div className="md:w-1/2 mb-2 md:mb-0">
              <img
                src="/src/assets/imghome/cat.jpg"
                alt="Mascota feliz"
                className="rounded-lg shadow-lg w-full max-w-[600px] h-auto aspect-square object-cover mb-0 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Texto a la derecha */}
            <div className="md:w-1/2 flex flex-col">
              <h2 className="text-3xl font-bold text-sky-900 mb-4 text-center md:text-left">
                ¿Por qué adoptar?
              </h2>

              <p className="text-lg text-sky-700 mb-4">
                Adoptar una mascota no solo cambia su vida, sino también la
                tuya. Descubre el amor incondicional y la alegría que una
                mascota adoptada puede traer a tu hogar. Aquí te mostramos
                algunos de los beneficios de adoptar:
              </p>
              <ul className="list-disc list-inside text-left space-y-4">
                <li className="flex items-center text-sky-700 text-lg">
                  <Heart className="w-7 h-7 text-red-500 mr-2" />
                  Amor incondicional garantizado.
                </li>
                <li className="flex items-center text-sky-700 text-lg">
                  <PawPrint className="w-7 h-7 text-green-500 mr-2" />
                  Salvando una vida y dando una segunda oportunidad.
                </li>
                <li className="flex items-center text-sky-700 text-lg">
                  <Cat className="w-7 h-7 text-yellow-500 mr-2" />
                  Mejora tu bienestar físico y emocional.
                </li>
              </ul>
            </div>
          </motion.section>
        </main>
      </motion.div>
    </div>
  );
}
