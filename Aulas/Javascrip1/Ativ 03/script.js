const titulo = document.createElement('h1')
titulo.innerText = "Título do Site"
titulo.id = "titulo"

const span = document.querySelector('span')
span.appendChild(titulo)


let produto = document.createElement('div')
produto.innerHTML = `<h3>Produto 01</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<h5>R$ 5,00</h5>`

let secaoProduto = document.querySelector('#produto')
secaoProduto.appendChild(produto)



console.log(titulo)
console.log(produto)
