let num = document.getElementById('num')
let val = document.getElementById('val')
let res = document.getElementById('res')
let valores = []
let tot = 0
let maior = 0
let menor = 101
let soma = 0
let media = 0

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        let n = Number(num.value)

        valores.push(n)  
        
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        val.appendChild(item)

        tot += 1

        if (n > maior) {
            maior = n
        }

        if (n < menor) {
            menor = n
        }

        soma += n

        media = soma / tot
    } else {
        alert('[ERRO] Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function end() {
    res.innerHTML = ''

    if (valores.length == 0) {
        alert('[ERRO] insira valores a lista')
    } else {
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`

        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`

        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}