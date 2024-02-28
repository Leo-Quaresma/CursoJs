var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var date = new Date()
var hras = date.getHours()
msg.innerHTML= `Agora são ${hras} horas`
if (hras >= 5 && hras <= 12) {
    img.src = "manhacorte.png"
    document.body.style.background = '#f5cf65'
} else if (hras <= 18) {
    img.src = "tardecorte.png"
    document.body.style.background = '#c95e16'
} else {
    img.src = "noitecorte.png"
    document.body.style.background = '#122e4c'
}