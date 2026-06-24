// para os carrosseis iniciarem 
function iniciarCarrossel(idContainer) {
    // busca o container do carrossel pelo ID
    const container = document.getElementById(idContainer);
    // se não encontrar o container, sai da função para evitar bugs
    if (!container) return; 

    // busca dos elementos do carrossel
    const slides = container.querySelectorAll('.slide');
    const btnNext = container.querySelector('.btn-next');
    const btnPrev = container.querySelector('.btn-prev');
    const dots = container.querySelectorAll('.ponto');

    // se estiver sem slide ele para 
    if (slides.length === 0) return; 

    // variável para lembrar qual o slide atual
    let currentSlide = 0;

    // para atualizar o carrossel, mostrando o slide correto e atualizando os pontos
    function updateCarousel(index) {
        slides.forEach(s => s.classList.remove('active'));
        if(dots.length > 0) dots.forEach(d => d.classList.remove('ativo'));

        slides[index].classList.add('active');
        if(dots.length > 0) dots[index].classList.add('ativo');
    }

    // para o funcionamento das setas
    btnNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel(currentSlide);
    });
    btnPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel(currentSlide);
    });


    // Inicia o primeiro slide
    updateCarousel(0);
}

async function puxarNoticiasDaAPI() {
    // identifica os lugares vazios nos carrosseis 
    const wrapper = document.getElementById('wrapper-principal');
    const dotsContainer = document.getElementById('dots-container');
    if (!wrapper) return;

    try {
        // pede 3 notícias para o site do IBGE
        const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3&busca=medicamentos');
        const dados = await resposta.json();
        const noticias = dados.items;

        // limpa o texto de carregamento
        wrapper.innerHTML = ''; 
        if(dotsContainer) dotsContainer.innerHTML = ''; 

        noticias.forEach((noticia, index) => {
            const classeAtiva = index === 0 ? 'active' : '';

            // organiza o texto da URL image
            let urlDaImagem = '';
            try {
                const imagensObj = JSON.parse(noticia.imagens);
                urlDaImagem = 'https://agenciadenoticias.ibge.gov.br/' + imagensObj.image_intro;
            } catch (e) {
                // imagem de backup
                urlDaImagem = '../imagens/BackupImageNoticias.png'; 
            }

            const slideHTML = `
                <div class="slide ${classeAtiva}">
                    <div class="banner-texto">
                        <a href="${noticia.link}" target="_blank" rel="external" class="link-carrossel">
                            <h2>${noticia.titulo}</h2>
                        </a>
                        <p>${noticia.introducao}</p>
                    </div>
                    <img src="${urlDaImagem}" alt="Notícia IBGE">
                </div>
            `;
            wrapper.innerHTML += slideHTML;
            
            if(dotsContainer) {
                dotsContainer.innerHTML += `<span class="ponto ${classeAtiva}"></span>`;
            }
        });

        iniciarCarrossel('carrossel-principal');

    } catch (erro) {
        console.error("Erro na API do carrossel principal:", erro);
        wrapper.innerHTML = '<p style="padding:20px;">Falha ao carregar as notícias. Verifique a conexão.</p>';
    }
}

// API para os carrosseis menores
async function puxarNoticiasTematicas(idWrapper, idCarrossel, tema) {
    const wrapper = document.getElementById(idWrapper);
    if (!wrapper) return;

    try {
        // Pede 2 notícias
        const url = `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=2&busca=${tema}`;
        
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const noticias = dados.items;

        wrapper.innerHTML = ''; 

        noticias.forEach((noticia, index) => {
            const classeAtiva = index === 0 ? 'active' : '';

            let urlDaImagem = '';
            try {
                const imagensObj = JSON.parse(noticia.imagens);
                urlDaImagem = 'https://agenciadenoticias.ibge.gov.br/' + imagensObj.image_intro;
            } catch (e) {
                urlDaImagem = 'imagens/imagens noticias/8.png'; 
            }

            const slideHTML = `
                <div class="slide ${classeAtiva}">
                    <div class="banner-texto">
                        <a href="${noticia.link}" target="_blank" rel="external" class="link-carrossel">
                            <h2>${noticia.titulo}</h2>
                        </a>
                        <p>${noticia.introducao}</p>
                    </div>
                    <img src="${urlDaImagem}" alt="Notícia sobre ${tema}">
                </div>
            `;
            wrapper.innerHTML += slideHTML;
        });

        iniciarCarrossel(idCarrossel);

    } catch (erro) {
        console.error(`Erro ao carregar o tema ${tema}:`, erro);
        wrapper.innerHTML = '<p style="padding:20px;">Falha ao carregar as notícias.</p>';
    }
}

// 3. Roda tudo quando o site carrega
window.addEventListener('DOMContentLoaded', () => {
    // Busca a API
    puxarNoticiasDaAPI();

    // Liga os carrosséis menores que já estão no HTML
    puxarNoticiasTematicas('wrapper-1', 'carrossel-1', 'saúde');
    puxarNoticiasTematicas('wrapper-2', 'carrossel-2', 'educação');
    puxarNoticiasTematicas('wrapper-3', 'carrossel-3', 'tecnologia');
    puxarNoticiasTematicas('wrapper-4', 'carrossel-4', 'economia');
});