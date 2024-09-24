function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =  document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique o dados e tente novamente!')
    } else {
         var fsex = document.getElementsByName ('radsex')
         var idade = ano - Number(fano.value)
         res.innerHTML = `idade calculada: ${idade}`
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                //Criança
                img.setAttribute('src','imagens/baby-boy.png' )
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-homem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/homem.png' )
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
         } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'imagens/baby-girl.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
         res.appendChild(img)
    }
}
