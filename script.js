"use strict";

/* =========================================================
   1. TUS DATOS: solo edita esta sección
   ========================================================= */
const CONFIG = {
  titulo: "Portafolio de servicios – Portafolio",
  nombre: "Yeison Andrés Murillo Ramírez",
  usuario: "@YeisonAndresMurillo",
  iniciales: "YM",
  foto: "foto.jpg",            // Imagen en esta carpeta. Si no existe, se muestran las iniciales.
  telefono: "573148340832",    // WhatsApp, formato internacional sin "+"
  telefonoVisible: "+57 314 834 0832",

  /* Solo escribe tu USUARIO (lo que va después de la barra). Vacío = el icono no se muestra. */
  usuarios: {
    github: "",                // Ej: "yeisonmurillo"  -> github.com/yeisonmurillo
    linkedin: "",              // Ej: "yeison-murillo" -> linkedin.com/in/yeison-murillo
    facebook: "",              // Ej: "yeison.murillo"
    instagram: ""              // Ej: "yeisonandresmurillo"
  },

  /* Enlace a tu tarjeta comercial (completo, empezando por https://). Vacío = sin enlace. */
  tarjetaComercial: ""
};

/* Datos de tu hoja de vida. Lo que esté en null aparece como "Información por completar". */
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
  servicios: ["Desarrollo de páginas web responsivas", "Aplicaciones móviles Android", "Agentes y asistentes con inteligencia artificial", "Consumo e integración de APIs REST"],
  experiencia: null,    // Ej: [{ cargo: "Practicante", lugar: "Empresa", periodo: "2025", logros: ["Hice..."] }]
  educacion: null,      // Ej: [{ titulo: "Tecnólogo en Desarrollo de Software", lugar: "Institución", periodo: "2024 - en curso" }]
  complementaria: null, // Ej: [{ curso: "JavaScript", lugar: "Plataforma", anio: "2025" }]
  idiomas: ["Español: nativo", "Inglés: por completar"]
};

/* =========================================================
   2. LISTA DE ENLACES (nombre, url y clics)
   url "" = sin enlace externo todavía (la sección igual abre su panel).
   ========================================================= */
const u = CONFIG.usuarios;
const urlWhatsapp = `https://wa.me/${CONFIG.telefono}?text=${encodeURIComponent("Hola Yeison, vi tu portafolio y quiero más información.")}`;
const urlGithub   = u.github   ? `https://github.com/${u.github}` : "";
const urlLinkedin = u.linkedin ? `https://www.linkedin.com/in/${u.linkedin}` : "";
const urlFacebook = u.facebook ? `https://www.facebook.com/${u.facebook}` : "";
const urlInstagram = u.instagram ? `https://www.instagram.com/${u.instagram}` : "";

const enlaces = [
  /* Botones en píldora: abren un panel con tu información */
  { id: "sobre",       tipo: "seccion", nombre: "Sobre Yeison A. Murillo", detalle: "Información y contacto \u201Cpara ti\u201D", icono: "browser", url: urlWhatsapp, textoUrl: "Escribir por WhatsApp", clics: 0 },
  { id: "portafolio",  tipo: "seccion", nombre: "Portafolio de servicios", detalle: "Catálogo completo",          icono: "handshake", url: urlGithub,   textoUrl: "Ver proyectos en GitHub", clics: 0 },
  { id: "formacion",   tipo: "seccion", nombre: "Formación y estudios",    detalle: "Logros y red de atención",   icono: "pin",       url: urlLinkedin, textoUrl: "Ver perfil en LinkedIn", clics: 0 },
  { id: "trayectoria", tipo: "seccion", nombre: "Trayectoria laboral",     detalle: "Asesoría personalizada",     icono: "mail",      url: urlLinkedin, textoUrl: "Ver experiencia en LinkedIn", clics: 0 },
  { id: "logros",      tipo: "seccion", nombre: "Logros adicionales",      detalle: "Link a tarjeta comercial", icono: "qr",        url: CONFIG.tarjetaComercial, textoUrl: "Abrir tarjeta comercial", clics: 0 },
  /* Iconos de redes: abren el enlace directamente */
  { id: "whatsapp",  tipo: "red", nombre: "WhatsApp",  url: urlWhatsapp,  clics: 0 },
  { id: "facebook",  tipo: "red", nombre: "Facebook",  url: urlFacebook,  clics: 0 },
  { id: "instagram", tipo: "red", nombre: "Instagram", url: urlInstagram, clics: 0 },
  { id: "linkedin",  tipo: "red", nombre: "LinkedIn",  url: urlLinkedin,  clics: 0 },
  { id: "github",    tipo: "red", nombre: "GitHub",    url: urlGithub,    clics: 0 }
];

/* =========================================================
   3. ICONOS (SVG en línea, sin librerías)
   ========================================================= */
const iconos = {
  browser:   '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="12" cy="14.5" r="3"/><path d="M9 14.5h6M12 11.5c-1.500 1.800-1.500 4.200 0 6M12 11.5c1.500 1.800 1.500 4.200 0 6"/></svg>',
  handshake: '<svg viewBox="0 0 24 24"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.500 2.500a1 1 0 1 0 3-3l-3.880-3.880a3 3 0 0 0-4.240 0l-.880.880a1 1 0 1 1-3-3l2.810-2.810a5.790 5.790 0 0 1 7.060-.870l.470.280a2 2 0 0 0 1.420.250L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.500 6.500a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>',
  pin:       '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.200 7-11a7 7 0 1 0-14 0c0 4.800 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/></svg>',
  mail:      '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  qr:        '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="3" y="15" width="6" height="6"/><path d="M15 15h2v2h-2zM19 19h2M15 20h1M20 15v2"/></svg>',
  whatsapp:  '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a14 14 0 0 1-5.6-4.9c-.4-.6-1.4-1.9-1.4-3.6 0-1.7.9-2.5 1.2-2.8.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.5z"/></svg>',
  github:    '<svg viewBox="0 0 24 24"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin:  '<svg viewBox="0 0 24 24"><path d="M4.2 8.7h3.6V20H4.2zM6 3a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 6 3zm4.1 5.7h3.4v1.5c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.6V20h-3.6v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20h-3.6z"/></svg>',
  facebook:  '<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z"/></svg>',
  instagram: '<svg class="trazo" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.500" cy="6.500" r="1" fill="currentColor" stroke="none"/></svg>'
};
/* Tamaño fijo en el propio SVG (evita iconos gigantes si falla el CSS) */
for (const k in iconos) iconos[k] = iconos[k].replace("<svg ", '<svg width="26" height="26" aria-hidden="true" focusable="false" ');

/* =========================================================
   4. LÓGICA
   ========================================================= */
let totalClics = 0;   // ACUMULADOR: empieza en 0 y suma 1 por cada clic

/* VALIDACIÓN: solo URL que empiecen por https:// */
function esValida(url) {
  return typeof url === "string" && url.startsWith("https://");
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

/* ---------- Contenido de los paneles ---------- */
const lista = (arr) => `<ul>${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const etiquetas = (arr) => `<ul class="etiquetas">${arr.map((x) => `<li>${x}</li>`).join("")}</ul>`;
const pendiente = () => '<p class="pendiente">Información por completar.</p>';

const paneles = {
  sobre: () => `
    <h3>Perfil</h3><p>${cv.perfil}</p>
    <h3>Contacto</h3><p>Teléfono / WhatsApp: ${CONFIG.telefonoVisible}</p>`,
  portafolio: () => `
    <h3>Proyectos</h3>${lista(cv.proyectos.map((p) => `<strong>${p.nombre}.</strong> ${p.texto}`))}
    <h3>Servicios</h3>${lista(cv.servicios)}`,
  formacion: () => `
    <h3>Educación</h3>${cv.educacion ? lista(cv.educacion.map((e) => `<strong>${e.titulo}</strong> · ${e.lugar} · ${e.periodo}`)) : pendiente()}
    <h3>Formación complementaria</h3>${cv.complementaria ? lista(cv.complementaria.map((c) => `${c.curso} · ${c.lugar} · ${c.anio}`)) : pendiente()}`,
  trayectoria: () => cv.experiencia
    ? cv.experiencia.map((x) => `<h3>${x.cargo} · ${x.lugar}</h3><p>${x.periodo}</p>${lista(x.logros)}`).join("")
    : pendiente(),
  logros: () => `
    ${Object.entries(cv.habilidades).map(([k, v]) => `<h3>${k}</h3>${etiquetas(v)}`).join("")}
    <h3>Idiomas</h3>${lista(cv.idiomas)}`
};

const dialogo = document.getElementById("panel");

/* ---------- Botones en píldora ---------- */
function crearBotones() {
  const ul = document.getElementById("listaBotones");
  for (const item of enlaces.filter((e) => e.tipo === "seccion")) {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.className = "boton";
    const invalido = item.url !== "" && !esValida(item.url);   // con enlace, pero mal escrito
    b.innerHTML = `<span class="boton__icono">${iconos[item.icono]}</span>
      <span><span class="boton__titulo">${item.nombre}</span>
      <span class="boton__detalle">${invalido ? "Enlace inválido" : item.detalle}</span></span>`;
    if (invalido) {
      b.disabled = true;
    } else {
      b.addEventListener("click", () => abrirPanel(item));
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
  if (item.url !== "" && esValida(item.url)) {
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

/* ---------- Aviso breve ---------- */
let temporizadorAviso;
function avisar(texto) {
  const aviso = document.getElementById("aviso");
  aviso.textContent = texto;
  aviso.classList.add("visible");
  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(() => aviso.classList.remove("visible"), 2200);
}

/* ---------- Iconos de redes ---------- */
function crearRedes() {
  const ul = document.getElementById("listaRedes");
  for (const r of enlaces.filter((e) => e.tipo === "red")) {
    if (r.url === "" && r.id === "github") continue;   // GitHub solo aparece si lo configuras
    const li = document.createElement("li");
    if (r.url === "") {
      /* Sin usuario configurado: el icono se ve igual, pero avisa que aún no está disponible */
      const b = document.createElement("button");
      b.className = `red red--${r.id}`;
      b.type = "button";
      b.setAttribute("aria-label", `${r.nombre} (próximamente)`);
      b.innerHTML = iconos[r.id];
      b.addEventListener("click", () => avisar(`${r.nombre}: próximamente`));
      li.appendChild(b);
    } else if (esValida(r.url)) {
      const a = document.createElement("a");
      a.className = `red red--${r.id}`;
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
  document.getElementById("titulo").textContent = CONFIG.titulo;
  document.getElementById("nombre").textContent = CONFIG.nombre;
  document.getElementById("usuario").textContent = CONFIG.usuario;

  const avatar = document.getElementById("avatar");
  if (CONFIG.foto) {
    const img = document.createElement("img");
    img.src = CONFIG.foto;
    img.alt = `Foto de ${CONFIG.nombre}`;
    img.addEventListener("error", () => { avatar.textContent = CONFIG.iniciales; });
    avatar.textContent = "";
    avatar.appendChild(img);
  } else {
    avatar.textContent = CONFIG.iniciales;
  }

  /* El QR solo se muestra si existe qr.png en esta carpeta */
  const qr = document.getElementById("qrImg");
  const mostrarQr = () => { document.getElementById("qrBloque").hidden = false; };
  if (qr.complete && qr.naturalWidth > 0) mostrarQr();
  else qr.addEventListener("load", mostrarQr);

  crearBotones();
  crearRedes();
  actualizarReporte();

  document.getElementById("cerrarPanel").addEventListener("click", () => dialogo.close());
  dialogo.addEventListener("click", (e) => { if (e.target === dialogo) dialogo.close(); });
}

document.addEventListener("DOMContentLoaded", iniciar);
