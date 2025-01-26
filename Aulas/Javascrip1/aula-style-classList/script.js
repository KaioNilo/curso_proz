const headingText = document.querySelector("h2");

const botao = document.querySelector("button");

const login = document.getElementById("login-usuario");

const senha = document.querySelector("input[type='password']");

const aviso = document.querySelectorAll(".error-text");


headingText.style.color = "#1e1e1e";
headingText.style.fontSize = "30px";

botao.style.background = "#088686"
botao.style.color = "#d9d9d9"

login.classList.add("correct");

senha.classList.add("error");
aviso[0].classList.add("visible");

login.classList.remove("error")
login.classList.add("correct");
aviso[0].classList.remove("visible");

senha.classList.add("error");
aviso[1].classList.add("visible")
