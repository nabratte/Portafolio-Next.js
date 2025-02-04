import Link from 'next/link';
import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Barra de navegación fija arriba */}
        <header className="p-4 bg-gray-800 fixed top-0 w-full shadow-md">
          <nav className="container mx-auto flex justify-between">
            <Link href="/" className="text-xl font-bold">Mi Portafolio</Link>
            <div className='flex-row items-center space-x-2'>
              <Link href="/proyectos" className="mx-2">Proyectos</Link>
              <Link href="/contacto" className="mx-2">Contacto</Link>
            </div>
          </nav>
        </header>

        {/* Contenido principal con margen superior para evitar que lo tape el header */}
        <main className="container mx-auto p-6 flex-grow pt-20">
          {children}
        </main>

        {/* Footer siempre abajo */}
        <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
          <p>Hecho con ❤️ por Nicolas</p>
        </footer>
      </body>
    </html>
  );
}
