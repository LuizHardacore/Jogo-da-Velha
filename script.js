var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");
var  vencedorSelecionado = document.getElementById("vencedor-selecionado");
var quadrados = document.getElementsByClassName('quadrado');


mudarJogador('x');

function escolherQuadrado(id){
    
    if(vencedor != null) return;

    var quadrado = document.getElementById(id);
    
    if (quadrado.innerHTML !== '-') {
        console.log("esse quadrado já foi escolhido - id: " + id); 
        return;
    }
    
    console.log("quadrado escolhido - id: " + id);
    quadrado.innerHTML = jogador;
    quadrado.style.color = 'black';
    quadrado.style.fontSize = '40px';

    if (jogador === 'x') jogador = 'o';
    else if (jogador === 'o') jogador = 'x';

    mudarJogador(jogador);
    checarVencedor();
    checarVelha();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor(){
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');

    if (checarQuadrados(quadrado1, quadrado2, quadrado3)){
        mudarcor(quadrado1, quadrado2, quadrado3);
        pegarVencedor(quadrado1);
        return;
    }
    if (checarQuadrados(quadrado4, quadrado5, quadrado6)){
        mudarcor(quadrado4, quadrado5, quadrado6);
        pegarVencedor(quadrado4);
        return;
    }
    if (checarQuadrados(quadrado7, quadrado8, quadrado9)){
        mudarcor(quadrado7, quadrado8, quadrado9);
        pegarVencedor(quadrado7);
        return;
    }
    if (checarQuadrados(quadrado1, quadrado4, quadrado7)){
        mudarcor(quadrado1, quadrado4, quadrado7);
        pegarVencedor(quadrado1);
        return;
    }
    if (checarQuadrados(quadrado2, quadrado5, quadrado8)){
        mudarcor(quadrado2, quadrado5, quadrado8);
        pegarVencedor(quadrado2);
        return;
    }
    if (checarQuadrados(quadrado3, quadrado6, quadrado9)){
        mudarcor(quadrado3, quadrado6, quadrado9);
        pegarVencedor(quadrado3);
        return;
    }
    if (checarQuadrados(quadrado1, quadrado5, quadrado9)){
        mudarcor(quadrado1, quadrado5, quadrado9);
        pegarVencedor(quadrado1);
        return;
    }
    if (checarQuadrados(quadrado3, quadrado5, quadrado7)){
        mudarcor(quadrado3, quadrado5, quadrado7);
        pegarVencedor(quadrado3);
        return;
    }
}

function pegarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarcor(quadado1, quadado2, quadado3){
    quadado1.style.backgroundColor = '#2bff00';
    quadado2.style.backgroundColor = '#2bff00';
    quadado3.style.backgroundColor = '#2bff00';
}



function checarQuadrados(quadado1, quadado2, quadado3){
    var igual = false;

    if(quadado1.innerHTML != '-' && quadado1.innerHTML === quadado2.innerHTML && quadado2.innerHTML === quadado3.innerHTML){
        igual = true;
    }
        

    return igual;

}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = " ";


    for(var i = 1; i <= 9; i++){
        quadrado = document.getElementById(i);
        quadrado.innerHTML = '-';
        quadrado.style.color = '#eee';
        quadrado.style.backgroundColor = '#eee';
    }
}
