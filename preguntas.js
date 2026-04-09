const preguntas = [
  
  /* 1 */
{
  tipo: "rellenar",
  pregunta: "Relacione estas porciones de músculos con las especies en las que están presentes (Esternomastoideo, Esternomandibular, Cleidomastoideo, Cleidoccipital)",
  respuesta:
    "Esternomastoideo: carnívoros; Esternomandibular: ungulados; Cleidomastoideo: carnívoros; Cleidoccipital: ungulados"
},

/* 2 */
{
  tipo: "rellenar",
  pregunta: "Relacione las especies con su correspondiente ligamento de la nuca (Suido, Perro, Cáprido, Équido)",
  respuesta:
    "Suido: sin ligamento nucal desarrollado; Perro: solo funicular; Cáprido: funicular y laminar; Équido: funicular y laminar muy desarrollado"
},

/* 3 */
{
  tipo: "rellenar",
  pregunta: "Indique qué tipo de articulación son las siguientes",
  respuesta:
    "Cuerpos vertebrales: sínfisis; Intertransversa lumbosacra: sinovial plana; Atlantoaxial: trocoide; Cabeza de la costilla: sinovial plana; Esternales: sincondrosis/sínfisis; Sacras: sinostosis"
},

/* 5 */
{
  tipo: "rellenar",
  pregunta: "Indique la inserción de los siguientes músculos (Oblicuo interno del abdomen, Esternooccipital, Rotadores, Transverso del tórax)",
  respuesta:
    "Oblicuo interno: últimas costillas, línea alba; Esternooccipital: occipital; Rotadores: apófisis espinosas; Transverso del tórax: cartílagos costales"
},

/* 6 */
{
  tipo: "test",
  pregunta: "Qué afirmación/afirmaciones sobre el diafragma es/son verdaderas:",
  opciones: [
    "Es el principal músculo espirador",
    "La porción más convexa es el centro tendinoso",
    "La parte esternal es continuación de la parte costal",
    "Su inervación es por los nervios frénicos derecho e izquierdo"
  ],
  correcta: 3
},

/* 7 */
{
  tipo: "rellenar",
  pregunta: "Indique cuál/cuales de estas afirmaciones es/son verdaderas",
  respuesta:
    "Ligamento esternal en bóvidos y équidos; Lordosis cervical y lumbar; Articulación atlantooccipital elipsoide; Movimientos del raquis determinados por articulaciones de los arcos vertebrales"
},

/* 8 */
{
  tipo: "rellenar",
  pregunta: "Indique cuál/cuales de estas afirmaciones es/son verdaderas",
  respuesta:
    "Músculos abdominales constituyen la falda; Braquiocefálico y omotransverso forman surco yugular; Fascia profunda cubre largo de la cabeza y cuello; Articulaciones extrínsecas del raquis son las del tórax"
},

/* 10 */
{
  tipo: "rellenar",
  pregunta: "Indique el origen de los siguientes músculos (Escaleno ventral, Oblicuo craneal de la cabeza, Sacrocoxígeo dorsal medial, Digástrico)",
  respuesta:
    "Escaleno ventral: vértebras cervicales; Oblicuo craneal: atlas; Sacrocoxígeo dorsal medial: sacro; Digástrico: proceso paracondilar"
},

/* 11 */
{
  tipo: "rellenar",
  pregunta: "Relacione los siguientes ligamentos con sus articulaciones",
  respuesta:
    "Laterales: atlantooccipital; Alares: atlantoaxial; Esternocostal intraarticular: articulaciones esternocostales; Lumbocostal: costovertebrales; Iliolumbar: lumbosacra; Costoxifoideo: esternocostal"
},

/* 12 */
{
  tipo: "rellenar",
  pregunta: "¿Qué estructura pasa por el canal inguinal solo en machos?",
  respuesta: "Cordón espermático"
},

/* 13 */
{
  tipo: "rellenar",
  pregunta: "¿Qué músculos están relacionados con la flexión de la cabeza?",
  respuesta:
    "Largo del cuello; Recto lateral de la cabeza"
},

/* 14 */
{
  tipo: "rellenar",
  pregunta: "Indique la inervación de los siguientes músculos (Serrato dorsal caudal, Multífidos, Coxígeos, Recto dorsal mayor de la cabeza, Iliocostal)",
  respuesta:
    "Serrato dorsal caudal: nervios intercostales; Multífidos: ramas dorsales espinales; Coxígeos: nervios caudales; Recto dorsal mayor: nervio suboccipital; Iliocostal: ramas dorsales espinales"
},

/* 15 */
{
  tipo: "rellenar",
  pregunta: "Indique la inervación de los siguientes músculos (Esplenio, Espinal y semiespinal, Oblicuo interno del abdomen, Cleidocervical, Rotadores)",
  respuesta:
    "Esplenio: ramas dorsales cervicales; Espinal y semiespinal: ramas dorsales espinales; Oblicuo interno: nervios intercostales y lumbares; Cleidocervical: nervio accesorio; Rotadores: ramas dorsales espinales"
},

/* 16 */
{
  tipo: "rellenar",
  pregunta: "Indique cuál/cuales de estas afirmaciones es/son verdaderas",
  respuesta:
    "Fascia espermática interna del transverso; Fascia toracolumbar continúa con axilar y glútea; Paredes del espacio visceral: esternocefálico y braquiocefálico"
},

/* 17 */
{
  tipo: "rellenar",
  pregunta: "¿Qué estructura está formada por los tendones de los músculos rectos del abdomen?",
  respuesta: "Línea alba"
},

/* 18 */
{
  tipo: "test",
  pregunta: "De estos músculos, ¿cuáles son inspiradores?",
  opciones: [
    "Serrato ventral torácico y transverso del tórax",
    "Intercostales externos y subcostales",
    "Serrato dorsal caudal e iliocostal",
    "Serrato dorsal craneal y recto del tórax"
  ],
  correcta: 1
},

/* 19 */
{
  tipo: "rellenar",
  pregunta: "¿Qué medios de unión aparecen en la articulación de los cuerpos vertebrales?",
  respuesta:
    "Disco intervertebral y ligamentos longitudinales dorsal y ventral"
},

/* 20 */
{
  tipo: "rellenar",
  pregunta: "¿Qué inserción presentan los siguientes músculos (Rotadores largos, Recto dorsal mayor de la cabeza, Escaleno medio, Transverso del tórax)?",
  respuesta:
    "Rotadores largos: apófisis espinosas; Recto dorsal mayor: occipital; Escaleno medio: costillas; Transverso del tórax: cartílagos costales"
}

  /* 21 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada arteria con la arteria principal del miembro torácico de la que proceden",
  respuesta:
    "Bicipital: braquial; Braquial profunda: braquial; Torácica externa: axilar; Radial: braquial; Subescapular: axilar; Circunfleja humeral craneal: axilar; Interósea común: ulnar"
},

/* 22 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas",
  respuesta:
    "Trapecio y gran dorsal son extrínsecos y superficiales; Músculos craneales del brazo flexores del codo e inervados por musculocutáneo; Extensor cubital del carpo es flexor del carpo"
},

/* 23 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas",
  respuesta:
    "Escudo distal y bolsa podotroclear facilitan deslizamiento; Ligamento suspensor = músculo interóseo evita hiperextensión; Subescapular e infraespinoso actúan como ligamentos colaterales"
},

/* 24 */
{
  tipo: "rellenar",
  pregunta: "Empareja el nervio que inerva a los siguientes músculos del miembro torácico",
  respuesta:
    "Craneolateral antebrazo: radial; Caudal brazo: radial; Pronadores: mediano; Craneal brazo: musculocutáneo"
},

/* 25 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas",
  respuesta:
    "Flexores del carpo y dedos inervados por mediano/cubital con origen en epicóndilo medial; Unión miembro-tronco = sinsarcosis"
},

/* 26 */
{
  tipo: "rellenar",
  pregunta: "Empareja las articulaciones con sus superficies articulares",
  respuesta:
    "Metacarpofalangiana: metacarpiano + falange proximal + sesamoideos; Interfalangiana proximal: falange proximal + media; Antebraquiocarpiana: radio + carpo proximal; Codo: húmero + radio + cúbito; Hombro: escápula + húmero"
},

/* 27 */
{
  tipo: "rellenar",
  pregunta: "Empareja los músculos con su origen o inserción",
  respuesta:
    "Radial del carpo (ins): metacarpianos; Flexor cubital del carpo (ins): hueso accesorio; Trapecio cervical (org): rafe medio del cuello; Subescapular (org): fosa subescapular"
},

/* 28 */
{
  tipo: "rellenar",
  pregunta: "Empareja los músculos con su función",
  respuesta:
    "Deltoides: flexor del hombro; Flexor radial del carpo: flexor del carpo; Extensor digital común: extensor de dedos; Pectorales superficiales: aducción; Tríceps braquial: extensor del codo"
},

/* 29 */
{
  tipo: "rellenar",
  pregunta: "Clasifica las articulaciones según su tipo de movimiento",
  respuesta:
    "Intercarpianas: planas; Escápulo-humeral: enartrosis; Interfalangiana proximal: gínglimo; Codo: gínglimo; Radiocubital: trocoide"
},

/* 30 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias correctas en relación con la articulación del carpo",
  respuesta:
    "Formada por varias articulaciones (antebraquiocarpiana, mediocarpiana, carpometacarpiana, intercarpianas y hueso accesorio)"
},

/* 31 */
{
  tipo: "rellenar",
  pregunta: "Escribe el origen de los siguientes músculos del miembro torácico",
  respuesta:
    "Gran dorsal: fascia toracolumbar; Supraespinoso: fosa supraespinosa; Bíceps braquial: tubérculo supraglenoideo; Flexor radial del carpo: epicóndilo medial"
},

/* 32 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias correctas en relación con la articulación metacarpofalangiana del caballo",
  respuesta:
    "Ligamento palmar forma escudo proximal; Receso palmar amplio y puncionable"
},

/* 33 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas",
  respuesta:
    "Vena cefálica principal superficial y desemboca en yugular externa; Plexo braquial: C6-T2"
},

/* 34 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas",
  respuesta:
    "Tríceps braquial tiene cuatro cabezas en carnívoros insertadas en olécranon"
},

/* 35 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada área de inervación con el nervio correspondiente",
  respuesta:
    "Subescapular: nervio subescapular; Gran dorsal: toracodorsal; Grupo extensores/tríceps: radial; Redondos y deltoides: axilar; Supra e infraespinoso: supraescapular"
},

/* 36 */
{
  tipo: "rellenar",
  pregunta: "Clasifica las articulaciones según número de huesos, morfología y movimiento",
  respuesta:
    "Metacarpofalangiana: compuesta gínglimo; Codo: compuesta gínglimo; Radiocubital: simple trocoide; Escápulo-humeral: simple enartrosis; Carpo: compuesta condílea"
},

/* 37 */
{
  tipo: "rellenar",
  pregunta: "Escribe la inserción de los siguientes músculos",
  respuesta:
    "Trapecio: espina de la escápula; Deltoides: tuberosidad deltoidea; Infraespinoso: tubérculo mayor; Flexor digital profundo: falange distal"
},

/* 38 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada sentencia con un músculo",
  respuesta:
    "Flexor carpo + nervio cubital: flexor cubital del carpo; Fijador escápula + accesorio: trapecio; Craneal brazo + musculocutáneo: bíceps braquial; Flexor carpo + radial: extensor cubital del carpo"
}
  
];

















