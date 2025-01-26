const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]


// criando um laço para percorrer automaticamente
for (let i = 0; i < arrayPostagens.length; i++) {

  let titulo = arrayPostagens[i].titulo
  let subtitulo = arrayPostagens[i].subtitulo
  let data = arrayPostagens[i].data
  let texto = arrayPostagens[i].texto
  
  // criando elemento e associando a uma variavel
  const article = document.createElement("article");

  // populando o elemento 
  article.innerHTML = `<h3>${titulo}</h3>
    
  <p class="subtitulo">${subtitulo}</p>

  <div class="data">${data}</div>

  <p>${texto}</p>`

  // adicionando o elemento como filho com DOM
  const main = document.querySelector("main");
  main.appendChild(article);
}







