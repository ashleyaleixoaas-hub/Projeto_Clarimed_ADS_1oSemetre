VMasker(document.getElementById("telefone")).maskPattern("(99) 99999-9999")

const togglePassword = document.querySelector('#togglePassword');
const senha = document.querySelector('#senha');

togglePassword.addEventListener('click', function () {
    const type = senha.getAttribute('type') === 'password' ? 'text' : 'password';
    senha.setAttribute('type', type);
    
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

const formLogin = document.querySelector('form');

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const telefoneDigitado = document.querySelector('#telefone').value;
    const senhaDigitada = document.querySelector('#senha').value;
    const dadosCadastrados = localStorage.getItem('usuarioCadastrado');

    if (!dadosCadastrados) {
        alert("Nenhum usuário cadastrado! Vá para tela de cadastro.");
        return
    }

    const usuarioObjeto = JSON.parse(dadosCadastrados);

    if (telefoneDigitado === usuarioObjeto.telefone && senhaDigitada === usuarioObjeto.senha) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioObjeto));
        window.location.href = "../home/home.html";
    } else {
        alert("Telefone ou senha incorretos! Tente novamente.");
    }
});