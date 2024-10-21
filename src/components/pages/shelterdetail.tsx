import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SheltersDetails() {
  const { id } = useParams();

  const petId = id ? Number(id) : 0;

  const pet = {
    id: petId,
    name: "Bella",
    species: "Perro",
    age: 2,
    breed: "Shih tzu",
    weight: "25 kg",
    size: "Mediano",
    activityLevel: "Alto",
    dewormed: true,
    sterilized: true,
    microchip: true,
    vaccinated: true,
    history: "Bella fue rescatada de la calle hace 6 meses...",
    mainImage: "/src/assets/dogs/bella/bella.jpg",
    previewImages: [
      "/src/assets/dogs/bella/bella.jpg",
      "/src/assets/dogs/bella/bella1.jpg",
      "/src/assets/dogs/bella/bella2.jpg",
    ],
    shelter: "Protectora Amigo Fiel",
  };

  const otherPets = [
    {
      id: 1,
      name: "Max",
      species: "Perro",
      image: "/path-to-otherpet1.jpg",
    },
    {
      id: 2,
      name: "Bella",
      species: "Gato",
      image: "/path-to-otherpet2.jpg",
    },
    {
      id: 3,
      name: "Charlie",
      species: "Perro",
      image: "/path-to-otherpet3.jpg",
    },
    {
      id: 4,
      name: "Lucy",
      species: "Gato",
      image: "/path-to-otherpet4.jpg",
    },
  ];

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

            {/* Nueva sección para mostrar la protectora */}
            <h3 className="font-bold mt-4">Protectora:</h3>
            <p>{pet.shelter}</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 bg-gray-100 p-4 rounded-lg text-center">
        <h2 className="text-2xl font-bold">
          Otras mascotas que podrían interesarte
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {otherPets.map((otherPet) => (
          <div key={otherPet.id} className="bg-white rounded-lg shadow-lg">
            <img
              src={otherPet.image}
              alt={otherPet.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold">{otherPet.name}</h3>
              <p className="text-gray-600">{otherPet.species}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
