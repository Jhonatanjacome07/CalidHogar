// petgrid.tsx
import { PetCard } from "./petcard";

type PetType = "all" | "cat" | "dog";

type Pet = {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: number;
  location: string;
  image: string;
};

const pets: Pet[] = [
  {
    id: 1,
    name: "Max",
    type: "Perro",
    breed: "Labrador",
    age: 3,
    location: "Madrid",
    image: "/src/assets/dogs/max/max.jpg",
  },
  {
    id: 2,
    name: "Luna",
    type: "Gato",
    breed: "Siamés",
    age: 2,
    location: "Barcelona",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Rocky",
    type: "Perro",
    breed: "Pastor Alemán",
    age: 4,
    location: "Valencia",
    image: "/src/assets/dogs/rocky/rocky.jpg",
  },
  {
    id: 4,
    name: "Milo",
    type: "Gato",
    breed: "Persa",
    age: 1,
    location: "Sevilla",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Bella",
    type: "Perro",
    breed: "Shih tzu",
    age: 2,
    location: "Bilbao",
    image: "/src/assets/dogs/bella/bella.jpg",
  },
  {
    id: 6,
    name: "Simba",
    type: "Gato",
    breed: "Bengalí",
    age: 3,
    location: "Málaga",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export function PetGrid({ filter }: { filter: PetType }) {
  const filteredPets = pets.filter(
    (pet) =>
      filter === "all" ||
      pet.type.toLowerCase() === (filter === "dog" ? "perro" : "gato")
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}
