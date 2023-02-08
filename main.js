$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeDaTarefa = $('#nome-da-tarefa').val();
        $(`<li>${nomeDaTarefa}</li>`).appendTo("ul");
        riscar();
    });

    function riscar() {
        $("li").click(function(){
            $(this).css("text-decoration","line-through");
            
        })
    }
});

