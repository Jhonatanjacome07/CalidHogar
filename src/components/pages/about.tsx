export default function About() {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="mb-4">
          Somos un pequeño grupo de desarrolladores que, en conjunto con Slack,
          hemos desarrollado esta página con el objetivo de facilitar la
          adopción de mascotas y apoyar a los refugios en su noble labor.
        </p>
        <div className="bg-gray-200 p-4 rounded-lg mb-4"></div>
        <p>
          Nuestra misión es conectar a las mascotas que necesitan un hogar con
          personas amorosas que estén buscando un nuevo miembro para su familia.
          Creemos que cada mascota merece un hogar cálido y amoroso, y
          trabajamos incansablemente para hacer que esto sea posible.
        </p>
      </main>
    </div>
  );
}
