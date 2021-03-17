function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoFor = document.getElementById('id-data-nascimento')
    var res = document.querySelector('div#res')
    if (anoFor.value.length == 0 || Number(anoFor.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else {
        var sexo = document.getElementsByName('name-sexo')
        var idade = ano - Number(anoFor.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('style', 'width:300px;', )
        if(sexo[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade < 13) {
                // Menino
                img.setAttribute('src', '../_imagens1/menino.png')
            }else if (idade < 18) {
                //Garoto
                img.setAttribute('src', '../_imagens1/garoto.png')
            }else if (idade < 50) {
                //homem
                img.setAttribute('src', '../_imagens1/homem.png')
            }else{
                //velho
                img.setAttribute('src', '../_imagens1/velho.png')
            }
        }else if(sexo[1].checked) {
            genero = 'mulher'
            if(idade >= 0 && idade < 13) {
                // Menino
                img.setAttribute('src', '../_imagens1/menina.png')
            }else if (idade < 18) {
                //Garoto
                img.setAttribute('src', '../_imagens1/garota.png')
            }else if (idade < 50) {
                //homem
                img.setAttribute('src', '../_imagens1/mulher.png')
            }else{
                //velho
                img.setAttribute('src', '../_imagens1/velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}