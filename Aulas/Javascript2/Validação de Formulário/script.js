//* CAPTURAR ELEMENTOS NO DOM E ASSOCIAR A VARIÁVEIS */

/*  USERNAME  */
let userInput = document.getElementById('username');
let userLabel = document.querySelector('label[for="username"]');
let userHelper = document.getElementById('username-helper');

/*  EMAIL  */
let emailInput = document.getElementById('email');
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById('email-helper');

/*  IDADE  */
let idadeInput = document.getElementById('idade');
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById('idade-helper');

/*  SENHA  */
let senhaInput = document.getElementById('senha');
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById('senha-helper');

/*  CONFIRMA SENHA  */
let confirmaSenhaInput = document.getElementById('confirma-senha');
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById('confirma-senha-helper');

/* SUBMIT */
let bnt = document.querySelector("button[type=submit]");



//---------------------------------------------//
/*FUNÇÃO GERAL TOGGLE POPUP */
function popup(input, label){

    /* MOSTRAR POPUP DE CAMPO OBRIGATÓRIO */
    input.addEventListener("focus", ()=>{
        label.classList.add('required-popup');
    });

    /* OCULTAR POPUP DE CAMPO OBRIGATÓRIO */
    input.addEventListener("blur", () => {
        label.classList.remove('required-popup');
    });
}

/* CHAMAR A FUNÇÃO POPUP */
popup(userInput, userLabel);
popup(emailInput, emailLabel);
popup(senhaInput, senhaLabel);
popup(confirmaSenhaInput, confirmaSenhaLabel);



//---------------------------------------------//
/* FUNÇÃO GERAL VALIDAR VALOR INPUT */
/* CORRETO*/
function inputCorreto(input, helper) {
    helper.classList.remove('visible');
    input.classList.remove('error');
    input.classList.add('correct');
}

/* INCORRETO*/
function inputIncorreto(input, helper) {
    helper.classList.add('visible');
    input.classList.add('error');
    input.classList.remove('correct');
}



//---------------------------------------------//
/* VALIDAR VALOR INPUT */

/* USERNAME */
userInput.addEventListener("change", (e)=> {
    let valor = e.target.value;
  
    if (valor.length < 3) {
        //Adicionar estilos dinâmicos se o valor estiver incorreto
        inputIncorreto(userInput, userHelper);
        userHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
        //Adicionando variável com valor para o submit/validação do formulário
        inputsCorretos.username = false;
    } else { 
        //Adicionar estilos dinâmicos se o valor estiver correto
        inputCorreto(userInput, userHelper);
        //Adicionando variável com valor para o submit/validação do formulário
        inputsCorretos.username = true;
    }
})


/*  EMAIL  */
emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if (valor.includes('@') && valor.includes('.com') === true) { 
        inputCorreto(emailInput, emailHelper);
        inputsCorretos.email = true;
    } else { 
        inputIncorreto(emailInput, emailHelper);
        emailHelper.innerText = "Insira um e-mail válido";
        inputsCorretos.email = false;
    }
})


/*  SENHA  */
senhaInput.addEventListener("blur", (e)=> {
    let valor = e.target.value;

    if (valor.length >= 6 === true) {
        inputCorreto(senhaInput, senhaHelper);
        inputsCorretos.senha = true;
    } else {
        inputIncorreto(senhaInput, senhaHelper);
        senhaHelper.innerText = "Sua senha precisa ter 6 ou mais caracteres";
        inputsCorretos.senha = false;
    }
})


/* CONFIRMAR SENHA  */
confirmaSenhaInput.addEventListener("blur", (e)=> {
    let valor = e.target.value;

    if (valor === senhaInput.value) {
        inputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
        inputsCorretos.confirmaSenha = true;
    } else {
        inputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
        confirmaSenhaHelper.innerText = "As senhas precisam seriguais";
        inputsCorretos.confirmaSenha = false;
    }
})


//---------------------------------------------//
/* SUBMETENDO FORMULÁRIO */

let inputsCorretos = {
    username: false,
    email: false,
    senha: false,
    confirmaSenha: false
} // Primeiramente eles são carregados com false, pois se eles forem true, o formulário será enviado com sucesso no 1° carregamento da página

bnt.addEventListener("click", (e) => {
    if (inputsCorretos.username == false || inputsCorretos.email == false || inputsCorretos.senha == false || inputsCorretos.confirmaSenha == false) {
        e.preventDefault();
        alert("Verifique os campos e tente novamente");
    } else {
        alert("Formulário enviado com sucesso!");
    }
})