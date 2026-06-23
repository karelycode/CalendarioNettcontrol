import { useState } from "react";

const TIPOS = {
  carrusel: { label: "Carrusel", icon: "📋", color: "#2d6a4f" },
  reel: { label: "Reel", icon: "🎬", color: "#1d3557" },
  portafolio: { label: "Portafolio", icon: "🏠", color: "#6b4c11" },
  editorial: { label: "Editorial", icon: "🖼️", color: "#4a1942" },
  conversion: { label: "Conversión", icon: "💬", color: "#8b0000" },
  educativo: { label: "Educativo", icon: "💡", color: "#0d6e6e" },
  detalle: { label: "Detalle", icon: "🔍", color: "#5a4a2a" },
  story: { label: "Historia", icon: "📱", color: "#2c3e50" },
};

const SEMANAS_TEMA = {
  1: "La confianza empieza en la planeación",
  2: "Integración que se siente simple",
  3: "Portafolio de espacios",
  4: "Confianza para decidir",
  5: "Cierre y continuidad",
};

// 2 piezas de feed por día (variadas) + 1 historia útil
const DIAS = [
  // ---------- SEMANA 1 ----------
  {
    fecha: 1,
    dia: "Mié",
    semana: 1,
    piezas: [
      {
        tipo: "carrusel",
        pilar: "Confianza técnica",
        titulo: "5 errores que aparecen cuando los sistemas se planean tarde",
        copy: "Terminas adaptando lo que debió diseñarse desde el inicio.\n\n1. Controles ubicados sin intención.\n2. Persianas sin preparación eléctrica.\n3. Red insuficiente para toda la casa.\n4. Sensores y cámaras mal colocados.\n5. Demasiadas apps para controlar todo.\n\nEn Nettcontrol planeamos sistemas que funcionan con la arquitectura, no contra ella.",
        hashtags: "#Nettcontrol #DomóticaResidencial #Lutron #Crestron",
        cta: "Guarda esto si estás en etapa de diseño.",
      },
      {
        tipo: "detalle",
        pilar: "Confianza estética",
        titulo: "Keypad discreto, integración limpia",
        copy: 'Close-up de un keypad embebido en muro sin saturar.\n\n"Un buen sistema no compite con la arquitectura. La acompaña."\n\nLos controles se ubican con intención. Lo que no se ve también sostiene la experiencia.',
        hashtags: "#Nettcontrol #DiseñoLimpio #Lutron #Interiorismo",
        cta: "Así se ve la integración bien hecha.",
      },
      {
        tipo: "story",
        titulo: "Encuesta de arranque",
        copy: 'Encuesta: "¿Tu proyecto está en obra, remodelación o ya terminado?"\n\nÚsala para segmentar y dar seguimiento por DM.',
      },
    ],
  },
  {
    fecha: 2,
    dia: "Jue",
    semana: 1,
    piezas: [
      {
        tipo: "reel",
        pilar: "Confianza técnica",
        titulo: "Qué revisamos antes de integrar una residencia",
        copy: "Antes de proponer cualquier sistema, revisamos cómo se vive el espacio.\n\nNo solo vemos planos. Vemos recorridos, hábitos, áreas sociales, privacidad, seguridad, iluminación y conectividad.\n\nIntegrar bien no es poner más controles. Es hacer que todo funcione con sentido.",
        hashtags: "#Nettcontrol #IntegracionResidencial #Crestron",
        cta: "¿Proyecto en obra? Cuéntanos 👇",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Por qué la red es la base de todo",
        copy: "Puedes tener los mejores equipos, pero si la red no está bien diseñada, nada responde bien.\n\nUna red residencial sólida es lo que permite que iluminación, cámaras, audio y control trabajen sin cortes.\n\nPor eso empezamos por ahí.",
        hashtags: "#Nettcontrol #RedResidencial #CasaInteligente",
        cta: "Guarda este dato antes de tu próxima obra.",
      },
      {
        tipo: "story",
        titulo: "Tip rápido",
        copy: 'Historia con dato técnico: "La domótica no se deja para el final. Se piensa desde obra." + sticker de link a asesoría.',
      },
    ],
  },
  {
    fecha: 3,
    dia: "Vie",
    semana: 1,
    piezas: [
      {
        tipo: "editorial",
        pilar: "Confianza técnica",
        titulo: '"Planear bien cuesta menos que corregir después."',
        copy: "Cuando la domótica se deja para el final, muchas veces hay que adaptar, romper, ocultar o corregir.\n\nPlanear desde el inicio hace que todo funcione con orden, estética y facilidad.",
        hashtags: "#Nettcontrol #Lutron #DiseñoResidencial",
        cta: "Empieza con una asesoría sin costo.",
      },
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Proyecto donde la red fue la base de todo",
        copy: "Antes de un solo equipo, diseñamos la red de esta residencia para soportar iluminación, seguridad, audio y control centralizado sin saturarse.\n\nResultado: todo responde al instante, sin importar cuántos sistemas trabajen a la vez.",
        hashtags: "#Nettcontrol #ProyectoReal #RedResidencial #Crestron",
        cta: "¿Tu red está lista para tu casa? Te ayudamos a revisarlo.",
      },
      {
        tipo: "story",
        titulo: "Detrás del proceso",
        copy: 'Behind the scenes: rack ordenado y cableado limpio.\n\n"Lo que no se ve también sostiene la experiencia."',
      },
    ],
  },
  {
    fecha: 4,
    dia: "Sáb",
    semana: 1,
    piezas: [
      {
        tipo: "detalle",
        pilar: "Confianza estética",
        titulo: "Antes / Después de un muro integrado",
        copy: "Mismo muro. Antes: cables y switches dispersos. Después: un solo keypad elegante que controla escenas completas.\n\nLa diferencia está en diseñar el sistema como parte del proyecto, no como un agregado de último momento.",
        hashtags: "#Nettcontrol #AntesYdespués #DiseñoLimpio",
        cta: "Tu casa puede verse así.",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Qué debe saber tu arquitecto antes de integrar iluminación",
        copy: "La iluminación inteligente no se resuelve al final con focos.\n\nSe planea: circuitos, ubicación de keypads, escenas por área y preparación eléctrica desde obra.\n\nCuando el arquitecto y el integrador hablan a tiempo, el resultado es impecable.",
        hashtags: "#Nettcontrol #Arquitectura #Lutron #Iluminacion",
        cta: "Comparte esto con tu arquitecto.",
      },
      {
        tipo: "story",
        titulo: "Prueba social",
        copy: 'Repost de un ambiente terminado: "Una residencia más funcionando como un solo sistema."',
      },
    ],
  },
  {
    fecha: 5,
    dia: "Dom",
    semana: 1,
    piezas: [
      {
        tipo: "reel",
        pilar: "Confianza en la vida diaria",
        titulo: "Llegar a casa y activar una escena",
        copy: "Una sola acción: las luces se ajustan, las persianas se abren, suena tu música y la temperatura ya es la correcta.\n\nNo son 5 apps. Es una escena pensada para cómo vives.",
        hashtags: "#Nettcontrol #EscenasInteligentes #Lutron",
        cta: "¿Cuál sería tu escena ideal? 👇",
      },
      {
        tipo: "editorial",
        pilar: "Confianza en la vida diaria",
        titulo: '"El mejor sistema es el que tu familia sí usa."',
        copy: "Un sistema puede ser muy avanzado, pero si nadie lo entiende, no funciona para la vida diaria.\n\nDiseñamos controles claros y escenas útiles para cada usuario de la casa.",
        hashtags: "#Nettcontrol #CasaInteligente",
        cta: "Cuéntanos cómo vives tu casa.",
      },
      {
        tipo: "story",
        titulo: "Caja de preguntas",
        copy: 'Sticker: "¿Qué te gustaría controlar desde un solo lugar?" Recopila respuestas para futuros posts.',
      },
    ],
  },

  // ---------- SEMANA 2 ----------
  {
    fecha: 6,
    dia: "Lun",
    semana: 2,
    piezas: [
      {
        tipo: "carrusel",
        pilar: "Vida diaria",
        titulo: "Tener muchas apps no es automatización",
        copy: "Tener 7 apps no es automatización. Es trabajo extra.\n\nUna para luces. Otra para persianas. Otra para cámaras. Otra para audio. Otra para clima.\n\nEl problema no es tener sistemas. Es que no trabajen juntos.\n\nEn Nettcontrol hacemos que todo responda como un solo sistema.",
        hashtags: "#Nettcontrol #ControlCentralizado #Crestron #Lutron",
        cta: "¿Cuántas apps usas hoy? Comenta.",
      },
      {
        tipo: "detalle",
        pilar: "Confianza estética",
        titulo: "Persianas automatizadas, instalación limpia",
        copy: "Persianas que bajan solas, sin cables visibles ni motores expuestos.\n\nLas persianas trabajan sin romper la estética. Esa es la diferencia entre instalar y integrar.",
        hashtags: "#Nettcontrol #PersianasAutomatizadas #Lutron #DiseñoLimpio",
        cta: "Detalles que hacen la diferencia.",
      },
      {
        tipo: "story",
        titulo: "Encuesta",
        copy: 'Encuesta: "¿Qué controlarías primero? Luces / Persianas / Audio / Seguridad"',
      },
    ],
  },
  {
    fecha: 7,
    dia: "Mar",
    semana: 2,
    piezas: [
      {
        tipo: "reel",
        pilar: "Vida diaria",
        titulo: "Una escena puede cambiar toda la casa",
        copy: "Escena llegada → luz de bienvenida, persianas abiertas, música suave.\nEscena cena → iluminación cálida, audio ambiental.\nEscena descanso → todo en bajo, clima ajustado.\nEscena fuera de casa → todo apagado, seguridad activa.",
        hashtags: "#Nettcontrol #EscenasInteligentes #Lutron #Crestron",
        cta: "¿Cuál querrías en tu casa? 👇",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "La diferencia entre automatizar e integrar",
        copy: "Automatizar es que algo se prenda solo.\nIntegrar es que iluminación, persianas, audio, clima y seguridad trabajen juntos con criterio.\n\nUno resuelve una tarea. El otro mejora cómo vives.",
        hashtags: "#Nettcontrol #Automatizacion #IntegracionResidencial",
        cta: "Guarda este carrusel.",
      },
      {
        tipo: "story",
        titulo: "CTA showroom",
        copy: 'Video corto del showroom + sticker de ubicación: "Ven a ver los sistemas antes de elegirlos."',
      },
    ],
  },
  {
    fecha: 8,
    dia: "Mié",
    semana: 2,
    piezas: [
      {
        tipo: "editorial",
        pilar: "Vida diaria",
        titulo:
          '"Una casa bien integrada no se siente más tecnológica. Se siente más fácil de vivir."',
        copy: "No se trata de tener más apps.\nSe trata de que iluminación, persianas, audio, clima y seguridad respondan de forma natural.",
        hashtags: "#Nettcontrol #DomóticaDeCalidad #Lutron",
        cta: "Visita el showroom. Link en bio.",
      },
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo:
          "Sala con integración de audio, luz y control desde una interfaz",
        copy: "Una sola interfaz controla iluminación, audio y persianas de esta sala.\n\nEl espacio cambia de intención sin cambiar de controles: recibir visitas, ver una película o cerrar la noche.",
        hashtags: "#Nettcontrol #SalaIntegrada #AudioVideo #Crestron",
        cta: "¿Tu sala merece esto? Agenda asesoría.",
      },
      {
        tipo: "story",
        titulo: "Tip rápido",
        copy: 'Dato: "Una integración bien diseñada centraliza el control y simplifica el uso diario."',
      },
    ],
  },
  {
    fecha: 9,
    dia: "Jue",
    semana: 2,
    piezas: [
      {
        tipo: "reel",
        pilar: "Autoridad",
        titulo: "Así planeamos un proyecto antes de instalar",
        copy: "Reunión, planos, recorrido del espacio, definición de escenas y preparación desde obra.\n\nEl trabajo más importante pasa antes de que llegue el primer equipo.",
        hashtags: "#Nettcontrol #Proceso #IntegracionResidencial",
        cta: "Así trabajamos cada proyecto.",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Por qué tener 7 apps no es control",
        copy: "Control no es abrir una app distinta para cada sistema.\n\nControl es que todo responda desde un solo lugar, de forma que cualquier persona de la casa lo entienda.\n\nEso es lo que diseñamos.",
        hashtags: "#Nettcontrol #ControlCentralizado #Crestron",
        cta: "¿Cuántas apps tienes para tu casa?",
      },
      {
        tipo: "story",
        titulo: "Autoridad de marca",
        copy: 'Historia con logo Lutron/Crestron + equipo instalado: "Las marcas que respaldan proyectos premium."',
      },
    ],
  },
  {
    fecha: 10,
    dia: "Vie",
    semana: 2,
    piezas: [
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Cocina integrada",
        copy: "Iluminación por tareas, persianas para controlar el sol y audio que acompaña sin estorbar.\n\nUna cocina que se adapta a cada momento del día con un solo toque.",
        hashtags: "#Nettcontrol #CocinaIntegrada #Lutron #DiseñoResidencial",
        cta: "Diseñemos tu cocina con criterio.",
      },
      {
        tipo: "editorial",
        pilar: "Vida diaria",
        titulo: '"Salir y apagar todo desde un solo botón."',
        copy: "Un solo gesto al salir: luces apagadas, clima en ahorro, persianas cerradas y seguridad activa.\n\nLa comodidad se vuelve parte de la rutina diaria.",
        hashtags: "#Nettcontrol #CasaInteligente #Seguridad",
        cta: "Imagina salir así de tu casa.",
      },
      {
        tipo: "story",
        titulo: "Prueba social",
        copy: "Testimonio o repost de cliente satisfecho. Refuerza confianza antes del fin de semana.",
      },
    ],
  },
  {
    fecha: 11,
    dia: "Sáb",
    semana: 2,
    piezas: [
      {
        tipo: "detalle",
        pilar: "Confianza estética",
        titulo: "Equipos ocultos, experiencia visible",
        copy: "El rack, los amplificadores y los equipos viven escondidos y ordenados.\n\nLo que ves es una casa limpia. Lo que no ves es lo que la hace funcionar.",
        hashtags: "#Nettcontrol #DiseñoLimpio #AudioVideo",
        cta: "La elegancia está en lo que no estorba.",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Por qué no conviene dejar la domótica para el final",
        copy: "Dejarla para el final significa adaptar, romper muros, ocultar cables a la fuerza o conformarse.\n\nPensada desde el inicio, la integración se siente simple porque fue planeada con criterio.",
        hashtags: "#Nettcontrol #Domotica #Obra #Lutron",
        cta: "Comparte con quien está por construir.",
      },
      {
        tipo: "story",
        titulo: "Encuesta",
        copy: 'Encuesta: "¿Empezarías tu casa inteligente por etapas o todo de una vez?"',
      },
    ],
  },
  {
    fecha: 12,
    dia: "Dom",
    semana: 2,
    piezas: [
      {
        tipo: "reel",
        pilar: "Vida diaria",
        titulo: "Simular presencia cuando no estás",
        copy: "La casa enciende luces, mueve persianas y simula actividad aunque no haya nadie.\n\nSeguridad real sin llenar la casa de elementos innecesarios.",
        hashtags: "#Nettcontrol #SeguridadResidencial #Lutron",
        cta: "Tranquilidad incluso cuando viajas.",
      },
      {
        tipo: "editorial",
        pilar: "Confianza estética",
        titulo: '"Un buen sistema no compite con la arquitectura."',
        copy: "Cuando la integración se planea bien, no invade el espacio. Lo acompaña.\n\nLos controles se ubican con intención. Las escenas respetan la atmósfera.",
        hashtags: "#Nettcontrol #Arquitectura #DiseñoLimpio",
        cta: "Integración que respeta tu diseño.",
      },
      {
        tipo: "story",
        titulo: "Caja de preguntas",
        copy: 'Sticker: "¿Qué es lo que más te frustra de tu casa hoy?" Material para futuros posts.',
      },
    ],
  },

  // ---------- SEMANA 3 ----------
  {
    fecha: 13,
    dia: "Lun",
    semana: 3,
    piezas: [
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Sala social integrada",
        copy: "Iluminación, audio, persianas y control centralizado desde una sola experiencia.\n\nEl espacio cambia de intención sin cambiar de controles: recibir visitas, ver una película, descansar.",
        hashtags: "#Nettcontrol #SalaIntegrada #Lutron #Crestron #AudioVideo",
        cta: "¿Tu sala merece esto? Agenda asesoría.",
      },
      {
        tipo: "detalle",
        pilar: "Confianza estética",
        titulo: "Escena de iluminación en acción",
        copy: "La misma sala con tres escenas distintas: reunión, película y noche.\n\nLas escenas respetan la atmósfera. La luz cambia el espacio sin que muevas un dedo.",
        hashtags: "#Nettcontrol #EscenasDeIluminacion #Lutron",
        cta: "La luz correcta para cada momento.",
      },
      {
        tipo: "story",
        titulo: "CTA asesoría",
        copy: 'Historia con botón: "Agenda tu asesoría gratuita 👆" + WhatsApp.',
      },
    ],
  },
  {
    fecha: 14,
    dia: "Mar",
    semana: 3,
    piezas: [
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Terraza lista para convivir",
        copy: "Escenas de iluminación, audio exterior, red estable y control desde un solo punto.\n\nUn espacio social que no depende de improvisar cada vez que hay reunión.",
        hashtags: "#Nettcontrol #TerrazaInteligente #AudioExterior #Lutron",
        cta: "Tu terraza puede vivirse diferente.",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Cómo pensar las escenas por área",
        copy: "Cada área de la casa necesita escenas distintas: la terraza no se vive igual que la recámara.\n\nDefinir esto desde el inicio es lo que hace que el sistema se sienta natural.",
        hashtags: "#Nettcontrol #EscenasInteligentes #IntegracionResidencial",
        cta: "Guarda esto para planear tu casa.",
      },
      {
        tipo: "story",
        titulo: "Antes / Después",
        copy: 'Terraza antes (cables, bocinas sueltas) y después (limpia, integrada). "Misma terraza. Otra forma de vivirla."',
      },
    ],
  },
  {
    fecha: 15,
    dia: "Mié",
    semana: 3,
    piezas: [
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Recámara con escenas de descanso",
        copy: "Persianas automatizadas, iluminación cálida, control de clima y escena nocturna.\n\nLa comodidad se vuelve parte de la rutina diaria.",
        hashtags: "#Nettcontrol #RecamaraInteligente #Lutron #DiseñoInterior",
        cta: "¿Estás construyendo? Este es el momento.",
      },
      {
        tipo: "reel",
        pilar: "Vida diaria",
        titulo: "Despertar con la casa a tu favor",
        copy: "Las persianas abren gradualmente, la luz sube suave y la temperatura ya es la correcta.\n\nLa recámara responde a tu rutina, no al revés.",
        hashtags: "#Nettcontrol #RecamaraInteligente #Lutron",
        cta: "Imagina despertar así.",
      },
      {
        tipo: "story",
        titulo: "Tip rápido",
        copy: 'Dato: "La iluminación cálida y las persianas automatizadas mejoran el descanso real."',
      },
    ],
  },
  {
    fecha: 16,
    dia: "Jue",
    semana: 3,
    piezas: [
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Home office integrado",
        copy: "Iluminación de concentración, control de clima, persianas anti-reflejo y red estable para videollamadas.\n\nUn espacio de trabajo que se ajusta a tu día con un solo toque.",
        hashtags: "#Nettcontrol #HomeOffice #Lutron #RedResidencial",
        cta: "Diseñemos tu espacio de trabajo.",
      },
      {
        tipo: "detalle",
        pilar: "Confianza estética",
        titulo: "Pantalla de control embebida",
        copy: "Una pantalla Crestron integrada al muro, al alcance pero sin estorbar.\n\nControl completo de la casa en un punto que se ve como parte del diseño.",
        hashtags: "#Nettcontrol #Crestron #ControlCentralizado #DiseñoLimpio",
        cta: "Tecnología que se integra al espacio.",
      },
      {
        tipo: "story",
        titulo: "Autoridad de marca",
        copy: "Historia mostrando integración Crestron + texto sobre escalabilidad y precisión.",
      },
    ],
  },
  {
    fecha: 17,
    dia: "Vie",
    semana: 3,
    piezas: [
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Cine en casa",
        copy: "Audio envolvente, persianas blackout, escena de proyección y control desde un solo botón.\n\nLa experiencia de sala comercial, en la intimidad de tu residencia.",
        hashtags: "#Nettcontrol #CineEnCasa #AudioVideo #Crestron",
        cta: "Tu sala de cine empieza con una asesoría.",
      },
      {
        tipo: "editorial",
        pilar: "Portafolio",
        titulo:
          '"Una residencia bien integrada se siente más simple, no más complicada."',
        copy: "Cada espacio resuelto: sala, terraza, recámara, cocina, home office, cine.\n\nTodos hablando el mismo idioma, controlados desde una sola experiencia.",
        hashtags: "#Nettcontrol #IntegracionResidencial #Lutron #Crestron",
        cta: "Imagina tu casa completa así.",
      },
      {
        tipo: "story",
        titulo: "CTA showroom",
        copy: 'Mood del showroom + "Ven a vivir la experiencia antes de decidir."',
      },
    ],
  },
  {
    fecha: 18,
    dia: "Sáb",
    semana: 3,
    piezas: [
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Fachada y accesos integrados",
        copy: "Iluminación arquitectónica, control de accesos y cámaras que trabajan con el resto de la casa.\n\nLa primera impresión y la seguridad, resueltas con el mismo criterio.",
        hashtags: "#Nettcontrol #Fachada #Seguridad #Iluminacion",
        cta: "Tu fachada también comunica.",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Ubicación correcta de sensores, keypads y pantallas",
        copy: "Un keypad mal ubicado se vuelve un estorbo. Un sensor mal puesto, una molestia.\n\nLa colocación se decide con planos y recorrido, no improvisando en sitio.",
        hashtags: "#Nettcontrol #Domotica #DiseñoResidencial",
        cta: "Detalles que solo se ven con experiencia.",
      },
      {
        tipo: "story",
        titulo: "Prueba social",
        copy: "Repost de proyecto terminado o etiqueta de cliente.",
      },
    ],
  },
  {
    fecha: 19,
    dia: "Dom",
    semana: 3,
    piezas: [
      {
        tipo: "reel",
        pilar: "Autoridad",
        titulo: "Recorrido por el showroom",
        copy: "Escenas de iluminación cambiando, persianas, audio y control centralizado en vivo.\n\nAntes de elegir sistemas, conviene verlos en acción.",
        hashtags: "#Nettcontrol #Showroom #Lutron #Crestron",
        cta: "Agenda tu visita gratuita.",
      },
      {
        tipo: "editorial",
        pilar: "Portafolio",
        titulo: '"Diseñamos experiencias de uso diario, no sistemas aislados."',
        copy: "Cada residencia tiene rutinas, áreas y usuarios distintos.\n\nPor eso no proponemos sistemas genéricos: diseñamos soluciones que responden a tu arquitectura y tu forma de vivir.",
        hashtags: "#Nettcontrol #IntegracionResidencial",
        cta: "Hablemos de tu proyecto.",
      },
      {
        tipo: "story",
        titulo: "Caja de preguntas",
        copy: 'Sticker: "¿Qué espacio de tu casa integrarías primero?"',
      },
    ],
  },

  // ---------- SEMANA 4 ----------
  {
    fecha: 20,
    dia: "Lun",
    semana: 4,
    piezas: [
      {
        tipo: "carrusel",
        pilar: "Conversión",
        titulo: "Antes de contratar domótica, pregúntate esto",
        copy: "¿Quién va a usar el sistema todos los días?\n¿Qué áreas necesitan control real?\n¿Qué sistemas deben trabajar juntos?\n¿La red está preparada?\n¿Se puede crecer por etapas?\n¿El diseño respeta la arquitectura?\n¿Habrá soporte después de la instalación?\n\nEn Nettcontrol te ayudamos a responder esto antes de instalar.",
        hashtags: "#Nettcontrol #Domotica #Lutron #Crestron",
        cta: "Guarda antes de tu junta con el arquitecto.",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "¿Se puede crecer por etapas?",
        copy: "Sí. Una integración bien diseñada deja la red y la preparación listas para crecer.\n\nEmpiezas por lo prioritario y sumas sistemas sin rehacer lo anterior.",
        hashtags: "#Nettcontrol #DomóticaPorEtapas #IntegracionResidencial",
        cta: "Pregúntanos cómo empezar por etapas.",
      },
      {
        tipo: "story",
        titulo: "Encuesta",
        copy: 'Encuesta: "¿Qué te frena más al integrar tu casa? Precio / Complejidad / No saber por dónde empezar"',
      },
    ],
  },
  {
    fecha: 21,
    dia: "Mar",
    semana: 4,
    piezas: [
      {
        tipo: "reel",
        pilar: "Autoridad",
        titulo: "Por qué trabajamos con Lutron y Crestron",
        copy: "Una residencia premium necesita sistemas estables. No solo controles bonitos.\n\nNecesita respaldo, escalabilidad y precisión.\n\nLutron lleva iluminación y persianas a otro nivel. Crestron centraliza experiencias completas.\n\nCon Nettcontrol estás contratando criterio, no solo equipos.",
        hashtags: "#Nettcontrol #Lutron #Crestron #IntegracionResidencial",
        cta: "¿Qué sistema es el indicado para ti? Escríbenos.",
      },
      {
        tipo: "detalle",
        pilar: "Confianza / autoridad",
        titulo: "La importancia del soporte después de la instalación",
        copy: "El proyecto no termina cuando se instala. Empieza a vivirse.\n\nPor eso acompañamos antes, durante y después: ajustes, soporte y mejoras conforme cambia tu vida.",
        hashtags: "#Nettcontrol #Soporte #Acompañamiento",
        cta: "Contratas criterio y respaldo, no solo equipos.",
      },
      {
        tipo: "story",
        titulo: "Autoridad de marca",
        copy: "Historia con equipos Lutron/Crestron + dato de respaldo.",
      },
    ],
  },
  {
    fecha: 22,
    dia: "Mié",
    semana: 4,
    piezas: [
      {
        tipo: "conversion",
        pilar: "Conversión",
        titulo: "¿Estás diseñando, construyendo o remodelando una residencia?",
        copy: "Este es el mejor momento para planear iluminación, persianas, seguridad, audio, red y control centralizado.\n\nAntes de instalar, conviene saber qué integrar.\nAgenda un diagnóstico con Nettcontrol y planea tu residencia con una visión completa.",
        hashtags: "#Nettcontrol #DiagnósticoGratuito #Lutron #Crestron",
        cta: "Link en bio para agendar sin costo.",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Qué revisar con tu arquitecto, diseñador o constructor",
        copy: "Antes de avanzar, alinea: dónde van los controles, qué escenas necesita cada área, cómo se conectan los sistemas y qué debe quedar preparado desde obra.\n\nEsa conversación a tiempo te ahorra correcciones costosas.",
        hashtags: "#Nettcontrol #Arquitectura #Obra #Lutron",
        cta: "Te acompañamos en esa conversación.",
      },
      {
        tipo: "story",
        titulo: "CTA diagnóstico",
        copy: 'Historia: "Trae tu plano y revisamos qué integrar." + botón WhatsApp.',
      },
    ],
  },
  {
    fecha: 23,
    dia: "Jue",
    semana: 4,
    piezas: [
      {
        tipo: "editorial",
        pilar: "Confianza",
        titulo:
          '"Con Nettcontrol estás contratando criterio, no solo equipos."',
        copy: "El cliente premium no quiere sentir que está comprando gadgets.\n\nQuiere a alguien que entiende su casa, su arquitectura, su inversión y su vida diaria.",
        hashtags: "#Nettcontrol #IntegracionResidencial #Lutron #Crestron",
        cta: "Hablemos de tu proyecto.",
      },
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Residencia completa integrada",
        copy: "Iluminación, persianas, audio, seguridad, clima y red funcionando como un solo sistema en toda la casa.\n\nUna residencia que funciona mejor, se ve mejor y es más fácil de vivir.",
        hashtags: "#Nettcontrol #ResidenciaCompleta #Crestron #Lutron",
        cta: "Tu residencia completa, con un solo criterio.",
      },
      {
        tipo: "story",
        titulo: "Prueba social",
        copy: "Repost de proyecto integral terminado.",
      },
    ],
  },
  {
    fecha: 24,
    dia: "Vie",
    semana: 4,
    piezas: [
      {
        tipo: "conversion",
        pilar: "Conversión",
        titulo: "Diagnóstico de integración residencial",
        copy: "Trae tu plano o cuéntanos sobre tu proyecto y revisamos qué sistemas conviene planear: iluminación, persianas, seguridad, audio, red, clima y control centralizado.\n\nAntes de instalar, conviene saber qué integrar.",
        hashtags: "#Nettcontrol #DiagnósticoResidencial #Lutron #Crestron",
        cta: "Agenda tu diagnóstico. Link en bio.",
      },
      {
        tipo: "carrusel",
        pilar: "Conversión",
        titulo: "Guía para planear sistemas antes de construir o remodelar",
        copy: "Qué sistemas definir desde el inicio.\nQué errores evitar.\nCómo planear iluminación y persianas.\nQué considerar para seguridad.\nPor qué la red es la base de todo.\nCómo pensar escenas por área.\n\nDéjanos tu contacto y recibe la guía completa.",
        hashtags: "#Nettcontrol #GuíaGratuita #IntegracionResidencial",
        cta: 'Comenta "GUÍA" y te la enviamos.',
      },
      {
        tipo: "story",
        titulo: "CTA lead magnet",
        copy: "Historia promocionando la guía gratuita + sticker de link.",
      },
    ],
  },
  {
    fecha: 25,
    dia: "Sáb",
    semana: 4,
    piezas: [
      {
        tipo: "detalle",
        pilar: "Confianza estética",
        titulo: "Detalles que sostienen la experiencia",
        copy: 'Luminarias alineadas, sensores discretos, rack ordenado, cableado invisible.\n\n"Lo que no se ve también sostiene la experiencia."',
        hashtags: "#Nettcontrol #DiseñoLimpio #DetallesTécnicos",
        cta: "La calidad está en los detalles.",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Qué considerar para la seguridad de tu residencia",
        copy: "Seguridad integrada no es llenar la casa de cámaras.\n\nEs cámaras bien ubicadas, accesos controlados, simulación de presencia y todo trabajando con el resto del sistema.",
        hashtags: "#Nettcontrol #SeguridadResidencial #Crestron",
        cta: "Hablemos de la seguridad de tu casa.",
      },
      {
        tipo: "story",
        titulo: "Encuesta",
        copy: 'Encuesta: "¿Qué te daría más tranquilidad? Cámaras / Accesos / Simulación de presencia"',
      },
    ],
  },
  {
    fecha: 26,
    dia: "Dom",
    semana: 4,
    piezas: [
      {
        tipo: "editorial",
        pilar: "Conversión",
        titulo:
          '"Integramos sistemas para que tu residencia funcione mejor, se vea mejor y sea más fácil de vivir."',
        copy: "La gran idea de Nettcontrol, resumida en una frase.\n\nNo gadgets. Criterio, planeación y una casa que responde a tu vida.",
        hashtags: "#Nettcontrol #IntegracionResidencial #Lutron #Crestron",
        cta: "Agenda tu diagnóstico.",
      },
      {
        tipo: "reel",
        pilar: "Vida diaria",
        titulo: "Cerrar la casa por la noche con un botón",
        copy: "Luces apagadas, persianas cerradas, clima nocturno y seguridad activa.\n\nUna sola acción para cerrar el día con tranquilidad.",
        hashtags: "#Nettcontrol #EscenaNocturna #Seguridad #Lutron",
        cta: "Termina tu día así.",
      },
      {
        tipo: "story",
        titulo: "CTA múltiple",
        copy: '3 stories: "Trae tu plano / Agenda asesoría / Visita showroom." con botones.',
      },
    ],
  },

  // ---------- SEMANA 5 (cierre) ----------
  {
    fecha: 27,
    dia: "Lun",
    semana: 5,
    piezas: [
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Jardín y áreas exteriores",
        copy: "Iluminación arquitectónica de jardín, riego y audio exterior integrados al control de la casa.\n\nEl exterior también merece criterio.",
        hashtags: "#Nettcontrol #JardínInteligente #Iluminacion #AudioExterior",
        cta: "Tu exterior, con la misma calidad que tu interior.",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Cuánto mantenimiento requiere un sistema integrado",
        copy: "Menos del que imaginas, cuando está bien diseñado.\n\nSistemas estables como Lutron y Crestron requieren ajustes mínimos, y nosotros damos el soporte.",
        hashtags: "#Nettcontrol #Mantenimiento #Soporte #Crestron",
        cta: "Resolvemos tus dudas de mantenimiento.",
      },
      {
        tipo: "story",
        titulo: "Tip rápido",
        copy: 'Dato: "Un sistema bien diseñado se mantiene solo. Tú solo lo disfrutas."',
      },
    ],
  },
  {
    fecha: 28,
    dia: "Mar",
    semana: 5,
    piezas: [
      {
        tipo: "reel",
        pilar: "Autoridad",
        titulo: "Qué revisamos antes de proponer una solución",
        copy: "No proponemos nada sin entender cómo vives.\n\nPlanos, recorrido, hábitos, prioridades y presupuesto. Recién entonces diseñamos.",
        hashtags: "#Nettcontrol #Proceso #IntegracionResidencial",
        cta: "Así trabajamos cada proyecto.",
      },
      {
        tipo: "detalle",
        pilar: "Confianza estética",
        titulo: "Integración sin saturar muros",
        copy: "Un solo keypad reemplaza filas de apagadores.\n\nMenos elementos en el muro, más control. Diseño limpio y funcional.",
        hashtags: "#Nettcontrol #DiseñoLimpio #Lutron",
        cta: "Menos es más, también en tus muros.",
      },
      {
        tipo: "story",
        titulo: "Prueba social",
        copy: "Repost de cliente o ambiente terminado.",
      },
    ],
  },
  {
    fecha: 29,
    dia: "Mié",
    semana: 5,
    piezas: [
      {
        tipo: "carrusel",
        pilar: "Educación",
        titulo:
          "Cómo se conectan iluminación, persianas, seguridad, audio y red",
        copy: "No son sistemas separados: comparten una red y un cerebro central.\n\nCuando se diseñan juntos, una sola escena puede mover varios a la vez sin conflictos.\n\nEso es integrar de verdad.",
        hashtags: "#Nettcontrol #ControlCentralizado #Crestron #Lutron",
        cta: "Guarda este carrusel para entender la integración.",
      },
      {
        tipo: "editorial",
        pilar: "Confianza",
        titulo:
          '"No todo lo que se puede automatizar debería automatizarse igual."',
        copy: "Cada residencia tiene rutinas, áreas y usuarios distintos.\n\nPor eso no proponemos sistemas genéricos. Diseñamos según cómo cada cliente quiere vivir su espacio.",
        hashtags: "#Nettcontrol #IntegracionResidencial",
        cta: "Diseñamos para ti, no en serie.",
      },
      {
        tipo: "story",
        titulo: "Caja de preguntas",
        copy: 'Sticker: "¿Qué dudas tienes sobre integrar tu casa?" Las respondes en stories.',
      },
    ],
  },
  {
    fecha: 30,
    dia: "Jue",
    semana: 5,
    piezas: [
      {
        tipo: "portafolio",
        pilar: "Portafolio",
        titulo: "Proyecto en obra: preparado desde el inicio",
        copy: "Así se ve una residencia preparada desde obra: ductos, red y puntos listos antes del acabado.\n\nLo que se planea bien desde el principio, se vive sin complicaciones después.",
        hashtags: "#Nettcontrol #ProyectoEnObra #RedResidencial",
        cta: "¿Tu obra está preparada para integrar?",
      },
      {
        tipo: "educativo",
        pilar: "Educación",
        titulo: "Qué debe quedar preparado desde obra",
        copy: "Ductos, puntos de red, preparación eléctrica para persianas, ubicación de keypads y pantallas.\n\nSi esto queda listo en obra, la integración final es limpia y sin sorpresas.",
        hashtags: "#Nettcontrol #Obra #IntegracionResidencial #Lutron",
        cta: "Planea tu obra con nosotros desde hoy.",
      },
      {
        tipo: "story",
        titulo: "Autoridad de marca",
        copy: "Historia mostrando preparación profesional + marcas.",
      },
    ],
  },
  {
    fecha: 31,
    dia: "Vie",
    semana: 5,
    piezas: [
      {
        tipo: "conversion",
        pilar: "Conversión",
        titulo: "Cierre de julio: planea tu residencia con criterio",
        copy: "Este mes hablamos de planeación, integración y portafolio.\n\nEl siguiente paso es tuyo: trae tu plano o cuéntanos sobre tu proyecto y revisamos qué sistemas conviene planear.",
        hashtags: "#Nettcontrol #DiagnósticoResidencial #Lutron #Crestron",
        cta: "Agenda tu diagnóstico. Link en bio.",
      },
      {
        tipo: "editorial",
        pilar: "Confianza",
        titulo:
          '"Una buena integración no se nota por lo complicada que es. Se nota porque todo responde con naturalidad."',
        copy: "Cerramos julio con el mensaje que guía todo lo que hacemos.\n\nIntegrar no es instalar más. Es hacer que todo trabaje junto.",
        hashtags: "#Nettcontrol #IntegracionResidencial #Lutron #Crestron",
        cta: "Empieza tu proyecto con criterio.",
      },
      {
        tipo: "story",
        titulo: "CTA de cierre",
        copy: "Historia final del mes con botón de agenda + recordatorio de la guía gratuita.",
      },
    ],
  },
];

const DIAS_SEMANA = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export default function CalendarioMes() {
  const [diaSel, setDiaSel] = useState(1);
  const [piezaSel, setPiezaSel] = useState(0);

  const offset = 2; // julio 2026 empieza miércoles
  const celdas = [...Array(offset).fill(null), ...DIAS];
  const diaActivo = DIAS.find((d) => d.fecha === diaSel);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: "#0d0d0d",
        minHeight: "100vh",
        color: "#f0ece4",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #0d0d0d, #1a1208)",
          borderBottom: "1px solid #2a2010",
          padding: "24px 20px 18px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              color: "#C8A96E",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            Nettcontrol · Calendario julio 2026
          </div>
          <h1
            style={{
              fontSize: 21,
              fontWeight: 700,
              margin: 0,
              color: "#f5f0e8",
              lineHeight: 1.2,
            }}
          >
            "Integrar bien se nota todos los días"
          </h1>
          <p style={{ color: "#9a8a6a", fontSize: 12, margin: "6px 0 0" }}>
            31 días · 2 publicaciones de feed + 1 historia de apoyo por día ·
            toca un día para ver los copys
          </p>
          <div
            style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}
          >
            {Object.entries(TIPOS).map(([k, t]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRadius: 6,
                  padding: "4px 9px",
                }}
              >
                <span style={{ fontSize: 13 }}>{t.icon}</span>
                <span style={{ fontSize: 11, color: "#c8b89a" }}>
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: 900, margin: "0 auto", padding: "18px 16px 40px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 4,
            marginBottom: 6,
          }}
        >
          {DIAS_SEMANA.map((d) => (
            <div
              key={d}
              style={{
                textAlign: "center",
                fontSize: 10,
                color: "#6a6a6a",
                textTransform: "uppercase",
                letterSpacing: 1,
                padding: "4px 0",
              }}
            >
              {d}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 4,
          }}
        >
          {celdas.map((dia, i) => {
            if (!dia) return <div key={`e${i}`} />;
            const feedCount = dia.piezas.filter(
              (p) => p.tipo !== "story",
            ).length;
            const storyCount = dia.piezas.filter(
              (p) => p.tipo === "story",
            ).length;
            const sel = diaSel === dia.fecha;
            return (
              <button
                key={dia.fecha}
                onClick={() => {
                  setDiaSel(dia.fecha);
                  setPiezaSel(0);
                }}
                style={{
                  aspectRatio: "1",
                  background: sel
                    ? "linear-gradient(135deg, #2a2010, #1a1208)"
                    : "#141414",
                  border: sel ? "1.5px solid #C8A96E" : "1px solid #222",
                  borderRadius: 8,
                  cursor: "pointer",
                  padding: "5px 4px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  transition: "all 0.15s",
                  minHeight: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: sel ? "#C8A96E" : "#e0d8c8",
                  }}
                >
                  {dia.fecha}
                </span>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  {dia.piezas.map((p, j) => (
                    <span key={j} style={{ fontSize: 9, lineHeight: 1 }}>
                      {TIPOS[p.tipo].icon}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: 8, color: "#6a6a6a" }}>
                  {feedCount}f · {storyCount}h
                </span>
              </button>
            );
          })}
        </div>

        {diaActivo && (
          <div style={{ marginTop: 18 }}>
            <div
              style={{
                background: "linear-gradient(135deg, #1a1208, #0d0d0d)",
                border: "1px solid #2a2010",
                borderRadius: 12,
                padding: "16px 18px",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                <div>
                  <div
                    style={{ fontSize: 18, fontWeight: 700, color: "#f5f0e8" }}
                  >
                    {diaActivo.dia} {diaActivo.fecha} de julio
                  </div>
                  <div style={{ fontSize: 11, color: "#C8A96E", marginTop: 2 }}>
                    Semana {diaActivo.semana} · {SEMANAS_TEMA[diaActivo.semana]}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#9a8a6a",
                    background: "#1a1a1a",
                    padding: "5px 12px",
                    borderRadius: 20,
                    border: "1px solid #2a2a2a",
                  }}
                >
                  {diaActivo.piezas.filter((p) => p.tipo !== "story").length}{" "}
                  feed ·{" "}
                  {diaActivo.piezas.filter((p) => p.tipo === "story").length}{" "}
                  historia
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {diaActivo.piezas.map((p, i) => {
                const t = TIPOS[p.tipo];
                const abierto = piezaSel === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: "#141414",
                      border: `1px solid ${abierto ? t.color : "#222"}`,
                      borderRadius: 10,
                      overflow: "hidden",
                      transition: "border 0.2s",
                    }}
                  >
                    <button
                      onClick={() => setPiezaSel(abierto ? -1 : i)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        padding: "13px 16px",
                        display: "flex",
                        gap: 12,
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: 20, flexShrink: 0 }}>
                        {t.icon}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            gap: 6,
                            alignItems: "center",
                            marginBottom: 3,
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 10,
                              color: p.tipo === "story" ? "#7a96b8" : "#C8A96E",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: 1,
                            }}
                          >
                            {t.label}
                          </span>
                          {p.pilar && (
                            <span
                              style={{
                                fontSize: 9,
                                background: "#1e1e1e",
                                color: "#9a8a6a",
                                padding: "1px 7px",
                                borderRadius: 12,
                              }}
                            >
                              {p.pilar}
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#e8e0d0",
                            fontWeight: 600,
                            lineHeight: 1.35,
                          }}
                        >
                          {p.titulo}
                        </div>
                      </div>
                      <span
                        style={{
                          color: "#C8A96E",
                          fontSize: 14,
                          flexShrink: 0,
                          transform: abierto ? "rotate(90deg)" : "none",
                          transition: "transform 0.2s",
                        }}
                      >
                        ›
                      </span>
                    </button>
                    {abierto && (
                      <div
                        style={{
                          padding: "0 16px 16px",
                          borderTop: "1px solid #1e1e1e",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 9,
                            letterSpacing: 2,
                            color: "#C8A96E",
                            textTransform: "uppercase",
                            margin: "12px 0 6px",
                          }}
                        >
                          Copy
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#d8d0c0",
                            lineHeight: 1.7,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {p.copy}
                        </div>
                        {p.cta && (
                          <div
                            style={{
                              marginTop: 10,
                              background: "#0d150d",
                              border: "1px solid #1e2e1e",
                              borderRadius: 8,
                              padding: "9px 12px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: 9,
                                color: "#4ade80",
                                textTransform: "uppercase",
                                letterSpacing: 1,
                              }}
                            >
                              CTA ·{" "}
                            </span>
                            <span style={{ fontSize: 12, color: "#a8d8a8" }}>
                              {p.cta}
                            </span>
                          </div>
                        )}
                        {p.hashtags && (
                          <div
                            style={{
                              marginTop: 8,
                              fontSize: 11,
                              color: "#7a7aaa",
                              lineHeight: 1.6,
                            }}
                          >
                            {p.hashtags}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          borderTop: "1px solid #1a1a1a",
          padding: "14px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 11, color: "#4a4a4a", letterSpacing: 1 }}>
          NETTCONTROL · "Con Nettcontrol estás contratando criterio, no solo
          equipos."
        </div>
      </div>
    </div>
  );
}
