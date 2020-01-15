$(document).ready(function(){
    $('form').submit(function(event){
        if($('input:first').val() == "javascript"){
            $('span').text("Ok!").show().fadeOut(1000);

            window.open('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-KLGraxQ1uK3yfpKAfpKGSjIwlnHJFtClp--B6rZpmKHPSkcS',
            'janela nova', 'width=300, height=200');
            return;
        }

        $('span').text("invalido").show().fadeOut(1000);
        event.preventDefault();
    });

});