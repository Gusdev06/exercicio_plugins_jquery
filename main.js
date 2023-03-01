$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault()
    })
    $('#telefone').mask('(00) 00000-0000'),
    $('#cpf').mask('000.000.000-00'),
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },

            cpf: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, Insira o seu nome',
            email: 'Insira um email valido',
            telefone: 'Insira um numero de telefone valido',
        },
        invalidHandler: function(eventos,validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
