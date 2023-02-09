$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000');

    $('#CPF').mask('000.000.000-00');

    $('#CEP').mask('(00) 00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            endereco: {
                required: true
            },      
            CEP: {
                required: true
            },           
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            telefone: 'Por favor, insira o seu telefone com DDD',
            CPF: 'Por favor, insira o seu CPF',
            endereço: 'Por favor, insira o seu endereço completo',
            CEP: 'Por favor, insira o seu CEP'
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})