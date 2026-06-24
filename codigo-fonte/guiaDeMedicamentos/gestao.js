const medicamentos = [
    { id: 1, nome: "Allegra", categoria: "Alergia", tipo: "Comprimido 120mg", uso: "Antialérgico", dosagem: "1 comprimido ao dia", aviso: "Não ingerir com sucos de frutas", img: "../imagens/remedios-img/allegra.png" },
    { id: 2, nome: "Aspirina", categoria: "Dor", tipo: "Comprimido 500mg", uso: "Analgésico e anti-inflamatório", dosagem: "1 comprimido a cada 6 horas", aviso: "Evitar estômago vazio", img: "../imagens/remedios-img/aspirina.png" },
    { id: 3, nome: "Cetirizina", categoria: "Alergia", tipo: "Comprimido 10mg", uso: "Tratamento de rinite alérgica", dosagem: "1 comprimido ao dia", aviso: "Pode causar sonolência", img: "../imagens/remedios-img/cetirizina.png" },
    { id: 4, nome: "Cetoprofeno", categoria: "Dor", tipo: "Comprimido 100mg", uso: "Anti-inflamatório potente", dosagem: "1 comprimido a cada 12 horas", aviso: "Uso sob prescrição", img: "../imagens/remedios-img/cetoprofeno.png" },
    { id: 5, nome: "Cloreto de Magnésio", categoria: "Suplemento", tipo: "Cápsula", uso: "Suplemento mineral", dosagem: "Conforme orientação", aviso: "Consultar médico", img: "../imagens/remedios-img/cloreto-de-magnesio.png" },
    { id: 6, nome: "Complexo B", categoria: "Cansaço", tipo: "Cápsula", uso: "Suplemento vitamínico", dosagem: "1 ao dia", aviso: "Manter dieta balanceada", img: "../imagens/remedios-img/complexo-b.png" },
    { id: 7, nome: "Diclofenaco Potássico", categoria: "Dor", tipo: "Comprimido 50mg", uso: "Dor e inflamação", dosagem: "1 a cada 8 horas", aviso: "Cuidado com estômago", img: "../imagens/remedios-img/diclofenaco-potassio.png" },
    { id: 8, nome: "Dipirona Monoidratada", categoria: "Dor", tipo: "Comprimido 500mg", uso: "Dor e febre", dosagem: "1 a cada 6 horas", aviso: "Não exceder 4g/dia", img: "../imagens/remedios-img/dipirona_monohidratada.png" },
    { id: 9, nome: "Domperidona", categoria: "Náusea", tipo: "Comprimido 10mg", uso: "Antiemético e digestivo", dosagem: "1 antes das refeições", aviso: "Uso sob prescrição", img: "../imagens/remedios-img/domperidona.png" },
    { id: 10, nome: "Dramin", categoria: "Náusea", tipo: "Comprimido 50mg", uso: "Náuseas e enjoo", dosagem: "1 a cada 6 horas", aviso: "Causa bastante sonolência", img: "../imagens/remedios-img/dramin.png" },
    { id: 11, nome: "Dropropizina", categoria: "Tosse", tipo: "Xarope", uso: "Tosse seca", dosagem: "10ml a cada 6 horas", aviso: "Não usar com catarro", img: "../imagens/remedios-img/dropropizina.png" },
    { id: 12, nome: "Eno", categoria: "Digestivo", tipo: "Efervescente", uso: "Azia e má digestão", dosagem: "1 envelope em água", aviso: "Não exceder doses diárias", img: "../imagens/remedios-img/eno.png" },
    { id: 13, nome: "Guaraná", categoria: "Cansaço", tipo: "Cápsula/Pó", uso: "Estimulante natural", dosagem: "Conforme fabricante", aviso: "Evitar à noite", img: "../imagens/remedios-img/guarana.png" },
    { id: 14, nome: "Hidróxido de Alumínio", categoria: "Digestivo", tipo: "Suspensão", uso: "Azia e acidez", dosagem: "1 colher após refeições", aviso: "Pode causar prisão de ventre", img: "../imagens/remedios-img/hidroxido-de-aluminio.png" },
    { id: 15, nome: "Ibuprofeno", categoria: "Dor", tipo: "Comprimido 600mg", uso: "Dor e inflamação", dosagem: "1 a cada 8 horas", aviso: "Não usar com suspeita de dengue", img: "../imagens/remedios-img/ibuprofeno.png" },
    { id: 16, nome: "Loratadina", categoria: "Alergia", tipo: "Comprimido 10mg", uso: "Antialérgico", dosagem: "1 ao dia", aviso: "Menos sedativo", img: "../imagens/remedios-img/loratadina.png" },
    { id: 17, nome: "Naproxeno", categoria: "Dor", tipo: "Comprimido 250mg", uso: "Anti-inflamatório", dosagem: "1 a cada 12 horas", aviso: "Cuidado com estômago", img: "../imagens/remedios-img/naproxeno.png" },
    { id: 18, nome: "Neosoro", categoria: "Respiratório", tipo: "Spray Nasal", uso: "Descongestionante", dosagem: "1 gota em cada narina", aviso: "Não usar por mais de 3 dias", img: "../imagens/remedios-img/neosoro.png" },
    { id: 19, nome: "Nimesulida", categoria: "Dor", tipo: "Comprimido 100mg", uso: "Anti-inflamatório", dosagem: "1 a cada 12 horas", aviso: "Uso máximo 5 dias", img: "../imagens/remedios-img/nimesulida.png" },
    { id: 20, nome: "Omeprazol", categoria: "Digestivo", tipo: "Cápsula 20mg", uso: "Protetor gástrico", dosagem: "1 em jejum", aviso: "Uso crônico deve ser avaliado", img: "../imagens/remedios-img/omeprazol.png" },
    { id: 21, nome: "Paracetamol", categoria: "Dor", tipo: "Comprimido 750mg", uso: "Dor e febre", dosagem: "1 a cada 6 horas", aviso: "Cuidado com o fígado", img: "../imagens/remedios-img/paracetamol.png" },
    { id: 22, nome: "Plasil", categoria: "Náusea", tipo: "Comprimido 10mg", uso: "Náuseas e vômitos", dosagem: "1 a cada 8 horas", aviso: "Uso sob prescrição", img: "../imagens/remedios-img/plasil.png" },
    { id: 23, nome: "Polaramine", categoria: "Alergia", tipo: "Comprimido 2mg", uso: "Antialérgico", dosagem: "1 a cada 6 horas", aviso: "Causa muita sonolência", img: "../imagens/remedios-img/polaramine.png" },
    { id: 24, nome: "Pomada de Protazina", categoria: "Dermatológico", tipo: "Pomada", uso: "Coceira/alergia", dosagem: "Aplicar camada fina", aviso: "Evitar exposição ao sol", img: "../imagens/remedios-img/pomada-de-protazina.png" },
    { id: 25, nome: "Simeticona", categoria: "Digestivo", tipo: "Comprimido 40mg", uso: "Gases intestinais", dosagem: "1 a 2 após refeições", aviso: "Mastigar bem", img: "../imagens/remedios-img/simeticona.png" },
    { id: 26, nome: "Toragesic", categoria: "Dor", tipo: "Comprimido 10mg", uso: "Dor intensa", dosagem: "1 a cada 6 horas", aviso: "Uso de curta duração", img: "../imagens/remedios-img/toragesic.png" },
    { id: 27, nome: "Vitamina C", categoria: "Cansaço", tipo: "Efervescente", uso: "Imunidade", dosagem: "1 ao dia", aviso: "Não substitui refeição", img: "../imagens/remedios-img/vitamina-c.png" },
    { id: 28, nome: "Xarope de Ambrol", categoria: "Tosse", tipo: "Xarope", uso: "Tosse com catarro", dosagem: "Conforme peso", aviso: "Tomar bastante água", img: "../imagens/remedios-img/xarope-de-ambrol.png" }
];

function getChaveUsuario() {
    const texto = sessionStorage.getItem('usuarioLogado');
    if (!texto) return null;
    return JSON.parse(texto).telefone;
}

const itensPorPagina = 12;
let paginaAtual = 0;
let dadosAtuais = medicamentos;

function renderizaLista(dados = medicamentos) {
    const listaDiv = document.getElementById("lista");
    listaDiv.innerHTML = "";

    const inicio = paginaAtual * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const itensPagina = dados.slice(inicio, fim);

    itensPagina.forEach((item) => {
        const divRemedio = document.createElement("div");
        divRemedio.className = "remedio";
        divRemedio.innerHTML = `
            <div class="remedio-topo">
                <img src="${item.img}" alt="${item.nome}">
                <p class="nome">${item.nome}</p>
                <p class="categoria">${item.categoria}</p>
                <button class="fav" onclick="favoritar(this)">&#9829;</button>
                <button class="saber-mais" onclick="abrirModal(${item.id})">Saber mais</button>
            </div>
        `;
        listaDiv.appendChild(divRemedio);
    });

    marcarFavoritos();
}

function abrirModal(id) {
    let item = null;
    for (let i = 0; i < medicamentos.length; i++) {
        if (medicamentos[i].id === id) { 
            item = medicamentos[i]; 
            break; 
        }
    }
    const modal = document.getElementById("modal-dinamico");

    modal.innerHTML = `
        <div class="info-conteudo">
            <h2>${item.nome}</h2>
            <img src="${item.img}" alt="${item.nome}">
            <p>💊 <strong>Tipo:</strong> ${item.tipo}</p>
            <p>🩺 <strong>Uso:</strong> ${item.uso}</p>
            <p>⏰ <strong>Dosagem:</strong> ${item.dosagem}</p>
            <p>⚠️ <strong>Cuidado:</strong> ${item.aviso}</p>
            <div class="modal-botoes">
                <button onclick="fecharModal()">Fechar</button>
                <button onclick="adicionarDose(${item.id})">Adicionar às minhas doses</button>
            </div>
        </div>
    `;
    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById("modal-dinamico").style.display = "none";
}

function mudarPagina(direcao) {
    const totalPaginas = Math.ceil(dadosAtuais.length / itensPorPagina);
    paginaAtual += direcao;
    if (paginaAtual < 0) paginaAtual = 0;
    if (paginaAtual >= totalPaginas) paginaAtual = totalPaginas - 1;
    renderizaLista(dadosAtuais);
}

function abrir(id) {
    document.getElementById(id).style.display = "block";
}

function fechar(id) {
    document.getElementById(id).style.display = "none";
}

function favoritar(botao) {
    if (!sessionStorage.getItem("usuarioLogado")) {
        Swal.fire({
            title: "Ops!",
            text: "Faça login para adicionar um remédio aos favoritos.",
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#d33",
        });
        return;
    }
    const nomeRemedio = botao.closest('.remedio-topo').querySelector('.nome').textContent;
    const imgRemedio = botao.closest('.remedio-topo').querySelector('img').src;
    let tipoRemedio = '';
    for (let i = 0; i < medicamentos.length; i++) {
        if (medicamentos[i].nome === nomeRemedio) { 
            tipoRemedio = medicamentos[i].tipo; 
            break; 
        }
    }

    const chave = getChaveUsuario();
    let favoritos = JSON.parse(localStorage.getItem('favoritos_' + chave)) || [];
    let recentes = JSON.parse(localStorage.getItem('recentes_' + chave)) || [];
    let jaExiste = false;
    for (let i = 0; i < favoritos.length; i++) {
        if (favoritos[i].nome === nomeRemedio) {
            jaExiste = true;
            break;
        }
    }

    if (jaExiste) {
        const favSemRemedio = [];
        for (let i = 0; i < favoritos.length; i++) {
            if (favoritos[i].nome !== nomeRemedio) favSemRemedio.push(favoritos[i]);
        }
        favoritos = favSemRemedio;
        botao.classList.remove('ativo');
        recentes.unshift({ nome: nomeRemedio, img: imgRemedio, tipo: tipoRemedio, acao: 'removeu', timestamp: new Date().toISOString() });
    } else {
        favoritos.push({ nome: nomeRemedio, img: imgRemedio, tipo: tipoRemedio });
        botao.classList.add('ativo');
        recentes.unshift({ nome: nomeRemedio, img: imgRemedio, tipo: tipoRemedio, acao: 'adicionou', timestamp: new Date().toISOString() });
    }

    recentes = recentes.slice(0, 3);
    localStorage.setItem('favoritos_' + chave, JSON.stringify(favoritos));
    localStorage.setItem('recentes_' + chave, JSON.stringify(recentes));
}

function marcarFavoritos() {
    const chave = getChaveUsuario();
    const favoritos = chave ? JSON.parse(localStorage.getItem('favoritos_' + chave)) || [] : [];
    document.querySelectorAll('.remedio-topo').forEach(function(remedio) {
        const nome = remedio.querySelector('.nome').textContent;
        const botao = remedio.querySelector('.fav');
        let ehFavorito = false;
        for (let i = 0; i < favoritos.length; i++) {
            if (favoritos[i].nome === nome) { 
                ehFavorito = true; 
                break;
            }
        }
        if (ehFavorito) {
            botao.classList.add('ativo');
        }
    });
}

function filtrar(categoria) {
    paginaAtual = 0;
    let filtrados = [];
    if (categoria === "Todos") {
        filtrados = medicamentos;
    } else {
        for (let i = 0; i < medicamentos.length; i++) {
            if (medicamentos[i].categoria === categoria) filtrados.push(medicamentos[i]);
        }
    }
    renderizaLista(filtrados);
}

function buscar() {
    paginaAtual = 0;
    const texto = document.getElementById("campoBusca").value.toLowerCase();
    const filtrados = [];
    for (let i = 0; i < medicamentos.length; i++) {
        if (medicamentos[i].nome.toLowerCase().includes(texto)) filtrados.push(medicamentos[i]);
    }
    renderizaLista(filtrados);
}

function adicionarDose(id) {
    let item = null;
    for (let i = 0; i < medicamentos.length; i++) {
        if (medicamentos[i].id === id) { 
            item = medicamentos[i]; 
            break; 
        }
    }
    const modal = document.getElementById("modal-dinamico");

    modal.innerHTML = `
        <div class="info-conteudo">
            <h2>${item.nome}</h2>
            <img src="${item.img}" alt="${item.nome}">
            <p>💊 <strong>Dosagem recomendada:</strong> ${item.dosagem}</p>
            <div class="campo-dose">
                <label for="horaPrimeiraDose">Hora da primeira dose:</label>
                <input type="time" id="horaPrimeiraDose" required>
            </div>
            <div class="campo-dose">
                <label for="intervaloDose">Repetir a cada:</label>
                <select id="intervaloDose">
                    <option value="4">4 horas</option>
                    <option value="6">6 horas</option>
                    <option value="8" selected>8 horas</option>
                    <option value="12">12 horas</option>
                    <option value="24">24 horas</option>
                </select>
            </div>
            <div class="modal-botoes">
                <button onclick="fecharModal()">Cancelar</button>
                <button onclick="confirmarDose(${item.id})">Confirmar</button>
            </div>
        </div>
    `;
    modal.style.display = "block";
}

function confirmarDose(id) {
    let item = null;
    for (let i = 0; i < medicamentos.length; i++) {
        if (medicamentos[i].id === id) { 
            item = medicamentos[i]; 
            break; 
        }
    }
    const hora = document.getElementById("horaPrimeiraDose").value;
    const intervalo = parseInt(document.getElementById("intervaloDose").value);

    if (!hora) {
        alert("Por favor, informe a hora da primeira dose.");
        return;
    }

    const partes = hora.split(":");
    const hh = Number(partes[0]);
    const mm = Number(partes[1]);
    const proxHora = (hh + intervalo) % 24;
    const proxDose = `${proxHora < 10 ? '0' + proxHora : proxHora}:${mm < 10 ? '0' + mm : mm}`;

    const chave = getChaveUsuario();
    let doses = chave ? JSON.parse(localStorage.getItem('doses_' + chave)) || [] : [];
    let jaExiste = false;
    for (let i = 0; i < doses.length; i++) {
        if (doses[i].id === id) {
            jaExiste = true;
            break;
        }
    }

    if (jaExiste) {
        for (let i = 0; i < doses.length; i++) {
            if (doses[i].id === id) {
                doses[i].hora = hora;
                doses[i].intervalo = intervalo;
                doses[i].proxDose = proxDose;
                break;
            }
        }
    } else {
        doses.push({
            id: item.id,
            nome: item.nome,
            tipo: item.tipo,
            uso: item.uso,
            dosagem: item.dosagem,
            aviso: item.aviso,
            img: item.img,
            hora,
            intervalo,
            proxDose,
            notificacao: false
        });
    }

    if (chave) localStorage.setItem('doses_' + chave, JSON.stringify(doses));
    fecharModal();
}

document.addEventListener("DOMContentLoaded", () => renderizaLista());