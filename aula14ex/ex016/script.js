function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (p == 0) {
        res.innerHTML += 'Impossível contar com o passo ZERO, considerando o passo 1'
        p = 1
    }

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML += 'Impossível contar'
    } else {
        if (i <= f) {
            for (i; i <= f; i += p) {
                res.innerHTML += ` ${i}`
            }
        } else {
            for (i; i >= f; i -= p) {
                res.innerHTML += ` ${i}`
            }
        }
    }
}