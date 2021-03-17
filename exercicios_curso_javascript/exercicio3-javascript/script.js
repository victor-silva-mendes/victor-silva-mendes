function contador() {
    var inicio = document.querySelector('input#id-inicio').value;
    var fim = document.querySelector('input#id-fim').value;
    var passo = document.querySelector('input#id-passo').value;
    document.getElementById('resultado').innerHTML = "";
    if(inicio == "" || fim == "" || inicio == fim ){
       window.alert('[ERRO] Confira os dados e tente novamente ');
       document.getElementById('resultado').innerHTML = " Preparando para contar...";
    }else if(passo == 0) {
        window.alert('O passo não pode ser igual a 0, será considerado como 1');
        passo = 1
    } else if(inicio == "0" && fim == "0" ) {
        window.alert('[ERRO] Confira os dados e tente novamente ');
        document.getElementById('resultado').innerHTML = " Preparando para contar...";
    } else if (inicio < fim) {
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        while(inicio <= fim) {
            document.getElementById('resultado').innerHTML += " " + inicio;
            inicio += passo
        }
    } else {
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        while(inicio >= fim) {
            document.getElementById('resultado').innerHTML += " " + inicio;
            inicio -= passo
        }
    }
}



         