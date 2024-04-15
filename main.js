for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-08-18T15:37:07")
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempos[0]);
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
}
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

if (tempoFinal > 0){
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
} else {
    return "Prazo Finalizado";
}



let tempo = tempoObjetivo1.getFullYear();

contadores[0].textContent = tempo;


contadores[0].textContent = tempoObjetivo1 - tempoAtual;
const botton = document.querySelectorAll(".botao");
const text = document.querySelectorAll(".aba-conteudo");
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

contadores[0].textContent = tempoObjetivo1;

const botao = document.querySelectorAll(".botao");
`__________________________________`
for (let i=0;i<botao.length;i++){
 `__________________`
    if(i==0){
        fundo.classList.remove("fundo-branco");
        fundo.classList.add("fundo-preto");
    } else{
      fundo.classList.remove("fundo-preto");
     `__________________`
    }  }  
    contadores[0].textContent = calculaTempo(tempoObjetivo1);

 
    function calculaTempo(tempoObjetivo) {
        let tempoAtual = new Date();
        let tempoFinal = tempoObjetivo - tempoAtual;
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);
    
        segundos %= 60;
        minutos %= 60;
        horas %= 24;
     
     return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    }
    