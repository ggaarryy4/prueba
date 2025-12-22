let indice = 0;
let puntaje = 0;
let bloqueado = false;
let modoAleatorio = false;
let preguntasMezcladas = [];
let preguntasCorrectas = [];
let preguntasIncorrectas = [];

function mostrarHub() {
    document.getElementById("app").innerHTML = `
        <div class="hub">
            <h1>🧠 Práctica de Anatomía</h1>
            <p class="mensaje-carinoso"> ¡Hola mi amor! Sé que vamos a hacerlo genial </p>
            <p>Selecciona el modo de estudio:</p>
            <button class="modo-btn" onclick="empezarEnOrden()">
                📋 Modo en Orden
            </button>
            <button class="modo-btn" onclick="empezarAleatorio()">
                🎲 Modo Aleatorio
            </button>
            <p><strong>Total:</strong> ${preguntas.length} preguntas</p>
            <p class="mensaje-animo">✨ Estoy muy orgulloso de ti y de todo tu esfuerzo ✨</p>
        </div>
    `;
}

function empezarEnOrden() {
    modoAleatorio = false;
    indice = 0;
    puntaje = 0;
    preguntasCorrectas = [];
    preguntasIncorrectas = [];
    mostrarPregunta();
}

function empezarAleatorio() {
    modoAleatorio = true;
    indice = 0;
    puntaje = 0;
    preguntasMezcladas = [...preguntas];
    for (let i = preguntasMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [preguntasMezcladas[i], preguntasMezcladas[j]] = [preguntasMezcladas[j], preguntasMezcladas[i]];
    }
    mostrarPregunta();
}

function irAPregunta(numero) {
    indice = numero - 1;
    mostrarPregunta();
}

function mostrarPregunta() {
    bloqueado = false;
    const p = modoAleatorio ? preguntasMezcladas[indice] : preguntas[indice];

    let html = `
        <h3>Pregunta ${indice + 1} de ${preguntas.length}</h3>
        <p>${p.pregunta}</p>
    `;

    if (p.tipo === "test") {
        p.opciones.forEach((op, i) => {
            html += `<div class="opcion" onclick="responderTest(${i})">${op}</div>`;
        });
    }

    if (p.tipo === "rellenar") {
        html += `
            <textarea id="respuestaUsuario" placeholder="Escribe tu respuesta..."></textarea>
            <br>
            <button onclick="resolverRellenar()">Resolver</button>
            <button onclick="mostrarResultado()" style="margin-left: 10px; background: #dc3545; color: white;">Finalizar</button>
            <div id="zonaResultado"></div>
        `;
    }

    // Mostrar índice solo en modo orden (después de las opciones)
    if (!modoAleatorio) {
        html += '<div class="indice"><strong>Ir a pregunta:</strong> ';
        for (let i = 1; i <= preguntas.length; i++) {
            const claseActual = i === (indice + 1) ? 'actual' : '';
            const claseCorrecta = preguntasCorrectas.includes(i - 1) ? 'correcta' : '';
            const claseIncorrecta = preguntasIncorrectas.includes(i - 1) ? 'incorrecta' : '';
            html += `<span class="num-pregunta ${claseActual} ${claseCorrecta} ${claseIncorrecta}" onclick="irAPregunta(${i})">${i}</span> `;
        }
        html += '</div>';
    }

    document.getElementById("app").innerHTML = html;
}

function responderTest(i) {
    if (bloqueado) return;
    bloqueado = true;

    const p = modoAleatorio ? preguntasMezcladas[indice] : preguntas[indice];
    const correcta = p.correcta;
    const opciones = document.getElementsByClassName("opcion");

    if (i === correcta) {
        opciones[i].classList.add("correcta");
        puntaje++;
        // Guardar pregunta como correcta (solo en modo orden)
        if (!modoAleatorio) {
            // Eliminar de incorrectas si estaba ahí
            const indexIncorrecta = preguntasIncorrectas.indexOf(indice);
            if (indexIncorrecta > -1) {
                preguntasIncorrectas.splice(indexIncorrecta, 1);
            }
            // Añadir a correctas si no está
            if (!preguntasCorrectas.includes(indice)) {
                preguntasCorrectas.push(indice);
            }
        }
    } else {
        opciones[i].classList.add("incorrecta");
        opciones[correcta].classList.add("correcta");
        // Guardar pregunta como incorrecta (solo en modo orden)
        if (!modoAleatorio && !preguntasIncorrectas.includes(indice)) {
            preguntasIncorrectas.push(indice);
        }
    }

    setTimeout(siguiente, 1000);
}

function resolverRellenar() {
    if (bloqueado) return;
    bloqueado = true;

    const p = modoAleatorio ? preguntasMezcladas[indice] : preguntas[indice];

    document.getElementById("zonaResultado").innerHTML = `
        <p><strong>Respuesta correcta:</strong> ${p.respuesta}</p>
        <button onclick="marcar(true)">He respondido bien</button>
        <button onclick="marcar(false)">He respondido mal</button>
    `;
}

function marcar(correcto) {
    if (correcto) {
        puntaje++;
        // Guardar pregunta como correcta (solo en modo orden)
        if (!modoAleatorio) {
            // Eliminar de incorrectas si estaba ahí
            const indexIncorrecta = preguntasIncorrectas.indexOf(indice);
            if (indexIncorrecta > -1) {
                preguntasIncorrectas.splice(indexIncorrecta, 1);
            }
            // Añadir a correctas si no está
            if (!preguntasCorrectas.includes(indice)) {
                preguntasCorrectas.push(indice);
            }
        }
    } else {
        // Guardar pregunta como incorrecta (solo en modo orden)
        if (!modoAleatorio && !preguntasIncorrectas.includes(indice)) {
            preguntasIncorrectas.push(indice);
        }
    }
    siguiente();
}

function siguiente() {
    indice++;
    if (indice < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const modo = modoAleatorio ? "Aleatorio" : "en Orden";
    const porcentaje = Math.round((puntaje / preguntas.length) * 100);
    
    document.getElementById("app").innerHTML = `
        <div class="resultado">
            <h2>🎉 ¡Sesión Completada!</h2>
            <p class="mensaje-final">💕 muy buen trabajo, mi amor! Lo estamos haciendo genial 💕</p>
            <div class="puntuacion-box">
                <p><strong>Modo:</strong> ${modo}</p>
                <p><strong>Puntuación:</strong> ${puntaje} / ${preguntas.length}</p>
                <p><strong>Porcentaje:</strong> ${porcentaje}%</p>
            </div>
            <p class="mensaje-despedida">❤️ te amo ❤️</p>
            <div class="botones-resultado">
                <button onclick="mostrarHub()">🏠 Volver al Hub</button>
                <button onclick="${modoAleatorio ? 'empezarAleatorio()' : 'empezarEnOrden()'}">🔄 Repetir</button>
            </div>
        </div>
    `;
}

mostrarHub();
