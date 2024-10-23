import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import logoImg from "@/assets/logo/calidhoga.webp"; // Importa la imagen

type FormData = {
  email: string;
  password: string;
  name: string;
  refugeName?: string;
};

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isRefuge, setIsRefuge] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Aquí iría la lógica para registrar al usuario
      console.log(data);
      setMessage("Cuenta creada exitosamente.");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage("Ocurrió un error desconocido.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-[400px] shadow-lg">
        <div className="flex justify-center p-4">
          <img
            src={logoImg}
            alt="Logo CalidHogar"
            loading="lazy"
            className="h-40 w-1/2 object-contain"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Crear una cuenta
          </CardTitle>
          <CardDescription className="text-center">
            Ingresa tus datos para registrarte
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="user-type">
                  {isRefuge
                    ? "Registrarse como adoptante"
                    : "Registrarse como refugio"}
                </Label>
                <Switch
                  id="user-type"
                  checked={isRefuge}
                  onCheckedChange={setIsRefuge}
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="name">
                  Nombre {isRefuge ? "del refugio" : "completo"}
                </Label>
                <Input
                  id="name"
                  placeholder={
                    isRefuge ? "Nombre del refugio" : "Tu nombre completo"
                  }
                  {...register("name", {
                    required: "El nombre es obligatorio",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="grid gap-1">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  {...register("email", {
                    required: "El correo electrónico es obligatorio",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "El correo electrónico no es válido",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="grid gap-1">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center">
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Registrar"}
          </Button>
          {message && <p className="mt-2 text-green-600">{message}</p>}
        </CardFooter>
      </Card>
    </div>
  );
}
