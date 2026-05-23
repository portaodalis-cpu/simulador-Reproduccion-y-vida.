const STORAGE_KEY = "reproduccionVidaApp.v1";

if (!Object.values) Object.values = obj => Object.keys(obj).map(key => obj[key]);
if (!Object.entries) Object.entries = obj => Object.keys(obj).map(key => [key, obj[key]]);
if (!Array.prototype.flat) {
  Array.prototype.flat = function () {
    return [].concat.apply([], this);
  };
}
if (!String.prototype.padStart) {
  String.prototype.padStart = function (length, fill) {
    let value = String(this);
    fill = fill || " ";
    while (value.length < length) value = fill + value;
    return value;
  };
}

const activities = [
  {
    id: "a1",
    title: "Seres vivos y reproducción",
    short: "Inicio",
    points: 7,
    week: "Semana 1",
    competencies: ["Ambiental y de la salud", "Resolución de problemas"],
    indicators: "Aplica conceptos básicos y formula argumentos basados en evidencia.",
    intro: "Analiza la rosa de Bayahíbe y la cigua palmera para explicar por qué la reproducción permite continuidad de la vida.",
    tasks: [
      { id: "a1q1", type: "multi", title: "Función clave", points: 2, prompt: "¿Qué proceso permite que los seres vivos continúen existiendo a través del tiempo?", options: ["Respiración", "Reproducción", "Digestión", "Locomoción"], answer: "Reproducción" },
      { id: "a1q2", type: "classify", title: "Evidencias del caso", points: 2, prompt: "Toca una tarjeta y luego su zona correcta.", tokens: ["Flor dura un día", "Arbusto vive 30 a 50 años", "Ave endémica vive 7 a 10 años", "Descendencia mantiene la especie"], zones: { "Duración de vida": ["Flor dura un día", "Arbusto vive 30 a 50 años", "Ave endémica vive 7 a 10 años"], "Continuidad de la especie": ["Descendencia mantiene la especie"] } },
      { id: "a1q3", type: "text", title: "Hipótesis breve", points: 2, prompt: "Escribe una hipótesis: ¿todos los seres vivos crecen y se reproducen igual? Justifica con una evidencia.", minWords: 14, keywords: ["no", "diferente", "especie", "reproducción", "crecimiento"] },
      { id: "a1q4", type: "multi", title: "Registro científico", points: 1, prompt: "Una respuesta científica debe incluir:", options: ["Solo una opinión personal", "Una idea con evidencia o ejemplo", "Una frase copiada sin explicar", "Un dibujo sin descripción"], answer: "Una idea con evidencia o ejemplo" }
    ]
  },
  {
    id: "a2",
    title: "Replicación del ADN",
    short: "ADN",
    points: 10,
    week: "Semana 1",
    competencies: ["Resolución de problemas", "Científica y tecnológica", "Comunicativa"],
    indicators: "Usa modelos, evidencias y lenguaje científico para explicar la copia del ADN.",
    intro: "El modelo físico se transforma en un laboratorio táctil de complementariedad, secuencia y revisión de errores.",
    tasks: [
      { id: "a2q1", type: "classify", title: "Bases complementarias", points: 3, prompt: "Ubica cada base nitrogenada con su pareja.", tokens: ["Adenina", "Timina", "Citosina", "Guanina"], zones: { "A se une con": ["Timina"], "T se une con": ["Adenina"], "C se une con": ["Guanina"], "G se une con": ["Citosina"] } },
      { id: "a2q2", type: "sequence", title: "Ordena la replicación", points: 2, prompt: "Ordena los pasos principales antes de que la célula se divida.", items: ["La doble hélice se abre", "Cada hebra sirve como molde", "Se agregan bases complementarias", "Se forman dos moléculas de ADN iguales"], answer: ["La doble hélice se abre", "Cada hebra sirve como molde", "Se agregan bases complementarias", "Se forman dos moléculas de ADN iguales"] },
      { id: "a2q3", type: "multi", title: "Copia exacta", points: 2, prompt: "¿Qué garantiza la replicación del ADN en las células hijas?", options: ["Que reciban información genética equivalente", "Que no necesiten núcleo", "Que cambien de especie", "Que desaparezcan los cromosomas"], answer: "Que reciban información genética equivalente" },
      { id: "a2q4", type: "text", title: "Revisión del modelo", points: 2, prompt: "Describe un error posible en un modelo de ADN y cómo lo corregirías.", minWords: 16, keywords: ["base", "complementaria", "hebra", "corregir", "ADN"] },
      { id: "a2q5", type: "multi", title: "Lenguaje científico", points: 1, prompt: "Elige el término que corresponde a la regla A-T y C-G.", options: ["Complementariedad", "Metamorfosis", "Fecundación", "Gemación"], answer: "Complementariedad" }
    ]
  },
  {
    id: "a3",
    title: "Reproducción asexual",
    short: "Asexual",
    points: 8,
    week: "Semana 1-2",
    competencies: ["Pensamiento lógico, creativo y crítico", "Científica y tecnológica"],
    indicators: "Interpreta procesos y construye una definición científica breve.",
    intro: "El análisis de imágenes se convierte en tarjetas visuales y clasificación de procesos.",
    tasks: [
      { id: "a3q1", type: "classify", title: "Modos asexuales", points: 2, prompt: "Clasifica ejemplos de reproducción asexual.", tokens: ["Bacteria que se divide", "Hidra con brote", "Estrella de mar fragmentada", "Hongo con esporas", "Fresa por estolones"], zones: { "Fisión binaria": ["Bacteria que se divide"], "Gemación": ["Hidra con brote"], "Fragmentación": ["Estrella de mar fragmentada"], "Esporas": ["Hongo con esporas"], "Propagación vegetativa": ["Fresa por estolones"] } },
      { id: "a3q2", type: "multi", title: "Semejanza", points: 2, prompt: "En la reproducción asexual, los nuevos individuos suelen ser:", options: ["Muy parecidos genéticamente al progenitor", "Siempre de dos progenitores", "Gametos sin desarrollo", "Organismos sin células"], answer: "Muy parecidos genéticamente al progenitor" },
      { id: "a3q3", type: "text", title: "Definición científica", points: 2, prompt: "Define reproducción asexual en una o dos oraciones.", minWords: 14, keywords: ["progenitor", "gametos", "descendientes", "genéticamente", "división"] },
      { id: "a3q4", type: "multi", title: "Diferencia entre modos", points: 2, prompt: "¿Qué diferencia a esporas, fragmentación y estolones?", options: ["La estructura o mecanismo que origina al nuevo individuo", "El idioma del nombre", "Que solo ocurren en animales", "Que requieren siempre fecundación"], answer: "La estructura o mecanismo que origina al nuevo individuo" }
    ]
  },
  {
    id: "a4",
    title: "Mitosis y observación celular",
    short: "Mitosis",
    points: 10,
    week: "Semana 2",
    competencies: ["Resolución de problemas", "Científica y tecnológica", "Ética y ciudadana"],
    indicators: "Identifica fases, habilidades científicas e interpreta observaciones.",
    intro: "La práctica de microscopio se transforma en simulación de células, identificación de fases y revisión de hipótesis.",
    tasks: [
      { id: "a4q1", type: "classify", title: "Habilidades de Flemming", points: 2, prompt: "Clasifica habilidades e instrumentos que hicieron posible estudiar la mitosis.", tokens: ["Observación detallada", "Microscopio", "Registro de dibujos", "Colorantes", "Argumentar con evidencia"], zones: { "Habilidad científica": ["Observación detallada", "Registro de dibujos", "Argumentar con evidencia"], "Instrumento o técnica": ["Microscopio", "Colorantes"] } },
      { id: "a4q2", type: "sequence", title: "Fases de mitosis", points: 2, prompt: "Ordena las fases principales.", items: ["Profase", "Metafase", "Anafase", "Telofase"], answer: ["Profase", "Metafase", "Anafase", "Telofase"] },
      { id: "a4q3", type: "hotspot", title: "Microscopio simulado", points: 3, prompt: "Identifica cada célula por su fase.", cells: ["Profase", "Metafase", "Anafase", "Telofase"] },
      { id: "a4q4", type: "multi", title: "Colorante", points: 1, prompt: "¿Por qué se usa azul de metileno en una preparación celular?", options: ["Para resaltar estructuras celulares", "Para alimentar la célula", "Para borrar cromosomas", "Para producir gametos"], answer: "Para resaltar estructuras celulares" },
      { id: "a4q5", type: "text", title: "Ajuste de idea inicial", points: 2, prompt: "Revisa tu idea inicial: ¿cómo se relaciona la mitosis con crecimiento o reparación?", minWords: 16, keywords: ["células", "hijas", "crecimiento", "reparación", "mitosis"] }
    ]
  },
  {
    id: "a5",
    title: "Meiosis y variabilidad",
    short: "Meiosis",
    points: 10,
    week: "Semana 2-3",
    competencies: ["Ética y ciudadana", "Pensamiento lógico, creativo y crítico", "Desarrollo personal"],
    indicators: "Compara meiosis con mitosis y modeliza fases con criterio científico.",
    intro: "La maqueta grupal se reemplaza por un modelo táctil de fases, reducción cromosómica y gametogénesis.",
    tasks: [
      { id: "a5q1", type: "classify", title: "Mitosis vs. meiosis", points: 2, prompt: "Ubica cada característica.", tokens: ["Forma gametos", "Conserva número cromosómico", "Reduce cromosomas a la mitad", "Dos divisiones", "Crecimiento de tejidos"], zones: { "Mitosis": ["Conserva número cromosómico", "Crecimiento de tejidos"], "Meiosis": ["Forma gametos", "Reduce cromosomas a la mitad", "Dos divisiones"] } },
      { id: "a5q2", type: "sequence", title: "Dos divisiones meióticas", points: 3, prompt: "Ordena el proceso general.", items: ["Meiosis I separa cromosomas homólogos", "Se forman dos células con la mitad de cromosomas", "Meiosis II separa cromátidas", "Se obtienen cuatro gametos haploides"], answer: ["Meiosis I separa cromosomas homólogos", "Se forman dos células con la mitad de cromosomas", "Meiosis II separa cromátidas", "Se obtienen cuatro gametos haploides"] },
      { id: "a5q3", type: "multi", title: "División reductora", points: 2, prompt: "La meiosis es reductora porque:", options: ["disminuye a la mitad el número de cromosomas", "elimina todas las células", "produce células idénticas para crecimiento", "no usa cromosomas"], answer: "disminuye a la mitad el número de cromosomas" },
      { id: "a5q4", type: "multi", title: "Gametogénesis", points: 1, prompt: "Una diferencia entre ovogénesis y espermatogénesis es:", options: ["la cantidad y tamaño de gametos funcionales producidos", "que una no ocurre en seres vivos", "que ambas son fotosíntesis", "que ninguna usa meiosis"], answer: "la cantidad y tamaño de gametos funcionales producidos" },
      { id: "a5q5", type: "text", title: "Limitación del modelo", points: 2, prompt: "Explica una limitación de representar la meiosis con un modelo digital o físico.", minWords: 14, keywords: ["modelo", "fase", "cromosomas", "limitación", "proceso"] }
    ]
  },
  {
    id: "a6",
    title: "Pubertad y sistema neuroendocrino",
    short: "Hormonas",
    points: 10,
    week: "Semana 3",
    competencies: ["Científica y tecnológica", "Resolución de problemas", "Pensamiento lógico"],
    indicators: "Relaciona cambios corporales, hormonas y estructuras reproductoras.",
    intro: "La representación grupal se convierte en mapa interactivo de señales hormonales y funciones.",
    tasks: [
      { id: "a6q1", type: "multi", title: "Edad y cambios", points: 2, prompt: "Los testimonios muestran cambios alrededor de:", options: ["la pubertad", "la vejez", "la gestación", "la germinación"], answer: "la pubertad" },
      { id: "a6q2", type: "sequence", title: "Ruta neuroendocrina", points: 2, prompt: "Ordena la ruta de señales que inicia cambios reproductivos.", items: ["Cerebro detecta señales de maduración", "Hipotálamo e hipófisis liberan hormonas", "Gónadas responden", "Aparecen cambios corporales y gametos"], answer: ["Cerebro detecta señales de maduración", "Hipotálamo e hipófisis liberan hormonas", "Gónadas responden", "Aparecen cambios corporales y gametos"] },
      { id: "a6q3", type: "classify", title: "Estructuras y funciones", points: 2, prompt: "Relaciona estructura con función.", tokens: ["Ovarios", "Testículos", "Hipófisis", "Útero"], zones: { "Producen óvulos y hormonas": ["Ovarios"], "Producen espermatozoides y testosterona": ["Testículos"], "Coordina señales hormonales": ["Hipófisis"], "Lugar de desarrollo embrionario": ["Útero"] } },
      { id: "a6q4", type: "multi", title: "Relación entre funciones", points: 2, prompt: "¿Por qué el sistema neuroendocrino se relaciona con la reproducción?", options: ["Porque regula hormonas que activan cambios reproductivos", "Porque reemplaza al ADN", "Porque detiene todo crecimiento", "Porque solo funciona en plantas"], answer: "Porque regula hormonas que activan cambios reproductivos" },
      { id: "a6q5", type: "text", title: "Metacognición breve", points: 2, prompt: "¿Qué aprendiste al modelizar primero y revisar después con información científica?", minWords: 14, keywords: ["modelo", "revisar", "hormonas", "función", "aprendí"] }
    ]
  },
  {
    id: "a7",
    title: "Ingeniería genética",
    short: "Edición",
    points: 7,
    week: "Semana 3-4",
    competencies: ["Comunicativa", "Pensamiento lógico y crítico", "Científica y tecnológica"],
    indicators: "Interpreta una noticia, identifica reproducción y reconoce ventajas y riesgos.",
    intro: "Analiza una noticia sobre edición génica en papa y conecta el caso con ADN, mitosis, meiosis y evidencia.",
    tasks: [
      { id: "a7q1", type: "multi", title: "Hecho informado", points: 2, prompt: "La noticia informa principalmente sobre:", options: ["intercambio científico para editar genes de papa", "creación de una nueva especie animal", "observación de cebolla al microscopio", "germinación de hongos"], answer: "intercambio científico para editar genes de papa" },
      { id: "a7q2", type: "multi", title: "Tipo de reproducción", points: 2, prompt: "La propagación de cultivos modificados suele relacionarse con reproducción:", options: ["asexual en plantas y multiplicación celular por mitosis", "solo sexual humana", "sin ADN", "por meiosis en bacterias"], answer: "asexual en plantas y multiplicación celular por mitosis" },
      { id: "a7q3", type: "classify", title: "Ventajas y riesgos", points: 2, prompt: "Clasifica efectos posibles de la edición génica.", tokens: ["Resistencia a plagas", "Mayor rendimiento", "Dependencia tecnológica", "Riesgo ambiental si no se regula"], zones: { "Ventaja": ["Resistencia a plagas", "Mayor rendimiento"], "Riesgo o cuidado": ["Dependencia tecnológica", "Riesgo ambiental si no se regula"] } },
      { id: "a7q4", type: "text", title: "Glosario", points: 1, prompt: "Escribe dos términos científicos de la noticia y una explicación breve de uno.", minWords: 8, keywords: ["ADN", "gen", "edición", "cultivo", "resistencia"] }
    ]
  },
  {
    id: "a8",
    title: "Postura ética y reflexión",
    short: "Debate",
    points: 8,
    week: "Semana 4",
    competencies: ["Comunicativa", "Ética y ciudadana", "Científica y tecnológica"],
    indicators: "Argumenta con evidencia, postura ética y lenguaje científico.",
    intro: "El debate colectivo se transforma en preparación individual: postura, argumentos, contraargumentos y reflexión breve.",
    tasks: [
      { id: "a8q1", type: "multi", title: "Postura inicial", points: 1, prompt: "Selecciona la postura que defenderías con evidencia.", options: ["Permitir con regulación y evaluación", "Permitir sin ningún control", "Prohibir sin analizar casos", "No tengo postura"], answer: "Permitir con regulación y evaluación" },
      { id: "a8q2", type: "text", title: "Tres argumentos", points: 2, prompt: "Escribe tres argumentos breves con datos, ejemplos o conceptos de la secuencia.", minWords: 24, keywords: ["ADN", "mitosis", "meiosis", "riesgo", "beneficio", "evidencia"] },
      { id: "a8q3", type: "classify", title: "Conceptos que sostienen la postura", points: 2, prompt: "Clasifica conceptos por su función en el argumento.", tokens: ["ADN", "Mitosis", "Meiosis", "Evidencia", "Riesgo social"], zones: { "Base biológica": ["ADN", "Mitosis", "Meiosis"], "Base argumentativa y ética": ["Evidencia", "Riesgo social"] } },
      { id: "a8q4", type: "text", title: "Reflexión personal", points: 2, prompt: "Redacta una reflexión breve: postura, evidencia científica e implicación ética/social.", minWords: 24, keywords: ["postura", "evidencia", "ética", "social", "cultivos"] },
      { id: "a8q5", type: "multi", title: "Conclusión clara", points: 1, prompt: "Una buena conclusión científica debe:", options: ["cerrar la postura y mencionar evidencia", "contradecir todo sin explicar", "usar insultos", "evitar conceptos"], answer: "cerrar la postura y mencionar evidencia" }
    ]
  }
];

let state = loadState();
let currentIndex = state.currentIndex || 0;
let selectedToken = null;

function defaultState() {
  return { student: { name: "", section: "" }, answers: {}, scores: {}, completed: {}, currentIndex: 0 };
}

function loadState() {
  try {
    return Object.assign(defaultState(), JSON.parse(localStorage.getItem(STORAGE_KEY)) || {});
  } catch {
    return defaultState();
  }
}

function saveState() {
  state.currentIndex = currentIndex;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function byId(id) { return document.getElementById(id); }
function words(text) { return String(text || "").trim().split(/\s+/).filter(Boolean); }
function setAnswer(taskId, value) { state.answers[taskId] = value; saveState(); }
function getAnswer(taskId, fallback) {
  return state.answers[taskId] === undefined ? fallback : state.answers[taskId];
}

function render() {
  byId("studentName").value = state.student.name || "";
  byId("studentSection").value = state.student.section || "";
  renderNav();
  renderActivity();
  renderProgress();
}

function renderNav() {
  const nav = byId("activityNav");
  const tabs = byId("mobileTabs");
  nav.innerHTML = "";
  tabs.innerHTML = "";
  activities.forEach((activity, index) => {
    const done = state.completed[activity.id];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `nav-item ${index === currentIndex ? "active" : ""} ${done ? "done" : ""}`;
    button.innerHTML = `<span class="num">${done ? "✓" : index + 1}</span><span><span class="nav-title">${activity.title}</span><span class="nav-meta">${activity.week} · ${activity.points} pts</span></span><span>${done ? "OK" : ""}</span>`;
    button.onclick = () => { currentIndex = index; saveState(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); };
    nav.appendChild(button);

    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = index === currentIndex ? "active" : "";
    tab.textContent = done ? `✓${index + 1}` : `${index + 1}`;
    tab.onclick = button.onclick;
    tabs.appendChild(tab);
  });
}

function renderProgress() {
  const completed = activities.filter(a => state.completed[a.id]).length;
  const percent = Math.round((completed / activities.length) * 100);
  byId("progressRing").style.setProperty("--value", `${percent * 3.6}deg`);
  byId("progressRing").querySelector("span").textContent = `${percent}%`;
  byId("progressText").textContent = `${completed} de ${activities.length} actividades completas`;
}

function renderActivity() {
  selectedToken = null;
  const activity = activities[currentIndex];
  const view = byId("activityView");
  byId("finalView").classList.add("hidden");
  view.classList.remove("hidden");
  view.innerHTML = `
    <section class="activity-card">
      <header class="activity-head">
        <div>
          <p class="kicker">${activity.week}</p>
          <h2>${activity.title}</h2>
          <p>${activity.intro}</p>
        </div>
        <div class="meta-row">
          <span class="badge">${activity.points} puntos curriculares</span>
          <span class="badge">Autoevaluable</span>
        </div>
        <div class="competencies">${activity.competencies.map(c => `<span class="badge">${c}</span>`).join("")}</div>
      </header>
      <div class="activity-body">
        <div class="feedback warn">${activity.indicators}</div>
        ${activity.tasks.map(renderTask).join("")}
      </div>
      <footer class="activity-actions">
        <button class="primary-btn" type="button" onclick="gradeActivity()">Validar actividad</button>
        <button class="secondary-btn" type="button" onclick="nextActivity()">Siguiente</button>
        <button class="secondary-btn" type="button" onclick="showFinal()">Pantalla final</button>
      </footer>
    </section>`;
}

function renderTask(task) {
  const score = state.scores[task.id];
  const feedback = score !== undefined ? `<div class="feedback ${score === task.points ? "ok" : "warn"}">${score === task.points ? "Logrado" : "En revisión: ajusta tu respuesta y vuelve a validar."}</div>` : "";
  return `<section class="task" data-task="${task.id}">
    <div class="task-head"><div><h3>${task.title}</h3><p>${task.prompt}</p></div><span class="points">${task.points} pts</span></div>
    ${renderInput(task)}
    ${feedback}
  </section>`;
}

function renderInput(task) {
  if (task.type === "multi") {
    const selected = getAnswer(task.id, "");
    return `<div class="choice-grid">${task.options.map(opt => `<button type="button" class="choice ${selected === opt ? "selected" : ""}" onclick="choose('${task.id}', ${JSON.stringify(opt).replace(/"/g, "&quot;")})">${opt}</button>`).join("")}</div>`;
  }
  if (task.type === "text") {
    const value = getAnswer(task.id, "");
    return `<textarea oninput="setAnswer('${task.id}', this.value)" placeholder="Respuesta breve guiada...">${escapeHtml(value)}</textarea>`;
  }
  if (task.type === "sequence") {
    const order = getAnswer(task.id, shuffle(task.items, task.id));
    return `<div class="sequence-list">${order.map((item, i) => `<div class="seq-item"><strong>${escapeHtml(item)}</strong><button type="button" onclick="moveSeq('${task.id}', ${i}, -1)" aria-label="Subir">↑</button><button type="button" onclick="moveSeq('${task.id}', ${i}, 1)" aria-label="Bajar">↓</button></div>`).join("")}</div>`;
  }
  if (task.type === "classify") {
    const placed = getAnswer(task.id, {});
    const used = new Set(Object.values(placed).flat());
    const available = task.tokens.filter(t => !used.has(t));
    return `<div class="token-grid">${available.map(t => `<button type="button" class="token" onclick="selectToken('${task.id}', ${JSON.stringify(t).replace(/"/g, "&quot;")})">${t}</button>`).join("")}</div>
    <div class="drop-grid">${Object.keys(task.zones).map(zone => `<button type="button" class="drop-zone" onclick="placeToken('${task.id}', ${JSON.stringify(zone).replace(/"/g, "&quot;")})"><small>${zone}</small>${(placed[zone] || []).map(t => `<span class="placed">${t}<button type="button" onclick="event.stopPropagation(); removeToken('${task.id}', ${JSON.stringify(zone).replace(/"/g, "&quot;")}, ${JSON.stringify(t).replace(/"/g, "&quot;")})">×</button></span>`).join("")}</button>`).join("")}</div>`;
  }
  if (task.type === "hotspot") {
    const values = getAnswer(task.id, {});
    return `<div class="hotspot-grid">${task.cells.map(phase => `<label class="cell-card"><span class="cell-drawing phase-${phase.toLowerCase()}"></span><select onchange="setHotspot('${task.id}', '${phase}', this.value)"><option value="">Identificar...</option>${task.cells.map(p => `<option ${values[phase] === p ? "selected" : ""}>${p}</option>`).join("")}</select></label>`).join("")}</div>`;
  }
  return "";
}

function escapeHtml(text) {
  return String(text || "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function shuffle(items, seed) {
  const copy = [...items];
  let x = [...seed].reduce((a, c) => a + c.charCodeAt(0), 0);
  for (let i = copy.length - 1; i > 0; i--) {
    x = (x * 9301 + 49297) % 233280;
    const j = Math.floor((x / 233280) * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function choose(taskId, option) {
  setAnswer(taskId, option);
  renderActivity();
}

function moveSeq(taskId, index, dir) {
  const task = findTask(taskId);
  const order = [...getAnswer(taskId, shuffle(task.items, taskId))];
  const next = index + dir;
  if (next < 0 || next >= order.length) return;
  [order[index], order[next]] = [order[next], order[index]];
  setAnswer(taskId, order);
  renderActivity();
}

function selectToken(taskId, token) {
  selectedToken = { taskId, token };
  document.querySelectorAll(".token").forEach(btn => {
    btn.classList.toggle("selected", btn.textContent === token);
  });
}

function placeToken(taskId, zone) {
  if (!selectedToken || selectedToken.taskId !== taskId) return;
  const placed = structuredCloneSafe(getAnswer(taskId, {}));
  Object.keys(placed).forEach(key => placed[key] = placed[key].filter(t => t !== selectedToken.token));
  placed[zone] = placed[zone] || [];
  placed[zone].push(selectedToken.token);
  selectedToken = null;
  setAnswer(taskId, placed);
  renderActivity();
}

function removeToken(taskId, zone, token) {
  const placed = structuredCloneSafe(getAnswer(taskId, {}));
  placed[zone] = (placed[zone] || []).filter(t => t !== token);
  setAnswer(taskId, placed);
  renderActivity();
}

function setHotspot(taskId, phase, value) {
  const answer = structuredCloneSafe(getAnswer(taskId, {}));
  answer[phase] = value;
  setAnswer(taskId, answer);
}

function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value || {}));
}

function findTask(taskId) {
  return activities.flatMap(a => a.tasks).find(t => t.id === taskId);
}

function gradeActivity() {
  const activity = activities[currentIndex];
  let earned = 0;
  let missing = [];
  activity.tasks.forEach(task => {
    const answer = getAnswer(task.id, null);
    if (!hasAnswer(task, answer)) missing.push(task.title);
    const score = scoreTask(task, answer);
    state.scores[task.id] = score;
    earned += score;
  });
  state.completed[activity.id] = missing.length === 0;
  saveState();
  render();
  const body = document.querySelector(".activity-body");
  const msg = document.createElement("div");
  msg.className = `feedback ${missing.length ? "warn" : "ok"}`;
  msg.textContent = missing.length ? `Falta completar: ${missing.join(", ")}.` : `Actividad completa. Puntaje interno registrado y convertido a nota codificada al final.`;
  body.prepend(msg);
}

function hasAnswer(task, answer) {
  if (task.type === "text") return words(answer).length >= Math.max(4, Math.floor(task.minWords / 2));
  if (task.type === "classify") return Object.values(answer || {}).flat().length === task.tokens.length;
  if (task.type === "sequence") return Array.isArray(answer) && answer.length === task.items.length;
  if (task.type === "hotspot") return Object.keys(answer || {}).length === task.cells.length && Object.values(answer).every(Boolean);
  return Boolean(answer);
}

function scoreTask(task, answer) {
  if (!hasAnswer(task, answer)) return 0;
  if (task.type === "multi") return answer === task.answer ? task.points : 0;
  if (task.type === "sequence") {
    const correct = task.answer.filter((item, i) => answer[i] === item).length;
    return Math.round((correct / task.answer.length) * task.points);
  }
  if (task.type === "classify") {
    let total = task.tokens.length, correct = 0;
    Object.entries(task.zones).forEach(([zone, tokens]) => {
      tokens.forEach(token => { if ((answer[zone] || []).includes(token)) correct++; });
    });
    return Math.round((correct / total) * task.points);
  }
  if (task.type === "hotspot") {
    const correct = task.cells.filter(phase => answer[phase] === phase).length;
    return Math.round((correct / task.cells.length) * task.points);
  }
  if (task.type === "text") {
    const lower = String(answer || "").toLowerCase();
    const enough = words(answer).length >= task.minWords;
    const hits = (task.keywords || []).filter(k => lower.includes(k.toLowerCase())).length;
    const ratio = Math.min(1, (hits / Math.max(2, Math.ceil(task.keywords.length / 2))) * 0.65 + (enough ? 0.35 : 0));
    return Math.round(ratio * task.points);
  }
  return 0;
}

function nextActivity() {
  if (currentIndex < activities.length - 1) {
    currentIndex++;
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    showFinal();
  }
}

function totals() {
  const earned = activities.reduce((sum, activity) => sum + activity.tasks.reduce((s, t) => s + (state.scores[t.id] || 0), 0), 0);
  const completed = activities.filter(a => state.completed[a.id]).length;
  return { earned, completed, percent: Math.round((completed / activities.length) * 100), code: Math.max(1, Math.min(70, Math.round(earned))) };
}

function showFinal() {
  const incomplete = activities.filter(a => !state.completed[a.id]);
  if (incomplete.length) {
    alert(`Aún no puedes finalizar. Faltan actividades obligatorias: ${incomplete.map(a => a.short).join(", ")}.`);
    return;
  }
  const final = byId("finalView");
  const t = totals();
  byId("activityView").classList.add("hidden");
  final.classList.remove("hidden");
  final.innerHTML = `
    <section class="final-card" id="certificate">
      <p class="kicker">Pantalla final exportable</p>
      <h2>Resumen de aprendizaje</h2>
      <p><strong>Estudiante:</strong> ${escapeHtml(state.student.name || "Sin nombre")} · <strong>Sección:</strong> ${escapeHtml(state.student.section || "Sin sección")}</p>
      <div class="summary-grid">
        <div class="summary-tile"><span>Actividades</span><strong>${t.completed}/8</strong></div>
        <div class="summary-tile"><span>Progreso</span><strong>${t.percent}%</strong></div>
        <div class="summary-tile"><span>Nota codificada</span><strong>C-${String(t.code).padStart(2, "0")}</strong></div>
        <div class="summary-tile"><span>Estado</span><strong>Completo</strong></div>
      </div>
      <h3>Resumen visual</h3>
      <div class="mini-grid">${activities.map(a => `<div class="summary-tile"><strong>${a.short}</strong><span>${state.completed[a.id] ? "Completada" : "Pendiente"}</span></div>`).join("")}</div>
    </section>
    <section class="final-card oral-box">
      <h3>Actividad oral final</h3>
      <p>Graba externamente un audio de 1 a 2 minutos explicando el tipo de reproducción animal o asexual que consideres más interesante. Incluye cómo ocurre el proceso, sus etapas, cómo se desarrollan los descendientes y qué resultado produce.</p>
      <p>La plataforma no graba audios. Envía tu audio posteriormente al profesor por WhatsApp u otro medio indicado.</p>
    </section>
    <section class="final-card">
      <div class="activity-actions">
        <button class="primary-btn" type="button" onclick="downloadPdf()">Descargar PDF</button>
        <button class="secondary-btn" type="button" onclick="window.print()">Imprimir</button>
        <button class="secondary-btn" type="button" onclick="currentIndex=0; render()">Volver a revisar</button>
      </div>
    </section>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function downloadPdf() {
  const target = byId("certificate");
  if (!window.html2canvas || !window.jspdf) {
    window.print();
    return;
  }
  const canvas = await html2canvas(target, { scale: Math.min(2, window.devicePixelRatio || 1), backgroundColor: "#ffffff" });
  const img = canvas.toDataURL("image/png");
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height) * 0.94;
  const w = canvas.width * ratio;
  const h = canvas.height * ratio;
  pdf.addImage(img, "PNG", (pageWidth - w) / 2, 10, w, h);
  pdf.save("pantalla-final-reproduccion-y-vida.pdf");
}

byId("studentName").addEventListener("input", e => { state.student.name = e.target.value; saveState(); });
byId("studentSection").addEventListener("input", e => { state.student.section = e.target.value; saveState(); });
byId("resetBtn").addEventListener("click", () => {
  if (confirm("¿Reiniciar progreso guardado en este teléfono?")) {
    localStorage.removeItem(STORAGE_KEY);
    state = defaultState();
    currentIndex = 0;
    render();
  }
});

window.choose = choose;
window.setAnswer = setAnswer;
window.moveSeq = moveSeq;
window.selectToken = selectToken;
window.placeToken = placeToken;
window.removeToken = removeToken;
window.setHotspot = setHotspot;
window.gradeActivity = gradeActivity;
window.nextActivity = nextActivity;
window.showFinal = showFinal;
window.downloadPdf = downloadPdf;
window.render = render;

render();
