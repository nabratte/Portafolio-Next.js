import Link from "next/link";
import Image from "next/image";

interface ProyectoProps {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
}

export default function ProyectoCard({ id, titulo, descripcion, imagen }: ProyectoProps) {
  return (
    <Link href={`/proyectos/${id}`} className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
      <Image src={imagen} alt={titulo} width={400} height={160} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{titulo}</h2>
        <p className="text-gray-400 text-sm">{descripcion}</p>
      </div>    
    </Link>
  );
}