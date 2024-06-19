const caixaPrincipal = documente.querySelector(".caixa-principal");
const caixaPerguntas = documente.querySelector(".caixa-perguntas");
const caixaAlternativa = documente.querySelector(".caixa-alternativa");
const caixaResultado = documente.querySelector(".caixa-resultdo");
const textoReultado = ocumente.querySelector(".texto-resultado");

const perguntas = [
    enunciado: "Pergunta 1",
    alternativas: [
    {
        texto: "isso é assustador",
        afirmativa: "afirmação"
    },
    {
        texto: "isso é assustador",
        afirmativa: "afirmativa"
    }
       "isso é assustador"
"Alternativa 1",
"Alternativa 2"
]
   ];`
   const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
             {
        texto: "isso é assustador",
        afirmativa: "afirmação"
    },
    {
        texto: "isso é assustador",
        afirmativa: "afirmativa"
    }
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
           {
        texto: "isso é assustador",
        afirmativa: "afirmação"
    },
    {
        texto: "isso é assustador",
        afirmativa: "afirmativa"
    }
            "Alternativa 1",
            "Alternativa 2"
        ]
    },

     {
        enunciado: "Pergunta 2",
        alternativas: [
          {
        texto: "isso é assustador",
        afirmativa: "afirmação"
    },
    {
        texto: "isso é assustador",
        afirmativa: "afirmativa"
    }
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        enunciado: "Pergunta 2",
        alternativas: [
          {
        texto: "isso é assustador",
        afirmativa: "afirmação"
    },
    {
        texto: "isso é assustador",
        afirmativa: "afirmativa"
    }
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        enunciado: "Pergunta 2",
        alternativas: [
          {
        texto: "isso é assustador",
        afirmativa: "afirmação"
    },
    {
        texto: "isso é assustador",
        afirmativa: "afirmativa"
    }
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        enunciado: "PergunTa 2",
        alternativas: [
          {
        texto: "isso é assustador",
        afirmativa: "afirmação"
    },
    {
        texto: "isso é assustador",
        afirmativa: "afirmativa"
    }
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    
]; 

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativa() { 
  if(atual >= pergunta.length){
  mostraResultado();
  return;
  }""
    peguntaAtual = Alternativa[atual];
    caixaAlternativa.textContent = pergunta,enunciado; 
    caixaAlternativa.textoContent =  "";
    mostraAlternativas();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativa){
    const botaAlternativas = document.createElement("button);
    botaoAlternativa.textContent = alternativa;
    BotaoAlternativas.addEventListener("click", () => respostaSelecionaad(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
    }
}

funtion respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSlecionada.afirmacoes;
  historiaFfinal = afirmacoes;
  atual++;
  mostraPergunta();
} 

function mostraResultado(){
 caixaPerguntas.textoContent = "Em 2049..."
 textoResultado.textoContent = historiafinal;
 caixaAlternativa.textoContent = ""; 
}
 mostraPergunta();
