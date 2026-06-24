document.addEventListener('DOMContentLoaded', function () {

    const telInput = document.querySelector("#telefone");
    const dataInput = document.querySelector("#dataNascimento");

    if (telInput) VMasker(telInput).maskPattern("(99) 99999-9999");
    if (dataInput) VMasker(dataInput).maskPattern("99/99/9999");

    const toggles = document.querySelectorAll('.togglePassword');

    toggles.forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);

            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    const senhaInput = document.querySelector("#senha");
    const feedback = document.querySelector("#mensagem-feedback");
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (senhaInput && feedback) {
        senhaInput.addEventListener('input', function() {
            const senha = senhaInput.value;

            if (senha.length === 0) {
                feedback.textContent = "";
            } else if (regexSenha.test(senha)) {
                feedback.textContent = "Senha forte!";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Senha fraca. Use 8+ caracteres, com maiúsculas, números e símbolos (@$!%*?&).";
                feedback.style.color = "red";
            }
        });
    }

    const form = document.querySelector('#formCadastro');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nomeValor = document.querySelector('#nome').value;
        const dataNascimentoValor = document.querySelector('#dataNascimento').value;
        const sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
        const sexoValor = sexoSelecionado ? sexoSelecionado.value : "";
        const telefoneValor = document.querySelector('#telefone').value;
        const senhaValor = document.querySelector('#senha').value;
        const confirmaSenhaValor = document.querySelector('#confirmaSenha').value;
        
        if (!regexSenha.test(senhaValor)) {
            alert("A senha digitada não atende aos requisitos de segurança. Verifique o aviso na tela.");
            return;
        }

        if (senhaValor !== confirmaSenhaValor) {
            alert("As senhas estão diferentes! Digite novamente.");
            return;
        }

        const dadosUsuario = {
            nome: nomeValor,
            telefone: telefoneValor,
            senha: senhaValor,
            dataNascimento: dataNascimentoValor,
            sexo: sexoValor,
            dataCadastro: new Date().toISOString()
        };

        const usuarioEmTexto = JSON.stringify(dadosUsuario);

        localStorage.setItem('usuarioCadastrado', usuarioEmTexto);
        alert("Cadastro realizado com sucesso!");
        window.location.href = "../login/login.html";
    });
});