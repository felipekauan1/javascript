var data = new Date()
var diadasemana = data.getDay()

function retornardiadasemana(diadasemana) {
    switch (diadasemana) {
        case 0:
            return 'domingo';
        case 1:
            return 'segunda-feira';
        case 2:
            return 'terça-feira';
        case 3:
            return 'quarta-feira';
        case 4:
            return 'quinta-feira';
        case 5:
            return 'sexta-feira';
        case 6:
            return 'sábado';
        default:
            return 'dia inválido'
    }
}

console.log(retornardiadasemana(diadasemana))