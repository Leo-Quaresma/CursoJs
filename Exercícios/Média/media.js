var res = document.getElementById('res')

function verificar(){
    res.innerHTML = ''
    var nome = prompt('Qual o nome do aluno?')
    var notab1 = Number(prompt(`Qual a primeira nota de ${nome}`))
    var notab2 = Number(prompt(`Qual a segunda nota de ${nome}`))
    var media = (notab1+notab2)/2
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas ${notab1} e ${notab2} sua <strong>média é ${media}</strong></p>`
    if(media > 6){
        res.innerHTML += '<p>Você passou! Parabéns!</p>'
    }
    else if (media >= 3) {
        res.innerHTML += 'Você não foi muito bem e está de <em>recuperação</em>'
    }
    else{
        res.innerHTML += 'Você foi reprovado'
    }
}