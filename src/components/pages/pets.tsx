import { useState } from "react";
import { PetGrid } from "@/components/ui/pet/petgrid";
import { Button } from "@/components/ui/button";
import { Tally4, Cat, Dog } from "lucide-react";

type PetType = "all" | "cat" | "dog";

export default function Pets() {
  const [filter, setFilter] = useState<PetType>("all");

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-4 space-x-2">
          <Button
            className="bg-[#00DAFE] hover:bg-sky-600 transition-colors duration-300 flex items-center space-x-2 py-3 px-6 text-lg text-white"
            onClick={() => setFilter("all")}
            variant={filter === "all" ? "default" : "outline"}
          >
            <Tally4 className="h-5 w-5" />
            <span>Todos</span>
          </Button>
          <Button
            className="bg-[#00DAFE] hover:bg-sky-600 transition-colors duration-300 flex items-center space-x-2 py-3 px-6 text-lg text-white"
            onClick={() => setFilter("cat")}
            variant={filter === "cat" ? "default" : "outline"}
          >
            <Cat className="h-5 w-5" />
            <span>Gatos</span>
          </Button>
          <Button
            className="bg-[#00DAFE] hover:bg-sky-600 transition-colors duration-300 flex items-center space-x-2 py-3 px-6 text-lg text-white"
            onClick={() => setFilter("dog")}
            variant={filter === "dog" ? "default" : "outline"}
          >
            <Dog className="h-5 w-5" />
            <span>Perros</span>
          </Button>
        </div>

        <div className="mt-9">
          <PetGrid filter={filter} />
        </div>
      </div>
    </>
  );
}
