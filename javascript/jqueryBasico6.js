var i = 1;
var valor = 0;
var msg = "";
var sorteado = "";

$(document).ready(function(){

    $("#sorteio").click(function(){
        $("#resultado h1").remove();

        valor = Math.floor(Math.random() * 10);
        msg = '<h1>' + valor + "</h1>";
        sorteado = '<li>Sorteio #'+i+' = '+valor+'</li>';

        $("#resultado").append(msg);
        $("#resultados ul").append(sorteado);
        i++;

    })
})//$(document).ready()