import { notFound } from "next/navigation";
import Link from "next/link";
import proyectos from "../projectlist.json"
import type { PageProps } from "./types";


export default function Proyecto({ params }: PageProps) {
  const proyecto = proyectos.find((p) => p.id === params.id);

  if (!proyecto) return notFound();

  return (
    <section>
      <h1 className="text-4xl font-bold">{proyecto.titulo}</h1>
      <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-60 object-cover rounded-lg my-4" />
      <p className="text-gray-400">{proyecto.descripcion}</p>
      <Link href="/proyectos" className="block mb-4 text-blue-500">← Volver a la lista de proyectos</Link>
    </section>
  );
}