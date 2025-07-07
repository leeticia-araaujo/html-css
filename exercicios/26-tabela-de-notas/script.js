const botao = window.document.getElementById('btn');

botao.addEventListener('mouseenter', entrar);
botao.addEventListener('mouseout', sair);
botao.addEventListener('click', clicar);

function entrar(){
    botao.style.color = '#FDB1BA';
}

function sair(){
    botao.style.color = 'black';
}

function clicar(){

    let materia = window.document.getElementById('disciplina');
    let num1 = window.document.getElementById('nota1');
    let num2 = window.document.getElementById('nota2');
    let texto = window.document.getElementById('alerta');

    if(materia.value == 'sel' || num1.value.length == 0 || num2.value.length == 0){
        texto.innerHTML = 'Preencha todos os campos.';
        return;
    } else if (num1.value > 10 || num1.value < 0 || num2.value > 10 || num2.value < 0){
        texto.innerHTML = 'A nota deve ser entre 0 e 10';
        return;
    } else{
         texto.innerHTML = 'Nota enviada';
    }

    const nota1 = parseFloat(num1.value);
    const nota2 = parseFloat(num2.value);

    const media = (nota1 + nota2) / 2;

    let disciplinaSelecionada = materia.value;

    switch (disciplinaSelecionada){
        case 'math':
            document.getElementById('math-n1').textContent = nota1.toFixed(1);
            document.getElementById('math-n2').textContent = nota2.toFixed(1);
            document.getElementById('math-m').textContent = media.toFixed(1);
            break;
        case 'fis':
            document.getElementById('fis-n1').textContent = nota1.toFixed(1);
            document.getElementById('fis-n2').textContent = nota2.toFixed(1);
            document.getElementById('fis-m').textContent = media.toFixed(1);
            break;
        case 'quí':
            document.getElementById('qui-n1').textContent = nota1.toFixed(1);
            document.getElementById('qui-n2').textContent = nota2.toFixed(1);
            document.getElementById('qui-m').textContent = media.toFixed(1);
            break;
        case 'bio':
            document.getElementById('bio-n1').textContent = nota1.toFixed(1);
            document.getElementById('bio-n2').textContent = nota2.toFixed(1);
            document.getElementById('bio-m').textContent = media.toFixed(1);
            break;
        case 'soc':
            document.getElementById('soc-n1').textContent = nota1.toFixed(1);
            document.getElementById('soc-n2').textContent = nota2.toFixed(1);
            document.getElementById('soc-m').textContent = media.toFixed(1);
            break;
        case 'hist':
            document.getElementById('his-n1').textContent = nota1.toFixed(1);
            document.getElementById('his-n2').textContent = nota2.toFixed(1);
            document.getElementById('his-m').textContent = media.toFixed(1);
            break;
        default:
            texto.innerHTML = 'Disciplina não identificada';
    }

    materia.value = 'sel';
    num1.value = ' ';
    num2.value = ' ';

    calcularmedia();
}

function calcularmedia(){

    const mediae = window.document.getElementById('mediae');
    const mediah = window.document.getElementById('mediah');
    
    let matematica = window.document.getElementById('math-m');
    let fisica = window.document.getElementById('fis-m');
    let quimica = window.document.getElementById('qui-m');
    let biologia = window.document.getElementById('bio-m');
    let sociologia = window.document.getElementById('soc-m');
    let historia = window.document.getElementById('his-m');
    
    let mat = parseFloat(matematica.textContent);
    let fis = parseFloat(fisica.textContent);
    let qui = parseFloat(quimica.textContent);
    let bio = parseFloat(biologia.textContent);
    let soc = parseFloat(sociologia.textContent);
    let hist = parseFloat(historia.textContent);
    
    let res1 = (mat + fis + qui + bio) / 4;
    let res2 = (soc + hist) / 2;

    mediae.innerHTML = `${res1.toFixed(1)}`;
    mediah.innerHTML = `${res2.toFixed(1)}`;
}