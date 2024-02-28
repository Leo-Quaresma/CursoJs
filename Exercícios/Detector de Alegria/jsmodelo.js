var namorada = window.document.getElementById("namorada")
var felicidade = 0
var img = window.document.createElement('img')
img.setAttribute('id', 'foto')
var res = document.getElementById('res')
var facul = window.document.getElementsByName('facul')

function verificarNamorada(){
    switch(namorada.value.toLowerCase()){
        case('luana'):
        felicidade += 6;
        break;
    default:
        felicidade = 0    
    }
    verificarFacul()
}
function verificarFacul(){
    if (facul[0].checked){
        felicidade++
        console.log('Aumentou a felicidade')
    }
    else if (facul[1].checked){
        felicidade--
        console.log('Diminuiu a felicidade')
    }
    verificarFelicidade()
}
function verificarFelicidade(){
    if (felicidade <= 0){
        res.innerHTML = `Você está triste. Possui apenas ${felicidade} pontos de felicidade`
    } 
    else if (felicidade <= 4){
        res.innerHTML = `Você não tem a melhor namorada, mas tem ${felicidade} pontos de felicidade. Continue assim!`
    }
    else if (felicidade >= 5){
        res.innerHTML = `Você namora a gostosona da Luana? Que sortudo! Isso lhe concede ${felicidade} pontos de felicidade <p></p>`
        img.setAttribute('src', 'alegria.png')
        res.appendChild(img)
    }
}
