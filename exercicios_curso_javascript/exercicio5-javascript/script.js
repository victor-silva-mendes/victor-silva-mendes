let numero = document.getElementById('id-numero');
let campo = document.getElementById('campo');
let res = document.getElementById('res');
var valores = [];

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100 ){ 
        return true;
    } else {
        return false;
    }
}

function inLista(n, a) {
    if (a.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value));
        var option = document.createElement('option');
        option.text = `Valor ${numero.value} adicionado`;
        campo.appendChild(option);
        res.innerHTML = "";
    }else {
        window.alert('Valor inválido ou já encontrado na lista');
    
    }
    numero.value = "";
    numero.focus()
}

function analisar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0] 
        let menor = valores[0]
        let soma = 0 
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }
}
