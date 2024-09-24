function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#aabdc9'
    } else if (hora >= 12 && hora <= 18){
        // boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#9ab38d'
    } else {
        // boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#472d43'
    }
    
}
