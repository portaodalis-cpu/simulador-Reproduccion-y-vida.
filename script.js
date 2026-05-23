const STORAGE_KEY = "rv_cdigital_v1";

const codeMap = {
  0: "○", 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩",
  10: "௧௰", 11: "௧௰༡", 12: "௧௰༢", 13: "௧௰༣", 14: "௧௰༤", 15: "௧௰༥", 16: "௧௰༦", 17: "௧௰༧", 18: "௧௰༨", 19: "௧௰༩",
  20: "௨௰", 21: "௨௰༡", 22: "௨௰༢", 23: "௨௰༣", 24: "௨௰༤", 25: "௨௰༥", 26: "௨௰༦", 27: "௨௰༧", 28: "௨௰༨", 29: "௨௰༩",
  30: "௩௰", 31: "௩௰༡", 32: "௩௰༢", 33: "௩௰༣", 34: "௩௰༤", 35: "௩௰༥", 36: "௩௰༦", 37: "௩௰༧", 38: "௩௰༨", 39: "௩௰༩",
  40: "௪௰", 41: "௪௰༡", 42: "௪௰༢", 43: "௪௰༣", 44: "௪௰༤", 45: "௪௰༥", 46: "௪௰༦", 47: "௪௰༧", 48: "௪௰༨", 49: "௪௰༩",
  50: "五௰", 51: "五௰༡", 52: "五௰༢", 53: "五௰༣", 54: "五௰༤", 55: "五௰༥", 56: "五௰༦", 57: "五௰༧", 58: "五௰༨", 59: "五௰༩",
  60: "六௰", 61: "六௰༡", 62: "六௰༢", 63: "六௰༣", 64: "六௰༤", 65: "六௰༥", 66: "六௰༦", 67: "六௰༧", 68: "六௰༨", 69: "六௰༩", 70: "七௰"
};

const scienceTerms = [
  "adn", "replicación", "célula", "mitosis", "meiosis", "cromosoma", "cromátida", "gameto", "hormona",
  "ovogénesis", "espermatogénesis", "asexual", "sexual", "variabilidad", "evidencia", "hipótesis",
  "progenitor", "bases nitrogenadas", "genética", "neuroendocrino", "pubertad", "ética", "cultivo"
];

const activities = [
  {
    id: "a1",
    title: "Los seres vivos y la reproducción",
    period: "Semana 1",
    value: 7,
    competencies: "Ambiental y de la salud · Resolución de problemas",
    indicators: "Aplica conceptos en fenómenos naturales y formula argumentos basados en evidencia.",
    evidence: "Respuestas escritas, hipótesis sobre rosa de Bayahíbe y cigua palmera, registro individual ordenado.",
    context: [
      "La duración de la vida de los seres vivos no es eterna. Depredadores, parásitos, hambrunas, alteraciones del ambiente y envejecimiento llevan a la muerte de los organismos.",
      "La Rosa de Bayahíbe puede producir flores que duran apenas un día, aunque el arbusto vive entre 30 y 50 años. La Cigua Palmera, ave endémica de La Española, vive aproximadamente de 7 a 10 años."
    ],
    visual: "organisms",
    prompts: [
      ["a1q1", "¿Cómo explicarías que la rosa de Bayahíbe pueda crecer tanto y vivir tantos años?", 120],
      ["a1q2", "¿Cómo se relaciona eso con lo que le permite a la cigua palmera vivir su tiempo promedio?", 120],
      ["a1q3", "¿Ocurre de la misma manera en todos los seres vivos? Justifica tu respuesta con al menos una comparación.", 140],
      ["a1q4", "¿Todos los seres vivos crecen del mismo modo? Explica por qué usando una idea científica.", 120],
      ["a1q5", "¿Qué proceso permite que los seres vivos continúen existiendo a través del tiempo? Formula una hipótesis personal.", 130]
    ],
    criteria: ["Identifica la función de reproducción", "Formula hipótesis coherentes", "Usa evidencia comparativa", "Registra ideas de forma completa"]
  },
  {
    id: "a2",
    title: "Modelización de la replicación del ADN",
    period: "Semana 1",
    value: 10,
    competencies: "Resolución de problemas · Científica y tecnológica · Comunicativa",
    indicators: "Utiliza evidencias, construye modelos y produce información científica.",
    evidence: "Modelo físico o visual del ADN, respuestas al protocolo, revisión tras lectura científica.",
    context: [
      "Antes de que una célula se divida, el material genético debe duplicarse para que las células hijas reciban información hereditaria equivalente.",
      "La replicación inicia con la separación de las dos cadenas de nucleótidos; cada cadena original funciona como molde para completar una cadena nueva mediante bases complementarias."
    ],
    visual: "dna",
    upload: { id: "a2img", label: "Adjunta una foto o esquema de tu modelo de ADN.", required: true },
    prompts: [
      ["a2q1", "¿Por qué es necesaria la replicación del ADN antes de que una célula se divida?", 130],
      ["a2q2", "¿Qué garantiza la replicación en las células hijas?", 110],
      ["a2q3", "¿Qué ocurriría si no se obtuviera una copia exacta del ADN? Explica.", 140],
      ["a2q4", "Anota términos nuevos y define cada uno con tus palabras.", 120],
      ["a2q5", "¿Cómo se relaciona la complementariedad de las bases nitrogenadas con la replicación? Escribe tu hipótesis.", 150],
      ["a2q6", "¿Qué decisiones tomaste para representar la doble hélice y por qué elegiste esos materiales?", 150],
      ["a2q7", "¿Qué elementos añadirías para representar la replicación y qué función cumpliría cada uno?", 150],
      ["a2q8", "¿Qué cambiarías en tu modelo después de leer el texto científico? Justifica.", 150]
    ],
    criteria: ["Construye un modelo adecuado", "Justifica decisiones", "Corrige errores con evidencia", "Usa lenguaje científico", "Registra procedimiento"]
  },
  {
    id: "a3",
    title: "Reproducción asexual: análisis de imágenes",
    period: "Semana 1-2",
    value: 8,
    competencies: "Pensamiento lógico, creativo y crítico · Científica y tecnológica",
    indicators: "Interpreta lenguaje científico, aplica conceptos y produce texto científico.",
    evidence: "Análisis individual de modos de reproducción asexual y definición revisada.",
    context: ["Analiza los procesos representados: bipartición, fragmentación, esporulación, gemación y reproducción por estolones. La comparación debe centrarse en el origen del nuevo individuo y su semejanza genética con el progenitor."],
    visual: "asexual",
    upload: { id: "a3img", label: "Adjunta una foto, dibujo o esquema personal de un proceso de reproducción asexual.", required: true },
    prompts: [
      ["a3q1", "¿Qué se representa en la imagen o esquema que analizas?", 100],
      ["a3q2", "¿Este proceso ocurre en otros organismos? ¿En cuáles y por qué?", 120],
      ["a3q3", "¿Qué características tiene el nuevo individuo respecto al progenitor? Explica la causa.", 130],
      ["a3q4", "¿Qué tienen en común los procesos de reproducción asexual analizados?", 130],
      ["a3q5", "¿En qué se diferencian los distintos modos de reproducción observados?", 130],
      ["a3q6", "Construye tu definición individual de reproducción asexual y luego ajústala con lenguaje científico.", 160]
    ],
    criteria: ["Identifica el modo de reproducción", "Caracteriza semejanzas", "Elabora definición científica", "Revisa críticamente"]
  },
  {
    id: "a4",
    title: "Mitosis: división celular y observación práctica",
    period: "Semana 2",
    value: 10,
    competencies: "Resolución de problemas · Científica y tecnológica · Ética y ciudadana",
    indicators: "Usa procedimientos, modelos e historia del conocimiento científico.",
    evidence: "Lectura histórica, dibujo anticipatorio, observación microscópica y revisión fundamentada.",
    context: ["Flemming y otros científicos pudieron describir la mitosis gracias a observación sistemática, microscopía, tinciones y comparación de células en diferentes momentos de división."],
    visual: "mitosis",
    upload: { id: "a4img", label: "Adjunta foto del preparado, dibujo anticipatorio u observación de células de cebolla.", required: true },
    prompts: [
      ["a4q1", "¿El proceso por el que se forman nuevas células para el crecimiento de un tejido es similar al de la reproducción asexual? Justifica.", 150],
      ["a4q2", "¿Qué habilidades científicas le permitieron a Flemming descubrir la mitosis?", 120],
      ["a4q3", "¿Qué instrumentos tecnológicos hicieron posible conocer este proceso en profundidad?", 110],
      ["a4q4", "¿Cómo imaginabas una célula en división antes de observarla? Describe tu dibujo anticipatorio.", 120],
      ["a4q5", "¿Por qué es necesario usar colorante azul de metileno en esta preparación?", 110],
      ["a4q6", "¿Qué observaste? ¿Identificas algo de lo que describió Flemming?", 150],
      ["a4q8", "¿Qué fases de la mitosis lograste identificar y qué ocurre en cada una?", 160],
      ["a4q9", "¿Se parecen tus dibujos anticipatorios a lo observado realmente? Explica.", 120],
      ["a4q10", "Vuelve a tus respuestas de la Actividad 1. ¿Modificarías algo ahora? Escribe tus ajustes.", 150]
    ],
    criteria: ["Identifica habilidades científicas", "Registra observación precisa", "Reconoce fases", "Revisa ideas iniciales"]
  },
  {
    id: "a5",
    title: "La meiosis: gametos y variabilidad genética",
    period: "Semana 2-3",
    value: 10,
    competencies: "Ética y ciudadana · Pensamiento lógico, creativo y crítico · Desarrollo personal",
    indicators: "Aplica modelos, compara procesos y explica variabilidad genética.",
    evidence: "Hipótesis, respuestas sobre meiosis, modelo individual de fase y justificación de limitaciones.",
    context: ["La meiosis reduce a la mitad el número de cromosomas para formar gametos y favorece variabilidad genética mediante separación de cromosomas homólogos, cromátidas y entrecruzamiento."],
    visual: "meiosis",
    upload: { id: "a5img", label: "Adjunta foto o esquema de tu modelo individual de meiosis.", required: true },
    prompts: [
      ["a5q1", "Si los gametos tienen la mitad de cromosomas, ¿qué tipo de división los forma? Compara con mitosis.", 170],
      ["a5q2", "¿En qué se parecen tus hipótesis anteriores a la información del texto?", 120],
      ["a5q3", "¿Cuál meiosis separa cromosomas homólogos y cuál separa cromátidas?", 110],
      ["a5q4", "¿Cuál es la diferencia entre un cromosoma homólogo y una cromátida?", 120],
      ["a5q5", "¿Por qué se dice que la meiosis es reductora y la mitosis no?", 130],
      ["a5q6", "¿Qué diferencias hay entre la ovogénesis y la espermatogénesis?", 150],
      ["a5q7", "¿Qué materiales elegiste para representar una fase de la meiosis? Justifica.", 130],
      ["a5q8", "¿Qué eventos de esa fase no pudiste representar adecuadamente y por qué?", 130],
      ["a5q9", "¿Qué diferencias identificas entre meiosis I y meiosis II?", 140]
    ],
    criteria: ["Formula hipótesis pertinentes", "Responde conceptos de meiosis", "Construye modelo", "Justifica decisiones", "Reconoce limitaciones"]
  },
  {
    id: "a6",
    title: "Pubertad, hormonas y reproducción humana",
    period: "Semana 3",
    value: 10,
    competencies: "Científica y tecnológica · Resolución de problemas · Pensamiento lógico",
    indicators: "Interpreta cambios biológicos y construye modelos del sistema neuroendocrino.",
    evidence: "Análisis de testimonios, representación individual de función o estructura, ajustes tras lectura.",
    context: ["Sebastián relata un crecimiento rápido entre los 12 y 13 años. Rosa describe cambios corporales y emocionales. Estos testimonios permiten analizar pubertad, hormonas y comunicación neuroendocrina."],
    visual: "puberty",
    upload: { id: "a6img", label: "Adjunta una representación personal de una función o estructura del sistema reproductor/neuroendocrino.", required: true },
    prompts: [
      ["a6q1", "¿A qué edades comienzan los cambios que describen los testimonios?", 90],
      ["a6q2", "¿Cómo explicarías que estos cambios ocurran aproximadamente a la misma edad en hombres y mujeres?", 140],
      ["a6q3", "¿Cómo sabe el cuerpo que es hora de iniciar esos cambios y cómo se relaciona con la reproducción?", 160],
      ["a6q4", "Elige una función o estructura del sistema y descríbela con tus propias palabras.", 130],
      ["a6q5", "¿Qué formato elegiste para representarla y por qué?", 110],
      ["a6q6", "¿Cómo se relaciona esa función con otras funciones del sistema neuroendocrino?", 150],
      ["a6q7", "¿Qué aspectos de tu representación cambiarías después de leer el texto? Justifica.", 130],
      ["a6q8", "¿Qué te permitió aprender modelizar primero y leer el texto después?", 130]
    ],
    criteria: ["Analiza testimonios", "Representa función", "Relaciona estructuras", "Ajusta con evidencia", "Reflexiona sobre aprendizaje"]
  },
  {
    id: "a7",
    title: "Ingeniería genética: análisis de noticia",
    period: "Semana 3-4",
    value: 7,
    competencies: "Comunicativa · Pensamiento lógico y crítico · Científica y tecnológica",
    indicators: "Interpreta información científica y formula argumentos basados en evidencia.",
    evidence: "Glosario, análisis de noticia, tipo de reproducción, relación con mitosis/meiosis, ventajas y riesgos.",
    context: ["Noticia: intercambio científico fortalece la edición génica en papa en Latinoamérica. Científicos comparten técnicas para modificar ADN de plantas de papa, aumentar resistencia a enfermedades y plagas, y mejorar rendimientos agrícolas."],
    visual: "genetic",
    prompts: [
      ["a7q1", "¿Qué hecho informa la noticia? Resúmelo con tus propias palabras.", 110],
      ["a7q2", "¿Qué tipo de reproducción se relaciona con este hecho? Justifica.", 130],
      ["a7q3", "¿Qué papel juegan la mitosis o la meiosis en el proceso descrito?", 130],
      ["a7q4", "¿Qué ventajas y riesgos presenta la modificación genética de cultivos?", 160],
      ["a7q5", "Anota términos que no comprendiste y propón una definición inicial para cada uno.", 110]
    ],
    criteria: ["Identifica el hecho", "Relaciona reproducción", "Conecta mitosis/meiosis", "Reconoce ventajas y riesgos", "Amplía glosario"]
  },
  {
    id: "a8",
    title: "Argumentación ética: modificación genética en cultivos",
    period: "Semana 4",
    value: 8,
    competencies: "Comunicativa · Ética y ciudadana · Científica y tecnológica",
    indicators: "Asume postura ética, formula argumentos con evidencia y produce texto científico.",
    evidence: "Tres argumentos, contraargumentos previstos, postura personal y reflexión final.",
    context: ["En lugar de un debate colectivo, esta etapa se trabaja como argumentación individual: debes construir una postura propia, anticipar objeciones y sostener tus ideas con conceptos científicos de la secuencia."],
    visual: "debate",
    prompts: [
      ["a8q1", "Define tu postura personal sobre si debería permitirse la modificación genética en cultivos.", 120],
      ["a8q2", "Escribe tres argumentos principales apoyados en datos, ejemplos o conceptos científicos concretos.", 220],
      ["a8q3", "Anticipa posibles contraargumentos y explica cómo responderías a cada uno.", 180],
      ["a8q4", "Nombra tres conceptos científicos de la secuencia que sostienen tu postura y explica su relación.", 180],
      ["a8q5", "Analiza implicaciones éticas y sociales: beneficios, riesgos, distribución de impactos y responsabilidad.", 220],
      ["a8q6", "Redacta tu conclusión clara, coherente y fundamentada.", 140]
    ],
    rubric: [
      "Uso de evidencia científica: conecta replicación del ADN, reproducción, mitosis/meiosis o ingeniería genética con datos o ejemplos.",
      "Posicionamiento ético: asume postura crítica y considera ventajas y riesgos desde más de una perspectiva.",
      "Claridad argumentativa: tesis, argumentos, contraargumentos y conclusión con lenguaje científico."
    ],
    criteria: ["Construye argumentos", "Anticipa réplicas", "Usa evidencia científica", "Analiza ética y sociedad", "Organiza con claridad"]
  }
];

let state = {
  student: { name: "", section: "", date: "" },
  current: 0,
  answers: {},
  images: {},
  completed: {},
  theme: "light",
  metrics: {
    sessionStart: Date.now(),
    lastVisibleStart: Date.now(),
    totalHiddenMs: 0,
    focusLosses: 0,
    pasteEvents: 0,
    mobilePasteEvents: 0,
    answer: {}
  }
};

const $ = selector => document.querySelector(selector);

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  $("#saveStatus").textContent = `Guardado automático: ${new Date().toLocaleTimeString("es-DO", { hour: "2-digit", minute: "2-digit" })}`;
}

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    state = { ...state, ...parsed, metrics: { ...state.metrics, ...(parsed.metrics || {}) } };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function coded(n) {
  const safe = Math.max(0, Math.min(70, Math.round(n)));
  return codeMap[safe] || String(safe);
}

function words(text) {
  return (text || "").trim().split(/\s+/).filter(Boolean);
}

function normalize(text) {
  return (text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function answerMetric(id) {
  if (!state.metrics.answer[id]) {
    state.metrics.answer[id] = {
      firstFocus: null, totalFocusMs: 0, focusStarted: null, keyCount: 0, backspaces: 0,
      pasteCount: 0, pastedChars: 0, inputEvents: 0, intervals: [], lastKeyAt: null, maxJump: 0
    };
  }
  return state.metrics.answer[id];
}

function attachBehaviorTracking(el, id) {
  const metric = answerMetric(id);
  el.addEventListener("focus", () => {
    if (!metric.firstFocus) metric.firstFocus = Date.now();
    metric.focusStarted = Date.now();
  });
  el.addEventListener("blur", () => {
    if (metric.focusStarted) metric.totalFocusMs += Date.now() - metric.focusStarted;
    metric.focusStarted = null;
    save();
  });
  el.addEventListener("keydown", event => {
    const now = Date.now();
    metric.keyCount += 1;
    if (event.key === "Backspace" || event.key === "Delete") metric.backspaces += 1;
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "v") state.metrics.pasteEvents += 1;
    if (metric.lastKeyAt) metric.intervals.push(Math.min(now - metric.lastKeyAt, 60000));
    metric.lastKeyAt = now;
  });
  el.addEventListener("paste", event => {
    const pasted = event.clipboardData ? event.clipboardData.getData("text") : "";
    metric.pasteCount += 1;
    metric.pastedChars += pasted.length;
    metric.maxJump = Math.max(metric.maxJump, pasted.length);
    state.metrics.pasteEvents += 1;
    if (!event.clipboardData) state.metrics.mobilePasteEvents += 1;
  });
  el.addEventListener("input", () => {
    const previousLength = (state.answers[id] || "").length;
    metric.inputEvents += 1;
    metric.maxJump = Math.max(metric.maxJump, Math.abs(el.value.length - previousLength));
    state.answers[id] = el.value;
    renderCounters();
    save();
  });
}

function init() {
  load();
  $("#studentDate").value = state.student.date || new Date().toISOString().slice(0, 10);
  $("#studentName").value = state.student.name || "";
  $("#studentSection").value = state.student.section || "";
  if (state.theme === "dark") document.body.classList.add("dark");
  bindGlobalEvents();
  renderNav();
  validateCover();
  if (state.student.name && Object.keys(state.answers).length) showWorkspace();
}

function bindGlobalEvents() {
  ["studentName", "studentSection", "studentDate"].forEach(id => {
    $("#" + id).addEventListener("input", () => {
      state.student = {
        name: $("#studentName").value.trim(),
        section: $("#studentSection").value.trim(),
        date: $("#studentDate").value
      };
      validateCover();
      save();
    });
  });
  $("#startBtn").addEventListener("click", showWorkspace);
  $("#resumeBtn").addEventListener("click", showWorkspace);
  $("#prevBtn").addEventListener("click", () => navigate(state.current - 1, true));
  $("#nextBtn").addEventListener("click", () => navigate(state.current + 1));
  $("#finishBtn").addEventListener("click", finish);
  $("#backToWorkBtn").addEventListener("click", () => {
    $("#finalScreen").classList.add("hidden");
    $("#workspace").classList.remove("hidden");
    renderActivity();
  });
  $("#studentPdfBtn").addEventListener("click", () => generatePdf("student"));
  $("#teacherPdfBtn").addEventListener("click", () => generatePdf("teacher"));
  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    state.theme = document.body.classList.contains("dark") ? "dark" : "light";
    save();
  });
  $("#resetBtn").addEventListener("click", () => {
    if (!confirm("¿Reiniciar todo el progreso guardado en este navegador?")) return;
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      state.metrics.hiddenStarted = Date.now();
      state.metrics.focusLosses += 1;
    } else if (state.metrics.hiddenStarted) {
      state.metrics.totalHiddenMs += Date.now() - state.metrics.hiddenStarted;
      state.metrics.hiddenStarted = null;
      save();
    }
  });
  window.addEventListener("blur", () => { state.metrics.focusLosses += 1; save(); });
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => {});
}

function validateCover() {
  const ok = $("#studentName").value.trim() && $("#studentSection").value.trim() && $("#studentDate").value;
  $("#startBtn").disabled = !ok;
}

function showWorkspace() {
  if (!$("#studentName").value.trim() || !$("#studentSection").value.trim() || !$("#studentDate").value) return;
  state.student = {
    name: $("#studentName").value.trim(),
    section: $("#studentSection").value.trim(),
    date: $("#studentDate").value
  };
  $("#cover").classList.add("hidden");
  $("#workspace").classList.remove("hidden");
  $("#finalScreen").classList.add("hidden");
  $("#studentBadge").textContent = `${state.student.name} · ${state.student.section}`;
  renderNav();
  renderActivity();
  save();
}

function renderNav() {
  $("#activityNav").innerHTML = activities.map((activity, index) => {
    const complete = isActivityComplete(activity).ok;
    const active = index === state.current ? "active" : "";
    return `<button class="nav-item ${active} ${complete ? "complete" : ""}" data-index="${index}" type="button">
      <strong>${index + 1}. ${activity.title}</strong><span>${activity.period} · valor ${coded(activity.value)}</span>
    </button>`;
  }).join("");
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => navigate(Number(btn.dataset.index)));
  });
}

function navigate(target, allowBack = false) {
  if (target < 0 || target >= activities.length) return;
  const currentValidation = isActivityComplete(activities[state.current]);
  if (!allowBack && target !== state.current && !currentValidation.ok) {
    showValidation(currentValidation);
    markInvalid(currentValidation);
    return;
  }
  state.current = target;
  renderNav();
  renderActivity();
  save();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderActivity() {
  const activity = activities[state.current];
  $("#periodLabel").textContent = activity.period;
  $("#activityTitle").textContent = `${state.current + 1}. ${activity.title}`;
  $("#activityMeta").innerHTML = `
    <div class="meta-box"><small>Competencias</small>${activity.competencies}</div>
    <div class="meta-box"><small>Indicadores</small>${activity.indicators}</div>
    <div class="meta-box"><small>Valor codificado</small>${coded(activity.value)}</div>
  `;
  $("#activityContent").innerHTML = `
    <article class="activity-card">
      <h3>Lectura y propósito</h3>
      ${activity.context.map(p => `<p>${p}</p>`).join("")}
      <ol class="instruction-list">
        <li>Responde de forma individual, con argumentos propios y evidencia científica.</li>
        <li>Evita respuestas telegráficas: explica relaciones, causas, límites y ejemplos.</li>
        <li>Cuando se solicite evidencia visual, adjunta una imagen o fotografía tomada desde tu dispositivo.</li>
      </ol>
    </article>
    <article class="visual-card"><h3>Referencia visual de análisis</h3><div class="visual-grid">${visual(activity.visual)}</div></article>
    ${activity.upload ? uploadBlock(activity.upload) : ""}
    ${activity.rubric ? rubricBlock(activity.rubric) : ""}
    ${activity.prompts.map(([id, prompt, min], i) => questionBlock(id, prompt, min, i + 1)).join("")}
    <article class="criteria-card"><h3>Criterios del instrumento</h3><div class="criteria-list">
      ${activity.criteria.map(c => `<div class="criteria-row"><span>${c}</span><strong>seguimiento</strong></div>`).join("")}
    </div></article>
  `;
  activity.prompts.forEach(([id]) => attachBehaviorTracking(document.getElementById(id), id));
  if (activity.upload) bindUpload(activity.upload.id);
  $("#prevBtn").disabled = state.current === 0;
  $("#nextBtn").classList.toggle("hidden", state.current === activities.length - 1);
  $("#finishBtn").classList.toggle("hidden", state.current !== activities.length - 1);
  renderCounters();
  updateProgress();
  showValidation(isActivityComplete(activity), true);
}

function questionBlock(id, prompt, min, number) {
  return `<article class="question-card">
    <div class="question-head"><strong>${number}. ${prompt}</strong><span class="min-note">mínimo ${min} caracteres</span></div>
    <textarea id="${id}" data-min="${min}" placeholder="Escribe aquí tu respuesta argumentada...">${state.answers[id] || ""}</textarea>
    <div class="field-tools"><span data-counter="${id}">0 caracteres</span><span>Guardado local</span></div>
  </article>`;
}

function uploadBlock(upload) {
  const imgs = state.images[upload.id] || [];
  return `<article class="question-card image-uploader" data-upload="${upload.id}">
    <h3>${upload.label}</h3>
    <input id="${upload.id}" type="file" accept="image/*" capture="environment" multiple>
    <div class="preview-grid">${imgs.map(src => `<img src="${src}" alt="Evidencia visual cargada">`).join("")}</div>
  </article>`;
}

function rubricBlock(items) {
  return `<article class="criteria-card"><h3>Rúbrica de reflexión personal</h3><ol class="instruction-list">${items.map(i => `<li>${i}</li>`).join("")}</ol></article>`;
}

function bindUpload(id) {
  const input = document.getElementById(id);
  input.addEventListener("change", async event => {
    const files = [...event.target.files].slice(0, 4);
    const dataUrls = [];
    for (const file of files) dataUrls.push(await fileToDataUrl(file));
    state.images[id] = [...(state.images[id] || []), ...dataUrls].slice(0, 6);
    save();
    renderActivity();
  });
}

function fileToDataUrl(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function renderCounters() {
  document.querySelectorAll("[data-counter]").forEach(counter => {
    const id = counter.dataset.counter;
    const text = state.answers[id] || "";
    counter.textContent = `${text.length} caracteres · ${words(text).length} palabras`;
  });
  showValidation(isActivityComplete(activities[state.current]), true);
  updateProgress();
}

function isActivityComplete(activity) {
  const missing = [];
  activity.prompts.forEach(([id, prompt, min]) => {
    const answer = state.answers[id] || "";
    if (answer.trim().length < min) missing.push(`Falta completar: ${prompt.slice(0, 70)}...`);
  });
  if (activity.upload?.required && !(state.images[activity.upload.id] || []).length) {
    missing.push("Falta adjuntar la evidencia visual requerida.");
  }
  return { ok: missing.length === 0, missing };
}

function showValidation(result, quiet = false) {
  const box = $("#validationSummary");
  if (result.ok) {
    box.textContent = "Actividad lista para avanzar.";
    box.style.color = "var(--ok)";
  } else {
    box.textContent = quiet ? `${result.missing.length} requisito(s) pendiente(s).` : result.missing[0];
    box.style.color = "var(--bad)";
  }
}

function markInvalid(result) {
  document.querySelectorAll("textarea").forEach(el => {
    el.classList.toggle("invalid", el.value.trim().length < Number(el.dataset.min));
  });
}

function updateProgress() {
  let required = 0;
  let done = 0;
  activities.forEach(activity => {
    activity.prompts.forEach(([id, , min]) => {
      required += 1;
      if ((state.answers[id] || "").trim().length >= min) done += 1;
    });
    if (activity.upload?.required) {
      required += 1;
      if ((state.images[activity.upload.id] || []).length) done += 1;
    }
  });
  const pct = Math.round((done / required) * 100);
  $("#progressBar").style.width = `${pct}%`;
  $("#progressText").textContent = `${pct}% completado`;
}

function scoreActivity(activity) {
  const validation = isActivityComplete(activity);
  if (!validation.ok) return 0;
  const allText = activity.prompts.map(([id]) => state.answers[id] || "").join(" ");
  const norm = normalize(allText);
  const termHits = scienceTerms.filter(term => norm.includes(normalize(term))).length;
  const averageLength = activity.prompts.reduce((sum, [id]) => sum + (state.answers[id] || "").trim().length, 0) / activity.prompts.length;
  let quality = 0.72;
  if (termHits >= 5) quality += 0.12;
  if (averageLength >= 180) quality += 0.10;
  if (norm.includes("porque") || norm.includes("evidencia") || norm.includes("justifica")) quality += 0.06;
  return Math.min(activity.value, Math.max(Math.ceil(activity.value * quality), Math.floor(activity.value * 0.72)));
}

function totalScore() {
  return activities.reduce((sum, activity) => sum + scoreActivity(activity), 0);
}

function finish() {
  const incomplete = activities.map((activity, i) => ({ i, result: isActivityComplete(activity) })).find(x => !x.result.ok);
  if (incomplete) {
    state.current = incomplete.i;
    renderNav();
    renderActivity();
    showValidation(incomplete.result);
    markInvalid(incomplete.result);
    return;
  }
  save();
  $("#workspace").classList.add("hidden");
  $("#finalScreen").classList.remove("hidden");
  $("#finalStudent").textContent = `${state.student.name} · Sección ${state.student.section} · ${state.student.date}`;
  $("#codedScore").textContent = coded(totalScore());
  $("#finalCriteria").innerHTML = activities.map(activity => `
    <div class="criteria-row"><span>${activity.title}</span><strong>${coded(scoreActivity(activity))}</strong></div>
  `).join("");
}

function heuristicReport() {
  const answerMetrics = Object.entries(state.metrics.answer).map(([id, metric]) => {
    const len = (state.answers[id] || "").length;
    const focusMs = metric.totalFocusMs + (metric.focusStarted ? Date.now() - metric.focusStarted : 0);
    const minutes = Math.max(focusMs / 60000, 0.05);
    const charsPerMinute = Math.round(len / minutes);
    const avgInterval = metric.intervals.length ? Math.round(metric.intervals.reduce((a, b) => a + b, 0) / metric.intervals.length) : 0;
    return { id, len, focusMs, charsPerMinute, avgInterval, ...metric };
  });
  const pasteChars = answerMetrics.reduce((sum, m) => sum + (m.pastedChars || 0), 0);
  const fastLong = answerMetrics.filter(m => m.len > 450 && m.focusMs < 90000).length;
  const jumps = answerMetrics.filter(m => m.maxJump > 250).length;
  const focusLosses = state.metrics.focusLosses || 0;
  let risk = "riesgo bajo";
  let authenticity = "autenticidad alta";
  if (pasteChars > 800 || fastLong >= 2 || jumps >= 3 || focusLosses > 12) {
    risk = "riesgo alto";
    authenticity = "autenticidad baja";
  } else if (pasteChars > 250 || fastLong === 1 || jumps >= 1 || focusLosses > 5) {
    risk = "riesgo medio";
    authenticity = "autenticidad media";
  }
  return { authenticity, risk, pasteChars, focusLosses, answerMetrics };
}

function generatePdf(type) {
  if (!window.jspdf?.jsPDF) {
    downloadPrintableHtml(type);
    alert("No se pudo cargar jsPDF en este momento. Se descargó una versión HTML imprimible: ábrela y usa imprimir/guardar como PDF.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const margin = 42;
  let y = margin;
  const lineHeight = 14;
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - margin * 2;
  const addText = (text, size = 10, style = "normal") => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(String(text || ""), maxWidth);
    lines.forEach(line => {
      if (y > 760) { doc.addPage(); y = margin; }
      doc.text(line, margin, y);
      y += lineHeight + (size > 12 ? 3 : 0);
    });
  };
  addText("Reproducción y vida: conocer para debatir", 16, "bold");
  addText(`Estudiante: ${state.student.name} · Sección: ${state.student.section} · Fecha: ${state.student.date}`);
  addText(`Nota codificada: ${coded(totalScore())}`, 12, "bold");
  addText(type === "teacher" ? "PDF DOCENTE - análisis interno" : "PDF ESTUDIANTE", 11, "bold");
  y += 8;
  activities.forEach((activity, index) => {
    addText(`${index + 1}. ${activity.title} · valoración codificada ${coded(scoreActivity(activity))}`, 13, "bold");
    activity.prompts.forEach(([id, prompt]) => {
      addText(prompt, 10, "bold");
      addText(state.answers[id] || "Sin respuesta registrada.");
      y += 5;
    });
    if (activity.upload && state.images[activity.upload.id]) {
      addText("Evidencias visuales adjuntas:", 10, "bold");
      state.images[activity.upload.id].slice(0, 3).forEach(src => {
        try {
          if (y > 610) { doc.addPage(); y = margin; }
          doc.addImage(src, "JPEG", margin, y, 170, 120);
          y += 132;
        } catch {
          addText("[Imagen adjunta no insertada por compatibilidad de formato]");
        }
      });
    }
  });
  if (type === "teacher") {
    const report = heuristicReport();
    doc.addPage();
    y = margin;
    addText("Reporte docente oculto", 16, "bold");
    addText(`Autenticidad textual: ${report.authenticity}`);
    addText(`Riesgo de asistencia externa: ${report.risk}`);
    addText(`Tiempo total: ${Math.round((Date.now() - state.metrics.sessionStart) / 60000)} min`);
    addText(`Tiempo fuera de pestaña: ${Math.round((state.metrics.totalHiddenMs || 0) / 1000)} s`);
    addText(`Cambios de ventana / pérdida de foco: ${report.focusLosses}`);
    addText(`Pegados detectados: ${state.metrics.pasteEvents || 0}`);
    addText(`Caracteres pegados estimados: ${report.pasteChars}`);
    addText("Detalle por respuesta:", 12, "bold");
    report.answerMetrics.forEach(m => {
      addText(`${m.id}: ${m.len} caracteres, ${m.charsPerMinute} car/min, borrados ${m.backspaces}, pegados ${m.pasteCount}, salto máximo ${m.maxJump}, intervalo promedio ${m.avgInterval} ms`);
    });
  }
  const suffix = type === "teacher" ? "docente" : "estudiante";
  doc.save(`reproduccion_vida_${suffix}_${state.student.name.replace(/\s+/g, "_") || "sin_nombre"}.pdf`);
}

function downloadPrintableHtml(type) {
  const report = type === "teacher" ? heuristicReport() : null;
  const sections = activities.map((activity, index) => `
    <section>
      <h2>${index + 1}. ${activity.title} · ${coded(scoreActivity(activity))}</h2>
      ${activity.prompts.map(([id, prompt]) => `
        <h3>${prompt}</h3>
        <p>${escapeHtml(state.answers[id] || "Sin respuesta registrada.")}</p>
      `).join("")}
      ${activity.upload && state.images[activity.upload.id] ? `
        <h3>Evidencias visuales</h3>
        <div class="imgs">${state.images[activity.upload.id].map(src => `<img src="${src}" alt="Evidencia visual">`).join("")}</div>
      ` : ""}
    </section>
  `).join("");
  const teacher = report ? `
    <section>
      <h2>Reporte docente oculto</h2>
      <p>Autenticidad textual: ${report.authenticity}</p>
      <p>Riesgo de asistencia externa: ${report.risk}</p>
      <p>Tiempo total: ${Math.round((Date.now() - state.metrics.sessionStart) / 60000)} min</p>
      <p>Tiempo fuera de pestaña: ${Math.round((state.metrics.totalHiddenMs || 0) / 1000)} s</p>
      <p>Cambios de ventana / pérdida de foco: ${report.focusLosses}</p>
      <p>Pegados detectados: ${state.metrics.pasteEvents || 0}</p>
      <p>Caracteres pegados estimados: ${report.pasteChars}</p>
      <h3>Detalle por respuesta</h3>
      ${report.answerMetrics.map(m => `<p>${m.id}: ${m.len} caracteres, ${m.charsPerMinute} car/min, borrados ${m.backspaces}, pegados ${m.pasteCount}, salto máximo ${m.maxJump}, intervalo promedio ${m.avgInterval} ms.</p>`).join("")}
    </section>
  ` : "";
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Reproducción y vida</title>
    <style>body{font-family:Arial,sans-serif;line-height:1.45;margin:36px;color:#1d211f}h1{font-size:24px}h2{font-size:18px;margin-top:28px;border-top:1px solid #bbb;padding-top:14px}h3{font-size:13px;margin-bottom:4px}p{white-space:pre-wrap}.imgs{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.imgs img{max-width:100%;border:1px solid #bbb}@media print{section{break-inside:avoid}}</style>
  </head><body><h1>Reproducción y vida: conocer para debatir</h1><p>Estudiante: ${escapeHtml(state.student.name)} · Sección: ${escapeHtml(state.student.section)} · Fecha: ${escapeHtml(state.student.date)}</p><p>Nota codificada: <strong>${coded(totalScore())}</strong></p><p>${type === "teacher" ? "PDF docente oculto" : "PDF estudiante"}</p>${sections}${teacher}</body></html>`;
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `reproduccion_vida_${type}_${state.student.name.replace(/\s+/g, "_") || "sin_nombre"}.html`;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function visual(type) {
  const common = `viewBox="0 0 320 200" role="img" aria-label="Representación científica"`;
  const dna = `<svg ${common}><rect width="320" height="200" rx="8" fill="#eef1ee"/><path d="M95 20c90 35 90 125 0 160M225 20c-90 35-90 125 0 160" fill="none" stroke="#315c52" stroke-width="5"/><g stroke="#8a4b39" stroke-width="4">${[35,60,85,110,135,160].map((y,i)=>`<line x1="${105+i%2*12}" y1="${y}" x2="${215-i%2*12}" y2="${y+5}"/>`).join("")}</g><g fill="#315c52" font-size="16" font-weight="700"><text x="132" y="42">A-T</text><text x="130" y="91">C-G</text><text x="132" y="142">G-C</text></g></svg>`;
  const mitosis = `<svg ${common}><rect width="320" height="200" rx="8" fill="#eef1ee"/><g fill="none" stroke="#315c52" stroke-width="3">${[55,120,185,250].map((x,i)=>`<circle cx="${x}" cy="100" r="35"/><path d="M${x-12} 82l24 36M${x+12} 82l-24 36" stroke="#8a4b39"/>`).join("")}</g><text x="30" y="175" fill="#202522" font-size="14">profase · metafase · anafase · telofase</text></svg>`;
  const meiosis = `<svg ${common}><rect width="320" height="200" rx="8" fill="#eef1ee"/><circle cx="82" cy="55" r="30" fill="none" stroke="#315c52" stroke-width="3"/><circle cx="58" cy="145" r="24" fill="none" stroke="#315c52" stroke-width="3"/><circle cx="106" cy="145" r="24" fill="none" stroke="#315c52" stroke-width="3"/><circle cx="220" cy="62" r="22" fill="none" stroke="#8a4b39" stroke-width="3"/><circle cx="265" cy="62" r="22" fill="none" stroke="#8a4b39" stroke-width="3"/><circle cx="220" cy="140" r="22" fill="none" stroke="#8a4b39" stroke-width="3"/><circle cx="265" cy="140" r="22" fill="none" stroke="#8a4b39" stroke-width="3"/><text x="35" y="28" fill="#202522" font-size="13">Meiosis I</text><text x="202" y="28" fill="#202522" font-size="13">Meiosis II</text></svg>`;
  const asexual = `<svg ${common}><rect width="320" height="200" rx="8" fill="#eef1ee"/><circle cx="60" cy="90" r="28" fill="none" stroke="#315c52" stroke-width="4"/><path d="M60 62v56M32 90h56" stroke="#8a4b39" stroke-width="3"/><path d="M120 120c30-70 70-70 100 0M155 88c15 25 40 25 55 0" fill="none" stroke="#315c52" stroke-width="4"/><path d="M245 150c15-58 34-70 48-105M260 122c25-10 42-5 50 15" fill="none" stroke="#8a4b39" stroke-width="4"/><text x="28" y="176" fill="#202522" font-size="13">bipartición · fragmentación · estolones</text></svg>`;
  const organisms = `<svg ${common}><rect width="320" height="200" rx="8" fill="#eef1ee"/><path d="M78 154c-18-52 8-93 52-105 33 45 24 84-16 115" fill="#d8bfd6" stroke="#8a4b39" stroke-width="3"/><circle cx="107" cy="98" r="14" fill="#8a4b39"/><path d="M210 55c36 0 52 26 36 50 25 8 36 32 20 54-34-8-60-28-76-62" fill="#d8d1b7" stroke="#315c52" stroke-width="3"/><path d="M224 104l-44 42M242 103l34 38" stroke="#315c52" stroke-width="4"/><text x="35" y="184" fill="#202522" font-size="13">Rosa de Bayahíbe y Cigua Palmera</text></svg>`;
  const puberty = `<svg ${common}><rect width="320" height="200" rx="8" fill="#eef1ee"/><circle cx="82" cy="58" r="28" fill="none" stroke="#315c52" stroke-width="4"/><path d="M82 86v60M52 112h60M82 146l-22 34M82 146l22 34" stroke="#315c52" stroke-width="4"/><path d="M185 60h82M185 100h82M185 140h82" stroke="#8a4b39" stroke-width="5"/><text x="180" y="45" fill="#202522" font-size="13">hipófisis</text><text x="180" y="88" fill="#202522" font-size="13">hormonas</text><text x="180" y="130" fill="#202522" font-size="13">órganos</text></svg>`;
  const genetic = `<svg ${common}><rect width="320" height="200" rx="8" fill="#eef1ee"/><path d="M80 160c10-60 45-90 80-102 35 12 70 42 80 102" fill="none" stroke="#315c52" stroke-width="5"/><path d="M160 58v105M125 98h70M112 132h96" stroke="#8a4b39" stroke-width="4"/><rect x="52" y="36" width="75" height="34" rx="6" fill="#fffdf8" stroke="#315c52"/><rect x="193" y="36" width="75" height="34" rx="6" fill="#fffdf8" stroke="#315c52"/><text x="64" y="58" fill="#202522" font-size="13">ADN</text><text x="205" y="58" fill="#202522" font-size="13">cultivo</text></svg>`;
  const debate = `<svg ${common}><rect width="320" height="200" rx="8" fill="#eef1ee"/><path d="M60 60h90v55H92l-32 28zM170 78h90v55h-31l-29 26v-26h-30z" fill="#fffdf8" stroke="#315c52" stroke-width="4"/><path d="M82 82h46M82 102h36M192 100h46M192 120h32" stroke="#8a4b39" stroke-width="4"/><text x="58" y="178" fill="#202522" font-size="13">tesis · evidencia · ética · conclusión</text></svg>`;
  return `<div class="science-figure">${({ dna, mitosis, meiosis, asexual, organisms, puberty, genetic, debate }[type] || dna)}</div>`;
}

document.addEventListener("DOMContentLoaded", init);
