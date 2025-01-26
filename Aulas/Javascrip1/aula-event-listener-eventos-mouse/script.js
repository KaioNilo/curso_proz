let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarSubtotal() {

  //para alterar singular/plural
  const singularPlural = subtotalInfo.quantidade <= 1 ? "item" : "itens";

  quantidadeSubtotal.innerText = `${subtotalInfo.quantidade} ${singularPlural}`;

  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);

}

atualizarSubtotal()



// VARIAVEIS E DADOS
let btnAdicionarProduto = document.querySelector("#btn-adicionar-produto-01");

let btnSubtrairProduto = document.querySelector("#btn-subtrair-produto-01");

let quantidadeProduto = document.querySelector("#quantidade-produto-01");

let valorProduto = 11.66;



// FUNÇÕES

// Função para adicionar 1 quant
function adicionarUm() {

  //somar em 1 sem concatenar
  quantidadeProduto.value = Number(quantidadeProduto.value) + 1;

  //atualizar subtotal
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1;

  //atualizar valor subtotal
  subtotalInfo.valor = subtotalInfo.quantidade * valorProduto;

  //atualiza o DOM no subtotal
  atualizarSubtotal()
}



// Função para subtrair 1 quant
function subtrairUm() {
  
  if (quantidadeProduto.value > 0) {
    //subtrair em 1 sem concatenar
    quantidadeProduto.value = Number(quantidadeProduto.value) - 1;

    //atualizar subtotal
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1;

    //atualizar valor subtotal
    subtotalInfo.valor = subtotalInfo.quantidade * valorProduto;


    //atualiza o DOM no subtotal
    atualizarSubtotal()
  
  } else {
    quantidadeProduto.value = 0;
  }
}


// EVENTOS
btnAdicionarProduto.addEventListener("click", adicionarUm);

btnSubtrairProduto.addEventListener("click", subtrairUm);