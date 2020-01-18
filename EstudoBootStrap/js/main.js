$(function(){
    //equivalente ao loading da página

    $("#modal01").modal("show");

    setTimeout(function(){
        $("#modal01").modal("hide")
    }, 3000);

    $(".ttp").tooltip({
        animation:false,
        delay: {show: 1000, hide:5000}
    });

    $(".ppv").popover();

    $(".btnjs").button();

});