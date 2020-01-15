var num = 0;
var tempo = setInterval(
    function(){
        num++;
        document.getElementById("telaContador").innerHTML = num;
        if(num == 100){
            clearInterval(tempo);
        }
    },
    1000
);

var incre = document.getElementById("incre");
var sort = document.getElementById("sort");
var nova = document.getElementById("nova");
var cont = 0;
var novoNum = 0;

var citacao = [];
citacao[0] = "O amor é bom para todos";
citacao[1] = "Devemos amar nossos inimigos";
citacao[2] = "A vingança nunca é plena, mata a alma e a envenena";

var cor = [];
cor[0] = "#cccccc";
cor[1] = '#ffff00';
cor[2] = '#ffcc00';
cor[3] = '#000000';
cor[4] = '#ffffff';
cor[6] = '#aaaaaa';

var rgba = "rgba(" +
(Math.floor(Math.random() * 255 )) + "," +
Math.floor(Math.random() * 255) + "," +
Math.floor(Math.random() * 255) + "," +
(Math.random()) + ")";

incre.addEventListener('click', addItem, false);
sort.addEventListener('click', addItem, false);
nova.addEventListener('click', addItem, false);

function addItem(){
    contador++;
    rgba = "rgba(" +
    (Math.floor(Math.random() * 255 )) + "," +
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + "," +
    (Math.random()) + ")";

    document.getElementById("fundoRandom").style.backgroundColor = rgba;
        alert("O valor de Contador é " + contador + "rgba " + rgba);
}

function novoSorteio(){
    novoNum = Math.floor(Math.random() * 20);
    var colorir = Math.floor(Math.random() * cor.length);

    document.getElementById('fundoRandom').style.backgroundColor = cor[colorir];
    alert("Resultado do sorteio: " + novoNum + "Nova cor: " + cor[colorir]);
}

function frase(){
    novoNum = Math.floor(Math.random()*citacao.length);
    alert("\"" + citacao[novoNum]);
}

var padrao = 18;

var atalho = document.getElementById("clique");
atalho.addEventListener("click", funcao, false);
function funcao(){
    document.write("Você clicou no botão");
}

function troca(cor){
    if(cor == "verde"){
        document.getElementById("squad").style.backgroundColor = "green";
    }else if(cor == "vermelho"){
        document.getElementById("squad").style.backgroundColor = "red";
    }
}

function pageColor(){
    var numRand = Math.floor(Math.random() * 2 + 1);
    if(numRand == 1){
        document.body.style.backgroundColor = "gray";
    }else{
        document.body.style.backgroundColor = "black";
    }

}

function pageWhite(){
    document.body.style.backgroundColor = '#ffffff';
}




function fonte(contador){
        
    if(contador == 18){
        padrao = contador
    }else{
        padrao += contador;
    }

    if(padrao >= 81){
        padrao = 81;
    }else if(contador < 9){
        padrao = 9   
    }

    document.getElementById("text").style.fontSize = padrao + "px";
}


//this function count characters
function contaChar(){
    document.forms[0].elements[1].value =
    document.forms[0].elements[0].value.length+1;
}