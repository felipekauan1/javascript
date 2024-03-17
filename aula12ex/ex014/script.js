function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = 16
    msg.innerHTML = `Agora são ${hora} horas,`
    
    if (hora >= 0 && hora < 12) {
        img.src="manha.png"
        msg.innerHTML += ' Bom dia!'
        document.body.style.backgroundColor = '#c7d0cb'
    } else if (hora < 18) {
        img.src="tarde.png"
        msg.innerHTML += ' Boa Tarde!'
        document.body.style.backgroundColor = '#fac014'
    } else {
        img.src="noite.png"
        msg.innerHTML += ' Boa Noite!'
        document.body.style.backgroundColor = '#966d9a'
    }
}