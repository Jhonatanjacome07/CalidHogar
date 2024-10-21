import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Shelter = {
  id: number,
  name: string,
  location: string,
  phone: string,
  email: string,
  socialMedia: string,
  petCount: number,
};

type ShelterCardProps = {
  shelter: Shelter,
};

export function ShelterCard({ shelter }: ShelterCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{shelter.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Ubicación: {shelter.location}</p>
        <p>Teléfono: {shelter.phone}</p>
        <p>Email: {shelter.email}</p>
        <p>Redes sociales: {shelter.socialMedia}</p>
        <p>Animales en adopción: {shelter.petCount}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link to={`/shelters/${shelter.id}/pets`}>Ver mascotas</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
