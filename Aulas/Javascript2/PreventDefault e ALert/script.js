let link = document.getElementById("link-proz");
let botao = document.querySelector("button[type=submit]");

link.addEventListener("click", (e)=> {
    e.preventDefault();
    alert("Não foi possível acessar o link");
})

botao.addEventListener("click", (e)=> {
    e.preventDefault();
    alert("Não foi possível enviar os dados do formulário");
})