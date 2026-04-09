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

  
];

















