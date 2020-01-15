function wri(){
    var num = parseInt(document.formDados.quantDados.value, 10);
    var quant = parseInt(document.formDados.quantDados.value, 10);
    var total = 0;
    var contador = "Resultados \n";
    var valoresDados = []

    for(cont = 0; cont < num; cont++){
        var numRand = Math.floor(Math.random() * 6 + 1);
        total += numRand;
        valoresDados[cont] = numRand;
        contador += "" +
        "Dado " + (cont + 1) + " resultou: " + numRand + "\n";
    }
    document.formDados.result.value = total;
    document.formDados.textar.value = contador + "Totalizado: " + total;
}