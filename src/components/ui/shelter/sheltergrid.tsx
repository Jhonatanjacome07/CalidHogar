import { shelterData } from "@/data/shelterData";
import { ShelterCard } from "@/components/ui/shelter/sheltercard";

export function ShelterGrid() {
  // Obtener los primeros 12 refugios
  const firstTwelveShelters = shelterData.slice(0, 12);

  // Dividir en dos grupos de 6 refugios
  const firstHalf = firstTwelveShelters.slice(0, 6);
  const secondHalf = firstTwelveShelters.slice(6, 12);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Primera sección de refugios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {firstHalf.map((shelter) => (
          <ShelterCard key={shelter.id} shelter={shelter} />
        ))}
      </div>

      {/* Banner de separación */}
      <div className="bg-gray-200 text-center py-4 mb-8">
        <h2 className="text-xl font-bold">¡Adopta y cambia una vida!</h2>
        <p>Conoce más sobre nuestros refugios y adopta a tu mejor amigo.</p>
      </div>

      {/* Segunda sección de refugios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondHalf.map((shelter) => (
          <ShelterCard key={shelter.id} shelter={shelter} />
        ))}
      </div>
    </div>
  );
}
