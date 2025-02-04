import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
      <div className="max-w-7xl w-full lg:flex lg:items-center lg:justify-center">
        <div className="flex-col p-20">
          <h4 className="font-bold tracking-tight sm:text-3xl pt-10">
            <span className="block text-gray-300">Hola, yo soy</span>
          </h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-cyan-400">
            Nicolás Abratte
          </h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-500">
            Frontend Developer
          </h3>
        </div>

        <div className="mt-8 flex flex-col lg:flex-col text-center justify-center items-center py-8 gap-6">
          {/* Descargar CV */}
          <div className="w-52 lg:w-full">
            <Link
              href="../../assets/cv-nicolas-abratte.pdf"
              download
              target="_blank"
              className="flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-600 transition-all"
            >
              Descargar CV
            </Link>
          </div>

          {/* Contacto */}
          <div className="w-52 lg:w-full">
            <Link
              href="mailto:nabratte@gmail.com"
              className="flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-cyan-600 bg-white hover:bg-cyan-100 transition-all"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}