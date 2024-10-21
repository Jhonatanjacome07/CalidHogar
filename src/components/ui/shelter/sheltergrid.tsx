import React from "react";
import { ShelterCard } from "@/components/ui/shelter/sheltercard"; // Asegúrate de que la ruta sea correcta

type Shelter = {
  id: number;
  name: string;
  location: string;
  image: string;
};

// Datos de refugios (puedes reemplazar estos datos por tus datos reales o una API)
const shelters: Shelter[] = [
  {
    id: 1,
    name: "Refugio Amigo",
    location: "Madrid",
    image: "/src/assets/shelters/shelter1.jpg",
  },
  {
    id: 2,
    name: "Casa de Animales",
    location: "Barcelona",
    image: "/src/assets/shelters/shelter2.jpg",
  },
  {
    id: 3,
    name: "Hogar de Mascotas",
    location: "Valencia",
    image: "/src/assets/shelters/shelter3.jpg",
  },
  {
    id: 4,
    name: "Refugio Feliz",
    location: "Sevilla",
    image: "/src/assets/shelters/shelter4.jpg",
  },
  {
    id: 5,
    name: "Centro de Rescate",
    location: "Bilbao",
    image: "/src/assets/shelters/shelter5.jpg",
  },
  {
    id: 6,
    name: "Santuario Animal",
    location: "Granada",
    image: "/src/assets/shelters/shelter6.jpg",
  },
  {
    id: 7,
    name: "Refugio Esperanza",
    location: "Zaragoza",
    image: "/src/assets/shelters/shelter7.jpg",
  },
  {
    id: 8,
    name: "Protección Animal",
    location: "Málaga",
    image: "/src/assets/shelters/shelter8.jpg",
  },
  {
    id: 9,
    name: "Refugio del Amor",
    location: "Murcia",
    image: "/src/assets/shelters/shelter9.jpg",
  },
  {
    id: 10,
    name: "Adopta un Amigo",
    location: "Alicante",
    image: "/src/assets/shelters/shelter10.jpg",
  },
  {
    id: 11,
    name: "Asociación Animal",
    location: "Córdoba",
    image: "/src/assets/shelters/shelter11.jpg",
  },
  {
    id: 12,
    name: "Hogar de Animales",
    location: "Toledo",
    image: "/src/assets/shelters/shelter12.jpg",
  },
  {
    id: 13,
    name: "Refugio de Patitas",
    location: "Oviedo",
    image: "/src/assets/shelters/shelter13.jpg",
  },
  {
    id: 14,
    name: "Centro de Acogida",
    location: "Santander",
    image: "/src/assets/shelters/shelter14.jpg",
  },
  {
    id: 15,
    name: "Refugio Vida",
    location: "La Coruña",
    image: "/src/assets/shelters/shelter15.jpg",
  },
  {
    id: 16,
    name: "Santuario de Peluditos",
    location: "Vigo",
    image: "/src/assets/shelters/shelter16.jpg",
  },
];

export function ShelterGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-6">
        {shelters.map((shelter) => (
          <ShelterCard key={shelter.id} shelter={shelter} />
        ))}
      </div>
    </div>
  );
}
