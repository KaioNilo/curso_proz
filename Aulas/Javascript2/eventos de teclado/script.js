let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaEsquerda = 0;

document.addEventListener("keyup", (e) => {
    console.log(e);
    console.log(e.code);
    console.log(e.key);
    keyText.innerText = e.key;
    codeText.innerText = e.code;
})

document.addEventListener("keydown", (e)=> {
    if (e.code === "ArrowRight") {
        distanciaEsquerda = distanciaEsquerda + 10;
        console.log(distanciaEsquerda);

        quadrado.style.left = distanciaEsquerda + "px";
    }
})