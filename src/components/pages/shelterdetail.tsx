import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { shelterData } from "@/data/shelterData";

type Shelter = {
  id: number;
  name: string;
  location: string;
  casesInAdoption: number;
  urgentCases: number;
  fosterCases: number;
  story: string;
  image: string;
};

export default function ShelterDetails() {
  const { id } = useParams(); // Obtener el id de los parámetros de la URL
  const [shelter, setShelter] = useState<Shelter | null>(null); // Estado para el refugio seleccionado

  useEffect(() => {
    const shelterId = id ? Number(id) : 0;

    // Buscar el refugio en el array de datos
    const selectedShelter = shelterData.find((s) => s.id === shelterId);

    if (selectedShelter) {
      setShelter(selectedShelter);
    }
  }, [id]);

  if (!shelter) {
    return <p>Cargando detalles del refugio...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={shelter.image}
            alt={shelter.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{shelter.name}</CardTitle>
            <CardDescription>Detalles del refugio</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ubicación: {shelter.location}</p>
            <p>Casos en adopción: {shelter.casesInAdoption}</p>
            <p>Casos urgentes: {shelter.urgentCases}</p>
            <p>Casos en acogida: {shelter.fosterCases}</p>
            <h3 className="font-bold mt-4">Historia:</h3>
            <p>{shelter.story}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
