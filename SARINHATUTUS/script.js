const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "De que forma a inteligencia artificial pode ser usada pra beneficio proprio?",
        alternativas: [
            {
                texto: "Usando de maneira preguicosa e deixando ela trabalhar por voçe!",
                afirmacao: "Errado, voce nao deve utilizaar a inteligencia artificial de maneira preguicosa"
            },
            {
                texto: "utilizar para auxilio em pesquisas e assistencia de problemas, porem ainda fazendo o trabalho sem depender totalmente dela!",
                afirmacao: "Correto, trabalhar em conjunto da inteligencia artificial e a maneira correta de se utiliza-la"
            }
        ]
    },
    {
        enunciado: "como usar de maneira etica as inteligencias artificiais",
        alternativas: [
            {
                texto: "colocando elas para fazer suas atividades escolares ou trabalhos facultativos",
                afirmacao: "Errado, utiliza-la para fazer suas atividades e com certeza uma maneira sem etica"
            },
            {
                texto: "Pedir auxilio e pesquisas e pesquisas sobre dado contexto para a melhor aprendizagem e uma otima utilizacao",
                afirmacao: "Correto, deixa-la te auxiliar durante o momento de aprendizagem e uma otima utilizacao"
            }
        ]
    },
    {
        enunciado: "A inteligencia artificial consegue programar para voce?",
        alternativas: [
            {
                texto: "Claro, consegue fazer com exatidao qualquer ideia que a for pedida",
                afirmacao: "Errado, a IA nao consegue criar com exatidao pois o raciocinio e limitado"
            },
            {
                texto: "Sim, porem limitado pois ela nunca consiguiria fazer com exatidao ideias humanas",
                afirmacao: "Correto, pois a inteligencia artificial nunca vai conseguir emular com exatidao o cerebro humano"
            }
        ]
    },
    {
        enunciado: "Quais funcoes uma IA pode executar?",
        alternativas: [
            {
                texto: "Utilizando somente para coisas banais e resolucoes de problemas simples",
                afirmacao: "Errada, utilizar ela para funcoes banais e um desuso a suas funcoes"
            },
            {
                texto: "Auxilio na resolucao de problemas complexos e diversas outras funcoes",
                afirmacao: "Certa, devessse usala para o auxilio em problemas"
            }
        ]
    },
    {
        enunciado: "No meio academico qual o principal uso que atualmente os alunos tem usado as IA",
        alternativas: [
            {
                texto: "Para pesquisa e auxilio nos estudos?",
                afirmacao: "Credential, continue nos estudos"
            },
            {
                texto: "Fazendo com que elas facam suas avaliacoes e respondendo suas atividades",
                afirmacao: "Errada, muitos usam para a criacao de projetos de forma preguicosa"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
 }
 function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
 }
 function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();    
 }
 function mostraResultado(){
    caixaPerguntas.textContent = "em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
 }
mostraPergunta();