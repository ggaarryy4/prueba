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
  pregunta: "Indique qué tipo de articulación son las siguientes ( Cuerpos vertebrales; Intertransversa lumbosacra; Atlantoaxial; Cabeza de la costilla; Esternales; Sacras)",
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
  pregunta: "Indique cuál/cuales de estas afirmaciones es/son verdaderas (Ligamento esternal en bóvidos y équidos; Lordosis cervical y lumbar; Articulación atlantooccipital elipsoide; Movimientos del raquis determinados por articulaciones de los arcos vertebrales)",
  respuesta:
    "1V 2F 3V 4V"
},

/* 8 */
{
  tipo: "rellenar",
  pregunta: "Indique cuál/cuales de estas afirmaciones es/son verdaderas (Músculos abdominales constituyen la falda; Braquiocefálico y omotransverso forman surco yugular; Fascia profunda cubre largo de la cabeza y cuello; Articulaciones extrínsecas del raquis son las del tórax)",
  respuesta:
    "1V 2F 3V 4V"
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
  pregunta: "Relacione los siguientes ligamentos con sus articulaciones (Laterales; Alares; Esternocostal intraarticular; Lumbocostal; Iliolumbar; Costoxifoideo)",
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
  pregunta: "Indique cuál/cuales de estas afirmaciones es/son verdaderas (Fascia espermática interna del transverso; Fascia toracolumbar continúa con axilar y glútea; Paredes del espacio visceral: esternocefálico y braquiocefálico)",
  respuesta:
    "1V 2V 3F"
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
  pregunta: "Marca las sentencias verdaderas (Trapecio y gran dorsal son extrínsecos y superficiales; Músculos craneales del brazo flexores del codo e inervados por musculocutáneo; Extensor cubital del carpo es flexor del carpo)",
  respuesta:
    "1V 2V 3F"
},

/* 23 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas (Escudo distal y bolsa podotroclear facilitan deslizamiento; Ligamento suspensor = músculo interóseo evita hiperextensión; Subescapular e infraespinoso actúan como ligamentos colaterales)",
  respuesta:
    "1V 2V 3F"
},

/* 24 */
{
  tipo: "rellenar",
  pregunta: "Empareja el nervio que inerva a los siguientes músculos del miembro torácico (Craneolateral antebrazo; Caudal brazo; Pronadores; Craneal brazo)",
  respuesta:
    "Craneolateral antebrazo: radial; Caudal brazo: radial; Pronadores: mediano; Craneal brazo: musculocutáneo"
},

/* 25 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas (flexores del carpo y dedos inervados por mediano/cubital con origen en epicóndilo medial; Unión miembro-tronco = sinsarcosis)",
  respuesta:
    "1V 2V"
},

/* 26 */
{
  tipo: "rellenar",
  pregunta: "Empareja las articulaciones con sus superficies articulares (Metacarpofalangiana; Interfalangiana proximal; Antebraquiocarpiana; Codo; Hombro)",
  respuesta:
    "Metacarpofalangiana: metacarpiano + falange proximal + sesamoideos; Interfalangiana proximal: falange proximal + media; Antebraquiocarpiana: radio + carpo proximal; Codo: húmero + radio + cúbito; Hombro: escápula + húmero"
},

/* 27 */
{
  tipo: "rellenar",
  pregunta: "Empareja los músculos con su origen o inserción (Radial del carpo (ins); Flexor cubital del carpo (ins); Trapecio cervical (org); Subescapular (org))",
  respuesta:
    "Radial del carpo (ins): metacarpianos; Flexor cubital del carpo (ins): hueso accesorio; Trapecio cervical (org): rafe medio del cuello; Subescapular (org): fosa subescapular"
},

/* 28 */
{
  tipo: "rellenar",
  pregunta: "Empareja los músculos con su función (Deltoides; Flexor radial del carpo; Extensor digital común; Pectorales superficiales; Tríceps braquial)",
  respuesta:
    "Deltoides: flexor del hombro; Flexor radial del carpo: flexor del carpo; Extensor digital común: extensor de dedos; Pectorales superficiales: aducción; Tríceps braquial: extensor del codo"
},

/* 29 */
{
  tipo: "rellenar",
  pregunta: "Clasifica las articulaciones según su tipo de movimiento (Intercarpianas; Escápulo-humeral; Interfalangiana proximal (en caballo); Codo; Radiocubital (en carnivoros))",
  respuesta:
    "Intercarpianas: planas; Escápulo-humeral: enartrosis; Interfalangiana proximal (en caballo): gínglimo; Codo: gínglimo; Radiocubital (en carnivoros): trocoide"
},

/* 30 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias correctas en relación con la articulación del carpo ( Su conjunto constituye una articulación sinovial compuesta condílea (fundamentalmente en carnívoros), donde la articulación con más movimiento es la articulación carpometacarpiana. ; En la articulación antebraquiocarpiana del caballo NO existe ligamento radiocarpiano dorsal. ; Su conjunto está formado por varias articulaciones: la articulación antebraquiocarpiana, la articulación mediocarpiana, la articulación carpometacarpiana, las articulaciones intercarpianas y la articulación del hueso accesorio del carpo. ; El canal del carpo está delimitado por la cara medial del hueso accesorio, la fila proximal de los huesos del carpo y el retináculo flexor. )",
  respuesta:
    "Formada por varias articulaciones (antebraquiocarpiana, mediocarpiana, carpometacarpiana, intercarpianas y hueso accesorio)"
},

/* 31 */
{
  tipo: "rellenar",
  pregunta: "Escribe el origen de los siguientes músculos del miembro torácico (Gran dorsal; Supraespinoso; Bíceps braquial; Flexor radial del carpo)",
  respuesta:
    "Gran dorsal: fascia toracolumbar; Supraespinoso: fosa supraespinosa; Bíceps braquial: tubérculo supraglenoideo; Flexor radial del carpo: epicóndilo medial"
},

/* 32 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias correctas en relación con la articulación metacarpofalangiana del caballo ( El ligamento palmar une ambos huesos proximales y contribuye a la formación del escudo proximal. ; Todos los ligamentos se encuentran en la cara dorsal, menos los ligamentos sesamoideos colaterales lateral y medial. ; El receso palmar de la cápsula articular es más amplio que el dorsal, se encuentra entre el hueso metacarpiano y el ligamento interóseo y también, en relación con los huesos sesamoideos proximales. Es objeto de punción. ; En posición anatómica la articulación se encuentra flexionada. )",
  respuesta:
    "Ligamento palmar forma escudo proximal; Receso palmar amplio y puncionable"
},

/* 33 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas ( La arteria braquial se encuentra en la región del brazo (medialmente) y tiene trayecto paralelo al nervio axilar. o La vena cefálica es la principal vena del sistema venoso superficial, discurre por la parte craneal del antebrazo y desemboca en la vena yugular externa. o La aferencia arterial del miembro torácico se encuentra principalmente en la cara lateral del miembro. o Las raíces del plexo braquial están formadas por ramos ventrales de los tres últimos nervios cervicales (C6, C7 y C8) y los primeros torácicos (T1 y T2). )",
  respuesta:
    "1F 2V 3F 4V"
},

/* 34 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas ( Los carnívoros tienen músculo subclavio. o El músculo tríceps braquial tiene cuatro cabezas en carnívoros y todas ellas se insertan en el olécranon del cúbito. .o Los músculos que se encuentran en la espalda actúan sobre la articulación del hombro, y tienen su origen en el húmero y se insertan en el radio. )",
  respuesta:
    "1V 2V 3F"
},

/* 35 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada área de inervación con el nervio correspondiente (Subescapular; Gran dorsal; Grupo extensores/tríceps; Redondos y deltoides; Supra e infraespinoso)",
  respuesta:
    "Subescapular: nervio subescapular; Gran dorsal: toracodorsal; Grupo extensores/tríceps: radial; Redondos y deltoides: axilar; Supra e infraespinoso: supraescapular"
},

/* 36 */
{
  tipo: "rellenar",
  pregunta: "Clasifica las articulaciones según número de huesos, morfología y movimiento (Metacarpofalangiana; Codo; Radiocubital; Escápulo-humeral; Carpo)",
  respuesta:
    "Metacarpofalángica: 2 huesos, condílea, flexión/extensión y ligera abducción/aducción; Codo: 3 huesos, troclear, flexión/extensión; Radio-cubital (carnívoros): 2 huesos, trocoide, pronación/supinación; Escápulo-humeral: 2 huesos, esferoidea, multiaxial; Carpo (carnívoros): 7-8 huesos, plana/elipsoidea, flexión/extensión y ligera desviación lateral."
},

/* 37 */
{
  tipo: "rellenar",
  pregunta: "Escribe la inserción de los siguientes músculos (Trapecio; Deltoides; Infraespinoso; Flexor digital profundo)",
  respuesta:
    "Trapecio: espina de la escápula; Deltoides: tuberosidad deltoidea; Infraespinoso: tubérculo mayor; Flexor digital profundo: falange distal"
},

/* 38 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada sentencia con un músculo ( Un músculo que sea flexor de la articulación del carpo y que esté inervado por el nervio cubital: o Un músculo fijador de la escápula e inervado por el nervio accesorio: o Un músculo que se encuentra en la parte craneal del brazo y que está inervado por el mismo nervio que inerva al músculo coracobraquial: o Un músculo que sea flexor de la articulación del carpo y que esté inervado por el nervio radial: )",
  respuesta:
    "Flexor del carpo, nervio cubital: flexor profundo (porción cubital); fijador de escápula, nervio accesorio: trapecio; craneal del brazo, mismo nervio que coracobraquial: bíceps braquial; flexor del carpo, nervio radial: no existe (radial solo extiende)."
},

/* 0 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias CORRECTAS en relación con las articulaciones sinoviales: En la cápsula articular, la membrana fibrosa es la capa externa y está vascularizada e inervada; y la membrana sinovial es la capa interna que posee pliegues que aumentan su superficie y secreta la sinovia.-Según el número de huesos que forma la articulación, se clasifican en uniaxiales y multiaxiales.-Se compone de cuatro elementos: el cartílago articular, la cavidad articular, la cápsula articular y los ligamentos.-En general, son articulaciones que solo permiten movimientos de flexión y extensión.",
  respuesta: "1V 2F 3V 4F"
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

/* 5 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias VERDADERAS En la contracción muscular isométrica, no existe un movimiento y sirve para mantener una posición o sostener un peso. - Cuando se trata de un músculo del tronco, en general, el punto de inserción de un músculo es el punto de fijación más cercano al plano medial (al eje corporal). - Cuando se trata de un músculo de las extremidades, el punto de origen del músculo es el punto de fijación más próximo al dorso del animal. - En la contracción muscular isotónica excéntrica, el músculo se acorta visiblemente mientras genera tensión de forma activa.",
  respuesta: "1V 4V"
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
  respuesta: "Verdaderas todas "
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
  respuesta: "V: 1,3,4"
},

/* 10 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas: - En la articulación interfalangiana distal del caballo, el deslizamiento del tendón del músculo flexor digital profundo está facilitado por la presencia del escudo distal y la bolsa podotroclear. - El ligamento suspensor del menudillos es el músculo interóseo. En el caballo es uno de los elementos clave del aparato de sostén pasivo y participa evitando la hiper-extensión de la articulación metacarpofalangiana. - En la articulación interfalangiana proximal del caballo existen ligamento fijadores de los cartílagos ungulares. - En la articulación del hombro, los tendones de inserción de los músculos subescapular e infraespinoso actúan como ligamentos colaterales.",
  respuesta: "V: 1, 2"
},

/* 11 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias verdaderas: - Los músculos gran dorsal, braquiocefálico, pectorales superficiales y pectoral profundo se insertan en el húmero. - Los músculos que se encuentran en la parte caudal del brazo son flexores de la articulación del codo y están inervados por el nervio radial. - Los músculos flexores de las articulaciones del carpo y de los dedos están inervados por los nervios mediano y/o cubital y tienen su origen (al menos una de sus cabezas, si tienen varias) en el epicóndilo medial del húmero. - La unión del miembro torácico al tronco por medio de músculos, tendones y fascias se denomina sinsarcosis.",
  respuesta: "V: 1"
},

/* 12 */
{
  tipo: "rellenar",
  pregunta: "Empareja las siguientes articulaciones sinoviales del miembro torácico con sus superficies articulares (Articulacion matacarpofalangiana (en caballo), Articulaci n interfalangiana proximal (en caballo), Articulaci n antebraquiocarpiana (en caballo), Articulacion del codo, Articulaci n del hombro )",
  respuesta: "En el caballo, la articulación metacarpofalángica está formada por la tróclea del III metacarpiano, también llamado gran metacarpiano, la superficie articular de la base de la falange proximal y, en la zona palmar, por los dos huesos sesamoideos proximales. La articulación interfalángica proximal se establece entre la superficie convexa de la cabeza de la falange proximal, conocida como tróclea de la cuartilla, y la concavidad de la base de la falange media, denominada fóvea articular. Por su parte, la articulación antebraquiocarpiana conecta la fila superior de los huesos carpianos con los huesos del antebrazo. En el codo, la articulación involucra la tróclea y el cóndilo humeral, la fosita de la cabeza del radio y el cúbito, que se articula con la incisura troclear. Finalmente, la articulación del hombro está formada por la cavidad glenoidea de la escápula, que articula con la cabeza del húmero."
},

/* 13 */
{
  tipo: "rellenar",
  pregunta: "Empareja los siguientes músculos del miembro torácico con su origen o inserción (Inserci n del msculo radial del carpo (en carnvoros), Inserci n del msculo ßexor cubital del carpo,Origen de la porci n cervical del msculo trapecio (en carnvoros), Origen del msculo subescapular )",
  respuesta: "Inserci n del msculo radial del carpo (en carnvoros):  ORIGEN_Hmero: epic ndilo medial. INSERCIION_Metacarpianos II Y III (base): en la cara palmar (-Inserci n del msculo ßexor cubital del carpo: ORIGEN_epicondilo medial del hmero y ol cranon del cubito. INSERCION_Hueso accesorio del carpo(-Origen de la porci n cervical del msculo trapecio (en carnvoros): ORIGEN_funiculo nuca y rafe Þbroso dorsal. INSERCION_ espina de la escapula-Origen del msculo subescapular: ORIGEN_Fosa subescapular de la escapula. INSERCION_ tub rculo menor del humero."
},

/* 14 */
{
  tipo: "rellenar",
  pregunta: "Empareja los siguientes músculos del miembro torácico con su función (deltoides, ßexor radial del carpo,  extensor digital comun, pectorales superficiales,  triceps braquial ) ",
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
  pregunta: "Marca las sentencias correctas en relación con la articulación del carpo (Su conjunto constituye una articulacion sinovial compuesta cond lea (fundamentalmente en carn voros), donde la articulaci n con m s movimiento es la articulaci n carpometacarpiana. -En la articulaci n antebraquiocarpiana del caballo NO existe ligamento radiocarpiano dorsal.(-Su conjunto est formado por varias articulaciones: la articulaci n antebraquiocarpiana, la articulaci n mediocarpiana, la articulaci n carpometacarpiana, las articulaciones intercarpianas y la articulaci n del hueso accesorio del carpo.(-El canal del carpo est delimitado por la cara medial del hueso accesorio, la Þla proximal de los huesos del carpo y el retin culo ßexor. )",
  respuesta: "V: 2, 3"
},

/* 17 */
{
  tipo: "rellenar",
  pregunta: "Escribe el origen de los siguientes músculos del miembro torácico (gran dorsal Musculo supraespinoso Musculo b ceps braquial Musculo flexor radial del carpo",
  respuesta: "gran dorsal: fosa subescapular de la escapula-M sculo supraespinoso: fosa supraespinosa de la escapula(-M sculo b ceps braquial: tub rculo supraglenoideo de la escapula-M sculo ßexor radial del carpo: epicondilo medial del h mero"
},

/* 18 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada área de inervación con el nervio del plexo braquial que inerva (Músculo subescapular, músculo gran dorsal, músculos tríceps braquial, tensor de la fascia del antebrazo, ancóneo, extensores del carpo y de los dedos, braquiorradial, supinador, músculos redondo mayor, redondo menor, deltoides, músculos supraespinoso e infraespinoso)",
  respuesta: "Subescapular: nervio subescapular; Gran dorsal: nervio toracodorsal; Tríceps braquial, tensor fascia antebrazo, ancóneo, extensores: nervio radial; Redondos y deltoides: nervio axilar; Supraespinoso e infraespinoso: nervio supraescapular"
},

/* 19 */
{
  tipo: "rellenar",
  pregunta: "Escribe la inserción de los siguientes músculos del miembro torácico (Músculo trapecio, músculo deltoides, músculo infraespinoso, músculo flexor digital profundo)",
  respuesta: "Trapecio: espina de la escápula; Deltoides: tuberosidad deltoidea del húmero; Infraespinoso: tubérculo mayor del húmero; Flexor digital profundo (carnívoros): superficie flexora de la tercera falange"
},

/* 20 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada sentencia con un músculo que la cumpla (Un músculo que sea flexor de la articulación del carpo e inervado por el nervio cubital, un músculo fijador de la escápula e inervado por el nervio accesorio, un músculo que se encuentra en la parte craneal del brazo e inervado por el mismo nervio que inerva al músculo coracobraquial, un músculo que sea flexor de la articulación del carpo e inervado por el nervio radial)",
  respuesta: "Flexor del carpo + nervio cubital: flexor digital profundo; Fijador de la escápula + nervio accesorio: trapecio; Craneal del brazo + nervio musculocutáneo: bíceps braquial; Flexor del carpo + nervio radial: extensor cubital del carpo"
},


/* 22 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias VERDADERAS: Las raíces del plexo braquial están formadas por ramos ventrales de los tres últimos nervios cervicales (C6, C7 y C8) y los dos primeros torácicos (T1 y T2). - La vena cefálica es la principal vena del sistema venoso superficial, discurre por la parte craneal del antebrazo y desemboca en la vena yugular externa. - La aferencia arterial del miembro torácico se encuentra principalmente en la cara lateral del miembro. - La arteria braquial se encuentra en la región del brazo (medialmente) y tiene un trayecto paralelo al nervio axilar.",
  respuesta: "V: 1, 2"
},

/* 23 */
{
  tipo: "rellenar",
  pregunta: "Señala las estructuras que se encuentran en relación con la articulación interfalangiana distal en los caballos (a. Ligamentos Þjadores de los cart lagos ungulares b. Ligamento sesamoideo recto c. Escudo distal d. Bolsa podotroclear e. Ligamento inter seo)",
  respuesta: "Ligamentos fijadores de los cartílagos ungulares, escudo distal"
},

/* 24 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada arteria con la arteria principal del miembro torácico de la que proceden (Arteria torácica externa, arteria circunfleja humeral craneal, arteria bicipital, arteria braquial profunda, arteria radial, arteria subescapular, arteria interósea común) opciones: -Arteria mediana, -arteria braquial y -arteria axilar",
  respuesta: "Torácica externa: arteria axilar; Circunfleja humeral craneal: arteria axilar; Bicipital: arteria braquial; Braquial profunda: arteria braquial; Radial: arteria mediana; Subescapular: arteria axilar; Interósea común: arteria braquial"
},

/* 25 */
{
  tipo: "rellenar",
  pregunta: "Empareja los siguientes músculos del miembro torácico con su función (Músculo flexor radial del carpo, músculo bíceps braquial, músculo infraespinoso, músculo extensor digital común, músculo romboides) opciones: -Extensor del carpo y de los dedos, -Extensor del codo y Flexor del hombro, -Fijador de la esc pula, -Flexor del hombro, -Aductor del miembro tor cico, -Flexor del carpo y extensor del codo -Flexor del codo y Extensor del hombro ",
  respuesta: "Flexor radial del carpo: flexor del carpo y extensor del codo; Bíceps braquial: flexor del codo y extensor del hombro; Infraespinoso: flexor del hombro; Extensor digital común: extensor del carpo y de los dedos; Romboides: fijador de la escápula"
},

/* 26 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias VERDADERAS: - Los carnívoros tienen músculo subclavio. - Los músculos que se encuentran en la espalda actúan sobre la articulación del hombro, y tiene su origen en el húmero y se insertan en el radio. - El músculo tríceps braquial tiene cuatro cabezas en carnívoros y todas ellas se insertan en el olécranon del cúbito. - El lacertus fibrosus forma parte del aparato de sostén pasivo de équidos y evita la flexión de la articulación del carpo.",
  respuesta: "V: 2,3,4 "
},

/* 27 */
{
  tipo: "rellenar",
  pregunta: "Dime las estructuras que se encuentran en el hueco poplíteo (Arteria safena, Vasos femorales caudales distales, Linfon dulo popliteo, vena safena lateral, Vena safena medial, Arteria tibial)",
  respuesta: "Vasos femorales caudales distales, linfonódulo poplíteo, vena safena lateral, arteria tibial"
},

/* 28 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada sentencia con un músculo que la cumpla (Un músculo que sea flexor de la articulación del carpo y que esté inervado por el nervio cubital, un músculo fijador de la escápula e inervado por el nervio accesorio, un músculo que se encuentra en la parte caudal del brazo y que esté inervado por el nervio radial, un músculo que sea flexor de la articulación del carpo y que esté inervado por el nervio radial) opciones: M sculo trapecio, -M sculo romboides, M sculo braquial, -M sculo tr ceps braquial, -M sculo ßexor cubital del carpo y -M sculo extensor cubital del carpo ",
  respuesta: "Flexor del carpo + nervio cubital: flexor cubital del carpo; Fijador de la escápula + nervio accesorio: trapecio; Parte caudal del brazo + nervio radial: tríceps braquial; Flexor del carpo + nervio radial: extensor cubital del carpo"
},

/* 29 */
{
  tipo: "rellenar",
  pregunta: "Escribe la INSERCIÓN de los siguientes músculos del miembro torácico (Músculo serrato ventral, músculo deltoides, músculo infraespinoso, músculo extensor digital común)",
  respuesta: "Serrato ventral: cara serrata craneal y caudal de la escápula; Deltoides: tuberosidad deltoidea del húmero; Infraespinoso: tubérculo mayor del húmero; Extensor digital común (carnívoros): tercera falange"
},

/* 30 */
{
  tipo: "rellenar",
  pregunta: "Señala los músculos que sean flexores del hombro (a. Deltoides b. B ceps braquial c. Supraespinoso d. Redondo mayor e. Gran dorsal f. Pectorales superÞciales)",
  respuesta: "Deltoides, redondo mayor, gran dorsal"
},

/* 31 */
{
  tipo: "rellenar",
  pregunta: "Empareja el nervio que inerva a los siguientes músculos del miembro torácico (Los músculos que se encuentran en la parte craneolateral del antebrazo, los músculos que se encuentran en la parte caudal del brazo, los músculos pronadores del antebrazo, los músculos que se encuentran en la parte craneal del brazo)",
  respuesta: "Parte craneolateral del antebrazo: nervio radial; Parte caudal del brazo: nervio radial; Pronadores del antebrazo: nervio mediano; Parte craneal del brazo: nervio musculocutáneo"
},

/* 32 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias VERDADERAS- El manguito flexor es una envoltura fibrosa formada por cada tendón del músculo flexor digital profundo alrededor del correspondiente tendón del músculo flexor digital superficial. - El músculo extensor cubital del carpo, por su posición caudal, es en realidad flexor de la articulación del carpo. - Los músculos que se encuentran en la parte craneal del brazo son flexores de la articulación del codo y están inervados por el nervio musculocutáneo. - Los músculos romboides y gran dorsal son músculos extrínsecos del miembro torácico y se encuentran en un plano superficial.",
  respuesta: "V: 1, 2"
},

/* 33 */
{
  tipo: "rellenar",
  pregunta: "Clasifica las siguientes articulaciones del miembro torácico según su tipo de movimiento (Articulación metacarpofalángica, articulación radio-cubital, articulación escápulo-humeral, articulaciones intercarpianas, articulación del codo) Opciones: -Aducci n / Abducci n, -Flexi n / Extensi n, Aducci n / Abducci n y Rotaci n, -Flexi n / Extensi n - Pronaci n / Supinaci n y -Deslizamiento ",
  respuesta: "Metacarpofalangiana (caballo): flexión/extensión; Radio-cubital (carnívoros): pronación/supinación; Escápulo-humeral: flexión/extensión, aducción/abducción y rotación; Intercarpianas: deslizamiento; Codo: flexión/extensión"
},

/* 34 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes ligamentos con la articulación del miembro torácico en la que se encuentran (Ligamento radiocarpiano palmar, ligamentos condrocoronales, ligamento anular del radio, ligamentos sesamoideos oblicuos)",
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
  pregunta: "Señala los músculos cuyo tendón actúa como ligamento colateral en la articulación del hombro (a. Subescapular b. Infraespinoso c. Tr ceps braquial d. Redondo mayor e. Trapecio)",
  respuesta: "infraespinoso"
},

  /* 36 */
{
  tipo: "rellenar",
  pregunta: "Senala los m sculos que est n inervados por el nervio radial. Seleccione una o mas de una: (a. Redondo menor b. B ceps braquial c. Pronador redondo d. Extensor digital com n e. Extensor cubital del carpo f. Tr ceps braquial)",
  respuesta: "Extensor digital comun, Extensor cubital del carpo, Triceps braquial"
},

/* 37 */
{
  tipo: "rellenar",
  pregunta: "Escribe el ORIGEN de los siguientes músculos del miembro torácico (Músculo pectoral descendente, músculo redondo mayor, músculo bíceps braquial, músculo flexor digital superficial)",
  respuesta: "Pectoral descendente: manubrio del esternón; Redondo mayor: ángulo y borde caudal de la escápula; Bíceps braquial: tubérculo supraglenoideo de la escápula; Flexor digital superficial: epicóndilo medial del húmero"
},

/* 38 */
{
  tipo: "rellenar",
  pregunta: "Marca las sentencias CORRECTAS en relación con la articulación del carpo (a. En la articulaci n antebraquiocarpiana del caballo NO existe el ligamento radiocarpiano dorsal b. Su conjunto est formado por varias articulaciones: la articulaci n antebraquiocarpiana, la articulaci n mediocarpiana, la articulaci n carpometacarpiana, las articulaciones intercarpianas y la articulaci n del hueso accesorio del carpo c. La articulaci n con m s movimiento es la articulaci n carpometacarpiana d. El canal del carpo est delimitado por el hueso accesorio, la Þla proximal de los huesos del carpo y el retin culo extensor)",
  respuesta: "Correctas: 1, 2"
},

/* 39 */
{
  tipo: "rellenar",
  pregunta: "Inserciones del músculo bíceps femoral (Tendon calcaneo comun, Fosa trocanterica del femur, Fascia lata, Cresta iliaca, Ligamento rotuliano, Rotula)",
  respuesta: "Tendón calcáneo común, fascia lata, ligamento rotuliano"
},

/* 40 */
{
  tipo: "rellenar",
  pregunta: "RELACIONA CADA UNO DE ESTOS MÚSCULOS CON SU INSERCIÓN (Pronador cuadrado, trapecio, tríceps braquial, serrato ventral, músculo infraespinoso) Opciones: Cara caudal del radio, cara serrata de la escapula, olecranon, espina de la escapula, tub rculo mayor del h mero.",
  respuesta: "Pronador cuadrado: cara caudal del radio; Trapecio: espina de la escápula; Tríceps braquial: olécranon; Serrato ventral: cara serrata de la escápula; Infraespinoso: tubérculo mayor del húmero"
},

/* 41 */
{
  tipo: "rellenar",
  pregunta: "Une cada uno de los siguientes músculos con la articulación o articulaciones sobre las que actúan (Tríceps, braquial, extensor digital común, extensor carporradial)",
  respuesta: "Tríceps: codo; Braquial: codo; Extensor digital común: carpo y dedos; Extensor carporradial: carpo"
},

/* 42 */
{
  tipo: "rellenar",
  pregunta: "La inervación del miembro torácico corre a cargo de los___ de los nervios espinales, comprendiendo los segmentos nerviosos___, y recibiendo el nombre de___ . Las raíces emergen al___ ventralmente al___ . El___ es el más voluminoso del plexo braquial y más importante desde el punto de vista funcional. El___ y el___ tienen su origen en un tronco común y se encargan conjuntamente de la inervación de los___ del carpo y de los dedos. (Opciones: plexo lumbar, plexo braquial, ramos ventrales, c4-t2, espacio axilar, musculos ßexores, m sculo escaleno profundo, nervio radial, nervio mediano, nervio cubital, c5-t3, m sculo escaleno medio, nervio musculocutaneo, c6-t2.)",
  respuesta: "Ramos ventrales, C6-T2, plexo braquial, espacio axilar, músculo escaleno medio, nervio radial, nervio cubital, nervio mediano, músculos flexores"
},

/* 43 */
{
  tipo: "rellenar",
  pregunta: "De las siguientes frases, indica cuáles son verdaderas sobre el miembro torácico (La cabeza accesoria del tr ceps ayuda en la ßexi n del hombro-El nervio cubital es el m s caudal de los que inervan el miembro tor cico-El extensor carporradial puede ayudar en la ßexi n del codo-El extensor carporradial forma pate del aparato de sustentaci n pasiva de los quidos-El extensor carporradial puede ayudar en la extensi n del codo-Al ßexor digital profundo se le llama 'perforado'-La manica ßexora es una envoltura del ßexor digital superÞcial sobre el profundo-El m sculo braquiorradial es pronador-La manica ßexora es una envoltura del ßexor digital superÞcial sobre el profundo)",
  respuesta: "V: 3, 7, 9"
},

/* 44 */
{
  tipo: "rellenar",
  pregunta: "Seleccione los músculos que forman la cintura escapular (Músculo tensor de la fascia del antebrazo, músculo subescapular, músculo braquiorradial, músculo trapecio, músculo serrato ventral, músculo omotransverso, músculo gran dorsal, músculo recto escapular, músculo braquiocefálico, músculo ancóneo, músculos pectoral profundo, músculo flexor digital profundo, músculo bíceps braquial, músculo romboides, músculos pectorales superficiales, músculo deltoides, músculo largo del tronco)",
  respuesta: "Trapecio, serrato ventral, omotransverso, gran dorsal, braquiocefálico, pectoral profundo, romboides, pectorales superficiales"
},

/* 45 */
{
  tipo: "rellenar",
  pregunta: "RELACIONA CADA MÚSCULO CON SU FUNCIÓN (Músculo braquial, músculo supraespinoso, pectoral superficial, músculo redondo mayor, músculo ancóneo) Opciones: ADUCTOR DEL MIEMBRO, EXTENSOR DEL HOMBRO, FLEXOR DEL CODO, FLEXOR DEL HOMBRO, EXTENSOR DEL CODO",
  respuesta: "Braquial: nada ; Supraespinoso: extensor del hombro; Pectoral superficial: aductor del miembro; Redondo mayor: flexor del hombro; Ancóneo: extensor del codo"
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
  correcta: 2
},

/* 48 */
{
  tipo: "rellenar",
  pregunta: "Relaciona la articulación con el tipo que es (Articulación del carpo, articulación escapulohumeral, articulación radio-cubital proximal, articulación humero-radio-cubital)",
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
  pregunta: "Selecciona el elemento vascular más importante del sistema venoso superficial y sus dos vasos tributarios más importantes del mismo (Vena radial, vena axilobraquial, vena cefálica, vena mediana, vena subclavia, vena omobraquial, vena yugular)",
  respuesta: "Vena axiobraquial, vena omobraquial"
},

/* 51 */
{
  tipo: "rellenar",
  pregunta: "RELACIONA CADA UNO DE ESTOS MÚSCULOS CON SU INERVACIÓN (Bíceps braquial, flexor carpo cubital, omotransverso, extensor digital común, deltoides) Opciones: NERVIO RADIAL, NERVIO MòSCULOCUTçNEO, NERVIO CUBITAL, NERVIO AXILAR, NERVIO ACCESORIO (PAR CRANEAL XI)",
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
  pregunta: "De las siguientes frases, indica cuáles son verdaderas sobre tríceps y bíceps braquial (El tr ceps braquial es el principal ßexor del codo-El tr ceps braquial es el principal extensor del codo-El b ceps braquial es el principal ßexor del codo-El b ceps braquial es el principal extensor del codo)",
  respuesta: "Verdaderas: tríceps braquial es el principal extensor del codo, bíceps braquial es el principal flexor del codo; Falsas: tríceps NO es flexor del codo, bíceps NO es extensor del codo"
},

/* 54 */
{
  tipo: "rellenar",
  pregunta: "Une cada uno de los siguientes ligamentos con la articulación a la que pertenecen (Ligamento radiocarpiano palmar, ligamento pisocubital, ligamento anular del radio, ligamentos glenohumerales) Opciones: Articulaci n del hombro, Articulaci n radiocubital distal, Articulaci n radiocubital proximal, Articulaci n antebraquiocarpiana, Articulaci n del hueso accesorio, Articulaci n carpo-metacarpiana",
  respuesta: "Ligamento radiocarpiano palmar: articulación antebraquiocarpiana; Ligamento pisocubital: articulación del hueso accesorio; Ligamento anular del radio: articulación radiocubital proximal; Ligamentos glenohumerales: articulación del hombro"
},

/* 55 */
{
  tipo: "rellenar",
  pregunta: "Une cada músculo con su origen (Supinador, omotransverso, redondo mayor, subclavio)",
  respuesta: "Supinador: epicóndilo lateral del húmero; Omotransverso: espina de la escápula; Redondo mayor: borde caudal de la escápula; Subclavio: manubrio esternal y cartílagos costales"
},

/* 56 */
{
  tipo: "rellenar",
  pregunta: "Relacione los siguientes músculos con el papel que cada uno de ellos hace en el movimiento de FLEXIÓN DEL HOMBRO (Músculo agonista, músculo antagonista, músculo sinergista, músculo protagonista) Músculo supraespinoso, músculo gran dorsal, músculo tensor de la fascia del antebrazo, músculo trapecio, músculo deltoides, músculo redondo mayor/menor",
  respuesta: "Músculo agonista: músculo redondo mayor/menor; Músculo antagonista: músculo supraespinoso; Músculo sinergista: músculo gran dorsal; Músculo protagonista: músculo deltoides"
},

/* 57 */
{
  tipo: "rellenar",
  pregunta: "Une cada uno de los siguientes ligamentos con la articulación a la que pertenecen (Ligamento interóseo medio, ligamentos intercarpianos interóseos, ligamentos palmares axiales y abaxiales, ligamento condrocompedal) opt: Articulación interfalangiana proximal, articulación carpo-metacarpiana, articulación carpometacarpiana, articulación metacarpofalangiana, articulación intermetacarpianas, articulación intercarpiana, articulación interfalangiana distal, articulación radiocubital distal, articulación húmero-radio-cubital",
  respuesta: "Ligamento (tendón) interóseo medio: articulación metacarpofalangiana; Ligamentos intercarpianos interóseos: articulación intermetacarpianas; Ligamentos palmares axiales y abaxiales: articulación interfalangiana proximal; Ligamento condrocompedal: articulación interfalangiana distal"
},

/* 58 */
{
  tipo: "rellenar",
  pregunta: "Empareja cada afirmación con el músculo que la cumpla (Músculo flexor del carpo, músculo flexor del codo, músculo flexor del hombro, músculo extensor del hombro) opt: Músculo bíceps braquial, músculo gran dorsal, músculo flexor cubital del carpo, músculo supraespinoso, músculo braquial, músculo extensor cubital del carpo, músculo romboides",
  respuesta: "Músculo flexor del carpo e inervado por nervio cubital: flexor cubital del carpo; Músculo flexor del codo, sin acción en el hombro e inervado por nervio musculocutáneo: braquial; Músculo flexor del hombro e inervado por nervio toracodorsal: gran dorsal; Músculo extensor del hombro e inervado por nervio supraescapular: supraespinoso"
},

// PARCIAL MIEMBRO PELVIANO

/* 59 */
{
  tipo: "rellenar",
  pregunta: "El nervio ciático da lugar a los nervios: Safeno, femoral, tibial, glúteo craneal, circunflejo femoral lateral, peroneo común",
  respuesta: "Tibial, peroneo común"
},

/* 61 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con su función (Aductor, piriforme, cuádriceps femoral, peroneo largo)",
  respuesta: "Aductor: aductor del miembro; Piriforme: extensor de la cadera; Cuádriceps femoral: extensor de la rodilla y flexor de la cadera; Peroneo largo: flexor del tarso"
},

/* 62 */
{
  tipo: "rellenar",
  pregunta: "De estos músculos ¿Cuáles NO están inervados por el nervio ciático? (Bíceps femoral, cuádriceps femoral, cuadrado femoral, tensor de la fascia lata, abductor caudal de la pierna, glúteo profundo)",
  respuesta: "Cuádriceps femoral, tensor de la fascia lata, gluteo profundo"
},

/* 63 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con sus inserciones (Glúteo profundo, pectíneo, iliopsoas, gastrocnemios)",
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
  correcta: 3
},

/* 66 */
{
  tipo: "rellenar",
  pregunta: "Los siguientes músculos están inervados por (Sartorio, tensor de la fascia lata, pectíneo, bíceps femoral)",
  respuesta: "Sartorio: nervio femoral; Tensor de la fascia lata: nervio glúteo craneal; Pectíneo: nervio obturador; Bíceps femoral: nervio ciático"
},

/* 67 */
{
  tipo: "rellenar",
  pregunta: "¿Qué función NO tiene el músculo bíceps femoral? (Extensor de la rodilla, abductor del miembro, flexor del tarso, flexor de la rodilla) ",
  respuesta: "Flexor del tarso"
},

/* 68 */
{
  tipo: "rellenar",
  pregunta: "Inserciones del músculo bíceps femoral (Fosa trocantérica del fémur, ligamento rotulado, rótula, tendón calcáneo común, fascia lata, cresta ilíaca)",
  respuesta: " tendón calcáneo común, fascia lata"
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
  correcta: 3
},

/* 70 */
{
  tipo: "rellenar",
  pregunta: "Relaciona estas estructuras con su articulación (Meniscos, ligamento plantar largo, ligamento púbico craneal, ligamento de la cabeza del fémur)",
  respuesta: "Meniscos: articulación de la rodilla; Ligamento plantar largo: articulación del tarso-metatarsiano/tarsofálangica/tarsometatarsiana; Ligamento púbico craneal: articulación púbica/sínfisis púbica; Ligamento de la cabeza del fémur: articulación coxofemoral o de la cadera"
},

/* 71 */
{
  tipo: "rellenar",
  pregunta: "Los siguientes músculos están inervados por (Sartorio, cuadrado femoral, tensor de la fascia lata, aductor)",
  respuesta: "Sartorio: nervio femoral; Cuadrado femoral: nervio ciático; Tensor de la fascia lata: nervio glúteo caudal; Aductor: nervio obturador"
},

/* 72 */
{
  tipo: "rellenar",
  pregunta: "Empareja el músculo con su función (Músculo cuádriceps femoral, músculos gastrocnemios, músculo poplíteo, músculo piriforme) opt: Flexor del tarso, extensor del tarso, extensor de la cadera, flexor de la rodilla, extensor de la rodilla, flexor de la cadera",
  respuesta: "Cuádriceps femoral: extensor de la rodilla; Gastrocnemios: extensor del tarso; Poplíteo: flexor de la rodilla; Piriforme: extensor de la cadera"
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
  correcta: 2
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
  correcta: 2
},

/* 78 */
{
  tipo: "rellenar",
  pregunta: "¿Qué estructuras forman los límites del canal femoral? (Lámina femoral, musculo psoas menos, borde craneal del pubis, músculo sartorio, borde craneal del pubis, músculo aductor, tendón sinfisario, músculo pectíneo)",
  respuesta: "Lámina femoral, músculo sartorio, músculo pectíneo"
},

/* 79 */
{
  tipo: "rellenar",
  pregunta: "De estos músculos ¿Cuáles están inervados por el nervio ciático? (Cuádriceps femoral, bíceps femoral, pectíneo, glúteo profundo, abductor caudal de la pierna, tensor de la fascia lata, cuadrado femoral, semitendinoso)",
  respuesta: "Bíceps femoral, abductor caudal de la pierna, cuadrado femoral, semitendinoso"
},

/* 82 */
{
  tipo: "rellenar",
  pregunta: "¿Qué ligamentos forman parte de la articulación femororrotuliana en los carnívoros? (Ligamento rotuliano medial, ligamento rotuliano lateral, ligamentos femororrotulianos lateral y medial, ligamentos cruzados, ligamento rotuliano intermedio, ligamentos colaterales medial y lateral)",
  respuesta: "Ligamento rotuliano medial, ligamento rotuliano lateral, ligamentos femororrotulianos lateral y medial, ligamento rotuliano intermedio"
},

/* 83 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con su origen (Glúteo medio, tensor de la fascia lata, grácil, semitendinoso) opt: Cara glútea del ilion, tuberosidad coxal, tuberosidad sacra, eminencia iliopúbica",
  respuesta: "Glúteo medio: cara glútea del ilion; Tensor de la fascia lata: tuberosidad coxal; Gracilis: sínfisis pélvica; Semitendinoso: tuberosidad isquiática"
},

/* 84 */
{
  tipo: "rellenar",
  pregunta: "De estos músculos ¿Cuáles forman parte del tendón calcáneo común? (Vasto lateral del cuádriceps, sartorio, flexor digital profundo, tensor de la fascia lata, flexor digital superficial, semitendinoso, bíceps femoral, gracilis)",
  respuesta: "flexor digital superficial, semitendinoso, bíceps femoral, gracilis"
},

/* 85 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con sus inserciones (Iliopsoas, glúteo profundo, pectíneo, gastrocnemios) opt:Trocánter menor, cara áspera del fémur, trocánter mayor, tuberosidad del calcáneo, cóndilo medial de la tibia ",
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
  pregunta: "Marca las sentencias CORRECTAS: (Todos los ligamentos se encuentran en la cara dorsal, menos los ligamentos sesamoideos colaterales lateral y medial - El ligamento palmar une ambos huesos sesamoideos proximales y contribuye a la formación del escudo proximal - En posición anatómica la articulación se encuentra flexionada - El receso palmar de la cápsula articular es más amplio que el dorsal y se encuentra entre el III metacarpiano y el ligamento interóseo)",
  respuesta: "Correctas: 1,2,4"
},

/* 88 */
{
  tipo: "rellenar",
  pregunta: "Relaciona los siguientes músculos con sus inserciones (Glúteo profundo, pectíneo, gastrocnemios, iliopsoas) opt: Trocánter menor, tuberosidad del calcáneo, cara áspera del fémur, cóndilo medial de la tibia, trocánter mayor",
  respuesta: "Glúteo profundo: trocánter mayor del fémur; Pectíneo: cara áspera del fémur; Gastrocnemios: tuberosidad del calcáneo; Iliopsoas: trocánter menor"
},

/* 89 */
{
  tipo: "rellenar",
  pregunta: "Los siguientes músculos están inervados por (Sartorio, aductor, tensor de la fascia lata, bíceps femoral) opt: Nervio ciático, nervio tibial, nervio femoral, nervio glúteo caudal, nervio peroneo, nervio glúteo craneal, nervio obturador",
  respuesta: "Sartorio: nervio femoral; Aductor: nervio obturador; Tensor de la fascia lata: nervio glúteo caudal; Bíceps femoral: nervio ciático"
},

/* 90 */
{
  tipo: "rellenar",
  pregunta: "Empareja el músculo con su función (Músculos gastrocnemios, músculo glúteo medio, músculo cuádriceps femoral, músculo poplíteo) opt: Extensor de la cadera, flexor del tarso, flexor de la cadera, extensor del tarso, flexor de la rodilla, extensor de la rodilla",
  respuesta: "Gastrocnemios: extensor del tarso; Glúteo medio: extensor de la cadera; Cuádriceps femoral: extensor de la rodilla; Poplíteo: flexor de la rodilla"
}

  
];

















