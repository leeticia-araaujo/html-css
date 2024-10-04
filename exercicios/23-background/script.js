let divs = window.document.querySelectorAll('.box'); //cria um array que recebe todos os elementos com class box

for (let i = 0; i < divs.length; i++){
    divs[i].addEventListener('mouseenter', entrar); //adiciona um evento em cada posição do array
    divs[i].addEventListener('mouseout', sair);
}

function entrar(event) { //função será chamada quando o evento ocorrer

    let div = event.target; //event.target é uma referência ao objeto que disparou um evento

    if (div.id === 'div1') {
        div.innerHTML = '<p id="texto">Background-color <br> Define uma cor de fundo</p>';
    } else if (div.id === 'div2') {
        div.innerHTML = '<p id="texto">Background-color: gradiente <br> Define um gradiente de fundo</p>';
    } else {
        div.innerHTML = '<p id="texto">Background-image: url() <br> Define uma imagem de fundo</p>';
    }

    div.style.boxShadow = '1px 1px 10px rgba(0, 0, 0, 0.426)';
}

function sair(event) {
    
    let tipos = event.target;
    tipos.innerHTML = '';
    tipos.style.boxShadow = '1px 1px 5px #0000004d';
}