import { notFound } from "next/navigation";
import proyectos from "../projectlist.json";
import Link from "next/link";
import Image from "next/image";

export default async function Proyecto({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Esperamos la resolución de la promesa
  const proyecto = proyectos.find((p) => p.id === id);

  if (!proyecto) return notFound();

  return (
    <section>
      <h1 className="text-4xl font-bold">{proyecto.titulo}</h1>
      <Link href={`/sub-apps/${proyecto.id}`}>
        <Image
          src={proyecto.imagen}
          alt={proyecto.titulo}
          width={800}
          height={240}
          className="w-full h-60 object-cover rounded-lg my-4 cursor-pointer"
        />
      </Link>
      <p className="text-gray-400">{proyecto.descripcion}</p>
    </section>
  );
}