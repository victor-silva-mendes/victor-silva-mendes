
function carregar() {
    var msg = document.getElementById('mensagem')//atribui o elemento a uma variável
    var img = window.document.getElementById('imagem')//atribui o elemento a uma variável
    var data = new Date()// busca a data no navegador e atribui a variável
    var hora = data.getHours()// dentro da data colocada na variável busca somente a hora
    msg.innerHTML = `Agora são ${hora} horas.` //altera o conteúdo da variável e conseguentemente o conteúdo do elemento atribuido a variável
    // estrutura condicional que usa como condição a hora que foi buscada no navegador
    if(hora >= 0 && hora < 12) {
        //Bom dia
        img.src = '../_imagens1/imagem-redonda-manha.png' // altera o contéudo do atributo src do elemento
        document.body.style.backgroundColor = 'rgb(254, 208, 165)' // altera o estilo do elemento
    }else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = '../_imagens1/imagem-redonda-tarde.png' // altera o contéudo do atributo src do elemento
        document.body.style.backgroundColor = 'rgb(137, 192, 204)' // altera o estilo do elemento
    }else {
        //Boa noite
        img.src = '../_imagens1/imagem-redonda-noite.png' // altera o contéudo do atributo src do elemento
        document.body.style.backgroundColor = 'rgb(149, 117, 172)' // altera o estilo do elemento
    }
}