import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Contáctame</h1>
      <p className="text-lg text-gray-300 mb-8">
        ¡Estoy disponible para nuevas oportunidades! No dudes en escribirme.
      </p>

      {/* Contenedor de botones */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+5493516891336"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-md bg-green-500 hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={24} /> WhatsApp
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/nico.abratte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-md bg-pink-500 hover:bg-pink-600 transition-all"
        >
          <FaInstagram size={24} /> Instagram
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nicolas-abratte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition-all"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/nabratte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-md bg-gray-700 hover:bg-gray-800 transition-all"
        >
          <FaGithub size={24} /> GitHub
        </a>
      </div>
    </section>
  );
}
