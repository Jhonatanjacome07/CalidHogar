import { Link } from "react-router-dom";
import { TypeIcon, PawPrint, MapPin, Clock } from "lucide-react";

type Pet = {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  location: string;
  image: string;
};

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <div className="flex justify-center">
      <div className="relative group" style={{ width: "400px" }}>
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00DAFE] to-[#00DAFE] rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-6 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col">
          <div className="relative mb-4">
            <img
              src={pet.image}
              alt={pet.name}
              loading="lazy"
              className="w-full h-52 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-70 rounded-lg" />
          </div>
          <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500">
            {pet.name}
          </h4>
          <div className="flex items-center mb-1">
            <TypeIcon className="mr-2 text-gray-500" />
            <p className="text-sm font-normal text-gray-500 leading-5">
              Tipo: {pet.species}
            </p>
          </div>
          <div className="flex items-center mb-1">
            <PawPrint className="mr-2 text-gray-500" />
            <p className="text-sm font-normal text-gray-500 leading-5">
              Raza: {pet.breed}
            </p>
          </div>
          <div className="flex items-center mb-1">
            <Clock className="mr-2 text-gray-500" />
            <p className="text-sm font-normal text-gray-500 leading-5">
              Edad: {pet.age} años
            </p>
          </div>
          <div className="flex items-center mb-5">
            <MapPin className="mr-2 text-gray-500" />
            <p className="text-sm font-normal text-gray-500 leading-5">
              Ubicación: {pet.location}
            </p>
          </div>
          <div className="flex">
            <Link to={`/pets/${pet.id}`} className="w-full">
              <button className="border-[#00DAFE] text-[#00DAFE] hover:bg-[#00DAFE] hover:text-white transition-colors duration-300 text-lg rounded-full py-2 w-full font-semibold">
                Detalles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
