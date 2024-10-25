import { ShelterGrid } from "@/components/ui/shelter/ShelterGrid";

export default function Shelter() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Refugios de Animales</h1>
        <div className="mt-9">
          <ShelterGrid />
        </div>
      </div>
    </>
  );
}
