const preguntas = [

/* 1 */
{
  tipo: "test",
  pregunta: "Los núcleos rostrales del tálamo pertenecen al siguiente circuito:",
  opciones: ["Motor piramidal", "Motor extrapiramidal", "Pápez", "Auditiva"],
  correcta: 2
},

/* 2 */
{
  tipo: "test",
  pregunta: "Desde un punto de vista funcional, el núcleo geniculado medial forma parte del:",
  opciones: [
    "Sistema de proyección directo",
    "Sistema de proyección cortical difuso",
    "Sistema talámico de asociación",
    "Sistema talámico de proyección"
  ],
  correcta: 0
},

/* 3 */
{
  tipo: "test",
  pregunta: "El núcleo dorsomedial se considera:",
  opciones: ["Motor", "Visual", "Táctil", "Límbico"],
  correcta: 3
},

/* 4 */
{
  tipo: "test",
  pregunta: "Desde un punto de vista funcional, los núcleos paraventriculares proyectan:",
  opciones: [
    "A áreas concretas de la corteza",
    "A áreas difusas de la corteza",
    "A áreas motoras de la corteza",
    "A áreas sensitivas de la corteza"
  ],
  correcta: 1
},

/* 5 */
{
  tipo: "rellenar",
  pregunta: "Relaciona cada uno de estos núcleos talámicos con su función (Núcleo pulvinar, Núcleo rostral, Núcleo geniculado medial, Núcleos intralaminar)",
  respuesta:
    "Pulvinar: integracion; Núcleo rostral: circuito (Pápez); Geniculado medial: vias auditivas; Intralaminares: ARAS"
},

/* 6 */
{
  tipo: "rellenar",
  pregunta: "Indica cuál de estas frases es correcta: (a) Los núcleos rostrales del tálamo pueden llegar a ser sensitivos | b) El núcleo accumbens es motor y límbico | c) El núcleo geniculado lateral proyecta a áreas concretas de la corteza | d) Los núcleos paraventriculares son motores) ",
  respuesta: "a) Los núcleos rostrales del tálamo pueden llegar a ser sensitivos | b) El núcleo accumbens es motor y límbico | c) El núcleo geniculado lateral proyecta a áreas concretas de la corteza"
},

/* 7 */
{
  tipo: "test",
  pregunta: "Si tuvieras que definir la función del tálamo con una frase dirías que:",
  opciones: [
    "Es el gran centro del relevo del cerebro",
    "Es el gran centro motor del sistema extrapiramidal",
    "Es el gran centro sensitivo del cerebro",
    "El principal centro visual del cerebro"
  ],
  correcta: 0
},

/* 8 */
{
  tipo: "test",
  pregunta: "Si tuvieras que definir la función del hipotálamo con una frase dirías que:",
  opciones: [
    "Es el centro endocrino y límbico por excelencia",
    "Es un gran centro endocrino pero no límbico",
    "Es un gran centro límbico pero no endocrino",
    "Nada de lo anterior"
  ],
  correcta: 0
},

/* 9 */
{
  tipo: "test",
  pregunta: "Los núcleos mamilares se consideran fundamentalmente:",
  opciones: ["Límbicos", "Endocrinos", "Ambas cosas", "Nada de lo anterior"],
  correcta: 0
},

/* 10 */
{
  tipo: "test",
  pregunta: "Por qué son tan importantes los núcleos supraóptico y paraventricular del hipotálamo?:",
  opciones: [
    "Porque conectan directamente con la adeno hipófisis",
    "Porque son una parte esencial del eje hipotálamo-hipofisario",
    "Porque conectan directamente con los cuerpos mamilares",
    "Por producir prolactina y FSH"
  ],
  correcta: 1
},

/* 11 */
{
  tipo: "test",
  pregunta: "El origen de las dos partes de la hipófisis:",
  opciones: [
    "Es ectodérmico en ambos casos",
    "Es mesodérmico para la adenohipófisis y ectodérmico para la neurohipófisis",
    "Es mesodérmico en los dos casos",
    "Es endodérmico en los dos casos"
  ],
  correcta: 0
},

/* 12 */
{
  tipo: "test",
  pregunta: "Si tuvieras que hablar de la principal conexión eferente de los cuerpos mamilares, dirías que es:",
  opciones: ["El haz mamilotalámico", "El fornix", "La fimbria", "Nada de lo anterior"],
  correcta: 0
},

/* 13 */
{
  tipo: "test",
  pregunta: "El fórnix con respecto al hipotálamo es:",
  opciones: ["Aferente", "Eferente", "Mixto dependiendo de la información que llegue", "Sensitivo"],
  correcta: 0
},

/* 14 */
{
  tipo: "test",
  pregunta: "El alveus se forma por:",
  opciones: [
    "Los axones de las células piramidales del hipocampo",
    "Por la conversión de la fimbria",
    "Los axones de las células estrelladas del hipocampo",
    "Los axones de las células gliales del hipocampo"
  ],
  correcta: 0
},

/* 15 */
{
  tipo: "test",
  pregunta: "La corteza entorrinal forma parte del siguiente circuito:",
  opciones: ["Endocrino", "Motor extrapiramidal", "Pápez", "Gustativo"],
  correcta: 2
},

/* 16 */
{
  tipo: "test",
  pregunta: "Los núcleos basales son importantes por:",
  opciones: [
    "Ser fundamentales dentro del sistema motor piramidal",
    "Ser fundamentales por intervenir en el inicio y finalización de los movimientos",
    "Ser fundamentales en la automatización de los movimientos",
    "Por todo lo anterior"
  ],
  correcta: 1
},

/* 17 */
{
  tipo: "test",
  pregunta: "La amígdala se consideró durante muchos años dentro de los núcleos basales porque:",
  opciones: [
    "Es parte de la vía dopaminérgica, como el núcleo caudado",
    "Es parte de la vía serotoninérgica, como el núcleo caudado",
    "Porque dependiendo del momento puede tener una cierta actividad motora",
    "Porque se relaciona con el cerebelo, como el núcleo caudado"
  ],
  correcta: 0
},

/* 18 */
{
  tipo: "rellenar",
  pregunta: "Indica cuál de estas estructuras es diencefálica y cuál telencefálica (Hipocampo, Hipotálamo, Habénula, Núcleo pulvinar, Amígdala, Lóbulo piriforme, Corteza entorrinal, Núcleos mamilares, Núcleo subtalámico, Claustro)",
  respuesta:
    "Telencéfaloica: amígdala, lóbulo piriforme, corteza entorrinal, claustro, hipocampo. Diencéfalica: hipotálamo, habénula, nucleo pulvinar, núcleos mamilares, núcleo subtalámico"
},

/* 19 */
{
  tipo: "rellenar",
  pregunta: "Indica cuál de estas estructuras sustancia gris y cuál sustancia blanca (Alveus, Cuerpo calloso, Cuerpos mamilares, Núcleos del septo, Quiasma óptico, Cápsula interna, Putamen, Globo pálido, Amígdala, Cuerpo geniculado medial)",
  respuesta:
    "Blanca: alveus, cuerpo calloso, quiasma óptico, cápsula interna. Gris: cuerpos mamilares, núcleos del septo, putamen, globo pálido, amígdala, geniculado medial"
},

/* 20 */
{
  tipo: "test",
  pregunta: "En términos generales, el sistema nervioso autónomo se encuentra fuertemente regulado por:",
  opciones: ["El tálamo", "El hipotálamo", "Los núcleos basales", "Estructuras del sistema límbico"],
  correcta: 1
},

/* 21 */
{
  tipo: "rellenar",
  pregunta: "Empareja las estructuras que pertenecen al mismo sistema (Globo pálido, Lemnisco lateral, Cuerpos mamilares, Cuerpo geniculado medial, Corteza cingular, Colículo rostral, Núcleo subtalámico, Cuerpo geniculado lateral)",
  respuesta:
    "Globo pálido-Núcleo subtalámico; Cuerpos mamilares-Corteza cingular; Leminisco lateral-cuerpo geniculado lateral; Circulo rostral-cuerpo geniculado medial"
},

/* 22 */
{
  tipo: "test",
  pregunta: "Los cuerpos mamilares se consideran fundamentalmente límbicos por:",
  opciones: [
    "Conectar con los núcleos rostrales del tálamo",
    "Porque su principal vía aferente es el fórnix",
    "Por ambas cosas",
    "Por nada de lo anterior"
  ],
  correcta: 2
},

/* 23 */
{
  tipo: "rellenar",
  pregunta: "De las siguientes estructuras, señala cuál de ellas es sustancia gris y cuál sustancia blanca (Cápsula externa, Claustro, Fórnix, Habénula, Putamen, Quiasma óptico, Lámina medular interna del tálamo, Corteza cingular, Amígdala, Cuerpos mamilares)",
  respuesta:
    "Blanca: cápsula externa, fórnix, quiasma óptico, lámina medular interna. Gris: claustro, habénula, putamen, corteza cingular, amígdala, cuerpos mamilares"
},

/* 24 */
{
  tipo: "rellenar",
  pregunta: "Con qué sistema o sistemas se vinculan las siguientes estructuras (Núcleo geniculado lateral, Núcleo caudado, Amígdala, Núcleo geniculado medial, Hipocampo, Globo pálido)",
  respuesta:
    "Geniculado lateral-visual; Caudado-motor ; Amígdala-límbico; Geniculado medial-oido; Hipocampo-límbico; Globo pálido-motor"
},

/* 25 */
{
  tipo: "rellenar",
  pregunta: "Señala cuál de estas premisas es verdadera y cuál falsa (a. El claustro es un derivado diencefálico | b. Los nc. basales integran la actividad motora | c. El paleocórtex es más antiguo que el arquicórtex | d. La bolsa de Rathke forma la neurohipófisis | e. La amígdala no forma parte del sistema límbico | f. El fórnix llega a los cuerpos mamilares | g. La fimbria es una estructura de sustancia gris | h. El nc. subtalámico se relaciona funcionalmente con los nc. basales | i. La corteza cerebral está formada por 6 capas de células organizadas | j. El lóbulo piriforme está formado de arquicorteza)",
  respuesta:
    "aF bV cF dF eF fV gF hV iV jF"
},

/* 26 */
{
  tipo: "rellenar",
  pregunta: "Señala cuál de estas premisas es verdadera y cuál falsa (a. La unión entre ambos tálamos se llama Masa Intermedia | b. Los grupos de núcleos talámicos se separan mediante dos láminas de sustancia blanca | c. El nc. subtalámico es una estación de relevo en las vías motoras extrapiramidales | d. El núcleo reticular talámico se sitúa entre la cápsula externa y la lámina medular externa del tálamo | e. El tálamo conecta con la corteza mediante radiaciones talámicas | f. La habénula forma parte del subtálamo | g. El subtálamo se considera la prolongación del tegmento mesencefálico | h. La habénula recibe información del hipocampo por la estría habenular | i. El nc. endopeduncular es parte del tálamo | j. El ansa lenticular es sustancia blanca subtalámica)",
  respuesta:
    "aV bV cV dF eF fF gV hV iF jV"
},

/* 27 */
{
  tipo: "rellenar",
  pregunta: "Señala cuál de estas premisas es verdadera y cuál falsa (a. Desde un punto de vista embrionario, el hipotálamo deriva del prosencéfalo secundario | b. El hipotálamo tiene una importante función moduladora del SN | c. El hipotálamo se divide en 4 regiones | d. El nc. supraquiasmático pertenece a la región hipotalámica intermedia | e. Las fibras del nc. paraventricular llegan a la neurohipófisis | f. El fascículo longotudinal dorsal es una fibra comisural | g. El fórnix une el hipocampo con el hipotálamo | h. La hipófisis se desarrolla a partir del mesodermo)",
  respuesta:
    "aV bV cF dF eV fF gV hF"
},

/* 28 */
{
  tipo: "test",
  pregunta: "En el telecéfalo se encuentran:",
  opciones: [
    "Arquicortex, paleocortex y neocórtex",
    "Paleocortex y neocórtex. El arquicortex está en el diencéfalo",
    "Arqui y neo; paleo en diencéfalo",
    "Solo neocórtex, mientras que arquicortex y paleocortex se encuentran en el diencéfalo"
  ],
  correcta: 0
},

/* 30 */
{
  tipo: "test",
  pregunta: "Indica si la siguiente afirmación es verdadera o falsa: El rinencéfalo es una estructura subcortical del telencéfalo",
  opciones: ["Verdadero", "Falso"],
  correcta: 0
},

/* 31 */
{
  tipo: "rellenar",
  pregunta: "Señala cuál de estas premisas es verdadera y cuál falsa (a. El estriado se relaciona con el sistema motor | b. Los núcleos basales tienen amplias conexiones con la corteza | c. No se conoce bien la función del nc. caudado | d. El nc. accumbens es independiente del nc. caudado | e. La amígdala se encuentra topográficamente dentro de los núcleos basales | f. El núcleo subtalámico tiene conexiones con el pallidum | g. La sustancia negra tiene una acción moduladora sobre el pallidum | h. Los núcleos basales tienen un mecanismo de feed-back corteza-tálamocorteza | i. La corteza cerebral está formada por 6 capas de células organizadas | j. El lóbulo piriforme está formado de arquicorteza)",
  respuesta: "aV bV cF dF eV fV gV hV iF jV"
},

/* 32 */
{
  tipo: "rellenar",
  pregunta: "Señala cuál de estas premisas es verdadera y cuál falsa (a. La amígdala forma parte del rinencáfalo basal | b. La amígdala es un elemento clave del sistema límbico | c. Los hemisferios están formados por paleocortex y neocortex | d. La única función del rinencéfalo es olfatoria | e. El lóbulo piriforme está compuesto de arquicórtex | f. La amígdala está cubierta por un mano de neocortex | g. La fimbria es una vía aferente del hipocampo | h. El hipocampo recibe impulsos no olfatorios | i. La amígdala se relaciona con la memoria | j. La amígdala se comunica con el tálamo)",
  respuesta: "aF bV cF dF eF fF gV hV iV jV"
},

/* 33 */
{
  tipo: "rellenar",
  pregunta: "Indica cuáles de estas estructuras corticales y telencefálicas se consideran parte del sistema límbico (Núcleos del septo, Tracto olfatorio lateral, Giro dentado, Claustro, Amígdala, Lóbulo piriforme)",
  respuesta: "Giro dentado, amígdala"
},

/* 34 */
{
  tipo: "rellenar",
  pregunta: "Señala cuál de estas premisas es verdadera y cuál falsa (a. La Bolsa de Rathke tiene un origen mesodérmico | b. Las dos partes de la hipófisis tienen un origen ectodérmico | c. El tálamo se relaciona con todos los sentidos menos con el olfato | d. El tálamo se relaciona con comportamientos afectivos | e. El hipotálamo tiene una gran influencia sobre el sistema nervioso parasimpático | f. La principal vía aferente del hipotálamo es el fórnix | g. La principal vía eferente del hipocampo es el fórnix | h. Los núcleos basales ayudan a mantener la postura | i. El área premotora es un área cortical primaria | j. El lóbulo piriforme conecta con la amígdala)",
  respuesta: "aF bV cV dV eV fV gV hV iF jV"
},

/* 35 */
{
  tipo: "rellenar",
  pregunta: "Señala cuál de estas premisas es verdadera y cuál falsa (a. Los cuerpos mamilares son derivados diencefálicos | b. El núcleo subtalámico es una de las estructuras que integran la actividad motora | c. El paleocórtex tiene que ver con la integración de impulsos olfatorios | d. La bolsa de Rathke es un derivado ectodérmico | e. La amígdala tiene que ver con la memoria | f. El fórnix está compuesto de sustancia gris y blanca | g. El fórnix engloba fibras comisurales y de proyección | h. Los hemisferios cerebrales se componen de neocórtex y paleocórtex | i. Las células piramidales son las principales neuronas de proyección | j. El hipocampo tiene que ver con el sistema nervioso autónomo)",
  respuesta: "aV bV cV dV eV fF gV hF iV jF"
},

/* 36 */
{
  tipo: "test",
  pregunta: "La corteza prefrontal se relaciona principalmente con el sistema:",
  opciones: ["Motor", "Somatosensorial", "Límbico", "Táctil"],
  correcta: 2
},

/* 37 */
{
  tipo: "test",
  pregunta: "Nervios craneales que presentan componente parasimpático:",
  opciones: [
    "III, VII, IX y X",
    "IV, VII, X y XI",
    "III, V, IX y X",
    "III, VII, X y XI"
  ],
  correcta: 0
},

/* 38 */
{
  tipo: "test",
  pregunta: "El olfato se relaciona principalmente con la corteza:",
  opciones: ["Arquicórtex", "Paleocórtex", "Neocórtex", "Nada"],
  correcta: 1
},

/* 39 */
{
  tipo: "rellenar",
  pregunta: "Ejemplos solicitados (a. Un núcleo del sistema motor extrapiramidal | b. Un núcleo del sistema visual | c. Un núcleo propio del sistema nervioso parasimpático | d. Un ganglio propio del sistema nervioso parasimpático | e. Una corteza en relación con el sistema límbico | f. Un núcleo de la región hipotalámica rostral | g. Una estructura formada por arquicórtex | h. Una estructura formada por paleocórtex | i. Un ejemplo de fibras corticocorticales | j. Un ejemplo de fibras de proyección)",
  respuesta:
    "a Globo pálido; b Núcleo geniculado lateral; c III par craneal d intramural; e Corteza entorrinal; f Paraventricular; g Hipocampo; h Lóbulos piriformes; i Cuerpo calloso; j Cápsula interna"
},

/* 40 */
{
  tipo: "rellenar",
  pregunta: "Señala cuál de estas premisas es verdadera y cuál falsa (a. Las interneuronas son neuronas excitatorias | b. Las respuestas de animal van en función del desarrollo del neopalio | c. Las principales células de proyección son las células piramidales | d. El área visual II se relaciona con la integración de impulsos visuales | e. El área olfatoria se localiza en los bulbos olfatorios | f. El área premotora es un área de proyección | g. La comisura rostral está compuesta por fibras corticocorticales | h. El genu del cuerpo calloso es la parte más caudal | i. El cíngulo es un haz de fibras de asociación largas | j. La corteza cingular tiene que ver con el sistema límbico)",
  respuesta: "aF bV cV dV eF fF gV hF iV jV"
},

/* 41 */
{
  tipo: "rellenar",
  pregunta: "Señala cuál de estas premisas es verdadera y cuál falsa (a. Los ganglios intramulares son propios del sistema simpático | b. Los ganglios previscerales tienen una fibra preganglionar larga | c. El SN Simpático responde a situaciones de emergencia | d. Las fibras preganglionares pueden atravesar un ganglio sin hacer sinapsis en él | e. Las fibras preganglionares tienen necesariamente que hacer sinapsis en el primer ganglio que encuentran | f. Cuando las fibras preganglionares atraviesan un ganglio pasan a llamarse postganglionares | g. Las fibras preganglionares pasan a llamarse postganglionares solo tras haber hecho sinapsis en un ganglio | h. Las fibras postganglionares pierden parcial o totalmente su vaina de mielina | i. El SN Simpático presenta una porción cefálica | j. El ganglio estrellado se denomina también cervicotorácico o cervical caudal)",
  respuesta: "aF bV cV dV eF fF gV hV iF jV"
},

/* 42 */
{
  tipo: "rellenar",
  pregunta: "Clasifica cada ganglio o nervio en simpático o parasimpático (a. Ganglio cervical craneal | b. Nervio vago | c. Ganglio mandibular | d. Ganglio ciliar | e. Ganglio estrellado | f. Nervio esplácnico mayor | g. Ganglio intramural)",
  respuesta:
    "a Simpático; b Parasimpático; c Parasimpático; d Parasimpático; e Simpático; f Simpático; g Parasimpático"
},

/* 43 */
{
  tipo: "rellenar",
  pregunta: "Sistema nervioso autónomo (a. La rama comunicante blanca es preganglionar o postganglionar? | b. Por qué se llama “comunicante blanca”? | c. La rama comunicante gris es preganglionar o postganglionar? | d. Por qué se llama “comunicante gris”? | e. En el sistema parasimpático, las fibras preganglionares son largas o cortas? | f. Enumera los núcleos parasimpáticos correspondientes a determinados nervios craneales, indicando a qué nervio pertenece.)",
  respuesta:
    "a Preganglionar; b Por mielina; c Postganglionar; d Sin mielina; e Largas; f III (Motor ocular comun): Núcleo de Edinger-Westphal -> Ganglio ciliar, VII (Facial): Núcleos salival rostral -> Ganglios pterigoplatino y mandibular, IX (Glosofaríngeo): Núcleo salival caudal -> Ganglio ótico, X(Vago) Núvleo motor dorsal del vago -> Ganglios intramurales (en las vísceras)"
},

/* 44 */
{
  tipo: "test",
  pregunta: "El fórnix contiene:",
  opciones: [
    "Fibras comisurales",
    "Fibras de proyección",
    "Ambas",
    "Ninguna"
  ],
  correcta: 2
},

/* 45 */
{
  tipo: "rellenar",
  pregunta: "Corteza más antigua y su función de asociación",
  respuesta: "La Arquicorteza, se relaciona con el control de la vida, el instinto y el comportamiento"
},

/* 46 */
{
  tipo: "rellenar",
  pregunta: "Relación entre amígdala y núcleo caudado",
  respuesta: "Relación íntima ya que se altera en enfermedades en la que disminuye la cantidad de dopamina, como la enfermedad de Parkinson"
},

/* 47 */
{
  tipo: "rellenar",
  pregunta: "Partes del núcleo accumbens y su función",
  respuesta: "Core (motor-motivacional) y Shell (límbico-emocional)"
},

/* 48 */
{
  tipo: "test",
  pregunta: "Razón de la fuerte conexión hipotálamo–tronco:",
  opciones: [
    "Control endocrino",
    "Regulación del SNA",
    "Control motor voluntario",
    "Procesamiento sensitivo"
  ],
  correcta: 1
},

/* 49 */
{
  tipo: "rellenar",
  pregunta: "Estructura que contiene fibras comisurales y de proyección",
  respuesta: "Fórnix"
},

/* 50 */
{
  tipo: "rellenar",
  pregunta: "Núcleos basales con los que conecta la amígdala",
  respuesta: "Núcleo caudado y núcleo accumbens"
},


//Grupo 2

/* 1 */
{
  tipo: "test",
  pregunta: "La capa del manto del neuroepitelio da lugar a la sustancia gris de la médula espinal",
  opciones: ["Verdadero", "Falso"],
  correcta: 0
},

/* 2 */
{
  tipo: "rellenar",
  pregunta: "Asocia cada función con el grupo de pares craneales que la cumplen (a) Recogen la sensibilidad gustativa b) Conduce la sensibilidad somática general (ASG) de la cabeza c) Son motores puros d) Son sensitivos puros )",
  respuesta: "Recogen la sensibilidad gustativa -> Pares craneales VII, IX y X; Conduce la sensibilidad somática general (ASG) de la cabeza -> Par V; Son motores puros -> Pares craneales III, IV, VI, XI y XII; Son sensitivos puros -> Pares craneales I, II y VIII"
},

/* 3 */
{
  tipo: "test",
  pregunta: "El nervio esplácnico mayor está formado por",
  opciones: [
    "Fibras postganglionares parasimpáticas",
    "Fibras postganglionares simpáticas",
    "Fibras preganglionares parasimpáticas",
    "Fibras preganglionares simpáticas"
  ],
  correcta: 3
},

/* 4 */
{
  tipo: "test",
  pregunta: "¿Cuál de estas frases sobre el arco reflejo monosináptico es falsa?",
  opciones: [
    "Actúa en un único segmento medular",
    "Un ejemplo es el reflejo patelar",
    "Contiene 5 elementos: 2 neuronas, 1 sinapsis, 1 receptor y 1 efector",
    "Es el más simple y extendido en el organismo"
  ],
  correcta: 3
},

/* 5 */
{
  tipo: "rellenar",
  pregunta: "Marca las frases verdaderas (a) Las vías corticoespinales pasan por las pirámides del bulbo | b) El tracto rubroespinal es una vía extrapiramidal que nace en el núcleo rojo | c) La decusación de las pirámides se localiza en el puente | d) Las vías piramidales son descendentes y las extrapiramidales ascendentes)",
  respuesta: "Las vías corticoespinales pasan por las pirámides del bulbo; El tracto rubroespinal es una vía extrapiramidal que nace en el núcleo rojo"
},

/* 6 */
{
  tipo: "rellenar",
  pregunta: "Señala las frases verdaderas (a) Las eferencias desde el núcleo fastigio salen por el PCC | b) TODAS las eferencias del cerebelo parten de la capa granular | c) El cerebro influye sobre la Neurona Motora Inferior de la médula espinal mediante vías directas | d) Las conexiones entre cerebelo y cerebro hacen escala en el núcleo dentado)",
  respuesta: "Las eferencias desde el núcleo fastigio salen por el PCC; Las conexiones entre cerebelo y cerebro hacen escala en el núcleo dentado"
},

/* 7 */
{
  tipo: "rellenar",
  pregunta: "Al ganglio ciliar llegan las fibras preganglionares ( a) Del núcleo oculomotor | b) Del nervio trigémino | c) Del nervio facial | d) Del nervio glosofaríngeo | e) Del nervio troclear | f) Del nervio vago)",
  respuesta: "Del núcleo oculomotor"
},

/* 8 */
{
  tipo: "rellenar",
  pregunta: "Asocia el tipo de sensibilidad con la vía que la conduce ( a) Propiocepción inconsciente caudal a C8 b) Propiocepción consciente c) Propiocepción inconsciente craneal a C8 d) Sensibilidad protopática y nociceptiva)",
  respuesta: "Propiocepción inconsciente caudal a C8 -> tracto espinocerebeloso; Propiocepción consciente -> Fascículos gracilis y cuneatus; Propiocepción inconsciente craneal a C8 -> tracto espinocuneocerebeloso; Sensibilidad protopática y nociceptiva -> tracto espinotalámico"
},

/* 9 */
{
  tipo: "test",
  pregunta: "La corteza prefrontal conecta con…",
  opciones: [ "El núcleo caudado", "Las pirámides", "El cerebelo", "La amígdala" ],
    correcta: 3
},

/* 10 */
{
  tipo: "test",
  pregunta: "La propiocepción consciente conduce sensaciones relacionadas con cambios en la posición del cuerpo hasta el cerebelo",
  opciones: ["Verdadero", "Falso"],
  correcta: 1
},

/* 11 */
{
  tipo: "test",
  pregunta: "En una vía sensitiva los estímulos se dirigen desde la periferia al SNC",
  opciones: ["Verdadero", "Falso"],
  correcta: 0
},

/* 12 */
{
  tipo: "test",
  pregunta: "Indica a que grupo funcional talámico pertenece el núcleo pulvinar",
  opciones: ["Específico", "De asociación", "Inespecífico", "No específico"],
  correcta: 1
},

/* 13 */
{
  tipo: "rellenar",
  pregunta: "Aunque tiene múltiples conexiones, el núcleo subtalámico se relaciona de forma muy estrecha… (a) Con la amígdala | b) Con ambas porciones con las que forma un circuito de retroalimentación | c) Con el núcleo caudado | d) Con el núcleo interpeduncular | e) Con la porción medial del núcleo lenticular | f) Con los cuerpos mamilares hipotalámicos | g) Con el claustro | h) Con la parte lateral del núcleo lenticular)",
  respuesta: "Con ambas porciones con las que forma un circuito de retroalimentación"
},

/* 14 */
{
  tipo: "test",
  pregunta: "Señala a que estructura llegan las columnas del fórnix",
  opciones: [
    "A la región hipotalámica caudal",
    "A la región hipotalámica rostral",
    "A los núcleos rostrales del tálamo",
    "Al hipotálamo y al subtálamo"
  ],
  correcta: 0
},

/* 15 */
{
  tipo: "rellenar",
  pregunta: "Señala las frases correctas (a) Las eferencias desde la oliva contactan directamente con las C. Purkinje | b) Los colículos rostrales se encuentran en el tegmento del mesencéfalo | c) La sustancia gris del cerebelo se sitúa en la corteza y en los núcleos cerebelosos | d) El núcleo dentado se relaciona con la corteza cerebelosa del Paravermis)",
  respuesta: "La sustancia gris del cerebelo se sitúa en la corteza y en los núcleos cerebelosos;  Las eferencias desde la oliva contactan directamente con las C. Purkinje"
},

/* 16 */
{
  tipo: "rellenar",
  pregunta: "Indica que frases son correctas ( a)La columna branquimotora contiene núcleos cuyos axones inervan musculo estriado | b) La columna EVG posee neuronas preganglionares | c) El componente ASE solo está presente en los pares craneales I y II | d) Las estrías acústicas se forman desde los núcleos vestibulare)",
  respuesta: "La columna branquimotora contiene núcleos cuyos axones inervan músculo estriado; La columna EVG posee neuronas preganglionares"
},

/* 17 */
{
  tipo: "test",
  pregunta: "El sistema de proyección cortical directo, en relación con el tálamo, es lo mismo que…",
  opciones: [
    "Núcleos talámicos específicos",
    "Núcleos talámicos de asociación",
    "Núcleos talámicos no funcionales",
    "Núcleos talámicos funcionales",
    "Núcleos talámicos no específicos"
  ],
  correcta: 0
},

/* 18 */
{
  tipo: "rellenar",
  pregunta: "Indica que tipo de fibra son las siguientes estructuras ( a) Pilares del fórnix b) Capsula interna c) Genu del cuerpo calloso d) Columnas del fórnix)",
  respuesta: "Pilares del fórnix -> proyección; Cápsula interna -> proyección; Genu del cuerpo calloso -> corticocortical comisural; Columnas del fórnix -> proyección"
},

/* 19 */
{
  tipo: "rellenar",
  pregunta: "Marca las frases correctas ( a) Dolor y nocicepción son términos equivalentes | b) El dolor es una respuesta subjetiva del SNC a un estímulo nocivo | c) El tracto espinotalámico conduce la sensibilidad nociceptiva | d) El dolor es un tipo de sensibilidad)",
  respuesta: "El dolor es una respuesta subjetiva del SNC a un estímulo nocivo; El tracto espinotalámico conduce la sensibilidad nociceptiva"
},

/* 20 */
{
  tipo: "rellenar",
  pregunta: "Señala las características principales de las fibras arcuatas ( a) Son de proyección | b) Son corticocorticales | c) Hacen un recorrido largo | d) Hacen un recorrido corto)",
  respuesta: "Son corticocorticales; Hacen un recorrido corto"
},

/* 21 */
{
  tipo: "test",
  pregunta: "Los ganglios sensitivos se sitúan…",
  opciones: [
    "En el canal vertebral, próximos al agujero intervertebral",
    "Próximos al agujero intervertebral, pero fuera del canal vertebral",
    "En la periferia, próximos a la terminación nerviosa",
    "En el interior de la médula espinal"
  ],
  correcta: 0
},

/* 22 */
{
  tipo: "rellenar",
  pregunta: "Indica a que vesícula encefálica pertenecen las siguientes estructuras  ( a) Fimbria | b) Núcleo del nervio troclear | c) Cuerpos mamilares | d) Amígdala | e) Núcleo interpeduncular | f) Núcleo del nervio oculomotor | g) Lamina medular interna del tálamo | h) Capsula extrema | i) Fascículo cingular | j) Claustro)",
  respuesta: "Fimbria -> telencéfalo; Núcleo del nervio troclear -> mesencéfalo; Cuerpos mamilares -> diencéfalo; Amígdala -> telencéfalo; Núcleo interpeduncular -> mesencéfalo; Núcleo del nervio oculomotor -> mesencéfalo; Lamina medular interna del tálamo -> diencéfalo; Cápsula extrema -> telencéfalo; Fascículo cingular -> telencéfalo; Claustro -> telencéfalo"
},

/* 23 */
{
  tipo: "rellenar",
  pregunta: "El núcleo ventral lateral del tálamo ( a) Es un núcleo de relevo intertalámico | b) Proyecta a cortezas asociativas | c) Proyecta a cortezas primitivas | d) Integra actividad sensitiva y motora | e) Dejar en blanco)",
  respuesta: "Proyecta a cortezas asociativas; Integra actividad sensitiva y motora"
},

/* 24 */
{
  tipo: "rellenar",
  pregunta: "Relaciona cada una de las siguientes estructuras con una de sus principales conexiones ( a) Núcleo interpeduncular | b) Núcleos rostrales del tálamo | c) Núcleos del septo | d) Núcleo subtalámico)",
  respuesta: "Núcleo interpeduncular -> hipocampo; Núcleos rostrales del tálamo -> corteza cingular; Núcleos del septo -> epitálamo; Núcleo subtalámico -> globo pálido"
},

/* 25 */
{
  tipo: "rellenar",
  pregunta: "Relación de estructuras con sistema o función ( a) Núcleos del septo | b) Formación reticular | c) Claustro | d) Núcleo subtalámico | e) Núcleos mamilares)",
  respuesta: "Núcleos del septo -> sistema límbico; Formación reticular -> alerta; Claustro -> alerta; Núcleo subtalámico -> sistema motor extrapiramidal; Núcleos mamilares -> sistema límbico"
},

/* 26 */
{
  tipo: "rellenar",
  pregunta: "Marca las frases correctas ( a) La sensibilidad acústica llega al tálamo por el lemnisco medial | b) La formación reticular se relaciona con todos los niveles del SNC | c) Los núcleos del puente originan las fibras del pedúnculo cerebeloso rostral | d) Las eferencias de la oliva llegan al cerebelo por el pedúnculo cerebeloso caudal contralateral (PCC))",
  respuesta: "La formación reticular se relaciona con todos los niveles del SNC; Las eferencias de la oliva llegan al cerebelo por el pedúnculo cerebeloso caudal contralateral (PCC)"
},

/* 27 */
{
  tipo: "rellenar",
  pregunta: "Señala las principales funciones del núcleo accumbens ( a) Límbica | b) Auditiva | c) Motora | d) Endocrina)",
  respuesta: "Límbica; Motora"
},

/* 28 */
{
  tipo: "rellenar",
  pregunta: "Las células de la glía derivan ( a) De neuroepitelio y cresta neural | b) Todas del neuroepitelio | c) De neuroepitelio, cresta neural y mesodermo | d) Todas de cresta neural)",
  respuesta: "De neuroepitelio, cresta neural y mesodermo"
},

/* 29 */
{
  tipo: "rellenar",
  pregunta: "Marca los enunciados correctos ( a) Una neurona preganglionar es sensitiva | b) La cavidad epidural se sitúa entre la duramadre y la pared ósea del canal vertebral | c) Las astas dorsales de la medula espinal son zonas somatoceptivas (ASG) | d) La primera neurona (soma) de una vía sensitiva se encuentra en la sustancia gris, en el asta dorsal)",
  respuesta: "La cavidad epidural se sitúa entre la duramadre y la pared ósea del canal vertebral; Las astas dorsales de la médula espinal son zonas somatoceptivas (ASG)"
},

/* 30 */
{
  tipo: "rellenar",
  pregunta: "Las áreas corticales primarias ( a) Reciben información de núcleos de asociación | b) Reciben información de núcleos talámicos específicos | c) Procesan información sensorial | d) Procesan información sensitiva y motora)",
  respuesta: "Reciben información de núcleos talámicos específicos; Procesan información sensitiva y motora"
},

//GRUPO 3 


/* 1 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Cuál es la principal función del tálamo
b. Si el claustro es sustancia gris o blanca
c. Con qué sistema relacionas al lóbulo piriforme
d. Qué tipo de fibra es el cuerpo calloso 
e. Con qué sistema relacionas al Globo Pálido
f. Una de las principales vías de comunicación entre al hipotálamo y el tálamo
g. Cuál es la principal vía de eferente del hipocampo
h. Qué tipo de zona o área cortical constituye la corteza cingular
i. En qué lugar sitúas topográficamente el ansa lenticular
j. Qué tipo de fibra es el fórnix`,
  respuesta: `a. Relevo sensitivo y motor
b. Gris
c. Sistema límbico
d. Fibra comisural
e. Motor extrapiramidal
f. Fascículo mamilotalámico
g. Fórnix
h. Zona límbica
i. Entre putamen y globo pálido
j. Mixta (comisural y de proyección)`
},

/* 2 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Qué estructuras forman parte del grupo de núcleos talámicos caudales o metatálamo
b. En qué estructura diencefálica se sitúa la glándula pineal
c. Cuál es el principal papel del tálamo en su conjunto
d. En qué región hipotalámica se sitúan los núcleos mamilares
e. Qué estructura o estructuras forman:
   i. El cuerpo estriado
   ii. El neoestriado
   iii. El paleoestriado`,
  respuesta: `a. Cuerpo geniculado medial y lateral
b. Epitálamo
c. Relevo y procesamiento de la información sensitiva y motora
d. Hipotálamo caudal (región mamilar)
e. i. Caudado + putamen + núcleo accumbens
   ii. Caudado + putamen
   iii. Globo palido`
},

/* 3 */
{
  tipo: "rellenar",
  pregunta: `Enumera los núcleos que componen los núcleos talámicos clasificados desde un punto de vista funcional. Señala cuál es su función en cada caso y pon un ejemplo en cada uno de ellos`,
  respuesta: `1. Núcleos talámicos sensitivos: f(x)-> transmitir info a áreas especificas de la corteza(Sistema de proyeccion cortical directo). NÚCLEO GENICULADO LATERAL (tambien el nucleo dorsomedial)
2.  Núcleos talámicos de asociación: f(x)-> integran info y proyectan a áreas de asociación de la corteza. NÚCLEOS DEL GRUPO LATERAL.
3. Núcleos talámicos no especificos: f(x)->forman parte del ARAS, proyectan a amplias zonas de la corteza (sistema de proyección cortical difuso). NÚCLEOS INTRALAMINARES(tambien n. Reticular talámico y n. de la linea media)`
},

/* 4 */
{
  tipo: "rellenar",
  pregunta: `Enumera los núcleos que componen los núcleos talámicos clasificados desde un punto de vista topográfico. Señala cuál es su función en cada caso y pon un ejemplo en cada uno de ellos`,
  respuesta: `1. Grupo talámico rostral: sistema límbico.
2. Grupo talámico lateral: integradores de distintos impulsos. Núcleo pulvinar y núcleo ventral-lateral.
3. Grupo talámico caudal: núcleo geniculado lateral(vias opticas) y nucleo geniculado medial(vias auditivas)
4. Grupo talámico medial: limbico(consolidación memoria y comportamiento emocional) Núcleo dorsomedial.
5. Grupo de núcleos intralaminares: ARAS.
6. Grupo de núcleos de la linea media: sistema limbico
7. Nucleo reticular talamico: controla actividad de los distintos núcleos talamicos. Actua como filtro de información. Modula actividad talamocortical y corticotalamica`
},

/* 5 */
{
  tipo: "rellenar",
  pregunta: `Qué estructuras consideras dentro del circuito de Papez?`,
  respuesta: `Corteza cingular, Corteza entorrinal, Hipocampo, Cuerpos mamilares, Tálamo (nc.rostrales), Fórnix, Haz mamilotalámico`
},

/* 6 */
{
  tipo: "rellenar",
  pregunta: `Indica las principales conexiones del núcleo reticular del tálamo`,
  respuesta: `Se conecta con otros núcleos talámicos, regula la actividad cortical y modula la transmisión sensitiva`
},

/* 7 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál o cuáles de estas estructuras consideras dentro de los sistemas límbico, motor extrapiramidal, visual y auditivo, o tienen alguna influencia sobre ellos:
a. Amígdala
b. Corteza prefrontal
c. Cuerpo geniculado medial
d. Núcleo caudado
e. Núcleo subtalámico
f. Corteza cingular
g. Núcleos rostrales del tálamo
h. Colículo caudal
i. Sustancia negra
j. Putamen`,
  respuesta: `a. Límbico
b. Límbico
c. Auditivo
d. Motor extrapiramidal
e. Motor extrapiramidal
f. Límbico
g. Límbico
h. Visual
i. Motor extrapiramidal
j. Motor extrapiramidal`
},

/* 8 */
{
  tipo: "rellenar",
  pregunta: `Indica:
a. Los núcleos que entran a formar parte de la región hipotalámica rostral
b. Las partes de las que procede embriológicamente la hipófisis
c. Las estructuras que componen los núcleos basales
d. Las estructuras que componen la porción basal del rinencéfalo
e. Las áreas que se consideran como Áreas Corticales Primarias`,
  respuesta: `a. Supraóptico, paraventricular, preóptico
b. Bolsa de Rathke (ectodermo) y neurohipófisis (ectodermo neural)
c. Caudado, putamen, globo pálido, núcleo subtalámico, sustancia negra
d. Amígdala, lóbulo piriforme
e. Corteza motora primaria, sensitiva primaria, visual primaria, auditiva primaria, olfatoria primaria`
},

/* 9 */
{
  tipo: "rellenar",
  pregunta: `Completa las frases siguientes:
a. La comisura rostral une ........
b. El cuerpo calloso es una fibra de tipo ………. 
c. El haz mamilotalámico termina de los núcleos talámicos…… 
d. La comisura del fórnix une……… 
e. La vía eferente del hipocampo es……….
f. El fornix comunica ……….. con ………….. 
g. Embriológicamente, la Bolsa de Rathke es un derivado……….
h. El paleocórtex integra principalmente estímulos de tipo……….
i. Los ganglios paravertebrales son propios del sistema……….. 
j. Las fibras de asociación conectan……………………..`,
  respuesta: `a. Los dos lóbulos temporales
b. Comisural
c. Rostrales
d. Los dos hipocampos, ventralmente al cuerpo calloso
e. Fórnix
f. Hipocampo con cuerpos mamilares
g. Ectodérmico
h. Olfatorios
i. Nervioso autonomo simpático
j. Diferentes núcleos entre sí`
},

/* 10 */
{
  tipo: "rellenar",
  pregunta: `Indica:
a. Cómo se llama el ganglio en el que sinaptan las fibras preganglionares del nervio oculomotor? Son simpáticas o parasimpáticas?.
b. Cómo se llama el ganglio en el que sinaptan las fibras preganglionares del nervio glosofaríngeo? Son simpáticas o parasimpáticas?.
c. Con qué nervio relacionarías el ganglio mandibular?
d. Cómo se denominan los ganglios correspondientes a la parte cervical del sistema nervioso simpático?
e. En qué sistema situarías el ganglio celiaco?. Es previsceral o intramural?.`,
  respuesta: `a. Ciliar; parasimpático
b. Otico; parasimpático
c. Nervio facial (VII)
d. Ganglio cervical craneal, medio y caudal
e. Simpático; previsceral`
},

/* 11 */
{
  tipo: "rellenar",
  pregunta: `Indica cuáles son las estructuras corticales y telencefálicas que se consideran parte del sistema límbico`,
  respuesta: `Hipocampo, giro dentado, amígdala, lóbulo piriforme, corteza cingular`
},

/* 12 */
{
  tipo: "rellenar",
  pregunta: `Indica cuáles son las estructuras subcorticales se consideran parte del sistema límbico`,
  respuesta: `Cuerpos mamilares, núcleos del septo, tálamo anterior, hipotálamo, núcleos intralaminares`
},

/* 13 */
{
  tipo: "rellenar",
  pregunta: `Cuál es la principal función del ARAS (Sistema Reticular Activador Ascendente), y qué estructuras se consideran formando parte del mismo`,
  respuesta: `Formación reticular, sust. Negra, parte de los núcleos en el tegmento mesencefalico, nucleos intralaminares y reticular del talamo e hipotalamo. Influye wn funcionamiento cerebro y sist endocrino, regulando si conducta, favoreciento relajacion y bienestar. Paso de relajacion a alerta maxima, ciclo sueño/vigilia, mantenimiento conciencia y consciencia, reconoce estado de animo`
},

/* 14 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. La Bolsa de Rathke tiene un origen mesodémico
b. Las dos partes de la hipófisis tienen un origen ectodérmico
c. El tálamo se relaciona con todos los sentidos menos con el olfato
d. El tálamo se relaciona con comportamientos afectivos
e. El hipotálamo tiene una gran influencia sobre el sistema nervioso parasimpático
f. La principal vía aferente del hipotálamo es el fórnix
g. La principal vía eferente del hipocampo es el fórnix
h. Los núcleos basales ayudan a mantener la postura
i. El área premotora es un área cortical primaria
j. El lóbulo piriforme conecta con la amígdala`,
  respuesta: `aF bV cV dV eV fV gV hV iF jV`
},

/* 15 */
{
  tipo: "rellenar",
  pregunta: `Explica con una frase:
a. Dónde se encuentra la neurona preganglionar del sistema nervioso autónomo
b. A qué se denominan ganglios paravertebrales
c. Por qué razón se considera la amígdala como una estructura clave del sistema límbico
d. Cuál es el papel fundamental del hipocampo
e. De dónde procede la información que llega a las áreas corticales primarias`,
  respuesta: `a. En la médula espinal y tronco encefálico
b. Ganglios a lo largo de la cadena simpática paravertebral
c. Integra emociones y memoria emocional
d. Memoria y aprendizaje
e. De los núcleos talámicos específicos`
}, 


//GRUPO 4

{
  tipo: "rellenar",
  pregunta: `De las siguientes estructuras, señala cuál de ellas es sustancia gris y cuál sustancia blanca:
a. Cuerpo calloso
b. Nc. caudado
c. Lóbulo piriforme
d. Comisura habenular
e. Globo pálido
f. Hipotálamo
g. Hipocampo
h. Corteza cingular
i. Ansa lenticular
j. Fórnix`,
  respuesta: `a. Blanca
b. Gris
c. Gris
d. Blanca
e. Gris
f. Gris
g. Gris
h. Gris
i. Blanca
j. Blanca`
},

/* 2 */
{
  tipo: "rellenar",
  pregunta: `Con qué sistema o sistemas se vinculan las siguientes estructuras:
a. Núcleos del septo
b. Globo pálido
c. Corteza cingular
d. Lóbulo piriforme
e. Hipocampo
f. Putamen`,
  respuesta: `a. Límbico
b. Motor extrapiramidal
c. Límbico
d. Límbico / olfatorio
e. Límbico
f. Motor extrapiramidal`
},

/* 3 */
{
  tipo: "rellenar",
  pregunta: `Señala dos conexiones de cada una de las siguientes estructuras:
a. Núcleo subtalámico
b. Hipocampo
c. Nc. geniculado lateral
d. Nc. caudado`,
  respuesta: `a. Globo pálido, sustancia negra
b. Fórnix, corteza entorrinal
c. Corteza visual y colículo rostral
d. Corteza motora, putamen`
},

/* 4 */
{
  tipo: "rellenar",
  pregunta: `Enumera las conexiones aferentes del estriado`,
  respuesta: `Corteza cerebral, tálamo, subtalamo y tronco encefalico (sust. Negra)`
},

/* 5 */
{
  tipo: "rellenar",
  pregunta: `Enumera las conexiones eferentes del estriado`,
  respuesta: `Globo pálido, sustancia negra, tálamo (vía indirecta y directa)`
},

/* 6 */
{
  tipo: "rellenar",
  pregunta: `Enumera las funciones de los núcleos basales en conjunto`,
  respuesta: `1. Avudan a la regulación del movimiento voluntario
2. Participan en el aprendizaje de habilidades motoras
3. Contribuyen a preparar el cuerpo previo un movimiento particular de las extremidades, mediante el control de los movimientos axiales de las cinturas y posición de las partes proximales de las extremidades
4. Avudan a mantener la postura
5. Modulan el inicio y final del movimiento
6. Partcipan en funciones como la alerta o las emociones`
},

/* 7 */
{
  tipo: "rellenar",
  pregunta: `Enumera las conexiones aferentes de la amígdala`,
  respuesta: `Cortezas asociativas, lobulo piriforme, talamo, hipotalamo, hipocampo, claustro, tronco encefalico`
},

/* 8 */
{
  tipo: "rellenar",
  pregunta: `Enumera las conexiones eferentes de la amígdala`,
  respuesta: `Hipotalamo, hipocampo, claustro, nucleos del septo, distintas contezas, sobre todo asociativas`
},

/* 9 */
{
  tipo: "rellenar",
  pregunta: `Señala cuáles de estas estructuras se consideran diencefálicas y cuales telencefálicas:
a. Habénula
b. Ansa lenticular
c. Neocórtex
d. Zona incertae. Hipotálamo
f. Hipocampo
g. Amigdala
h. Área subcallosa
i. Cuerpos mamilares
j. Putamen`,
  respuesta: `a. Diencéfalo
b. Telencéfalo
c. Telencéfalo
d. Diencéfalo
f. Telencéfalo
g. Telencéfalo
h. Telencéfalo
i. Diencéfalo
j. Telencéfalo`
},

/* 10 */
{
  tipo: "rellenar",
  pregunta: `Señala la que consideras función principal de las siguientes estructuras:
a. Amígdala
b. Hipocampo
c. Nc. del septo
d. Nc. basales`,
  respuesta: `a. Emociones y memoria emocional
b. Memoria y aprendizaje
c. Regulación límbica
d. Control motor y postura`
},

/* 11 */
{
  tipo: "rellenar",
  pregunta: `Qué estructuras consideras dentro del sistema límbico?`,
  respuesta: `Hipocampo, amígdala, cuerpos mamilares, corteza cingular, lóbulo piriforme, núcleos del septo`
},

/* 12 */
{
  tipo: "rellenar",
  pregunta: `Señala un derivado del arquicortex con su función principal`,
  respuesta: `Hipocampo; memoria y aprendizaje`
},

/* 13 */
{
  tipo: "rellenar",
  pregunta: `Señala un derivado del paleocortex con su función principal`,
  respuesta: `Lóbulo piriforme; integración de impulsos olfatorios`
},

/* 14 */
{
  tipo: "rellenar",
  pregunta: `Qué estructuras forman la porción septal del telencéfalo y qué función tienen?`,
  respuesta: `Núcleos del septo; regulación límbica y emocional`
},

/* 15 */
{
  tipo: "rellenar",
  pregunta: `Qué estructuras forman la porción límbica del telencéfalo y qué función tienen?`,
  respuesta: `Amígdala, hipocampo, corteza cingular, lóbulo piriforme; emociones, memoria y motivación`
},

/* 16 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. Los cuerpos mamilares son derivados diencefálicos
b. El núcleo subtalámico es una de las estructuras que integran la actividad motora
c. El paleocórtex tiene que ver con la integración de impulsos olfatorios
d. La bolsa de Rathke es un derivado ectodérmico
e. La amígdala tiene que ver con la memoria
f. El fórnix está compuesto de sustancia gris y blanca
g. El fórnix engloba fibras comisurales y de proyección
h. Los hemisferios cerebrales se componen de neocórtex y paleocórtex
i. Las células piramidales son las principales neuronas de proyección
j. El hipocampo tiene que ver con el sistema nervioso autónomo`,
  respuesta: `aV bV cV dV eV fF gV hF iV jF`
},

/* 17 */
{
  tipo: "rellenar",
  pregunta: `Define con una frase:
a. La función del sistema simpático
b. La función del área visual II
c. Con qué sistema relacionarías la corteza prefrontal
d. Qué efecto produce la destrucción del área somática I`,
  respuesta: `a. Preparación del cuerpo para situaciones de emergencia
b. Integración y elaboración de impulsos visuales
c. Corteza límbica
d. Anestesia de la parte contralateral del cuerpo y dismetria`
},

/* 18 */
{
  tipo: "rellenar",
  pregunta: `Indica al menos una conexión de las siguientes áreas de la corteza:
a. Área olfatoria
b. Área visual I
c. Corteza cingular
d. Corteza premotora
e. Corteza prefrontal`,
  respuesta: `a. Bulbo olfatorio
b. Núcleo geniculado lateral
c. Hipocampo y amígdala
d. Corteza motora primaria
e. Núcleo caudado y tálamo`
},

/* 19 */
{
  tipo: "rellenar",
  pregunta: `Indica cinco funciones del sistema nervioso autónomo`,
  respuesta: `Regulación cardíaca, respiratoria, digestiva, glandular y vascular`
},

/* 20 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. El hipocampo tiene una importante función integradora del sistema nervioso autónomo
b. La amígdala está compuesta por cuatro núcleos
c. El ganglio cervical caudal forma parte del SN simpático
d. El nervio vago lleva fibras simpáticas
e. El nc. salivar rostral es un núcleo parasimpático del nervio oculomotor
f. El nc. reticular talámico conecta con el hipocampo
g. El corteza prefrontal tiene que ver con el sistema límbico
h. La sustancia negra forma parte de los núcleos basales
i. Las fibras comisurales son fibras corticocorticales
j. Los sistemas porta de la hipófisis proceden de la arteria carótida externa`,
  respuesta: `aF bF cV dF eF fF gV hV iV jF`
},

/* 21 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Un núcleo del sistema motor extrapiramidal
b. Un núcleo del sistema visual
c. Un núcleo propio del sistema nervioso parasimpático
d. Un ganglio propio del sistema nervioso parasimpático
e. Una corteza en relación con el sistema límbico
f. Un núcleo de la región hipotalámica rostral
g. Una estructura formada por arquicórtex
h. Una estructura formada por paleocórtex
i. Un ejemplo de fibras corticocorticales
j. Un ejemplo de fibras de proyección`,
  respuesta: `a. Globo pálido
b. Núcleo geniculado lateral
c. Núcleo dorsal del vago
d. Ganglio ciliar
e. Corteza cingular
f. Núcleo supraóptico
g. Hipocampo
h. Lóbulo piriforme
i. Cuerpo calloso
j. Cápsula interna`
},

//GRUPO 5

/* 1 */
{
  tipo: "rellenar",
  pregunta: `Señala tres diferencias entre células de proyección e interneuronas`,
  respuesta: `1. Células de proyección: axón largo, transmiten información a otras áreas corticales o subcorticales.
2. Interneuronas: axón corto, transmiten información local dentro de una misma área.
3. Células de proyección: excitatorias (glutamatérgicas); Interneuronas: principalmente inhibitorias (GABA).`
},

/* 2 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. Las interneuronas son neuronas excitatorias
b. Las respuestas de animal van en función del desarrollo del neopalio
c. Las principales células de proyección son las células piramidales
d. El área visual II se relaciona con la integración de impulsos visuales
e. El área olfatoria se localiza en los bulbos olfatorios
f. El área premotora es un área de proyección
g. La comisura rostral está compuesta por fibras corticocorticales
h. El genu del cuerpo calloso es la parte más caudal
i. El cíngulo es un haz de fibras de asociación largas
j. La corteza cingular tiene que ver con el sistema límbico`,
  respuesta: `aF bV cV dV eV fV gV hF iV jV`
},

/* 3 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Cuántas áreas visuales existen
b. Dónde se ubican
c. Qué función tiene cada una de ellas
d. Qué efecto tiene su destrucción
e. Con qué sistema se relaciona el área cingular?`,
  respuesta: `a. Area visual I y area visual II
b. Parte poserior del giro marginal y lóbulo occipital
c. Nociones de profundidad, orientación, reconociemiento de normas e integración y elaboración de impulsos visuales
d. Ceguera completa y alteraciones diversas (agnosia visual)
e. Sistema límbico`
},

/* 4 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Cuántas áreas auditivas existen
b. Dónde se ubican
c. Qué función tiene cada una de ellas
d. Qué efecto tiene su destrucción
e. Con qué otro nombre se conoce a las áreas prefrontal y cingular?`,
  respuesta: `a. área auditiva I, área auditiva II y área auditiva III
b. Porción media, posterior y rostral del giro ectosilvio
c. Recibe totalidad fibras acusticas del cuerpo geniculado del lado opuesto, no claro, integrar estimulos auditivos con los de otra naturaleza 
d. Pérdida de casi toda audición 
e. Áreas de asociación`
},

/* 5 */
{
  tipo: "rellenar",
  pregunta: `Indica qué efecto tiene la destrucción de las siguientes áreas:
a. Somática I
b. Somática II
c. Visual I
d. Visual II
e. Gustativa ||
Indica de dónde procede la información que llega a las siguientes áreas:
f. Somática I
g. Visual I
h. Auditiva I
i. Somática II`,
  respuesta: `A. Anestesia parte contralateral cuerpo y dismetria
B. Sintomatología parecida en todo el cuerpo y en las cuatro extremidades
C. Ceguera completa
D. Agnosia visual incapacidad deteccion color... Alteraciones diversas
E. Alteración umbral de repulsión para algunos estimulos gustativos
F. Sensibilidad del lado contralateral del cuerpo
G. Núcleo geniculado lateral
H. Cuerpo geniculado medial
I. Impulsos procedentes de ambos lados del cuerpo`
},

/* 6 */
{
  tipo: "rellenar",
  pregunta: `Haz un esquema de las zonas o áreas que se consideran en los hemisferios cerebrales, incluyendo las áreas en las que se subdivide cada una de ellas`,
  respuesta: `Lóbulos cerebrales: frontal, parietal, temporal, occipital
Áreas funcionales: primarias (sensitivas y motoras), secundarias (asociativas), terciarias (integración multimodal)`
},

/* 7 */
{
  tipo: "rellenar",
  pregunta: `Haz un esquema de las fibras que componen la sustancia blanca encefálica`,
  respuesta: `FIBRAS CORTICOCORTICALES O DE ASOCIACIÓN
i. CORTAS
ii. LARGAS
b. FIBRAS COMISURALES
i. CUERPO CALLOSO ii. COMISURA ROSTRAL iii. COMISURA DEL FÓRNIX (Comisura del Hipocampo)
c. FIBRAS DE PROYECCIÓN
d. CÁPSULA INTERNA (+ CUERPO CALLOSO=CORONA RADIADA) b. FÓRNIX`
},

/* 8 */
{
  tipo: "rellenar",
  pregunta: `Define con una frase:
a. Qué es una fibra corticocortical de asociación corta
b. Qué es una fibra corticocortical de asociación larga
c. Qué es una fibra comisural
d. Qué es una fibra de proyección
e. Pon un ejemplo de cada una de ellas`,
  respuesta: `A. Conecta áreas corticales muy proximas. FIBRAS ARCUATAS
B. Conecta áreas corticales mas distantes. CINGULO
C. Establecen conexión entre áreas homólogas. CUERPO CALLOSO, COMISURA ROSTRAL Y DEL FORNIX
D. Se originan o terminan en la corteza cerebral, su otro extremo puede encontrarse en centros inferiores, son aferentes y eferentes. CAPSULA INTERNA Y FORNIX`
},

/* 9 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. La comisura rostral une los lóbulos piriformes
b. El cuerpo calloso es una fibra comisural de proyección
c. La comisura del fornix une los dos hipotálamos
d. La cápsula interna se encuentra lateral al tálamo
e. La cápsula interna forma “radiaciones” a lo largo de su recorrido
f. El fornix comunica el hipocampo con el hipotálamo
g. Las fibras de asociación conectan zonas no homólogas de los dos hemisferios
h. El cíngulo es una fibra comisural
i. La cápsula interna lleva vías aferentes y eferentes
j. Hay fibras de asociación largas que se llaman “arciformes”`,
  respuesta: `aV bF cF dV eV fV gF hF iV jV`
},

/* 10 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Cuál es la principal función del sistema nervioso autónomo (SNA)
b. Cuál es el principal centro integrador de las funciones autonómicas
c. Cuál es la principal formación moduladora de este centro integrador
d. Cuáles son los componentes principales del SNA
e. Define con una frase la acción de cada uno de ellos`,
  respuesta: `a. Regular funciones involuntarias: corazón, digestión, respiración
b. Hipotálamo
c. Formación reticular
d. Simpático y parasimpático
e. Simpático: activación de emergencia; Parasimpático: mantenimiento y reposo`
},

/* 11 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. Los ganglios intramulares son propios del sistema simpático
b. Los ganglios previscerales tienen una fibra preganglionar larga
c. El SN Simpático responde a situaciones de emergencia
d. Las fibras preganglionares pueden atravesar un ganglio sin hacer sinapsis en él
e. Las fibras preganglionares tienen necesariamente que hacer sinapsis en el primer ganglio que encuentran
f. Cuando las fibras preganglionares atraviesan un ganglio pasan a llamarse postganglionares
g. Las fibras preganglionares pasan a llamarse postganglionares solo tras haber hecho sinapsis en un ganglio
h. Las fibras postganglionares pierden parcial o totalmente su vaina de mielina
i. El SN Simpático presenta una porción cefálica
j. El ganglio estrellado se denomina también cervicotorácico o cervical caudal`,
  respuesta: `aF bF cV dV eF fF gV hV iV jV`
},

/* 12 */
{
  tipo: "rellenar",
  pregunta: `Indica si las siguientes estructuras pertenecen al sistema Simpático o al Parasimpático:
a. Ganglio cervical craneal
b. Nervio vago
c. Ganglio mandibular
d. Ganglio ciliar
e. Ganglio estrellado
f. Nervio esplácnico mayor
g. Ganglio intramural
- Dónde se encuentra la primera neurona del sistema nervioso simpático?
- Dónde se encuentra la primera neurona del sistema nervioso parasimpático?`,
  respuesta: `a. Parasimpático
b. Parasimpático
c. Parasimpático
d. Parasimpático
e. Simpático
f. Simpático
g. Parasimpático
- Simpático: asta lateral de la médula toracolumbar
- Parasimpático: núcleos de nervios craneales y asta lateral sacra`
},

/* 13 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Los nervios craneales que llevan fibras parasimpáticas
b. Asocia los ganglios siguientes a cada uno de ellos:
i. El ganglio ciliar
ii. El ganglio mandibular
iii. El ganglio ótico
iv. El ganglio mandibular`,
  respuesta: `a. III, VII, IX, X
b. III → ciliar
   VII → mandibular
   IX → ótico
   X → intramural`
},

/* 14 */
{
  tipo: "rellenar",
  pregunta: `Señala en qué núcleos se encuentran las neuronas preganglionares de los nervios craneales que tienen fibras parasimpáticas`,
  respuesta: `III: núcleo de Edinger-Westphal
VII: núcleo salivar superior
IX: núcleo salivar inferior
X: núcleo dorsal del vago`
},

/* 15 */
{
  tipo: "rellenar",
  pregunta: `Define con una frase:
a. Qué es un ganglio paravertebral
b. Qué es un ganglio previsceral o colateral
c. Qué es un ganglio intramural
d. Qué es una neurona preganglionar
e. Qué es una fibra preganglionar`,
  respuesta: `a. Ganglio ubicado junto a la cadena simpática
b. Ganglio próximo a órganos viscerales
c. Ganglio dentro de la pared de órganos
d. Neurona cuyo axón sale del SNC y sinapta en ganglio
e. Axón de la neurona preganglionar`
},

/* 16 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. La rama comunicante blanca es preganglionar o postganglionar?
b. Por qué se llama “comunicante blanca”?
c. La rama comunicante gris es preganglionar o postganglionar?
d. Por qué se llama “comunicante gris”?
e. En el sistema parasimpático, las fibras preganglionares son largas o cortas?
f. Enumera los núcleos parasimpáticos correspondientes a determinados nervios craneales, indicando a qué nervio pertenece`,
  respuesta: `a. Preganglionar
b. Porque está mielinizada
c. Postganglionar
d. Porque carece de mielina
e. Largas
f. III → Edinger-Westphal, VII → Salivar superior, IX → Salivar inferior, X → Dorsal del vago`
},


//GRUPO 6

/* 1 */
{
  tipo: "rellenar",
  pregunta: `De las siguientes estructuras, señala cuál de ellas es sustancia gris y cuál sustancia blanca:
a. Cápsula externa
b. Claustro
c. Fórnix
d. Habénula
e. Putamen
f. Quiasma óptico
g. Lámina medular interna del tálamo
h. Corteza cingular
i. Amígdala
j. Cuerpos mamilares`,
  respuesta: `a. Blanca
b. Gris
c. Blanca
d. Gris
e. Gris
f. Blanca
g. Blanca
h. Gris
i. Gris
j. Gris`
},

/* 2 */
{
  tipo: "rellenar",
  pregunta: `Con qué sistema o sistemas se vinculan las siguientes estructuras:
a. Núcleo geniculado lateral
b. Núcleo caudado
c. Amígdala
d. Núcleo geniculado medial
e. Hipocampo
f. Globo pálido`,
  respuesta: `a. Sistema visual
b. Sistema motor/extrapiramidal y límbico
c. Sistema límbico
d. Sistema auditivo
e. Sistema límbico
f. Sistema motor/extrapiramidal`
},

/* 3 */
{
  tipo: "rellenar",
  pregunta: `Señala dos conexiones de cada una de las siguientes estructuras:
a. Núcleo reticular talámico
b. Nc. geniculado medial
c. Nc. geniculado lateral
d. Nc. intralaminares del tálamo`,
  respuesta: `a. Corteza y tálamo
b. Colículo inferior y corteza auditiva
c. Retina y corteza visual
d. Corteza y tálamo`
},

/* 4 */
{
  tipo: "rellenar",
  pregunta: `Señala dos conexiones de cada una de las siguientes estructuras:
a. Amígdala
b. Hipocampo
c. Hipotálamo
d. Nc. caudado`,
  respuesta: `a. Corteza olfatoria y núcleos septales
b. Fórnix y corteza entorrinal
c. Hipocampo y corteza prefrontal
d. Corteza prefrontal y globo pálido`
},

/* 5 */
{
  tipo: "rellenar",
  pregunta: `Señala la que consideras función principal de las siguientes estructuras:
a. Tálamo
b. Nc. basales
c. Nc. geniculado lateral
d. Hipófisis`,
  respuesta: `a. Relevo y procesamiento sensorial
b. Regulación motora y postura
c. Procesamiento visual
d. Regulación endocrina`
},

/* 6 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Qué estructuras consideras dentro de los núcleos basales
b. Un derivado del arquicortex
c. Un derivado del paleocortex
d. Qué estructuras forman la porción septal del telencéfalo
e. Qué estructuras forman la porción límbica del telencéfalo`,
  respuesta: `a. Putamen, caudado, globo pálido, núcleo accumbens, sustancia negra
b. Hipocampo
c. Lóbulo piriforme
d. Núcleos septales
e. Hipocampo, amígdala, corteza cingular`
},

/* 7 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. El claustro es un derivado diencefálico
b. Los nc. basales integran la actividad motora
c. El paleocórtex es más antiguo que el arquicórtex
d. La bolsa de Rathke forma la neurohipófisis
e. La amígdala no forma parte del sistema límbico
f. El fórnix llega a los cuerpos mamilares
g. La fimbria es una estructura de sustancia gris
h. El nc. subtalámico se relaciona funcionalmente con los nc. basales
i. La corteza cerebral está formada por 6 capas de células organizadas
j. El lóbulo piriforme está formado de arquicorteza`,
  respuesta: `aF bV cF dF eF fV gF hV iV jF`
},

/* 8 */
{
  tipo: "rellenar",
  pregunta: `Enumera:
a. Las funciones de los núcleos basales en conjunto
b. Las funciones de la amígdala en conjunto
c. Las funciones del hipotálamo en conjunto`,
  respuesta: `a. Control motor, postura, aprendizaje motor
b. Regulación emocional, memoria emocional, respuesta a estrés
c. Homeostasis, regulación endocrina y autonómica, conducta instintiva`
},

/* 9 */
{
  tipo: "rellenar",
  pregunta: `Indica las principales conexiones de las siguientes estructuras:
a. Grupo de núcleos talámico rostral o anterior
b. Metatálamo
c. Núcleos paraventriculares del tálamo`,
  respuesta: `a. Hipocampo, cíngulo
b. Retina/colículos ópticos, corteza visual y auditiva
c. Hipotálamo, corteza prefrontal`
},

/* 10 */
{
  tipo: "rellenar",
  pregunta: `Enumera los principales componentes (incluyendo grupos de núcleos) de:
a. Tálamo
b. Epitálamo
c. Subtálamo`,
  respuesta: `a. Núcleos anteriores, mediales, laterales, intralaminares, reticulares
b. Habénula, glándula pineal, comisura habenular
c. Núcleo subtalámico, ansa lenticular`
},

/* 11 */
{
  tipo: "rellenar",
  pregunta: `Señala al menos dos conexiones de cada una de las siguientes estructuras:
a. Núcleos talámicos rostrales
b. Núcleos talámicos mediales
c. Nc. geniculado lateral
d. Nc. intralaminares del tálamo
e. Habénula`,
  respuesta: `a. Hipocampo, corteza cingular
b. Corteza prefrontal, corteza límbica
c. Retina, corteza visual
d. Corteza motora, corteza somatosensorial
e. Estría habenular, núcleo interpeduncular`
},

/* 12 */
{
  tipo: "rellenar",
  pregunta: `Señala la que consideras función principal de las siguientes estructuras:
a. Grupo de núcleos talámicos laterales
b. Nc. geniculado medial
c. Grupo de núcleos talámicos intralaminares
Con qué tres sistemas se relaciona el núcleo reticular talámico`,
  respuesta: `a. Integración sensorial
b. Procesamiento auditivo
c. Regulación del estado de alerta
Sistemas: motor, límbico, sensitivo`
},

/* 13 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. La unión entre ambos tálamos se llama MasIntermedia
b. Los grupos de núcleos talámicos se separan mediante dos láminas de sustancia blanca
c. El nc. subtalámico es una estación de relevo en las vías motoras extrapiramidales
d. El núcleo reticular talámico se sitúa entre la cápsula externa y la lámina medular externa del tálamo
e. El tálamo conecta con la corteza mediante radiaciones talámicas
f. La habénula forma parte del subtálamo
g. El subtálamo se considera la prolongación del tegmento mesencefálico
h. La habénula recibe información del hipocampo por la estría habenular
i. El nc. endopeduncular es parte del tálamo
j. El ansa lenticular es sustancia blanca subtalámica`,
  respuesta: `aF bV cV dV eV fF gV hV iF jV`
},

/* 14 */
{
  tipo: "rellenar",
  pregunta: `Indica cinco funciones del hipotálamo`,
  respuesta: `1. Regulación endocrina
2. Homeostasis
3. Control autonómico
4. Conducta instintiva
5. Regulación emocional`
},

/* 15 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. Desde un punto de vista embrionario, el hipotálamo deriva del prosencéfalo secundario
b. El hipotálamo tiene una importante función moduladora del SN
c. El hipotálamo se divide en 4 regiones
d. El nc. supraquiasmático pertenece a la región hipotalámica intermedia
e. Las fibras del nc. paraventricular llegan a la neurohipófisis
f. El fascículo longitudinal dorsal es una fibra comisural
g. El fórnix une el hipocampo con el hipotálamo
h. La hipófisis se desarrolla a partir del mesodermo
i. El infundíbulo es una parte de la neurohipófisis
j. En la hipófisis hay dos sistemas porta diferenciados`,
  respuesta: `aV bV cV dF eV fF gV hF iV jV`
},

/* 16 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Los núcleos que presenta la región hipotalámica rostral
b. Un núcleo de la región hipotalámica intermedia
c. Un núcleo de la región hipotalámica caudal`,
  respuesta: `a. Núcleo supraóptico, núcleo paraventricular
b. Núcleo ventromedial
c. Núcleo mamilar`
},

/* 17 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Los componentes de la hipófisis
b. La principal función de la hipófisis
c. El lugar donde se encuentra
d. Quién forma el diafragma de la silla
e. Qué es la bolsa de Rathke`,
  respuesta: `a. Adenohipófisis y neurohipófisis
b. Regulación endocrina
c. Silla turca
d. Membrana del diafragma de la silla
e. Evaginación ectodérmica que forma la adenohipófisis`
},

/* 18 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Componentes del lóbulo anterior de la hipófisis
b. Componentes del lóbulo posterior de la hipófisis
c. Origen del sistema porta hipofisario`,
  respuesta: `a. Adenohipófisis
b. Neurohipófisis
c. Arteria hipofisaria superior`
},

/* 19 */
{
  tipo: "rellenar",
  pregunta: `Qué se entiende por sistema porta largo?`,
  respuesta: `Es un sistema de vasos que conecta un lecho capilar con otro en un órgano diferente (ej: hipotálamo-hipófisis).`
},

/* 20 */
{
  tipo: "rellenar",
  pregunta: `Qué se entiende por sistema porta corto?`,
  respuesta: `Es un sistema de vasos que conecta capilares dentro de la misma estructura sin pasar a otro órgano.`
},

/* 21 */
{
  tipo: "rellenar",
  pregunta: `Señala:
a. Los componentes principales del telencéfalo
b. Tipos de palio, poniendo un ejemplo de cada uno
c. Nombre de las cavidades propias del telencéfalo y partes de que constan`,
  respuesta: `a. Corteza cerebral, núcleos basales, límbico, sustancia blanca
b. Arquipalio: hipocampo, Paleopalio: lóbulo piriforme, Neopalio: neocorteza
c. Ventrículo lateral: cuerno frontal, occipital y temporal`
},

/* 22 */
{
  tipo: "rellenar",
  pregunta: `Con qué funciones relacionas:
a. Arquipalio
b. Paleopalio
c. Neopalio`,
  respuesta: `a. Memoria y aprendizaje
b. Olfacción
c. Percepción sensorial y control motor avanzado`
},

/* 23 */
{
  tipo: "rellenar",
  pregunta: `Indica:
a. Elementos que integran los núcleos basales
b. Cuál es su actividad principal
c. Al menos dos conexiones que consideres fundamentales`,
  respuesta: `a. Núcleo caudado, putamen, globo pálido, sustancia negra
b. Control motor y postura
c. Corteza-medio basal, núcleo caudado-corteza prefrontal`
},

/* 24 */
{
  tipo: "rellenar",
  pregunta: `Indica:
a. Principales aferentes del estriado
b. Principales eferentes del estriado`,
  respuesta: `a. Corteza cerebral, tálamo
b. Globo pálido, sustancia negra`
},

/* 25 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. El estriado se relaciona con el sistema motor
b. Los núcleos basales tienen amplias conexiones con la corteza
c. No se conoce bien la función del nc. caudado
d. El nc. accumbens es independiente del nc. caudado
e. La amígdala se encuentra topográficamente dentro de los núcleos basales
f. El núcleo subtalámico tiene conexiones con el pallidum
g. La sustancia negra tiene una acción moduladora sobre el pallidum
h. Los núcleos basales tienen un mecanismo de feed-back corteza-tálamo-corteza
i. Los hemisferios se comunican entre sí mediante fibras de proyección
j. El paleocortex se relaciona con el olfato`,
  respuesta: `aV bV cF dF eF fV gV hV iF jV`
},

/* 26 */
{
  tipo: "rellenar",
  pregunta: `Enumera cinco funciones de los nc. basales que consideres más importantes:`,
  respuesta: `1. Control de movimiento voluntario
2. Regulación de postura
3. Coordinación de movimientos finos
4. Aprendizaje motor
5. Integración de información cortical y subcortical`
},

/* 27 */
{
  tipo: "rellenar",
  pregunta: `Indica:
a. Las partes en las que se divide el rinencéfalo basal
b. Con qué función o funciones se relaciona
c. Qué corteza o cortezas están presentes`,
  respuesta: `a. Hipocampo, amígdala, lóbulo piriforme
b. Memoria, emociones, olfacción
c. Arqui- y paleocorteza`
},

/* 28 */
{
  tipo: "rellenar",
  pregunta: `Indica:
a. La función principal de los núcleos del septo
b. Qué tipo de corteza integra al hipocampo
c. Qué partes se consideran dentro del hipocampo
d. Cuál es la principal vía eferente del hipocampo
e. Hacia dónde se dirige esta vía eferente`,
  respuesta: `a. Regulación límbica y emocional
b. Arqui- o paleocorteza
c. Giro dentado, CA1-CA4, subículo
d. Fórnix
e. Cuerpos mamilares y núcleo septal`
},

/* 29 */
{
  tipo: "rellenar",
  pregunta: `Define con una frase:
a. Qué es la fimbria
b. Qué es el alveus
c. Qué es la porción límbica del rinencéfalo
d. Cuál es la función principal del septo`,
  respuesta: `a. Haz de fibras que sale del hipocampo
b. Capa de fibras sobre la superficie del hipocampo
c. Amígdala, hipocampo y corteza cingular
d. Regulación de emociones y funciones límbicas`
},

/* 30 */
{
  tipo: "rellenar",
  pregunta: `Señala cuál de estas premisas es verdadera y cuál falsa:
a. La amígdala forma parte del rinencéfalo basal
b. La amígdala es un elemento clave del sistema límbico
c. Los hemisferios están formados por paleocortex y neocortex
d. La única función del rinencéfalo es olfatoria
e. El lóbulo piriforme está compuesto de arquicórtex
f. La amígdala está cubierta por un manto de neocortex
g. La fimbria es una vía aferente del hipocampo
h. El hipocampo recibe impulsos no olfatorios
i. La amígdala se relaciona con la memoria
j. La amígdala se comunica con el tálamo`,
  respuesta: `aV bV cV dF eF fV gF hV iV jV`
},

/* 31 */
{
  tipo: "rellenar",
  pregunta: `Indica:
a. Los complejos nucleares que forman la amígdala
b. Las funciones más importantes de la amígdala
c. Qué tipo de corteza cubre a la amígdala
d. Sus principales relaciones`,
  respuesta: `a. Basolateral, corticomedial, central
b. Emociones, miedo, memoria emocional
c. Paleocorteza
d. Hipocampo, corteza cingular, núcleos septales`
},

/* 32 */
{
  tipo: "rellenar",
  pregunta: `Enumera:
a. Las principales aferentes de la amígdala
b. Las principales eferentes de la amígdala`,
  respuesta: `a. Corteza olfatoria, corteza entorrinal, tálamo, hipotálamo, nc. septales
b. Hipotálamo, corteza cingular, nc. septales, tálamo, tronco encefálico`
},

/* 33 */
{
  tipo: "rellenar",
  pregunta: `Con qué tres sistemas se relaciona el núcleo reticular talámico`,
  respuesta: `1. Sistema motor
2. Sistema límbico
3. Sistema sensitivo`
}

];

















