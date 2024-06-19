const caixaPrincipal = documente.querySelector(".caixa-principal");
const caixaPerguntas = documente.querySelector(".caixa-perguntas");
const caixaAlternativa = documente.querySelector(".caixa-alternativa");
const caixaResultado = documente.querySelector(".caixa-resultdo");
const textoReultado = ocumente.querySelector(".texto-resultado");

const perguntas = [
    enunciado: "Pergunta 1",
    alternativas: [
"Alternativa 1",
"Alternativa 2"
]
   ];`
   const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        enunciado: "PergunTa 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    
]; 

let atual = 0;
let perguntaAtual;

function mostraAlternativa() {
    peguntaAtual = Alternativa[atual];
    caixaAlternativa.textContent = pergunta,enunciado;  
    mostraAlternativas();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativa){
    const botaAlternativas = document.createElement("button);
    botaoAlternativa.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
    }
}

 mostraPergunta();
 