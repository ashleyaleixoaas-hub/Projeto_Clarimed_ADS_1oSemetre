# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Paciente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Compreende qualquer indivíduo que, em um momento de vulnerabilidade
ou rotina, assume a responsabilidade pela administração de
medicamentos e busca segurança através de informação. Este paciente
valoriza a autonomia e a precisão, preferindo soluções que eliminem a
dúvida e o medo de efeitos colaterais desconhecidos ou de interações
perigosas.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>A necessidade central deste perfil é simplificação da carga cognitiva
envolvida no ato de medicar-se. O usuário precisa que a interface atue
como um tradutor capaz de filtrar o volume massivo de dados técnicos e
entregar apenas o que é vital para a sua segurança no exato momento do
uso. Existe uma demanda intrínseca por validação visual e textual que
confirme se o procedimento realizado está correto, transformando
informações complexas em orientações diretas e acionáveis</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


| EU COMO...  |                                  QUERO/PRECISO ...                             |                            PARA ...                       |
|-------------|--------------------------------------------------------------------------------|-----------------------------------------------------------|
| Paciente    | Ler as informações de um medicamento de forma simples                          | Ler as informações de um medicamento de forma simples   |
| Paciente    | Saber com quais alimentos posso tomar meus remédios                            | Não correr o risco de ingeri-los com alimentos que possam me fazer mal|
| Paciente    | Pesquisar por meus remédios e localizá-los de maneira simples                  | Conseguir filtrá-los, tendo em mãos todas as informações necessárias|
| Paciente    | Abrir um mapa das farmácias mais próximas da minha localização                 | Saber onde comprar meu remédio logo após sair de uma consulta  | 
| Paciente    | Manter minhas medicações sob controle, salvando os medicamentos mais receitados| Ter acesso rápido às informações da bula em uma pesquisa simples|
| Paciente    | Deseja ter acesso a sintomas comuns                                                   | Para ter mais clareza e confiança ao conversar com médico, principalmente na hora de receber o receituário |
| Paciente    | Quer acompanhar as evoluções do mundo da saúde e ter informações sobre novos medicamentos | Para acompanhar de perto a medicina e se previnir contra novas doenças|

## Requisitos do Projeto

  ### Requisitos Funcionais

|ID      | Descrição                | Prioridade |
|------- |-------------------------|-------|
| RF-01  |  A aplicação deve permitir a criação de uma conta.                    | ALTA   | 
| RF-02  |  A aplicação deve permitir que o usuário acesse sua conta.                    | ALTA   |
| RF-03  |  A aplicação deve permitir ao usuário visualizar as informaçõe sobre os remédios.                    | ALTA   |
| RF-04  |  A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar remédios.                    | ALTA   |
| RF-05  |  A aplicação deve armazenar os remédios que o usuário sinalizou que faz uso.                    | ALTA   |
| RF-07  |  A aplicação deve apresentar, para cada remédio, uma imagem que corresponda à capa.                    | MÉDIA   |
| RF-08  |  A aplicação deve abrir o Google Maps em outra aba, indicando as farmácias e clínicas mais próximas.                    | MÉDIA   |

  ### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------   |-------------------------|----|
| RNF-01    |  A aplicação deve demonstrar o site funcionando sem barra de rolagem horizontal em um celular e em um monitor, garantindo uma boa otimização.                    | ALTA   | 
| RNF-02    |  A aplicação deve seguir as diretrizes do WCAG (Web Content Accessibility Guidelines) para facilitar o uso por pessoas idosas ou com baixa visão.                   | ALTA   | 
| RNF-03    |  A aplicação deve rodar a extensão WAVE ou Lighthouse e atingir pontuação > 90 em Acessibilidade.                    | MÉDIA   | 

