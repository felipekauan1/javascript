function verificar() {
    var anoatual = new Date().getFullYear()
    var txtanonasc = window.document.getElementById('txtanonasc')
    var res = window.document.getElementById('res')
    res.style.textAlign = 'center'

    if (txtanonasc.value < anoatual && txtanonasc.value > 0) {
        var txtsexo = document.getElementsByName('txtsexo')
        var idade = anoatual - txtanonasc.value
        res.innerHTML = `Idade calculada: ${idade}`
        if (txtsexo[0].checked) {
            res.innerHTML += `<p>Sexo Masculino</p>`
        } else {
            res.innerHTML += `<p>Sexo Feminino</p>`
        }
    } else {
        alert('Erro!')
    }
}