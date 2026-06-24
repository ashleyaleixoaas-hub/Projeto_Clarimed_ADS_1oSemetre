document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll(".btn-sintoma");
    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const caixinha = botao.nextElementSibling;
            
            if (caixinha && caixinha.classList.contains("sintomas")) {
                caixinha.classList.toggle("ativo");
            }
        });
    });
});