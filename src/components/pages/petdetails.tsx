import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pets } from "@/data/petsData"; // Importa los datos desde el archivo

// Definir el tipo para los detalles de una mascota
type Pet = {
  id: number;
  name: string;
  species: string;
  age: number;
  breed: string;
  weight: string;
  size: string;
  activityLevel: string;
  dewormed: boolean;
  sterilized: boolean;
  microchip: boolean;
  vaccinated: boolean;
  history: string;
  mainImage: string;
  previewImages: string[];
  shelter: string;
};

export default function PetDetails() {
  const { id } = useParams(); // Obtener el id de los parámetros de la URL
  const [pet, setPet] = useState<Pet | null>(null); // Estado para la mascota seleccionada

  useEffect(() => {
    const petId = id ? Number(id) : 0;

    // Buscar la mascota en el array de datos
    const selectedPet = pets.find((p) => p.id === petId);

    // Actualizar el estado si se encuentra la mascota
    if (selectedPet) {
      setPet(selectedPet);
    }
  }, [id]);

  if (!pet) {
    return <p>Cargando detalles de la mascota...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={pet.mainImage}
            alt={pet.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-3 gap-2 mt-4">
            {pet.previewImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${pet.name} preview ${index + 1}`}
                className="w-full h-24 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{pet.name}</CardTitle>
            <CardDescription>Detalles de la mascota</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Especie: {pet.species}</p>
            <p>Edad: {pet.age} años</p>
            <p>Raza: {pet.breed}</p>
            <p>Peso: {pet.weight}</p>
            <p>Tamaño: {pet.size}</p>
            <p>Nivel de actividad: {pet.activityLevel}</p>
            <h3 className="font-bold mt-4">Detalles de entrega:</h3>
            <p>Desparasitado: {pet.dewormed ? "Sí" : "No"}</p>
            <p>Esterilizado: {pet.sterilized ? "Sí" : "No"}</p>
            <p>Microchip: {pet.microchip ? "Sí" : "No"}</p>
            <p>Vacunas: {pet.vaccinated ? "Al día" : "Pendiente"}</p>
            <h3 className="font-bold mt-4">Historia:</h3>
            <p>{pet.history}</p>

            <h3 className="font-bold mt-4">Protectora:</h3>
            <p>{pet.shelter}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
