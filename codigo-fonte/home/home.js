document.addEventListener("DOMContentLoaded", function () {
    const usuarioLogadoTexto = sessionStorage.getItem("usuarioLogado");

    const btnAuth = document.querySelector("#btn-auth");
    const blocoUsuario = document.querySelector("#bloco-usuario");
    const nomeUsuarioHome = document.querySelector("#nome-usuario-home");
    const tituloRecentes = document.querySelector("#titulo-recentes");
    const secaoNOtificacao = document.querySelector("#secao-notificacao");
    const secaoVisitante = document.querySelector("#boas-vindas-visitante");
    const perfil = document.querySelector("#btn-perfil");
    const btnDoses = document.querySelector("#btn-doses");

    const menuBtn = document.querySelector("#menu-btn");
    const menuLista = document.querySelector("#menu-lista");

    if (menuBtn && menuLista) {
        menuBtn.addEventListener("click", () => {
            menuLista.classList.toggle("ativo");
        });
    }

    if (usuarioLogadoTexto) {
        const usuario = JSON.parse(usuarioLogadoTexto);
        if (blocoUsuario) blocoUsuario.style.display = "flex";
        if (nomeUsuarioHome) nomeUsuarioHome.textContent = usuario.nome;
        if (secaoNOtificacao) secaoNOtificacao.style.display = "flex";
        if (secaoVisitante) secaoVisitante.style.display = "none";
        if (usuario.dataCadastro && secaoNOtificacao) {
            secaoNOtificacao.innerHTML = `<div class="recentes"></div>`;
            carregarRecentesFavoritos(usuario);
        }

        if (btnAuth) {
            btnAuth.textContent = "Sair";
            btnAuth.setAttribute("href", "#");
            btnAuth.addEventListener("click", function (e) {
                e.preventDefault();
                sessionStorage.removeItem("usuarioLogado");
                alert("Sessão encerrada!");
                window.location.reload();
            });
        }
    } else {
        if (blocoUsuario) blocoUsuario.style.display = "none";
        if (tituloRecentes) tituloRecentes.style.display = "none";
        if (secaoNOtificacao) secaoNOtificacao.style.display = "none";
        if (secaoVisitante) secaoVisitante.style.display = "block";
        if (btnAuth) {
            btnAuth.textContent = "Entrar";
            btnAuth.setAttribute("href", "../login/login.html");
        }
        if (perfil) {
            perfil.addEventListener("click", function (e) {
                e.preventDefault();
                Swal.fire({
                    title: "erro!",
                    text: "Você precisa fazer login para ter acesso ao seu perfil!",
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#d33",
                });
            });
        }
        if (btnDoses) {
            btnDoses.addEventListener("click", function (e) {
                e.preventDefault();
                Swal.fire({
                    title: "Erro!",
                    text: "Você precisa fazer login para acessar Meus remédios e doses!",
                    icon: "error",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#d33",
                });
            });
        }
    }
});

function calcularTempo(timestamp) {
    const diff = new Date() - new Date(timestamp);
    const seg = Math.floor(diff / 1000);
    const min = Math.floor(seg / 60);
    const h = Math.floor(min / 60);
    const dias = Math.floor(h / 24);
    const hRest = h % 24;

    if (seg < 60) return 'Há alguns segundos';
    if (min < 60) return `Há ${min} min`;
    if (h < 24) return `Há ${h} h`;
    if (dias === 1) return hRest > 0 ? `Há 1 dia e ${hRest} h` : 'Há 1 dia';
    return hRest > 0 ? `Há ${dias} dias e ${hRest} h` : `Há ${dias} dias`;
}

function carregarRecentesFavoritos(usuario) {
    const recentes = JSON.parse(localStorage.getItem('recentes_' + usuario.telefone)) || [];
    const divRecentes = document.querySelector('.recentes');
    if (!divRecentes) return;

    divRecentes.innerHTML = '';
    const MAX = 3;
    const mostrar = recentes.slice(0, MAX);

    mostrar.forEach(function(remedio) {
        const mensagem = remedio.acao === 'adicionou'
            ? `Você adicionou <strong>${remedio.nome}</strong> aos favoritos`
            : `Você removeu <strong>${remedio.nome}</strong> dos favoritos`;
        const tempo = remedio.timestamp ? calcularTempo(remedio.timestamp) : 'Agora';

        const div = document.createElement('div');
        div.className = 'recente-cada';
        div.innerHTML = `
            <img class="sino" src="../imagens/sino.png" alt="Imagem de um sino" />
            <div class="card-recentes">
                <p class="tempo-recente" data-timestamp="${remedio.timestamp || ''}">${tempo}</p>
                <h2><img class="coracao" src="../imagens/coracao-clarimed.png" alt="Coração Clarimed"> ${mensagem}</h2>
            </div>
        `;
        divRecentes.appendChild(div);
    });

    if (mostrar.length < MAX && usuario && usuario.dataCadastro) {
        const divConta = document.createElement('div');
        divConta.className = 'recente-cada';
        divConta.innerHTML = `
            <img class="sino" src="../imagens/sino.png" alt="Imagem de um sino" />
            <div class="card-recentes">
                <p class="tempo-recente" data-timestamp="${usuario.dataCadastro}">${calcularTempo(usuario.dataCadastro)}</p>
                <h2>Parabéns!! <img class="coracao" src="../imagens/coracao-clarimed.png" alt="Coração Clarimed">Você criou sua conta.</h2>
            </div>
        `;
        divRecentes.appendChild(divConta);
    }

    setInterval(function() {
        document.querySelectorAll('.tempo-recente').forEach(function(el) {
            if (el.dataset.timestamp) el.textContent = calcularTempo(el.dataset.timestamp);
        });
    }, 30000);
}