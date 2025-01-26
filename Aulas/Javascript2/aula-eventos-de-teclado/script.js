const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");

linkPerfil.addEventListener("mouseover", (event)=> {
  navPerfil.style.display = "block";
})

// o code pega exatamente a localização física da tecla. o code é mais usado
// já o key vai pegar o valor e a sequência das teclas pressionadas
// 

window.addEventListener("keyup", (event) => {
  
  console.log(event.key);
  console.log(event.code);

  // evento de tecla e click juntos
  if (navPerfil.style.display == "block") {

    if (event.code == "Digit1") {
      linkPerfilDados.click();
    }

  } else if (event.code == "Digit1") {
    navPerfil.style.display = "block";
  }

  if (event.code == "Escape") {
    navPerfil.style.display = "none";
  }

})



/*  
//para colocar um R maiusculo usando key
if (event.ctrlKey && event.key == "r") {
  navPerfil.style.display = "block";
}
*/

