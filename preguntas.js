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
},

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
},

/* 0 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias CORRECTAS en relación con las articulaciones sinoviales: (Cada error descuenta un acierto)- En la cápsula articular, la membrana fibrosa es la capa externa y está vascularizada e inervada; y la membrana sinovial es la capa interna que posee pliegues que aumentan su superficie y secreta la sinovia.-Según el número de huesos que forma la articulación, se clasifican en uniaxiales y multiaxiales.-Se compone de cuatro elementos: el cartílago articular, la cavidad articular, la cápsula articular y los ligamentos.-En general, son articulaciones que solo permiten movimientos de flexión y extensión.",
  respuesta: "Correctas: membrana fibrosa e interna, número de huesos y elementos de la articulación; Incorrecta: solo permiten flexión y extensión"
},

/* 1 */
{
  tipo: "rellenar",
  pregunta: "Clasifica las siguientes articulaciones según el tejido predominante y cinética: Articulación talocrural, Articulación interfrontal, Articulaciones intermetatarsianas, Articulaciones esternales, Articulación radiocubital distal en ungulados, Articulaciones intercarpianas, Articulación del pubis. Opciones: Troclear, Sincondrosis, Trocoide, Plana, Sutura, Elipsoidal, Sellar, Sindesmosis, Sinostosis, Sínfisis, Enartrosis",
  respuesta: "Talocrural-troclear; Interfrontal-sutura; Intermetatarsianas-sindesmosis; Esternales-sincondrosis; Radiocubital distal-trocoide; Intercarpianas-plana; Pubis-sínfisis"
},

/* 2 */
{
  tipo: "test",
  pregunta: "Basándose en una clasificación topográfica, ¿cómo se divide el esqueleto?",
  opciones: [
    "Esqueleto somático y esqueleto visceral",
    "Esqueleto membranoso y esqueleto endocondral",
    "Esqueleto craneal y esqueleto postcraneal, el cual se divide en esqueleto axial y esqueleto apendicular",
    "Huesos largos, cortos, planos y especializados"
  ],
  correcta: 2
},

/* 3 */
{
  tipo: "test",
  pregunta: "Dentro de las malformaciones de la columna, la LORDOSIS es:",
  opciones: ["Una desviación lateral", "Una postura exagerada hacia dentro", "Una postura exagerada hacia fuera", "Un tipo de espina bífida abierta"],
  correcta: 1
},

  // PREGUNTAS GENERALES

/* 1 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias CORRECTAS en relación con las articulaciones sinoviales: (Cada error descuenta un acierto) - En la cápsula articular, la membrana fibrosa es la capa externa y está vascularizada e inervada; y la membrana sinovial es la capa interna que posee pliegues que aumentan su superficie y secreta la sinovia. - Según el número de huesos que forma la articulación, se clasifican en uniaxiales y multiaxiales. - Se compone de cuatro elementos: el cartílago articular, la cavidad articular, la cápsula articular y los ligamentos. - En general, son articulaciones que solo permiten movimientos de flexión y extensión.",
  respuesta: "Correctas: membrana fibrosa externa, membrana sinovial interna, y cuatro elementos; Incorrectas: clasificación por número de huesos (es simple/compuesta) y solo flexión/extensión"
},

/* 2 */
{
  tipo: "rellenar",
  pregunta: "Clasifica las siguientes articulaciones según el tejido predominante y cinética: Articulación talocrural, Articulación interfrontal, Articulaciones intermetatarsianas, Articulaciones esternales, Articulación radiocubital distal en ungulados, Articulaciones intercarpianas, Articulación del pubis",
  respuesta: "Talocrural-troclear; Interfrontal-sutura; Intermetatarsianas-sindesmosis; Esternales-sincondrosis; Radiocubital distal-trocoide; Intercarpianas-plana; Pubis-sínfisis"
},

/* 3 */
{
  tipo: "test",
  pregunta: "Basándose en una clasificación topográfica, ¿cómo se divide el esqueleto?",
  opciones: [
    "Esqueleto somático y esqueleto visceral",
    "Esqueleto membranoso y esqueleto endocondral",
    "Esqueleto craneal y esqueleto postcraneal, el cual se divide en esqueleto axial y esqueleto apendicular",
    "Huesos largos, cortos, planos y especializados"
  ],
  correcta: 2
},

/* 4 */
{
  tipo: "test",
  pregunta: "Dentro de las malformaciones de la columna, la LORDOSIS es:",
  opciones: [
    "Una desviación lateral",
    "Una postura exagerada hacia dentro",
    "Una postura exagerada hacia fuera",
    "Un tipo de espina bífida abierta"
  ],
  correcta: 1
},

/* 5 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias VERDADERAS: (Cada error descuenta un acierto) - En la contracción muscular isométrica, no existe un movimiento y sirve para mantener una posición o sostener un peso. - Cuando se trata de un músculo del tronco, en general, el punto de inserción de un músculo es el punto de fijación más cercano al plano medial (al eje corporal). - Cuando se trata de un músculo de las extremidades, el punto de origen del músculo es el punto de fijación más próximo al dorso del animal. - En la contracción muscular isotónica excéntrica, el músculo se acorta visiblemente mientras genera tensión de forma activa.",
  respuesta: "Verdaderas: contracción isométrica sin movimiento, punto de inserción cercano al plano medial en tronco, punto de origen próximo al dorso en extremidades; Falsa: en contracción excéntrica el músculo se alarga"
},

/* 6 */
{
  tipo: "test",
  pregunta: "La fijación del tendón con el hueso se denomina:",
  opciones: [
    "Fibras perforantes o de Sharpey",
    "Entesis",
    "Unión motendinosa",
    "Sínfisis"
  ],
  correcta: 1
},

/* 7 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias VERDADERAS (cada respuesta incorrecta resta una correcta): - Las articulaciones sinoviales se forman en las zonas de actividad polarizante, zonas donde la densidad celular es alta. - El esbozo del miembro presenta 3 ejes de asimetría: próximo-distal, cráneo-caudal y dorso-ventral. - En el periodo germinal, el mesodermo es la hoja germinativa clave para el desarrollo del aparato locomotor. - Los desarrollos de los esbozos de los miembros anterior y posterior siguen estadios diferentes.",
  respuesta: "Verdaderas: 3 ejes de asimetría (próximo-distal, cráneo-caudal, dorso-ventral) y mesodermo clave para aparato locomotor; Falsas: articulaciones sinoviales no se forman en zonas de actividad polarizante, los miembros siguen estadios similares"
},

/* 8 */
{
  tipo: "rellenar",
  pregunta: "Completa la frase: La articulación temporo-mandibular es una _____ que al componerse de _____ huesos se clasificaría como una articulación _____ y según su morfología y capacidad de movimientos se clasificaría como _____ y _____ pues permite movimientos de _____",
  respuesta: "Diartrosis, dos, simple, biaxial, gínglimo, Flexión/Extensión, Abducción/Aducción y leve Rotación"
},

// PARCIAL MIEMBRO TORÁCICO

/* 9 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas: - Los músculos trapecio y gran dorsal son músculos extrínsecos del miembro torácico y se encuentran en un plano superficial. - Los músculos que se encuentran en la parte craneal del brazo son flexores de la articulación del codo y están inervados por el nervio musculocutáneo. - El manguito flexor es una envoltura fibrosa formada por cada tendón del músculo flexor digital profundo alrededor del correspondiente tendón del músculo flexor digital superficial. - El músculo extensor cubital del carpo, por su posición caudal, es en realidad flexor de la articulación del carpo.",
  respuesta: "Verdaderas: trapecio y gran dorsal extrínsecos superficiales, músculos craneales del brazo flexores del codo inervados por musculocutáneo, extensor cubital del carpo es flexor por posición caudal"
},

/* 10 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas: - En la articulación interfalangiana distal del caballo, el deslizamiento del tendón del músculo flexor digital profundo está facilitado por la presencia del escudo distal y la bolsa podotroclear. - El ligamento suspensor del menudillos es el músculo interóseo. En el caballo es uno de los elementos clave del aparato de sostén pasivo y participa evitando la hiper-extensión de la articulación metacarpofalangiana. - En la articulación interfalangiana proximal del caballo existen ligamento fijadores de los cartílagos ungulares. - En la articulación del hombro, los tendones de inserción de los músculos subescapular e infraespinoso actúan como ligamentos colaterales.",
  respuesta: "Verdaderas: escudo distal y bolsa podotroclear facilitan deslizamiento, ligamento suspensor evita hiperextensión metacarpofalangiana, tendones actúan como ligamentos colaterales en hombro"
},

/* 11 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas: - Los músculos gran dorsal, braquiocefálico, pectorales superficiales y pectoral profundo se insertan en el húmero. - Los músculos que se encuentran en la parte caudal del brazo son flexores de la articulación del codo y están inervados por el nervio radial. - Los músculos flexores de las articulaciones del carpo y de los dedos están inervados por los nervios mediano y/o cubital y tienen su origen (al menos una de sus cabezas, si tienen varias) en el epicóndilo medial del húmero. - La unión del miembro torácico al tronco por medio de músculos, tendones y fascias se denomina sinsarcosis.",
  respuesta: "Verdaderas: gran dorsal, braquiocefálico y pectorales se insertan en húmero; flexores carpo/dedos inervados por mediano/cubital con origen en epicóndilo medial; unión miembro-tronco es sinsarcosis; Falsa: músculos caudales del brazo son extensores del codo"
},

/* 12 */
{
  tipo: "rellenar",
  pregunta: "Empareja las siguientes articulaciones sinoviales del miembro torácico con sus superficies articulares",
  respuesta: "Metacarpofalangiana (caballo): tróclea del III metacarpiano, base falange proximal y huesos sesamoideos proximales; Interfalangiana proximal: cabeza falange proximal con base falange media; Antebraquiocarpiana: fila superior carpianos con huesos antebrazo; Codo: tróclea y cóndilo humeral con cabeza del radio y cúbito; Hombro: cavidad glenoidea escápula con cabeza del húmero"
},

/* 13 */
{
  tipo: "rellenar",
  pregunta: "Empareja los siguientes músculos del miembro torácico con su origen o inserción",
  respuesta: "Radial del carpo (carnívoros): origen epicóndilo medial húmero, inserción metacarpianos II y III; Flexor cubital del carpo: origen epicóndilo medial húmero y olécranon, inserción hueso accesorio; Trapecio porción cervical: origen funicular nuca y rafe fibroso dorsal, inserción espina escápula; Subescapular: origen fosa subescapular, inserción tubérculo menor húmero"
},

/* 14 */
{
  tipo: "rellenar",
  pregunta: "Empareja los siguientes músculos del miembro torácico con su función",
  respuesta: "Deltoides: flexor del hombro y abductor/rotador del miembro en carnívoros; Flexor radial del carpo: flexor del carpo y extensor del codo; Extensor digital común: extensor del carpo y dedos y flexor del codo; Pectorales superficiales: aductor del miembro, unión brazo al tronco y tensor de fascia antebrazo; Tríceps braquial: extensor del codo y flexor del hombro"
},

/* 15 */
{
  tipo: "rellenar",
  pregunta: "Clasifica las siguientes articulaciones del miembro torácico según su tipo de movimiento",
  respuesta: "Intercarpianas: articulación sinovial plana, deslizamiento; Escápulo-humeral: articulación sinovial simple esferoidal, todo tipo de movimientos; Interfalangiana proximal (caballo): articulación sinovial simple gínglimo, flexión/extensión; Codo: articulación sinovial compuesta condilar, flexión/extensión; Radio-cubital (carnívoros): articulación sinovial simple trocoide, pronación/supinación"
},

/* 16 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias correctas en relación con la articulación del carpo",
  respuesta: "Correctas: conjunto formado por articulación antebraquiocarpiana, mediocarpiana, carpometacarpiana, intercarpianas y del hueso accesorio; canal del carpo delimitado por hueso accesorio, fila proximal de huesos del carpo y retináculo flexor; Incorrectas: articulación con más movimiento es antebraquiocarpiana no carpometacarpiana, sí existe ligamento radiocarpiano dorsal en caballo"
},

/* 17 */
{
  tipo: "rellenar",
  pregunta: "Escribe el origen de los siguientes músculos del miembro torácico",
  respuesta: "Gran dorsal: fascia toracolumbar y procesos espinosos torácicos/lumbares; Supraespinoso: fosa supraespinosa de la escápula; Bíceps braquial: tubérculo supraglenoideo de la escápula; Flexor radial del carpo: epicóndilo medial del húmero"
},

/* 18 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada área de inervación con el nervio del plexo braquial que inerva",
  respuesta: "Subescapular: nervio subescapular; Gran dorsal: nervio toracodorsal; Tríceps braquial, tensor fascia antebrazo, ancóneo, extensores: nervio radial; Redondos y deltoides: nervio axilar; Supraespinoso e infraespinoso: nervio supraescapular"
},

/* 19 */
{
  tipo: "rellenar",
  pregunta: "Escribe la inserción de los siguientes músculos del miembro torácico",
  respuesta: "Trapecio: espina de la escápula; Deltoides: tuberosidad deltoidea del húmero; Infraespinoso: tubérculo mayor del húmero; Flexor digital profundo (carnívoros): superficie flexora de la tercera falange"
},

/* 20 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada sentencia con un músculo que la cumpla",
  respuesta: "Flexor del carpo + nervio cubital: flexor digital profundo; Fijador de la escápula + nervio accesorio: trapecio; Craneal del brazo + nervio musculocutáneo: bíceps braquial; Flexor del carpo + nervio radial: extensor cubital del carpo"
},

/* 21 */
{
  tipo: "rellenar",
  pregunta: "Indica la función de los músculos del miembro torácico marcados con los siguientes números: 9 y 9', 8 y 8', 2 y 2'",
  respuesta: "9 y 9': tríceps braquial (cabeza larga y lateral) - extensor del codo y flexor del hombro; 8 y 8': deltoides (porción escapular y acromial) - flexor del hombro y abductor/rotador en carnívoros; 2 y 2': trapecio (porción cervical y torácica) - fijador de la escápula, elevador de la extremidad"
},

/* 22 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias VERDADERAS (cada respuesta incorrecta resta una correcta): - Las raíces del plexo braquial están formadas por ramos ventrales de los tres últimos nervios cervicales (C6, C7 y C8) y los dos primeros torácicos (T1 y T2). - La vena cefálica es la principal vena del sistema venoso superficial, discurre por la parte craneal del antebrazo y desemboca en la vena yugular externa. - La aferencia arterial del miembro torácico se encuentra principalmente en la cara lateral del miembro. - La arteria braquial se encuentra en la región del brazo (medialmente) y tiene un trayecto paralelo al nervio axilar.",
  respuesta: "Verdaderas: raíces plexo braquial C6-C8 y T1-T2, vena cefálica principal del sistema superficial desemboca en yugular externa; Falsas: aferencia arterial es medial no lateral, arteria braquial paralela a nervio mediano no axilar"
},

/* 23 */
{
  tipo: "rellenar",
  pregunta: "Señala las estructuras que se encuentran en relación con la articulación interfalangiana distal en los caballos",
  respuesta: "Ligamentos fijadores de los cartílagos ungulares, escudo distal, bolsa podotroclear"
},

/* 24 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada arteria con la arteria principal del miembro torácico de la que proceden",
  respuesta: "Torácica externa: arteria axilar; Circunfleja humeral craneal: arteria axilar; Bicipital: arteria braquial; Braquial profunda: arteria braquial; Radial: arteria mediana; Subescapular: arteria axilar; Interósea común: arteria braquial"
},

/* 25 */
{
  tipo: "rellenar",
  pregunta: "Empareja los siguientes músculos del miembro torácico con su función",
  respuesta: "Flexor radial del carpo: flexor del carpo y extensor del codo; Bíceps braquial: flexor del codo y extensor del hombro; Infraespinoso: flexor del hombro; Extensor digital común: extensor del carpo y de los dedos; Romboides: fijador de la escápula"
},

/* 26 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias VERDADERAS: - Los carnívoros tienen músculo subclavio. - Los músculos que se encuentran en la espalda actúan sobre la articulación del hombro, y tiene su origen en el húmero y se insertan en el radio. - El músculo tríceps braquial tiene cuatro cabezas en carnívoros y todas ellas se insertan en el olécranon del cúbito. - El lacertus fibrosus forma parte del aparato de sostén pasivo de équidos y evita la flexión de la articulación del carpo.",
  respuesta: "Verdaderas: carnívoros tienen subclavio, tríceps braquial con cuatro cabezas en carnívoros insertas en olécranon, lacertus fibrosus en aparato sostén pasivo évita flexión carpo; Falsa: músculos espalda tienen origen en escápula no húmero"
},

/* 27 */
{
  tipo: "rellenar",
  pregunta: "Dime las estructuras que se encuentran en el hueco poplíteo",
  respuesta: "Vasos femorales caudales distales, linfonódulo poplíteo, vena safena lateral"
},

/* 28 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada sentencia con un músculo que la cumpla (miembro torácico)",
  respuesta: "Flexor del carpo + nervio cubital: flexor cubital del carpo; Fijador de la escápula + nervio accesorio: trapecio; Parte caudal del brazo + nervio radial: tríceps braquial; Flexor del carpo + nervio radial: extensor cubital del carpo"
},

/* 29 */
{
  tipo: "rellenar",
  pregunta: "Escribe la INSERCIÓN de los siguientes músculos del miembro torácico",
  respuesta: "Serrato ventral: cara serrata craneal y caudal de la escápula; Deltoides: tuberosidad deltoidea del húmero; Infraespinoso: tubérculo mayor del húmero; Extensor digital común (carnívoros): tercera falange"
},

/* 30 */
{
  tipo: "rellenar",
  pregunta: "Señala los músculos que sean flexores del hombro",
  respuesta: "Deltoides, redondo mayor, gran dorsal, pectorales superficiales"
},

/* 31 */
{
  tipo: "rellenar",
  pregunta: "Empareja el nervio que inerva a los siguientes músculos del miembro torácico",
  respuesta: "Parte craneolateral del antebrazo: nervio radial; Parte caudal del brazo: nervio radial; Pronadores del antebrazo: nervio mediano; Parte craneal del brazo: nervio musculocutáneo"
},

/* 32 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias VERDADERAS: - El manguito flexor es una envoltura fibrosa formada por cada tendón del músculo flexor digital profundo alrededor del correspondiente tendón del músculo flexor digital superficial. - El músculo extensor cubital del carpo, por su posición caudal, es en realidad flexor de la articulación del carpo. - Los músculos que se encuentran en la parte craneal del brazo son flexores de la articulación del codo y están inervados por el nervio musculocutáneo. - Los músculos romboides y gran dorsal son músculos extrínsecos del miembro torácico y se encuentran en un plano superficial.",
  respuesta: "Verdaderas: extensor cubital del carpo es flexor por posición caudal, músculos craneales del brazo son flexores del codo inervados por musculocutáneo; Falsas: manguito flexor es del superficial alrededor del profundo, romboides no está en plano superficial"
},

/* 33 */
{
  tipo: "rellenar",
  pregunta: "Clasifica las siguientes articulaciones del miembro torácico según su tipo de movimiento",
  respuesta: "Metacarpofalangiana (caballo): flexión/extensión; Radio-cubital (carnívoros): pronación/supinación; Escápulo-humeral: flexión/extensión, aducción/abducción y rotación; Intercarpianas: deslizamiento; Codo: flexión/extensión"
},

/* 34 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes ligamentos con la articulación del miembro torácico en la que se encuentran",
  respuesta: "Ligamento radiocarpiano palmar: articulación antebraquiocarpiana; Ligamentos condrocoronales (caballos): articulación interfalangiana distal; Ligamento anular del radio (carnívoros): articulación radio-cubital proximal; Ligamentos sesamoideos oblicuos (caballos): articulación metacarpofalangiana"
},

/* 35 */
{
  tipo: "rellenar",
  pregunta: "Señala los músculos que están inervados por el nervio radial",
  respuesta: "Redondo menor, extensor digital común, extensor cubital del carpo, tríceps braquial"
},

/* 36 */
{
  tipo: "rellenar",
  pregunta: "Señala los músculos cuyo tendón actúa como ligamento colateral en la articulación del hombro",
  respuesta: "Subescapular, infraespinoso"
},

/* 37 */
{
  tipo: "rellenar",
  pregunta: "Escribe el ORIGEN de los siguientes músculos del miembro torácico",
  respuesta: "Pectoral descendente: manubrio del esternón; Redondo mayor: ángulo y borde caudal de la escápula; Bíceps braquial: tubérculo supraglenoideo de la escápula; Flexor digital superficial: epicóndilo medial del húmero"
},

/* 38 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias CORRECTAS en relación con la articulación del carpo",
  respuesta: "Correctas: en caballo NO existe ligamento radiocarpiano dorsal, conjunto formado por varias articulaciones (antebraquiocarpiana, mediocarpiana, carpometacarpiana, intercarpianas y del hueso accesorio); Incorrectas: articulación con más movimiento es antebraquiocarpiana no carpometacarpiana, canal del carpo limitado por retináculo flexor no extensor"
},

/* 39 */
{
  tipo: "rellenar",
  pregunta: "Inserciones del músculo bíceps femoral",
  respuesta: "Tendón calcáneo común, fascia lata, rótula"
},

/* 40 */
{
  tipo: "rellenar",
  pregunta: "RELACIONA CADA UNO DE ESTOS MÚSCULOS CON SU INSERCIÓN",
  respuesta: "Pronador cuadrado: cara caudal del radio; Trapecio: espina de la escápula; Tríceps braquial: olécranon; Serrato ventral: cara serrata de la escápula; Infraespinoso: tubérculo mayor del húmero"
},

/* 41 */
{
  tipo: "rellenar",
  pregunta: "Une cada uno de los siguientes músculos con la articulación o articulaciones sobre las que actúan",
  respuesta: "Tríceps: codo; Braquial: codo; Extensor digital común: carpo y dedos; Extensor carporradial: carpo"
},

/* 42 */
{
  tipo: "rellenar",
  pregunta: "Seleccione la palabra correcta en el texto sobre la inervación del miembro torácico",
  respuesta: "Ramos ventrales, C6-T2, plexo braquial, espacio axilar, músculo escaleno medio, nervio radial, nervio cubital, nervio mediano, músculos flexores"
},

/* 43 */
{
  tipo: "rellenar",
  pregunta: "De las siguientes frases, indica cuáles son verdaderas sobre el miembro torácico",
  respuesta: "Verdaderas: cabeza accesoria del tríceps ayuda en flexión del hombro, nervio cubital es el más caudal, extensor carporradial ayuda en flexión del codo, extensor carporradial forma parte del aparato de sustentación pasiva, extensor carporradial ayuda en extensión del codo, manica flexora es envoltura del superficial sobre el profundo, braquiorradial es pronador; Falsas: al flexor digital profundo se le llama 'perforado' (es al superficial)"
},

/* 44 */
{
  tipo: "rellenar",
  pregunta: "Seleccione los músculos que forman la cintura escapular",
  respuesta: "Trapecio, serrato ventral, omotransverso, gran dorsal, braquiocefálico, pectoral profundo, romboides, pectorales superficiales"
},

/* 45 */
{
  tipo: "rellenar",
  pregunta: "RELACIONA CADA MÚSCULO CON SU FUNCIÓN",
  respuesta: "Braquial: flexor del codo; Supraespinoso: extensor del hombro; Pectoral superficial: aductor del miembro; Redondo mayor: flexor del hombro; Ancóneo: extensor del codo"
},

/* 46 */
{
  tipo: "test",
  pregunta: "INDICA LA RAMA PRINCIPAL DE LA ARTERIA AXILAR EN EL MIEMBRO TORÁCICO",
  opciones: [
    "Arteria radial",
    "Arteria braquial",
    "Arteria subclavia",
    "Arteria cubital"
  ],
  correcta: 1
},

/* 47 */
{
  tipo: "test",
  pregunta: "INDICA CUÁL DE ESTOS MÚSCULOS CONTRIBUYE A APROXIMAR EL MIEMBRO TORÁCICO AL TRONCO",
  opciones: [
    "Serrato ventral",
    "Infraespinoso",
    "Subescapular",
    "Supraespinoso"
  ],
  correcta: 0
},

/* 48 */
{
  tipo: "rellenar",
  pregunta: "Relaciona la articulación con el tipo que es",
  respuesta: "Articulación del carpo: articulación tipo condiloidea; Articulación escapulohumeral: articulación tipo esferoidal; Articulación radio-cubital proximal (carnívoros): articulación tipo trocoide; Articulación húmero-radio-cubital: articulación tipo condilar"
},

/* 49 */
{
  tipo: "test",
  pregunta: "El músculo tríceps braquial en su conjunto tiene la siguiente función:",
  opciones: [
    "Flexor de la articulación del codo",
    "Extensor de la articulación del codo",
    "Flexor de la articulación del codo y extensor de la articulación del hombro",
    "Extensor de la articulación del codo y flexor de la articulación del hombro"
  ],
  correcta: 3
},

/* 50 */
{
  tipo: "rellenar",
  pregunta: "Selecciona el elemento vascular más importante del sistema venoso superficial y sus dos vasos tributarios más importantes del mismo",
  respuesta: "Vena cefálica, vena mediana, vena omobraquial"
},

/* 51 */
{
  tipo: "rellenar",
  pregunta: "RELACIONA CADA UNO DE ESTOS MÚSCULOS CON SU INERVACIÓN",
  respuesta: "Bíceps braquial: nervio musculocutáneo; Flexor carpo cubital: nervio cubital; Omotransverso: nervio accesorio (par craneal XI); Extensor digital común: nervio radial; Deltoides: nervio axilar"
},

/* 52 */
{
  tipo: "rellenar",
  pregunta: "Indica cuáles de los siguientes músculos forman parte del aparato de sustentación pasiva del miembro torácico",
  respuesta: "Extensor digital lateral, músculo extensor digital común"
},

/* 53 */
{
  tipo: "rellenar",
  pregunta: "De las siguientes frases, indica cuáles son verdaderas sobre tríceps y bíceps braquial",
  respuesta: "Verdaderas: tríceps braquial es el principal extensor del codo, bíceps braquial es el principal flexor del codo; Falsas: tríceps NO es flexor del codo, bíceps NO es extensor del codo"
},

/* 54 */
{
  tipo: "rellenar",
  pregunta: "Une cada uno de los siguientes ligamentos con la articulación a la que pertenecen",
  respuesta: "Ligamento radiocarpiano palmar: articulación antebraquiocarpiana; Ligamento pisocubital: articulación del hueso accesorio; Ligamento anular del radio: articulación radiocubital proximal; Ligamentos glenohumerales: articulación del hombro"
},

/* 55 */
{
  tipo: "rellenar",
  pregunta: "Une cada músculo con su origen",
  respuesta: "Supinador: epicóndilo lateral del húmero; Omotransverso: espina de la escápula; Redondo mayor: borde caudal de la escápula; Subclavio: manubrio esternal y cartílagos costales"
},

/* 56 */
{
  tipo: "rellenar",
  pregunta: "Relacione los siguientes músculos con el papel que cada uno de ellos hace en el movimiento de FLEXIÓN DEL HOMBRO",
  respuesta: "Músculo agonista: músculo redondo mayor/menor; Músculo antagonista: músculo supraespinoso; Músculo sinergista: músculo gran dorsal; Músculo protagonista: músculo deltoides"
},

/* 57 */
{
  tipo: "rellenar",
  pregunta: "Une cada uno de los siguientes ligamentos con la articulación a la que pertenecen (segunda versión)",
  respuesta: "Ligamento (tendón) interóseo medio: articulación metacarpofalangiana; Ligamentos intercarpianos interóseos: articulación intermetacarpianas; Ligamentos palmares axiales y abaxiales: articulación interfalangiana proximal; Ligamento condrocompedal: articulación interfalangiana distal"
},

/* 58 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada afirmación con el músculo que la cumpla",
  respuesta: "Músculo flexor del carpo e inervado por nervio cubital: flexor cubital del carpo; Músculo flexor del codo, sin acción en el hombro e inervado por nervio musculocutáneo: braquial; Músculo flexor del hombro e inervado por nervio toracodorsal: gran dorsal; Músculo extensor del hombro e inervado por nervio supraescapular: supraespinoso"
},

// PARCIAL MIEMBRO PELVIANO

/* 59 */
{
  tipo: "rellenar",
  pregunta: "El nervio ciático da lugar a los nervios:",
  respuesta: "Tibial, peroneo común"
},

/* 60 */
{
  tipo: "rellenar",
  pregunta: "Indica la función de los músculos señalados con los números 1, 2, 4 y 5",
  respuesta: "1: flexor del tarso; 2: flexor de tarso y extensor de dedos; 4: flexor de dedos; 5: extensor del tarso"
},

/* 61 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con su función (miembro pelviano)",
  respuesta: "Aductor: aductor del miembro; Piriforme: extensor de la cadera; Cuádriceps femoral: extensor de la rodilla y flexor de la cadera; Peroneo largo: flexor del tarso"
},

/* 62 */
{
  tipo: "rellenar",
  pregunta: "De estos músculos ¿Cuáles NO están inervados por el nervio ciático?",
  respuesta: "Cuádriceps femoral, tensor de la fascia lata"
},

/* 63 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con sus inserciones (miembro pelviano)",
  respuesta: "Glúteo profundo: trocánter mayor del fémur; Pectíneo: cara áspera del fémur; Iliopsoas: trocánter menor del fémur; Gastrocnemios: tuberosidad del calcáneo"
},

/* 64 */
{
  tipo: "test",
  pregunta: "¿Qué estructura/músculo NO forma parte de los límites que conforman el canal femoral?",
  opciones: [
    "Músculo sartorio",
    "Músculo pectíneo",
    "Lámina femoral",
    "Músculo aductor"
  ],
  correcta: 2
},

/* 65 */
{
  tipo: "rellenar",
  pregunta: "Relaciona cada una de las estructuras con las letras correspondientes (mayúsculas y minúsculas)",
  respuesta: "a: nervio safeno; b: arteria safena; B: arteria femoral"
},

/* 66 */
{
  tipo: "rellenar",
  pregunta: "Los siguientes músculos están inervados por (primera versión)",
  respuesta: "Sartorio: nervio femoral; Tensor de la fascia lata: nervio glúteo craneal; Pectíneo: nervio obturador; Bíceps femoral: nervio ciático"
},

/* 67 */
{
  tipo: "rellenar",
  pregunta: "¿Qué función NO tiene el músculo bíceps femoral?",
  respuesta: "Extensor de la rodilla"
},

/* 68 */
{
  tipo: "rellenar",
  pregunta: "Inserciones del músculo bíceps femoral (segunda versión)",
  respuesta: "Fosa trocantérica del fémur, ligamento rotuliano, rótula, tendón calcáneo común, fascia lata, cresta ilíaca"
},

/* 69 */
{
  tipo: "test",
  pregunta: "¿Qué arteria es el principal vaso que se distribuye por el miembro pelviano?",
  opciones: [
    "Arteria glútea caudal",
    "Arteria circunfleja femoral lateral",
    "Arteria femoral",
    "Arteria ilíaca externa"
  ],
  correcta: 2
},

/* 70 */
{
  tipo: "rellenar",
  pregunta: "Relaciona estas estructuras con su articulación (miembro pelviano primera versión)",
  respuesta: "Meniscos: articulación de la rodilla; Ligamento plantar largo: articulación del tarso-metatarsiano/tarsofálangica/tarsometatarsiana; Ligamento púbico craneal: articulación púbica/sínfisis púbica; Ligamento de la cabeza del fémur: articulación coxofemoral o de la cadera"
},

/* 71 */
{
  tipo: "rellenar",
  pregunta: "Los siguientes músculos están inervados por (segunda versión)",
  respuesta: "Sartorio: nervio femoral; Cuadrado femoral: nervio ciático; Tensor de la fascia lata: nervio glúteo caudal; Aductor: nervio obturador"
},

/* 72 */
{
  tipo: "rellenar",
  pregunta: "Empareja el músculo con su función (miembro pelviano segunda versión)",
  respuesta: "Cuádriceps femoral: extensor de la rodilla; Gastrocnemios: extensor del tarso; Poplíteo: flexor de la rodilla; Piriforme: extensor de la cadera"
},

/* 73 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los números con las estructuras de la foto (arteria/nervio)",
  respuesta: "17: arteria safena; 12: arteria femoral; 2: nervio safeno; 6: arteria ilíaca externa; 7: arteria ilíaca interna"
},

/* 74 */
{
  tipo: "test",
  pregunta: "¿Cómo se llama el ligamento que une los extremos craneales de los meniscos en los carnívoros?",
  opciones: [
    "Ligamento transverso craneal",
    "Ligamento meniscofemoral",
    "Ligamento transverso de la rodilla",
    "Ligamento transverso caudal"
  ],
  correcta: 2
},

/* 75 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los números de la imagen con las estructuras siguientes (ligamentos)",
  respuesta: "6: ligamento sacrotuberoso; 3: ligamento sacroilíaco dorsal tuberoso; 4: ligamento sacroilíaco dorsal membranoso; 8: agujero isquiático menor; 5: agujero isquiático mayor"
},

/* 76 */
{
  tipo: "test",
  pregunta: "¿Qué vena superficial es la más importante del miembro pelviano en el perro?",
  opciones: [
    "Vena safena medial",
    "Vena femoral",
    "Vena poplítea",
    "Vena safena lateral",
    "Vena glútea caudal"
  ],
  correcta: 3
},

/* 77 */
{
  tipo: "test",
  pregunta: "¿Qué vena superficial es la más importante del miembro pelviano en el équido?",
  opciones: [
    "Vena poplítea",
    "Vena glútea caudal",
    "Vena safena lateral",
    "Vena safena medial",
    "Vena femoral"
  ],
  correcta: 3
},

/* 78 */
{
  tipo: "rellenar",
  pregunta: "¿Qué estructuras forman los límites del canal femoral?",
  respuesta: "Lámina femoral, músculo sartorio, borde craneal del pubis, músculo aductor, tendón sinfisario, músculo pectíneo"
},

/* 79 */
{
  tipo: "rellenar",
  pregunta: "De estos músculos ¿Cuáles están inervados por el nervio ciático?",
  respuesta: "Bíceps femoral, glúteo profundo, abductor caudal de la pierna, cuadrado femoral, semitendinoso"
},

/* 80 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los números de la imagen con las estructuras siguientes (meniscos y ligamentos rodilla)",
  respuesta: "10: menisco medial; 8: ligamento cruzado caudal; 7: ligamento meniscofemoral"
},

/* 81 */
{
  tipo: "rellenar",
  pregunta: "Relaciona las estructuras con los colores (nervios y arterias miembro pelviano)",
  respuesta: "(8) Morado: arteria tibial craneal; (5) Verde: arteria femoral caudal distal; (2) Azul: nervio peroneo común; (3) Amarillo: nervio tibial; (6) Rojo: arteria poplítea; (1): nervio ciático; (4): arteria femoral"
},

/* 82 */
{
  tipo: "rellenar",
  pregunta: "¿Qué ligamentos forman parte de la articulación femororrotuliana en los carnívoros?",
  respuesta: "Ligamento rotuliano medial, ligamento rotuliano lateral, ligamentos femororrotulianos lateral y medial, ligamento rotuliano intermedio"
},

/* 83 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con su origen (miembro pelviano)",
  respuesta: "Glúteo medio: cara glútea del ilion; Tensor de la fascia lata: tuberosidad coxal; Gracilis: sínfisis pélvica; Semitendinoso: tuberosidad isquiática"
},

/* 84 */
{
  tipo: "rellenar",
  pregunta: "De estos músculos ¿Cuáles forman parte del tendón calcáneo común?",
  respuesta: "Flexor digital profundo, flexor digital superficial, semitendinoso, bíceps femoral, gracilis"
},

/* 85 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con sus inserciones (miembro pelviano segunda versión)",
  respuesta: "Iliopsoas: trocánter menor; Glúteo profundo: trocánter mayor; Pectíneo: cara áspera del fémur; Gastrocnemios: tuberosidad del calcáneo"
},

/* 86 */
{
  tipo: "test",
  pregunta: "¿Qué arteria es el principal vaso que distribuye sus ramas arteriales por el miembro pelviano?",
  opciones: [
    "Arteria ilíaca interna",
    "Arteria glútea caudal",
    "Arteria circunfleja femoral lateral",
    "Arteria femoral",
    "Arteria ilíaca externa"
  ],
  correcta: 4
},

/* 87 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias CORRECTAS en relación con la articulación metacarpofalangiana del caballo",
  respuesta: "Correctas: ligamento palmar une ambos sesamoideos proximales y contribuye al escudo proximal, en posición anatómica la articulación está flexionada, receso palmar más amplio que el dorsal entre III metacarpiano y ligamento interóseo; Incorrecta: NO todos los ligamentos están en cara dorsal"
},

/* 88 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con sus inserciones (miembro pelviano tercera versión)",
  respuesta: "Glúteo profundo: trocánter mayor del fémur; Pectíneo: cara áspera del fémur; Gastrocnemios: tuberosidad del calcáneo; Iliopsoas: trocánter menor"
},

/* 89 */
{
  tipo: "rellenar",
  pregunta: "Los siguientes músculos están inervados por (tercera versión miembro pelviano)",
  respuesta: "Sartorio: nervio femoral; Aductor: nervio obturador; Tensor de la fascia lata: nervio glúteo caudal; Bíceps femoral: nervio ciático"
},

/* 90 */
{
  tipo: "rellenar",
  pregunta: "Empareja el músculo con su función (miembro pelviano tercera versión)",
  respuesta: "Gastrocnemios: extensor del tarso; Glúteo medio: extensor de la cadera; Cuádriceps femoral: extensor de la rodilla; Poplíteo: flexor de la rodilla"
}

  
];

















