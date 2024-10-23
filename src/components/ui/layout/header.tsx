import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  House,
  Info,
  UserPlus,
  UserRound,
  PawPrint,
} from "lucide-react";
import { LoginModal } from "@/components/pages/login";
// Importa la imagen directamente
import logoImg from "@/assets/logo/calidhoga.webp";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  // Función para cerrar el menú al hacer clic fuera del área del menú
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    //<header className="bg-blue-700 text-white sticky top-0 z-50 shadow-md">
    <header className=" relative bg-gradient-to-b from-customColor to-transparent text-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4  flex justify-between items-center">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img
            className="h-20 w-auto md:mt-[-10px] "
            src={logoImg}
            loading="lazy"
            alt="CalidHogar"
            width="200"
            height="80"
          />
          <span className="ml-2 text-lg font-bold text-black hover:text-gray-500">
            Calid Hogar
          </span>
        </Link>

        <div className="md:hidden text-black">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleOutsideClick}
          >
            <ul
              className="bg-gradient-to-b from-sky-700 to-transparent
              text-black fixed top-0 left-0 w-3/4 h-full bg-customColor flex flex-col justify-center items-center space-y-0 z-50 shadow-md" //w-3/4 para ajustar el menú en pantallas pequeñas
            >
              <li>
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <img
                    className="h-auto w-28 text-black"
                    src={logoImg}
                    loading="lazy"
                    alt="CalidHogar"
                    width="200"
                    height="80"
                  />
                </Link>
              </li>
              {[
                {
                  text: "Inicio",
                  path: "/",
                  icon: <Home className="w-5 h-5" />,
                },
                {
                  text: "Mascotas",
                  path: "/pets",
                  icon: <PawPrint className="w-5 h-5" />,
                },
                {
                  text: "Refugios",
                  path: "/shelters",
                  icon: <House className="w-5 h-5" />,
                },
                {
                  text: "Sobre Nosotros",
                  path: "/about",
                  icon: <Info className="w-5 h-5" />,
                },
                {
                  text: "Registrarse",
                  path: "/register",
                  icon: <UserPlus className="w-5 h-5" />,
                },
              ].map(({ text, path, icon }, index) => (
                <li key={index}>
                  <Link
                    to={path}
                    className="block text-white text-lg flex items-center space-x-4 px-4 py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {icon}
                    <span>{text}</span>
                  </Link>
                </li>
              ))}
              <li>
                {/* Botón para abrir el modal de "Iniciar Sesión" */}
                <button
                  className="block text-white text-lg flex items-center space-x-2 px-4 py-2"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <UserRound className="w-5 h-5" />
                  <span>Iniciar Sesión</span>
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Menú de navegación para pantallas grandes */}
        <ul className="hidden md:flex space-x-4">
          {[
            { text: "Inicio", path: "/", icon: <Home className="w-5 h-5" /> },
            {
              text: "Mascotas",
              path: "/pets",
              icon: <PawPrint className="w-5 h-5" />,
            },
            {
              text: "Refugios",
              path: "/shelters",
              icon: <House className="w-5 h-5" />,
            },
            {
              text: "Sobre Nosotros",
              path: "/about",
              icon: <Info className="w-5 h-5" />,
            },
            {
              text: "Registrarse",
              path: "/register",
              icon: <UserPlus className="w-5 h-5" />,
            },
          ].map(({ text, path, icon }, index) => (
            <li key={index}>
              <Link
                to={path}
                className="px-1 py-1 text-black flex items-center space-x-2 hover:text-gray-500" //Aquí en el hover podemos modificar el efecto de hover al momento de pasar el cursor sobre el enlace
              >
                {icon}
                <span>{text}</span>
              </Link>
            </li>
          ))}

          <li>
            {/* Botón de "Iniciar Sesión" que abre el modal */}
            <button
              className="px-1 py-1 text-black flex items-center space-x-2 hover:text-gray-500"
              onClick={() => setIsModalOpen(true)} //Agregamos el modal para no abrir una nueva página nueva
            >
              <UserRound className="w-5 h-5" />
              <span>Iniciar Sesión</span>
            </button>
          </li>
        </ul>
      </nav>

      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
}
