let email = document.getElementById("email");
let idade = document.getElementById("idade");
let form = document.querySelector("form");

email.addEventListener("focus", ()=> {
    email.style.backgroundColor = "lightgreen"
})

email.addEventListener("blur", (e)=>{
    e.target.style.backgroundColor = ""
})

idade.addEventListener("focus", ()=> {
    idade.style.backgroundColor = "lightgreen"
})

idade.addEventListener("blur", (e)=>{
    e.target.style.backgroundColor = ""
})

idade.addEventListener("change", ()=>{
    alert("Certeza que quer alterar seus dados?")
})

form.addEventListener("submit", ()=> {
    alert("Dados enviados com sucesso!")
})