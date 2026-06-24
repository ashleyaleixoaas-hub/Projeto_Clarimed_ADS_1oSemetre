# Instruções de utilização

## Estratégia de Organização de Codificação 

Nesse primeiro eixo do curso, para simplificar a utilização do Git e a organização das pastas e artefatos de implementação no sistema de arquivos, sugerimos que o projeto seja estruturado de modo que cada aluno trabalhe com seus arquivos nas suas respectivas pastas, identificadas por nomes das suas respectivas telas. Por exemplo:
- Pasta layout (padrão do projeto): layout.html, layout.css - Desenvolvedores responsável: Felipe e Luiz.
- Pasta src\GuiaDeMedicamentos: gestao.html, medicamentos.css, gestao.js - Desenvolvedor responsável: pedro Henrique.
- Pasta src\Noticias: noticias.html, noticias.css, noticias.js  - Desenvolvedora responsável: Ashley.
- Pasta src\Gomed: gomed.html, gomed.css, gomed.js - Desenvolvedor responsável: pedro Augusto.

## Instalação do Site

O site em HTML/CSS/JS é um projeto estático, logo pode ser utilizado tanto em servidores como em navegadores web. Clique [Aqui](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2026-1-e1-Clarimed/codigo-fonte/home/home.html) para acessá-lo.

## Histórico de Versões

### [0.1.0] - Início do Projeto

#### Adicionado
- Estrutura inicial do projeto
- Páginas base: Home, Login, Cadastro, Perfil
- Página de Dúvidas Frequentes
- Página de Notícias
- Página Go-Med
- Página de Remédios e Doses
- Página de Busca por Sintomas
- Guia de Medicamentos

---

### [0.1.1] - Padronização Visual

#### Atualizado
- Padronização de header e footer em todas as páginas
- Incorporação do CSS global
- Correção de layout e títulos
- Responsividade em várias páginas
- Correção de imagens e caminhos

---

### [0.1.2] - Funcionalidades JavaScript

#### Adicionado
- JS na tela de Cadastro, Home, Perfil e Login
- JS na tela de Busca por Sintomas
- JS para retirar remédios da página de Doses
- Verificação de login na página de Remédios e Doses
- Funcionalidade de recentes na Home
- Senha forte no cadastro

---

### [0.1.3] - Go-Med e API de Localização

#### Adicionado
- Geolocalização na página Go-Med
- Dados de hospitais, farmácias e clínicas
- Integração com mapas

#### Atualizado
- Refatoração do gomed.js e gomed.css
- Atualização de estilos e estrutura do Go-Med

---

### [0.1.4] - Notícias e Integração de APIs

#### Adicionado
- API de notícias nos carrosseis da Home
- Integração das imagens de notícias com pasta de imagens gerais
- Suporte Clarimed

---

### [0.1.5] - Guia de Medicamentos

#### Adicionado
- Cards automáticos gerados via JavaScript
- Modal de informações dos medicamentos
- Filtro por categoria
- Busca por nome
- Paginação da lista
- Favoritar medicamentos com localStorage
- Adicionar medicamentos às doses com horário e intervalo

#### Atualizado
- Correção de bugs gerais
- Atualização do JS de remédios e doses

---

### [0.1.6] - Documentação

#### Atualizado
- README com histórico de versões
- Programação de Funcionalidades
- Template padrão da Aplicação
- Projeto de Interface
- Link para hospedagem no GitHub Pages
