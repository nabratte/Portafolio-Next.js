import { notFound } from "next/navigation";
import proyectos from "../../proyectos/projectlist.json";

// Importa todos los componentes de las apps
import ToDoApp from "../ToDoApp/ToDoApp";
import RPGMini from "../RPG/RPG";

const componentesApps: { [key: string]: React.ComponentType } = {
  "1": ToDoApp,
  "3": RPGMini,
};

export default async function ProyectoApp({ params }: { params: Promise<{ id: string }> }){
  const { id } = await params; // Esperamos la resolución de la promesa
  const proyecto = proyectos.find((p) => p.id === id);
  const ComponenteApp = componentesApps[id]; // Obtiene el componente correspondiente

  if (!proyecto || !ComponenteApp) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{proyecto.titulo}</h1>
      <p className="text-gray-400 mb-4">{proyecto.descripcion}</p>
      <ComponenteApp /> {/* Renderiza la aplicación correspondiente */}
    </div>
  );
}