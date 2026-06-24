/* ========================================================
   LOCALIZAÇÃO
======================================================= */
function solicitarLocalizacao() {
    const jaDecidiu = localStorage.getItem("localizacao_permitida");
    if (jaDecidiu !== null) return;

    if (!navigator.geolocation) {
        localStorage.setItem("localizacao_permitida", "false");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function (pos) {
            localStorage.setItem("localizacao_permitida", "true");
            localStorage.setItem("lat", pos.coords.latitude);
            localStorage.setItem("lng", pos.coords.longitude);
            mostrarToast("📍 Localização ativada! Maps abrirá com sua posição.");
        },
        function () {
            localStorage.setItem("localizacao_permitida", "false");
            mostrarToast("Sem localização — Maps usará busca por texto.");
        }
    );
}

/* ========================================================
   ABRIR MAPS (CARDS)
======================================================= */
function abrirMaps(tipo) {
    const lat = localStorage.getItem("lat");
    const lng = localStorage.getItem("lng");
    let url;

    if (lat && lng) {
        url = `https://www.google.com/maps/search/${tipo}/@${lat},${lng},15z`;
    } else {
        url = `https://www.google.com/maps/search/${tipo}+perto+de+mim`;
    }

    window.open(url, "_blank");
}

/* ========================================================



/* ========================================================
   RENDERIZAR LISTA
======================================================= */

// Ícones por tipo
const iconHtml = {
    hospitais: `<svg class="hi-icon" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="10" width="24" height="20" rx="1" fill="#5a9ec9" opacity=".4" stroke="#1a6fa8" stroke-width="1.5"/>
    <rect x="10" y="17" width="5" height="5" rx="0.5" stroke="#1a6fa8" stroke-width="1.3" fill="none"/>
    <rect x="17" y="17" width="5" height="5" rx="0.5" stroke="#1a6fa8" stroke-width="1.3" fill="none"/>
    <rect x="12" y="23" width="8" height="7" rx="0.5" stroke="#1a6fa8" stroke-width="1.3" fill="none"/>
    <rect x="10" y="4" width="12" height="8" rx="0.5" fill="#5a9ec9" opacity=".4" stroke="#1a6fa8" stroke-width="1.5"/>
    <line x1="16" y1="6" x2="16" y2="10" stroke="#1a6fa8" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="13.5" y1="8" x2="18.5" y2="8" stroke="#1a6fa8" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,
    farmacias: `<svg class="hi-icon" viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="16" rx="13" ry="6.5" transform="rotate(-40 16 16)" fill="none" stroke="#1a6fa8" stroke-width="1.8"/>
    <line x1="5.5" y1="23" x2="26.5" y2="9" stroke="#1a6fa8" stroke-width="1.8"/>
    <ellipse cx="16" cy="16" rx="13" ry="6.5" transform="rotate(-40 16 16)" clip-path="url(#fp)" fill="#5a9ec9" opacity=".45"/>
    <defs><clipPath id="fp"><polygon points="5,9 27,9 27,23 5,23"/></clipPath></defs>
  </svg>`,
    clinicas: `<svg class="hi-icon" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" fill="#1a6fa8"/>
    <rect x="13" y="8" width="6" height="16" rx="1.5" fill="white"/>
    <rect x="8" y="13" width="16" height="6" rx="1.5" fill="white"/>
  </svg>`
};

const icon = iconHtml[tipo];

// Dividir em 2 colunas
const metade = Math.ceil(lista.length / 2);
const colEsq = lista.slice(0, metade);
const colDir = lista.slice(metade);

function buildItems(arr) {
    return arr.map(h => `
    <div class="hospital-item" onclick="abrirLocal('${h.nome.replace(/'/g, "\\'")}')">
      ${icon}
      <span class="hi-name">${h.nome}</span>
      <span class="hi-dist">${h.dist}</span>
    </div>
  `).join("");
}

container.innerHTML = `
  <div class="list-col">${buildItems(colEsq)}</div>
  <div class="list-col">${buildItems(colDir)}</div>
`;

// Marcar card ativo
document.querySelectorAll(".action-card").forEach(c => c.classList.remove("active"));
document.getElementById(`card-${tipo === "farmacias" ? "farmacia" : tipo === "clinicas" ? "clinica" : "hospital"}`).classList.add("active");


/* ========================================================
   TOAST
======================================================= */
function mostrarToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 3500);
}

/* ========================================================
   INIT
======================================================= */
solicitarLocalizacao();
