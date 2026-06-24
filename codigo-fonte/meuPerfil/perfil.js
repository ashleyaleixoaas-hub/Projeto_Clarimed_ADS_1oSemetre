document.addEventListener('DOMContentLoaded', function () {
    const usuarioLogadoTexto = sessionStorage.getItem('usuarioLogado');

    if (!usuarioLogadoTexto) {
        return;
    }

    const usuario = JSON.parse(usuarioLogadoTexto);
    const txtNome = document.querySelector('#perfil-nome');
    const txtData = document.querySelector('#perfil-data');
    const txtSexo = document.querySelector('#perfil-sexo');
    const txtTelefone = document.querySelector('#perfil-telefone');
    const txtIdade = document.querySelector('#perfil-idade');

    if (txtNome) txtNome.textContent = usuario.nome;
    if (txtTelefone) txtTelefone.textContent = usuario.telefone;
    if (txtData) {
        txtData.textContent = usuario.dataNascimento ? usuario.dataNascimento : "Não informar";
    }
    if (txtSexo) {
        if (usuario.sexo === 'M') {
            txtSexo.textContent = "Masculino";
        } else if (usuario.sexo === 'F') {
            txtSexo.textContent = 'Feminino';
        } else {
            txtSexo.textContent = "Não informado";
        }
    }

    if (txtIdade && usuario.dataNascimento) {
        const icalculada = calculadorIdade(usuario.dataNascimento);
        txtIdade.textContent = isNaN(icalculada) ? "Invalida" : `${icalculada} anos`;
    } else if (txtIdade) {
        txtIdade.textContent = "Não informada";
    }

    carregarFavoritos();
});

function calculadorIdade(datastring) {
    const partes = datastring.split('/');
    if (partes.length !== 3) return "-";

    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const ano = parseInt(partes[2], 10);
    const hoje = new Date();
    const nascimento = new Date(ano, mes, dia);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const diferencaMeses = hoje.getMonth() - nascimento.getMonth();

    if (diferencaMeses < 0 || (diferencaMeses === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

function carregarFavoritos() {
    const texto = sessionStorage.getItem('usuarioLogado');
    const chave = texto ? JSON.parse(texto).telefone : null;
    const favoritos = chave ? JSON.parse(localStorage.getItem('favoritos_' + chave)) || [] : [];
    const container = document.querySelector('.container');
    const contadorEl = document.querySelector('.titulo h2:last-child');

    if (contadorEl) contadorEl.textContent = favoritos.length;

    const existentes = document.querySelectorAll('.favoritos');
    existentes.forEach(el => el.remove());

    if (favoritos.length === 0) return;

    favoritos.forEach(function(remedio) {
        const div = document.createElement('div');
        div.className = 'favoritos';
        div.innerHTML = `
            <div class="foto-nome">
                <img src="${remedio.img}" alt="${remedio.nome}" />
                <p>${remedio.nome}</p>
            </div>
            <p>${remedio.tipo}</p>
        `;
        container.appendChild(div);
    });
}