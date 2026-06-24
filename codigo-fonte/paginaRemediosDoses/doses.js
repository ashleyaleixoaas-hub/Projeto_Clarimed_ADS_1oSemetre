function getChaveUsuario() {
    const texto = sessionStorage.getItem('usuarioLogado');
    if (!texto) return null;
    return JSON.parse(texto).telefone;
}

function calcularProximaDose(hora, intervalo) {
    const [hh, mm] = hora.split(":").map(Number);
    const proxHora = (hh + parseInt(intervalo)) % 24;
    return `${String(proxHora).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

function renderizarDoses() {
    const chave = getChaveUsuario();
    const doses = chave ? JSON.parse(localStorage.getItem('doses_' + chave)) || [] : [];
    const listaDoses = document.getElementById("lista-doses");

    listaDoses.innerHTML = "";

    if (doses.length === 0) {
        listaDoses.innerHTML = "<p class='vazio'>Adicione remédios pela guia de medicamentos.</p>";
        return;
    }

    doses.forEach((dose, index) => {
        const tipo = dose.tipo || '';
        const uso = dose.uso || '';
        const aviso = dose.aviso || '';
        const temHorario = dose.hora && dose.intervalo;
        const proxDose = temHorario ? calcularProximaDose(dose.hora, dose.intervalo) : '--:--';

        const details = document.createElement("details");
        details.className = "container_informações";
        details.innerHTML = `
            <summary class="sumario_1">
                <img src="${dose.img}" alt="${dose.nome}" class="imagem">
                <p class="nome_remedio">${dose.nome}</p>
                <p class="dosagem_text">${tipo}</p>
            </summary>
            <div class="detalhes_1">
                <div class="pai_detalhes">
                    <p>💊 <strong>Dosagem:</strong> ${dose.dosagem}</p>
                    ${uso ? `<p>🩺 <strong>Uso:</strong> ${uso}</p>` : ''}
                    ${aviso ? `<p>⚠️ <strong>Cuidado:</strong> ${aviso}</p>` : ''}
                    <div class="primeira_dose">
                        <p>Primeira dose:</p>
                        <p>🕐 ${temHorario ? dose.hora : '--:--'}hrs</p>
                    </div>
                    <div class="prox_dose">
                        <p>Próxima dose:</p>
                        <p>🕐 ${proxDose}hrs</p>
                    </div>
                    <p>
                        <input type="checkbox" class="notificação"
                            ${dose.notificacao ? 'checked' : ''}
                            onchange="alterarNotificacao(${index}, this.checked)">
                        Ativar notificações
                    </p>
                    <button class="retirar" onclick="retirarDose(${dose.id})">Retirar</button>
                </div>
            </div>
        `;
        listaDoses.appendChild(details);
    });
}

function retirarDose(id) {
    const chave = getChaveUsuario();
    if (!chave) return;
    let doses = JSON.parse(localStorage.getItem('doses_' + chave)) || [];
    doses = doses.filter(d => d.id !== id);
    localStorage.setItem('doses_' + chave, JSON.stringify(doses));
    renderizarDoses();
}

function alterarNotificacao(index, ativo) {
    const chave = getChaveUsuario();
    if (!chave) return;
    let doses = JSON.parse(localStorage.getItem('doses_' + chave)) || [];
    doses[index].notificacao = ativo;
    localStorage.setItem('doses_' + chave, JSON.stringify(doses));

    if (ativo && "Notification" in window && Notification.permission !== "granted") {
        Notification.requestPermission();
    }
}

document.addEventListener("DOMContentLoaded", renderizarDoses);
