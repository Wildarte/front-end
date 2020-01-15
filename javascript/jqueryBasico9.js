
$(function(){ //isso é uma contração para $(document).ready(function(){})
    $('#enviar').click(function(){

        //nessas duas linhas eu estou busando os valores dos campos nome e idade 
        var nome = $('#nome').val();
        var idade = $('#idade').val();

        alert(nome + " " + idade);
    })
})