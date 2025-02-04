const historia = {
  inicio: {
    texto: "Te despiertas en un bosque oscuro y denso. El aire es frío y el silencio solo se rompe por el crujido de ramas y susurros lejanos. No recuerdas cómo llegaste aquí, pero algo te dice que no estás solo. ¿Qué haces?",
    imagen: "bosque.png",
    opciones: [
      { texto: "Seguir el camino de la izquierda, donde parece haber un resplandor tenue", siguiente: "templo" },
      { texto: "Seguir el camino de la derecha, donde escuchas murmullos distantes", siguiente: "aldea" },
      { texto: "Quedarte quieto y observar tu entorno con más atención", siguiente: "misterio" }
    ]
  },
  misterio: {
    texto: "Decides observar. Pequeñas criaturas etéreas aparecen y te susurran sobre el templo y la aldea. ¿Qué haces?",
    imagen: "/imagenes/misterio.jpg",
    opciones: [
      { texto: "Ir al templo", siguiente: "templo" },
      { texto: "Ir a la aldea", siguiente: "aldea" },
      { texto: "Preguntar más a los espíritus", siguiente: "espiritus" }
    ]
  },
  exploracion: {
    texto: "Exploras el templo, pero el suelo colapsa bajo tus pies. Fin del juego.",
    imagen: "/imagenes/trampa.jpg",
    opciones: []
  },
  informacion: {
    texto: "Los aldeanos mencionan un artefacto en el templo que puede derrotar a la bestia. ¿Qué haces?",
    imagen: "/imagenes/informacion.jpg",
    opciones: [
      { texto: "Ir al templo", siguiente: "templo" },
      { texto: "Prepararte en la aldea", siguiente: "nocheAldea" }
    ]
  },
  nocheAldea: {
    texto: "Decides quedarte en la aldea y esperar la noche. Los aldeanos te ofrecen un refugio, pero el ambiente es tenso. Afuera, los murmullos del bosque se vuelven cada vez más inquietantes. De repente, un grito rompe la calma: la bestia ha atacado de nuevo.",
    imagen: "noche_aldea.jpg",
    opciones: [
      { texto: "Correr hacia el ataque para enfrentarte a la bestia", siguiente: "enfrentarBestia" },
      { texto: "Permanecer oculto y observar desde las sombras", siguiente: "secretoAldea" },
      { texto: "Escapar de la aldea antes de que sea demasiado tarde", siguiente: "huidaAldea" }
    ]
  },
  rastroBestia: {
    texto: "Sigues las enormes huellas de la bestia por el bosque. El suelo está desgarrado, y encuentras restos de sus presas. Más adelante, una cueva oscura se abre ante ti. Algo brilla en su interior, y puedes escuchar una respiración profunda proveniente del fondo.",
    imagen: "rastro_bestia.jpg",
    opciones: [
      { texto: "Entrar en la cueva sigilosamente", siguiente: "cuevaBestia" },
      { texto: "Esperar afuera y preparar una trampa", siguiente: "trampaBestia" },
      { texto: "Regresar a la aldea para informar a los demás", siguiente: "alertaAldea" }
    ]
  },
  emboscada: {
    texto: "Los cazadores y tú preparan una emboscada en el claro del bosque. Colocan trampas y se esconden en la maleza. De repente, un gruñido profundo indica que la bestia está cerca. Puedes ver su silueta enorme entre los árboles.",
    imagen: "emboscada.jpg",
    opciones: [
      { texto: "Atacar con tus armas en cuanto se acerque", siguiente: "combateBestia" },
      { texto: "Esperar el momento adecuado para atacar en grupo", siguiente: "estrategiaCaza" },
      { texto: "Descubrir si la bestia puede ser domesticada en lugar de ser destruida", siguiente: "domarBestia" }
    ]
  },
  espiritus: {
    texto: "Los espíritus del bosque flotan a tu alrededor, susurrando palabras en un idioma antiguo. Sus voces parecen advertirte sobre el peligro del templo y la bestia. Uno de ellos te ofrece una visión del futuro, mientras otro te señala un objeto enterrado cerca.",
    imagen: "espiritus.jpg",
    opciones: [
      { texto: "Aceptar la visión del futuro y seguir sus consejos", siguiente: "visionEspiritus" },
      { texto: "Excavar y tomar el objeto enterrado", siguiente: "artefactoEspiritus" },
      { texto: "Ignorar sus advertencias y seguir tu propio camino", siguiente: "destinoPropio" }
    ]
  },
  cazaBestia: {
    texto: "Te unes a los aldeanos en la caza. Se adentran en el bosque armados y listos. ¿Qué haces?",
    imagen: "/imagenes/caza.jpg",
    opciones: [
      { texto: "Seguir el rastro de la bestia", siguiente: "rastroBestia" },
      { texto: "Preparar una emboscada", siguiente: "emboscada" }
    ]
  },
  regresoBosque: {
    texto: "Regresas al bosque y encuentras a un grupo de viajeros en busca de un santuario. ¿Te unes a ellos?",
    imagen: "/imagenes/bosque.jpg",
    opciones: [
      { texto: "Unirte a los viajeros", siguiente: "santuario" },
      { texto: "Seguir solo", siguiente: "bosqueProfundo" }
    ]
  },
  templo: {
    texto: "Sigues el resplandor y llegas a un antiguo templo en ruinas. Las paredes están cubiertas de musgo y símbolos extraños. En el centro, sobre un pedestal, hay una espada brillante que emana una energía inquietante. ¿Qué haces?",
    imagen: "templo.png",
    opciones: [
      { texto: "Tomar la espada", siguiente: "espada" },
      { texto: "Ignorar la espada y explorar el templo con más cuidado", siguiente: "exploracion" },
      { texto: "Salir del templo y regresar al bosque", siguiente: "regresoBosque" }
    ]
  },
  santuarioObservado: {
    texto: "Notas trampas ocultas y las desactivas. Tomas el amuleto con seguridad. ¿Qué haces?",
    imagen: "/imagenes/santuario.jpg",
    opciones: [
      { texto: "Regresar a la aldea", siguiente: "aldea" },
      { texto: "Ir al templo", siguiente: "templo" }
    ]
  },
  aldea: {
    texto: "Sigues los murmullos y llegas a una pequeña aldea rodeada por una empalizada. Los aldeanos te reciben con miradas curiosas, pero pronto te advierten: 'Hay una bestia que acecha en el bosque. Solo aparece de noche y ha desaparecido a varios de los nuestros.' ¿Qué haces?",
    imagen: "aldea.png",
    opciones: [
      { texto: "Pedir más información sobre la bestia", siguiente: "informacion" },
      { texto: "Ofrecer tu ayuda para cazar a la bestia", siguiente: "cazaBestia" },
      { texto: "Ignorar la advertencia y seguir tu camino", siguiente: "peligro" }
    ]
  },
  peligro: {
    texto: "Ignoras la advertencia y decides seguir tu camino. Al adentrarte en el bosque, escuchas un rugido ensordecedor. La bestia te ataca y no logras defenderte. Fin del juego.",
    imagen: "bestia.png",
    opciones: []
  },
  espada: {
    texto: "Tomas la espada y de inmediato sientes una oleada de poder recorrer tu cuerpo. La hoja brilla con una luz intensa, y escuchas una voz en tu mente: 'Eres el elegido. El destino del reino está en tus manos.' ¿Qué haces?",
    imagen: "espada.png",
    opciones: [
      { texto: "Salir del templo y buscar respuestas en la aldea", siguiente: "aldea" },
      { texto: "Explorar más a fondo el templo", siguiente: "temploProfundo" },
      { texto: "Quedarte en el templo y meditar sobre el mensaje", siguiente: "meditacion" }
    ]
  },
  meditacion: {
    texto: "Te sientas en el suelo del templo, cerrando los ojos y dejando que la energía de la espada fluya a través de ti. Una visión te invade: un santuario oculto en el bosque donde yace el secreto de la bestia. ¿Qué haces?",
    imagen: "meditacion.png",
    opciones: [
      { texto: "Buscar el santuario oculto", siguiente: "santuario" },
      { texto: "Despertar y seguir explorando el templo", siguiente: "temploProfundo" }
    ]
  },
  santuario: {
    texto: "Siguiendo las indicaciones de tu visión, encuentras un santuario oculto en lo profundo del bosque. En el centro, hay un amuleto que brilla con una luz plateada. ¿Qué haces?",
    imagen: "santuario.png",
    opciones: [
      { texto: "Tomar el amuleto", siguiente: "amuletoTomado" },
      { texto: "Observar el santuario con cuidado antes de actuar", siguiente: "santuarioObservado" }
    ]
  },
  amuletoTomado: {
    texto: "Al tomar el amuleto, sientes una conexión inmediata con el bosque. Los espíritus te susurran: 'Ahora estás listo.' ¿Qué haces?",
    imagen: "amuleto.png",
    opciones: [
      { texto: "Regresar a la aldea", siguiente: "aldea" },
      { texto: "Ir al templo", siguiente: "templo" }
    ]
  },
  temploProfundo: {
    texto: "Exploras las profundidades del templo y descubres una cámara secreta con inscripciones antiguas. Mencionan una batalla ancestral contra la bestia del bosque y el poder del amuleto de la luna. ¿Qué haces?",
    imagen: "temploProfundo.png",
    opciones: [
      { texto: "Buscar el amuleto de la luna", siguiente: "santuario" },
      { texto: "Salir del templo y advertir a la aldea", siguiente: "aldea" }
    ]
  },
  finalHeroe: {
    texto: "Con la espada y el amuleto en tu poder, te enfrentas a la bestia en una batalla épica. Usando el poder combinado de ambos artefactos, logras derrotarla, liberando a la aldea del terror. Eres recordado como un héroe. Fin del juego.",
    imagen: "finalHeroe.png",
    opciones: []
  },
  finalOscuro: {
    texto: "Decides no intervenir en los eventos del bosque. La bestia sigue acechando y, con el tiempo, la aldea desaparece. Te conviertes en un errante sin propósito. Fin del juego.",
    imagen: "finalOscuro.png",
    opciones: []
  },
  enfrentarBestia: {
    texto: "Con valentía, corres hacia la bestia con tu arma en alto. La criatura ruge y se abalanza sobre ti con una velocidad sorprendente. Luchas con todo tu poder, pero sus garras son demasiado rápidas. En un último esfuerzo, logras herirla gravemente antes de que la oscuridad te envuelva. Tu sacrificio permite a los aldeanos acabar con la criatura. FIN.",
    imagen: "final_heroico.jpg",
    opciones: []
  },
  secretoAldea: {
    texto: "Observas desde las sombras mientras la bestia ataca. Sin embargo, notas algo extraño: los aldeanos no parecen asustados, sino que murmuran en un tono reverente. De repente, la bestia se detiene y uno de los ancianos le susurra algo. Descubres la terrible verdad: la bestia es parte de un antiguo pacto de la aldea. Antes de que puedas reaccionar, alguien te golpea por la espalda. Despiertas encadenado. Ahora eres parte del sacrificio. FIN.",
    imagen: "final_sacrificio.jpg",
    opciones: []
  },
  huidaAldea: {
    texto: "El miedo se apodera de ti y decides correr. Corres sin mirar atrás, escuchando los gritos de la aldea mientras la bestia los ataca. Finalmente, llegas al bosque, jadeando y agotado. Pero cuando el silencio vuelve, te das cuenta de que estás completamente solo en la oscuridad, y que algo más te está observando... FIN.",
    imagen: "final_huida.jpg",
    opciones: []
  },
  cuevaBestia: {
    texto: "Te adentras en la cueva, el aire es denso y el suelo está cubierto de huesos. Al fondo, ves un altar con inscripciones antiguas. De repente, la bestia emerge de las sombras. No hay escapatoria. Con un rugido final, la oscuridad te consume. FIN.",
    imagen: "final_cueva.jpg",
    opciones: []
  },
  trampaBestia: {
    texto: "Colocas cuidadosamente una trampa en la entrada de la cueva y esperas. Cuando la bestia sale, la trampa se activa y la criatura cae en un hoyo profundo. Los aldeanos celebran tu victoria y proclaman que eres el nuevo protector de la aldea. Sin embargo, en lo profundo del bosque, algo más despierta... FIN.",
    imagen: "final_trampa.jpg",
    opciones: []
  },
  combateBestia: {
    texto: "Te lanzas al combate directo contra la bestia. La batalla es feroz y brutal. Aunque logras asestar varios golpes, la criatura es demasiado fuerte. En un último ataque, la bestia te derriba y todo se oscurece. La aldea llora tu pérdida, pero tu valentía será recordada por generaciones. FIN.",
    imagen: "final_combate.jpg",
    opciones: []
  },
  estrategiaCaza: {
    texto: "Esperas el momento adecuado y, cuando la bestia se acerca, todos los cazadores atacan a la vez. La criatura queda atrapada en una red encantada y, con un golpe final, el líder de la caza la derriba. La aldea celebra su libertad, pero algunos ancianos advierten que la bestia no era el verdadero peligro... FIN.",
    imagen: "final_caza.jpg",
    opciones: []
  },
  domarBestia: {
    texto: "En lugar de atacar, extiendes tu mano con calma. La bestia gruñe, pero no ataca. Lentamente, se acerca y huele tu mano. Para sorpresa de todos, baja la cabeza en señal de respeto. Has logrado lo imposible: la bestia ahora es tu aliada. FIN.",
    imagen: "final_domar.jpg",
    opciones: []
  },
  visionEspiritus: {
    texto: "Aceptas la visión de los espíritus. Ante tus ojos, el pasado y el futuro se revelan: la bestia fue creada para proteger un antiguo secreto, y la aldea está condenada a repetir el mismo ciclo de destrucción. Comprendes que solo hay una manera de romper el ciclo. Cuando despiertas, sabes exactamente qué hacer... pero la historia se repetirá para otros. FIN.",
    imagen: "final_vision.jpg",
    opciones: []
  },
  artefactoEspiritus: {
    texto: "Desentierras un antiguo amuleto, y una energía cálida te envuelve. Con él, la bestia ya no es un peligro, sino un guardián que protege el equilibrio del bosque. Regresas a la aldea, pero en tu interior sabes que has cambiado. Ahora eres parte del bosque. FIN.",
    imagen: "final_artefacto.jpg",
    opciones: []
  },
  destinoPropio: {
    texto: "Ignoras los consejos de los espíritus y sigues tu propio camino. Confiando solo en tu instinto, te adentras en lo desconocido. Nadie sabe lo que te espera, pero al menos, tu destino es tuyo y de nadie más. FIN.",
    imagen: "final_destino.jpg",
    opciones: []
  }
};

export default historia;