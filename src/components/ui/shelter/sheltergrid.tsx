import { shelterData } from "@/data/shelterData";
import { ShelterCard } from "@/components/ui/shelter/sheltercard";

export function ShelterGrid() {
  const firstTwelveShelters = shelterData.slice(0, 12);

  const firstHalf = firstTwelveShelters.slice(0, 6);
  const secondHalf = firstTwelveShelters.slice(6, 12);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Primera sección de refugios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-items-center">
        {firstHalf.map((shelter) => (
          <ShelterCard key={shelter.id} shelter={shelter} />
        ))}
      </div>

      {/* Banner de separación ajustado */}
      <div className="bg-[#FA9235] bg-opacity-75 text-center rounded-lg py-4 mb-8 max-w-screen-md mx-auto">
        <h2 className="text-xl font-bold">¡Adopta y cambia una vida!</h2>
        <p>Conoce más sobre nuestros refugios y adopta a tu mejor amigo.</p>
      </div>

      {/* Segunda sección de refugios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {secondHalf.map((shelter) => (
          <ShelterCard key={shelter.id} shelter={shelter} />
        ))}
      </div>
    </div>
  );
}
