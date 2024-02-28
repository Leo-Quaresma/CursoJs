function gerarTabuada(){
    var num = window.document.getElementById('txtn')
    var tab = document.getElementById('seltab')
        if(num.value.length == 0){
            alert('Preencha o campo')
        }
        else{
            let n = Number(num.value)
            let c = 1
            tab.innerHTML = ''
            while (c <= 10){
                let opt = document.createElement('option')
                opt.text = `${n} x ${c} = ${n*c}`
                tab.appendChild(opt)
                c++
            }

        }
    num.value = ''
    num.focus()
}