import { ShelterCard } from "./sheltercard";

type Shelter = {
  id: number;
  name: string;
  location: string;
  phone: string;
  email: string;
  socialMedia: string;
  petCount: number;
};

export function ShelterGrid() {
  // Mock data - replace with actual API call
  const shelters: Shelter[] = [
    // ... add mock shelter data here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shelters.map((shelter) => (
        <ShelterCard key={shelter.id} shelter={shelter} />
      ))}
    </div>
  );
}
