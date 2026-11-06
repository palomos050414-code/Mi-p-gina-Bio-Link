"use strict";

/* =========================================================
   1. DATOS EDITABLES (cambia solo esta parte)
   ========================================================= */
const perfil = {
  foto: "",                       // Ej: "foto.jpg". Vacío = círculo con iniciales (más privado).
  iniciales: "YM",
  telefono: "573148340832",       // Formato internacional sin "+"
  telefonoVisible: "+57 314 834 0832"
};

// Contenido tomado de tu CV. Lo que está en null se muestra como "Pendiente".
const cv = {
  perfil: "Desarrollador junior en TIC, con formación en desarrollo web y móvil. Construyo interfaces responsivas, consumo APIs y aplico buenas prácticas de código y control de versiones con Git. Busco una oportunidad como Desarrollador Junior o Desarrollador Móvil Junior.",
  habilidades: {
    "Lenguajes": ["HTML5", "CSS3", "JavaScript (ES6+)", "Python", "Java/Kotlin (Android)"],
    "Frameworks y librerías": ["ReactJS", "Android SDK", "Bootstrap"],
    "Herramientas": ["Git", "GitHub", "Visual Studio Code", "Android Studio", "Postman"],
    "Conceptos": ["POO", "APIs REST", "Diseño responsivo", "SQL", "Scrum"]
  },
  proyectos: [
    { nombre: "Agente de IA legal", texto: "Agente de inteligencia artificial que responde consultas jurídicas con base en la normativa colombiana." },
    { nombre: "Asistente de IA para panadería y repostería", texto: "Asistente con IA para negocios de panadería y repostería, con interacción en lenguaje natural." },
    { nombre: "Videojuego", texto: "Videojuego que aplica lógica de programación, manejo de eventos y control de niveles o puntaje." }
  ],
  experiencia: null,   // Ej: [{ cargo: "Practicante", lugar: "Empresa", periodo: "2025", logros: ["..."] }]
  educacion: null,     // Ej: [{ titulo: "Tecnólogo en Desarrollo de Software", lugar: "Institución", periodo: "2024 - en curso" }]
  complementaria: null,// Ej: [{ curso: "JavaScript", lugar: "Plataforma", anio: "2025" }]
  idiomas: ["Español: nativo", "Inglés: por completar"]
};

/* Usuarios: reemplaza TU_USUARIO por el tuyo. */
const urlGithub   = "https://github.com/TU_USUARIO";
const urlLinkedin = "https://www.linkedin.com/in/TU_USUARIO";
const urlWhatsapp = `https://wa.me/${perfil.telefono}?text=${encodeURIComponent("Hola Yeison, vi tu portafolio y quiero más información.")}`;

/* LISTA ÚNICA: cada elemento tiene nombre, url y clics.
   tipo "seccion" = botón píldora que abre un panel con tu CV.
   tipo "red"     = icono que abre el enlace directamente. */
const enlaces = [
  { id: "sobre",       tipo: "seccion", nombre: "Sobre Yeison A. Murillo", detalle: "Información y contacto",   icono: "user",  url: urlWhatsapp,    textoUrl: "Escribir por WhatsApp", clics: 0 },
  { id: "portafolio",  tipo: "seccion", nombre: "Portafolio de servicios", detalle: "Catálogo completo",        icono: "brief", url: urlGithub,      textoUrl: "Ver proyectos en GitHub", clics: 0 },
  { id: "formacion",   tipo: "seccion", nombre: "Formación y estudios",    detalle: "Logros y red de atención", icono: "cap",   url: urlLinkedin,    textoUrl: "Ver perfil en LinkedIn", clics: 0 },
  { id: "trayectoria", tipo: "seccion", nombre: "Trayectoria laboral",     detalle: "Asesoría personalizada",   icono: "work",  url: urlLinkedin,    textoUrl: "Ver experiencia en LinkedIn", clics: 0 },
  { id: "logros",      tipo: "seccion", nombre: "Logros adicionales",      detalle: "Habilidades e idiomas",    icono: "star",  url: urlGithub,      textoUrl: "Ver más en GitHub", clics: 0 },
  { id: "whatsapp",    tipo: "red", nombre: "WhatsApp", url: urlWhatsapp,  clics: 0 },
  { id: "github",      tipo: "red", nombre: "GitHub",   url: urlGithub,    clics: 0 },
  { id: "linkedin",    tipo: "red", nombre: "LinkedIn", url: urlLinkedin,  clics: 0 }
];

/* =========================================================
   2. ICONOS (SVG en línea, sin librerías externas)
   ========================================================= */
const iconos = {
  user:  '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
  brief: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></svg>',
  cap:   '<svg viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/></svg>',
  work:  '<svg viewBox="0 0 24 24"><path d="M4 20V8l8-5 8 5v12z"/><path d="M9 20v-6h6v6"/></svg>',
  star:  '<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a14 14 0 0 1-5.6-4.9c-.4-.6-1.4-1.9-1.4-3.6 0-1.7.9-2.5 1.2-2.8.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.5z"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M4.2 8.7h3.6V20H4.2zM6 3a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 6 3zm4.1 5.7h3.4v1.5c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.6V20h-3.6v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20h-3.6z"/></svg>'
};

/* =========================================================
   3. LÓGICA
   ========================================================= */
let totalClics = 0;   // ACUMULADOR: empieza en 0 y suma 1 por cada clic

/* VALIDACIÓN: solo se aceptan URL que empiecen por https:// */
function esValida(url) {
  return typeof url === "string" && url.startsWith("https://");
}

/* Un enlace con TU_USUARIO aún no se ha completado: no se muestra para no abrir páginas rotas. */
function esUsable(url) {
  return esValida(url) && !url.includes("TU_USUARIO");
}

function registrarClic(item) {
  item.clics += 1;
  totalClics += 1;
  actualizarReporte();
}

function actualizarReporte() {
  let mejor = null;
  for (const e of enlaces) {
    if (e.clics > 0 && (mejor === null || e.clics > mejor.clics)) mejor = e;
  }
  document.getElementById("totalClics").textContent = totalClics;
  document.getElementById("masUsado").textContent = mejor ? `${mejor.nombre} (${mejor.clics})` : "—";
}

/* ---------- Contenido de paneles ---------- */
const lista = (arr) => `<ul>${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const etiquetas = (arr) => `<ul class="etiquetas">${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const pendiente = (t) => `<p class="pendiente">${t}</p>`;

const paneles = {
  sobre: () => `
    <h3>Perfil</h3><p>${cv.perfil}</p>
    <h3>Contacto</h3><p>Teléfono / WhatsApp: ${perfil.telefonoVisible}</p>`,
  portafolio: () => `
    <h3>Proyectos</h3>${lista(cv.proyectos.map((p) => `<strong>${p.nombre}.</strong> ${p.texto}`))}
    <h3>Servicios</h3>${lista(["Desarrollo de páginas web responsivas", "Aplicaciones móviles Android", "Agentes y asistentes con inteligencia artificial", "Consumo e integración de APIs REST"])}`,
  formacion: () => `
    <h3>Educación</h3>${cv.educacion ? lista(cv.educacion.map((e) => `<strong>${e.titulo}</strong> · ${e.lugar} · ${e.periodo}`)) : pendiente("Información por completar.")}
    <h3>Formación complementaria</h3>${cv.complementaria ? lista(cv.complementaria.map((c) => `${c.curso} · ${c.lugar} · ${c.anio}`)) : pendiente("Información por completar.")}`,
  trayectoria: () => cv.experiencia
    ? cv.experiencia.map((x) => `<h3>${x.cargo} · ${x.lugar}</h3><p>${x.periodo}</p>${lista(x.logros)}`).join("")
    : pendiente("Información por completar."),
  logros: () => `
    ${Object.entries(cv.habilidades).map(([k, v]) => `<h3>${k}</h3>${etiquetas(v)}`).join("")}
    <h3>Idiomas</h3>${lista(cv.idiomas)}`
};

/* ---------- Botones de sección ---------- */
const dialogo = document.getElementById("panel");

function crearBotones() {
  const ul = document.getElementById("listaBotones");
  for (const item of enlaces.filter((e) => e.tipo === "seccion")) {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.className = "boton";
    if (esValida(item.url)) {
      b.innerHTML = `<span class="boton__icono">${iconos[item.icono]}</span>
        <span><span class="boton__titulo">${item.nombre}</span><span class="boton__detalle">${item.detalle}</span></span>`;
      b.addEventListener("click", () => abrirPanel(item));
    } else {
      b.disabled = true;
      b.innerHTML = `<span class="boton__icono">${iconos[item.icono]}</span>
        <span><span class="boton__titulo">${item.nombre}</span><span class="boton__detalle">Enlace inválido</span></span>`;
    }
    li.appendChild(b);
    ul.appendChild(li);
  }
}

function abrirPanel(item) {
  registrarClic(item);
  document.getElementById("panelTitulo").textContent = item.nombre;
  const contenido = document.getElementById("panelContenido");
  contenido.innerHTML = paneles[item.id]();
  if (esUsable(item.url)) {
    const a = document.createElement("a");
    a.className = "cta";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = item.textoUrl;
    contenido.appendChild(a);
  }
  if (typeof dialogo.showModal === "function") dialogo.showModal();
  else dialogo.setAttribute("open", "");
}

/* ---------- Iconos de redes ---------- */
function crearRedes() {
  const ul = document.getElementById("listaRedes");
  for (const r of enlaces.filter((e) => e.tipo === "red")) {
    const li = document.createElement("li");
    if (esUsable(r.url)) {
      const a = document.createElement("a");
      a.className = "red";
      a.href = r.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", r.nombre);
      a.innerHTML = iconos[r.id];
      a.addEventListener("click", () => registrarClic(r));
      li.appendChild(a);
    } else {
      const b = document.createElement("button");
      b.className = "red";
      b.type = "button";
      b.disabled = true;
      b.title = `${r.nombre} – Enlace inválido`;
      b.setAttribute("aria-label", `${r.nombre}: Enlace inválido`);
      b.innerHTML = iconos[r.id];
      li.appendChild(b);
    }
    ul.appendChild(li);
  }
}

/* ---------- Inicio ---------- */
function iniciar() {
  const avatar = document.getElementById("avatar");
  if (perfil.foto) {
    const img = document.createElement("img");
    img.src = perfil.foto;
    img.alt = "Foto de Yeison Andrés Murillo";
    avatar.textContent = "";
    avatar.appendChild(img);
  } else {
    avatar.textContent = perfil.iniciales;
  }

  document.getElementById("qrImg").addEventListener("error", () => {
    document.getElementById("qrBloque").hidden = true;
  });

  crearBotones();
  crearRedes();
  actualizarReporte();

  document.getElementById("cerrarPanel").addEventListener("click", () => dialogo.close());
  dialogo.addEventListener("click", (e) => { if (e.target === dialogo) dialogo.close(); });
}

document.addEventListener("DOMContentLoaded", iniciar);
