import Link from 'next/link';
import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white">
        <header className="p-4 bg-gray-800">
          <nav className="container mx-auto flex justify-between">
            <Link href="/" className="text-xl font-bold">Mi Portafolio</Link>
            <div className='flex-row items-center space-x-2'>
              <Link href="/proyectos" className="mx-2">Proyectos</Link>
              <Link href="/contacto" className="mx-2">Contacto</Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}