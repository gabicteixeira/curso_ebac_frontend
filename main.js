$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeDaTarefa = $('#nome-da-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<li>${nomeDaTarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(1000);
        $("li").click(function() {
            $("li").css("text-decoration", "line-through");
        });
        $('#nome-da-tarefa').val('');
    });
});

