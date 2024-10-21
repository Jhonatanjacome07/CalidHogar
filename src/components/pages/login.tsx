import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    if (email !== "usuario@example.com" || password !== "contraseña") {
      setErrorMessage("Usuario no encontrado o contraseña incorrecta.");
      return;
    }

    setErrorMessage("");
    console.log("Iniciar sesión...");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md mx-auto">
        <Card className="bg-blue-100 bg-opacity-30 backdrop-blur-lg shadow-lg p-2">
          <CardHeader className="flex flex-col items-center">
            <img
              className="h-auto w-15 mb-2 md:mt-[-95px]" // Ajuste de margen para pantallas grandes
              src="/src/assets/logo/calidhoga.png"
              alt="CalidHogar"
            />
            <CardTitle className="text-center">Iniciar Sesión</CardTitle>
            <CardDescription className="text-center text-black-300">
              Ingresa tus credenciales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white bg-opacity-80 border border-blue-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" // Ajustar los colores y variantes del input
                    placeholder="ejemplo@correo.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white bg-opacity-80 border border-blue-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" // Ajustar los colores y variantes del input
                    placeholder="********"
                  />
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex space-x-2">
            <Button
              className="bg-customColor text-white w-full hover:bg-gray-500" // Cambia el color de hover
              type="submit"
              onClick={handleSubmit}
            >
              Iniciar Sesión
            </Button>
            <Button
              className="bg-gray-300 text-black w-full hover:bg-gray-500" // Cambia el color de hover
              onClick={onClose} // Cierra el modal
            >
              Cerrar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
