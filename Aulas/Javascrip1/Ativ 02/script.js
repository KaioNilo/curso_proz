let elementoH1 = document.querySelector('h1');
elementoH1.innerText = 'Título H1'

let elementoA = document.querySelector('a');
elementoA.innerText = 'Texto do Link'

let listaNaoOrd = document.querySelector('ul');
listaNaoOrd.innerHTML = `<li>Item 01</li>
<li>Item 02</li>
<li>Item 03</li>`

let listaOrd = document.querySelector('ol');
listaOrd.innerHTML = `<li><a href="https://www.google.com/">Link Gooogle</a></li>
<li><a href="https://www.youtube.com/">Link YouTube</a></li>
<li><a href="https://www.google.com/maps">Link Maps</a></li>`