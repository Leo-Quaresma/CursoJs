var rest = window.document.getElementById('res')
function verificar() {
    var fim = document.getElementById('final')
    var passo = document.getElementById('passo')
    var inicio = document.getElementById('inicio')
   if(fim.value.length == 0 || passo.value.length == 0 || inicio.value.length == 0){
    alert('Preencha todos os campos')
   } else {
        rest.innerHTML = "Contando: "
        var f = Number(fim.value)
        var p = Number(passo.value)
        var i = Number(inicio.value)
        if (i < f){
            for(var c = i ; c <= f ; c += p) {
                rest.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (var c = i ; c >= f ; c -= p) {
                rest.innerHTML += `${c} \u{1F449}`
            }
        }
        rest.innerHTML += `\u{1F44D}`
   }
}