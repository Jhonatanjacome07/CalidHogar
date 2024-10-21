import { ShelterGrid } from "@/components/ui/shelter/sheltergrid";

export default function Pets() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Refugios de Animales</h1>
        <div className="mt-9">
          {" "}
          <ShelterGrid />
        </div>

        <div className="my-8 bg-gray-100 p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold">¡Adopta y cambia una vida!</h2>
        </div>
        <div className="mt-9">
          {" "}
          <ShelterGrid />
        </div>
      </div>
    </>
  );
}
