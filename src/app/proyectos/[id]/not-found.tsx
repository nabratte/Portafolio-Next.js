import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold text-red-600">404 - Proyecto no encontrado</h1>
      <p className="text-gray-500 my-2">El proyecto que buscas no existe o fue eliminado.</p>
      <Link href="/" className="text-blue-500 hover:underline">Volver al inicio</Link>
    </div>
  );
}