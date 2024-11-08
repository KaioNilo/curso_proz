var logo = document.getElementById('logo');

console.log(logo)


var autores = document.getElementsByClassName('post-autor')
for (var i = 0; i < autores.length; i++) {
    console.log(autores[i]);
}


var post = document.getElementById('post02');
console.log(post);


var form = document.getElementById('formulario');
console.log(form);


var secao = document.getElementById('posts');
console.log(secao);


var datas = document.getElementsByClassName('post-data');
for( var j = 0; j < datas.length; j++) {
    console.log(datas[j].innerText);
}

var textos = document.getElementsByClassName('post-texto');
for( var k = 0; k < textos.length; k++) {
    console.log(textos[k]);
}

var redes = document.getElementsByClassName('lista_redes');
for( var l = 0; l < redes.length; l++) {
    console.log(redes[l]);
}