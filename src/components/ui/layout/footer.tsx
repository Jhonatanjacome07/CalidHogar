import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className=" text-black py-8 bg-gradient-to-t from-customColor to-transparent">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Redes sociales */}
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-bold">Nuestras redes sociales:</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-blue-900"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-600"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Accesos rápidos */}
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-bold">Accesos rápidos:</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="/" className="font-semibold hover:text-gray-500">
                Inicio
              </a>
            </li>
            <li>
              <a href="/pets" className=" font-semibold hover:text-gray-500">
                Mascotas
              </a>
            </li>
            <li>
              <a href="/shelters" className="font-semibold hover:text-gray-500">
                Refugios
              </a>
            </li>
            {/* Agrega más enlaces según sea necesario */}
          </ul>
        </div>

        {/* Contactos */}
        <div className="flex flex-col md:w-1/3">
          <h3 className="text-lg font-bold">Contactos:</h3>
          <p className="mt-2">
            <b>Ubicación:</b> Buenos Aires, Av. 9 de Julio, C1002, Argentina
          </p>
          <p className="mt-2">
            <b>Celular:</b> +54 911 2345 6789
          </p>
          <p className="mt-2">
            <b>Email:</b> calidhogar@gmail.com
          </p>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="font-semibold hover:text-gray-500 mt-4 text-center">
        <p>© Copyright MS. All Rights Reserved</p>
        <p>Designed by Calid Hogar</p>
      </div>
    </footer>
  );
}
