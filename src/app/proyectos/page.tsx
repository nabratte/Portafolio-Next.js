import ProyectoCard from "../components/ProyectoCard";
import proyectos from "./projectlist.json"

export default function Proyectos() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyectos.map((proyecto) => (
          <ProyectoCard key={proyecto.id} {...proyecto} />
        ))}
      </div>
    </section>
  );
}