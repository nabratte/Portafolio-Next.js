const historia = {
    inicio: {
      texto: "Te despiertas en un bosque oscuro y denso. El aire es frío y el silencio solo se rompe por el crujido de ramas y susurros lejanos. No recuerdas cómo llegaste aquí, pero algo te dice que no estás solo. ¿Qué haces?",
      opciones: [
        { texto: "Seguir el camino de la izquierda, donde parece haber un resplandor tenue", siguiente: "templo" },
        { texto: "Seguir el camino de la derecha, donde escuchas murmullos distantes", siguiente: "aldea" },
        { texto: "Quedarte quieto y observar tu entorno con más atención", siguiente: "misterio" }
      ]
    },
    templo: {
      texto: "Sigues el resplandor y llegas a un antiguo templo en ruinas. Las paredes están cubiertas de musgo y símbolos extraños. En el centro, sobre un pedestal, hay una espada brillante que emana una energía inquietante. ¿Qué haces?",
      opciones: [
        { texto: "Tomar la espada", siguiente: "espada" },
        { texto: "Ignorar la espada y explorar el templo con más cuidado", siguiente: "exploracion" },
        { texto: "Salir del templo y regresar al bosque", siguiente: "regresoBosque" }
      ]
    },
    aldea: {
      texto: "Sigues los murmullos y llegas a una pequeña aldea rodeada por una empalizada. Los aldeanos te reciben con miradas curiosas, pero pronto te advierten: 'Hay una bestia que acecha en el bosque. Solo aparece de noche y ha desaparecido a varios de los nuestros.' ¿Qué haces?",
      opciones: [
        { texto: "Pedir más información sobre la bestia", siguiente: "informacion" },
        { texto: "Ofrecer tu ayuda para cazar a la bestia", siguiente: "cazaBestia" },
        { texto: "Ignorar la advertencia y seguir tu camino", siguiente: "peligro" }
      ]
    },
    misterio: {
      texto: "Decides quedarte quieto y observar. Después de unos minutos, notas que los susurros provienen de pequeñas criaturas escondidas entre los árboles. Parecen espíritus del bosque. Una de ellas se acerca y te susurra: 'El templo es una trampa, pero la aldea también tiene sus secretos. Elige sabiamente.' ¿Qué haces?",
      opciones: [
        { texto: "Seguir el camino de la izquierda hacia el templo", siguiente: "templo" },
        { texto: "Seguir el camino de la derecha hacia la aldea", siguiente: "aldea" },
        { texto: "Preguntar a los espíritus qué deberías hacer", siguiente: "espiritus" }
      ]
    },
    espada: {
      texto: "Tomas la espada y de inmediato sientes una oleada de poder recorrer tu cuerpo. La hoja brilla con una luz intensa, y escuchas una voz en tu mente: 'Eres el elegido. El destino del reino está en tus manos.' ¿Qué haces?",
      opciones: [
        { texto: "Salir del templo y buscar respuestas en la aldea", siguiente: "aldea" },
        { texto: "Explorar más a fondo el templo", siguiente: "temploProfundo" },
        { texto: "Quedarte en el templo y meditar sobre el mensaje", siguiente: "meditacion" }
      ]
    },
    exploracion: {
      texto: "Decides ignorar la espada y explorar el templo con más cuidado. Mientras caminas, el suelo comienza a temblar. De repente, el piso se derrumba y caes en una trampa mortal. Fin del juego.",
      opciones: []
    },
    regresoBosque: {
      texto: "Decides que el templo no es seguro y regresas al bosque. Al salir, te encuentras con un grupo de viajeros que parecen perdidos. Te ofrecen unirse a ellos en su búsqueda de un santuario oculto. ¿Qué haces?",
      opciones: [
        { texto: "Unirte a los viajeros", siguiente: "santuario" },
        { texto: "Continuar solo por el bosque", siguiente: "bosqueProfundo" }
      ]
    },
    informacion: {
      texto: "Los aldeanos te cuentan que la bestia solo ataca de noche y que parece ser invulnerable a las armas comunes. También mencionan que un antiguo artefacto en el templo podría ser la clave para derrotarla. ¿Qué haces?",
      opciones: [
        { texto: "Descansar en la aldea y prepararte para la noche", siguiente: "nocheAldea" },
        { texto: "Ir al templo en busca del artefacto", siguiente: "templo" },
        { texto: "Buscar pistas sobre la bestia en los alrededores", siguiente: "pistasBestia" }
      ]
    },
    cazaBestia: {
      texto: "Ofreces tu ayuda para cazar a la bestia. Los aldeanos te dan provisiones y te advierten que no subestimes a la criatura. Te unes a un grupo de cazadores y parten al bosque. ¿Qué haces?",
      opciones: [
        { texto: "Seguir el rastro de la bestia", siguiente: "rastroBestia" },
        { texto: "Esperar en una emboscada", siguiente: "emboscada" }
      ]
    },
    peligro: {
      texto: "Ignoras la advertencia y decides seguir tu camino. Al adentrarte en el bosque, escuchas un rugido ensordecedor. La bestia te ataca y no logras defenderte. Fin del juego.",
      opciones: []
    },
    espiritus: {
      texto: "Los espíritus te dicen: 'El templo guarda un poder antiguo, pero también un gran peligro. La aldea esconde secretos que podrían ayudarte, pero confiar en ellos podría ser un error.' ¿Qué haces?",
      opciones: [
        { texto: "Ir al templo", siguiente: "templo" },
        { texto: "Ir a la aldea", siguiente: "aldea" },
        { texto: "Pedir más consejo a los espíritus", siguiente: "espiritus2" }
      ]
    },
    espiritus2: {
      texto: "Los espíritus susurran: 'Busca el amuleto de la luna en el santuario oculto. Solo con él podrás enfrentar lo que viene.' ¿Qué haces?",
      opciones: [
        { texto: "Buscar el santuario oculto", siguiente: "santuario" },
        { texto: "Ignorar el consejo y seguir tu instinto", siguiente: "inicio" }
      ]
    },
    santuario: {
      texto: "Siguiendo las indicaciones de los espíritus, encuentras un santuario oculto en lo profundo del bosque. En el centro, hay un amuleto que brilla con una luz plateada. ¿Qué haces?",
      opciones: [
        { texto: "Tomar el amuleto", siguiente: "amuletoTomado" },
        { texto: "Observar el santuario con cuidado antes de actuar", siguiente: "santuarioObservado" }
      ]
    },
    amuletoTomado: {
      texto: "Al tomar el amuleto, sientes una conexión inmediata con el bosque. Los espíritus te susurran: 'Ahora estás listo.' ¿Qué haces?",
      opciones: [
        { texto: "Regresar a la aldea", siguiente: "aldea" },
        { texto: "Ir al templo", siguiente: "templo" }
      ]
    },
    santuarioObservado: {
      texto: "Decides observar el santuario con cuidado. Notas que hay trampas ocultas y logras desactivarlas. Al tomar el amuleto, te sientes protegido por una energía mística. ¿Qué haces?",
      opciones: [
        { texto: "Regresar a la aldea", siguiente: "aldea" },
        { texto: "Ir al templo", siguiente: "templo" }
      ]
    }
  };
  
  export default historia;