import { PetCard } from "@/components/ui/pet/petcard";
import { pets as petsData } from "@/data/petsData";

type PetType = "all" | "cat" | "dog";

// Definimos el tipo para los datos que vamos a utilizar en el grid
type Pet = {
  id: number;
  species: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  location: string;
  image: string;
};

// Función que transforma los datos de la API hardcodeada en el formato esperado para el grid
const transformPetsData = (): Pet[] => {
  return petsData.map((pet) => ({
    id: pet.id,
    name: pet.name,
    species: pet.species,
    type: pet.species.toLowerCase() === "perro" ? "dog" : "cat", // Convertimos 'Perro' a 'dog' y 'Gato' a 'cat'
    breed: pet.breed,
    age: pet.age,
    location: pet.location,
    image: pet.mainImage, // Usamos la imagen principal
  }));
};

export function PetGrid({ filter }: { filter: PetType }) {
  // Obtenemos los datos transformados
  const pets = transformPetsData();

  // Filtramos los datos según el tipo de mascota
  const filteredPets = pets.filter(
    (pet) =>
      filter === "all" ||
      pet.type.toLowerCase() === (filter === "dog" ? "dog" : "cat")
  );

  // Limitamos a 12 mascotas para mostrar 6 antes y 6 después del banner
  const limitedPets = filteredPets.slice(0, 12);

  // Separamos las mascotas en dos grupos para la cuadrícula
  const firstHalf = limitedPets.slice(0, 6);
  const secondHalf = limitedPets.slice(6, 12);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {firstHalf.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>

      {/* Banner */}
      <div className="my-8 p-4 bg-[#FA9235] bg-opacity-75 rounded-lg text-center">
        <h2 className="text-2xl font-bold">¡Adopta una mascota hoy!</h2>
        <p className="mt-2">¡Haz una diferencia en la vida de un animal!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondHalf.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </>
  );
}
