function gerar() {
    var tab = document.getElementById('seltab')
    var num = document.querySelector('#num')
    if (num.value == 0) {
        alert('[ERRO] Insira um número!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (var c=0;c<=10;c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}