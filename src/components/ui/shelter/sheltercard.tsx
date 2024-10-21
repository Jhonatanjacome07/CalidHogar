import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

type Shelter = {
  id: number;
  name: string;
  location: string;
  image: string;
};

export function ShelterCard({ shelter }: { shelter: Shelter }) {
  return (
    <div className="flex justify-center">
      <div className="relative group" style={{ width: "280px" }}>
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00DAFE] to-[#00DAFE] rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-4 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-row">
          <img
            src={shelter.image}
            alt={shelter.name}
            className="w-1/3 h-24 object-cover rounded-lg mr-4"
          />
          <div className="flex flex-col justify-between w-2/3">
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500">
              {shelter.name}
            </h4>
            <div className="flex items-center mb-1">
              <MapPin className="mr-2 text-gray-500" />
              <p className="text-sm font-normal text-gray-500 leading-5">
                Ubicación: {shelter.location}
              </p>
            </div>
            <div className="flex">
              <Link to={`/shelters/${shelter.id}`} className="w-full">
                <button className="border-[#00DAFE] text-[#00DAFE] hover:bg-[#00DAFE] hover:text-white transition-colors duration-300 text-lg rounded-full py-2 w-full font-semibold">
                  Detalles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
