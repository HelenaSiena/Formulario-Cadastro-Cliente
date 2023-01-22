$(document).ready(function() {

     /**JQuery Mask Plugin */
    $('#telefone').mask('(000) 00000-0000', {
        placeholder: '(DDD) + número do celular',
    });
    $('#CPF').mask('000.000.000-00', {
        placeholder: 'Digite apenas os números do seu CPF',
    });
    $('#CEP').mask('00000-000', {
        placeholder: 'Digite apenas os números do seu CEP',
    });


     /**JQuery Validate */
     /**Trabalha com elementos tipo name */
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
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu número de celular',
            CPF: 'Por favor, insira seu CPF',
            endereco: 'Por favor, insira seu endereço completo',
            CEP: 'Por favor, insira seu CEP'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

});