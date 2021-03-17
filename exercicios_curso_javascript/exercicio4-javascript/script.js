function calcular() {
    var numero = document.getElementById('id-numero').value
    if(numero != "") {
        numero = Number(numero)
        document.querySelector('select#caixa').innerHTML = ""
        var contador = 1
        while (contador <= 10){
            var opc = document.createElement('option');
            var res = document.createTextNode(`${numero} X ${contador} = ${numero * contador}`)
            opc.appendChild(res)
            document.getElementById('caixa').appendChild(opc)
            contador += 1
        }
    }else {
        window.alert('[ERRO] Verifique os dados e tente novamente')
        document.querySelector('select#caixa').innerHTML = ""
        var opc = document.createElement('option');
        var res = document.createTextNode("Digite um número acima")
        opc.appendChild(res)
        document.getElementById('caixa').appendChild(opc)
    }
}