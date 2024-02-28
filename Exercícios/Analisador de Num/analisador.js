var array = []
var num = document.getElementById('txtn')
var seltab = document.getElementById('valores')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, array)) {
        let number = Number(num.value)
        let opt = document.createElement('option')
        opt.text = `Valor ${number} adicionado`
        seltab.appendChild(opt)
        array.push(Number(num.value))
        res.innerHTML = ''
    }
    else{
        alert('Valor inválido, repetido ou campo vazio')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(array.length == 0) {
        alert('Tente adicionar um número')
    }
    else{
        var elements = array.length
        var soma = 0
        var maior = array[0]
        var menor = array[0]
        for (var pos in array){
            if(array[pos] < menor){
                menor = array[pos] // retorna o menor
            }
            if(array[pos] > maior){
                maior = array[pos] // retorna o maior
            }
        }
        for (var controle = 0; controle < elements; controle++){
            soma += array[controle]
        }
        var media = soma / elements
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${elements} números adicionados</p>` // número de elementos
        res.innerHTML += `<p>O menor número é ${menor} e o maior é ${maior}</p>`
        res.innerHTML += `<p>A soma dos seus número é ${soma}</p>` //
        res.innerHTML += `<p>A média dos números é ${media}</p>`       

    }
}