function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebe-h.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-h.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-h.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-h.jpeg')
            }
            
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-m.jpeg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-m.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}