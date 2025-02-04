"use client"
import { useState } from "react";

interface Opcion {
  texto: string;
  siguiente: string;
}

interface Escena {
  texto: string;
  opciones: Opcion[];
}

interface Historia {
  [clave: string]: Escena;
}

import historia from "./data/historia";

const RPGMini: React.FC = () => {
  const [escenaActual, setEscenaActual] = useState<string>("inicio");

  const manejarOpcion = (siguiente: string) => {
    setEscenaActual(siguiente);
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <p className="mb-4">{(historia as Historia)[escenaActual].texto}</p>
      <div className="space-y-2">
        {(historia as Historia)[escenaActual].opciones.map((opcion: Opcion, index: number) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
            onClick={() => manejarOpcion(opcion.siguiente)}
          >
            {opcion.texto}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RPGMini;