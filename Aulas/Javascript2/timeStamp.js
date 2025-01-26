let elementoClicado = document.getElementById("elemento-clicado");

let botaoTempo = document.getElementById("botao-tempo");

let tempo = document.getElementById("tempo");


// Para adicionar evento ao botão. Quando for clicado, realizará a função definida

// Declaração do parâmetro "evento" na função. Esse parâmetro representa um obj com todas as propriedades do evento

botaoTempo.addEventListener("click", function(evento){

    //Para imprimir no terminal todas as propriedades do evento
    console.log(evento);

    //Para imprimir no terminal o número referente ao timeStamp
    console.log(evento.timeStamp);

    //Para exibir o valor do timeStamp no campo desejado da página e exibir somente 2 casas decimais após a vírgula
    
    tempo.innerText = evento.timeStamp.toFixed(2);
    
})


document.addEventListener("click", function(e){
    console.log(e.target)
    elementoClicado.innerText = e.target.id
})