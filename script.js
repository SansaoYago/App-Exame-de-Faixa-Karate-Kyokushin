function resultado() {
    var nome = window.document.getElementById('atleta')
    var idadeDoAtleta = window.document.getElementById('idade')
    var grad = window.document.getElementsByName('gd')
    var res = window.document.querySelector('div#classificacao')
    var atleta = (nome.value)
    var idade = Number(idadeDoAtleta.value)
    var graduação = ''
    var n = window.document.getElementById('nota')
    var nota = Number(n.value)
    var gradFaixa = ''
    var resultadoFinal = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    //Registro das faixas
    if (grad[0].checked) {
        graduação = '10° Kyu'
    } else if (grad[1].checked) {
        graduação = '9° Kyu'
    } else if (grad[2].checked) {
        graduação = '8° Kyu'
    } else if (grad[3].checked) {
        graduação = '7° Kyu'
    } else if (grad[4].checked) {
        graduação = '6° Kyu'
    } else if (grad[5].checked) {
        graduação = '5° Kyu'
    } else if (grad[6].checked) {
        graduação = '4° Kyu'
    } else if (grad[7].checked) {
        graduação = '3° Kyu'
    } else if (grad[8].checked) {
        graduação = '2° Kyu'
    } else if (grad[9].checked) {
        graduação = '1° Kyu'
    }
    // Resultado de Aprovação/Reprovação
    if (nota >= 6) {
        resultadoFinal = '<strong style=" color: green; ">Aprovado<strong>'
    } else if (nota >= 5.5 && nota < 6) {
        resultadoFinal = '<strong><span style=" color: rgb(255, 140, 0); sont-size: .5em;">Em Observação<span><strong>'
    } else {
        resultadoFinal = '<strong><span style=" color: red; sont-size: .5em;">Reprovado<span><strong>'
    }
    // Graduação do Aluno
    if (graduação == '10° Kyu' && nota >= 7) {
        gradFaixa = '8° Kyu'
        img.setAttribute('src', 'imagens/8°Kyu.png')
    } else if (graduação == '9° Kyu' && nota >= 7) {
        gradFaixa = '7° Kyu'
        img.setAttribute('src', 'imagens/7°Kyu.png')
    } else if (graduação == '8° Kyu' && nota >= 7 || graduação == '7° Kyu' && nota >= 7) {
        gradFaixa = '5° Kyu'
        img.setAttribute('src', 'imagens/5°Kyu.png')
    } else if (graduação == '6° Kyu' && nota >= 7 || graduação == '5° Kyu' && nota >= 7) {
        gradFaixa = '3° Kyu'
        img.setAttribute('src', 'imagens/3°Kyu.png')
    } else if (graduação == '4° Kyu' && nota >= 7 || graduação == '3° Kyu' && nota >= 7) {
        gradFaixa = '1° Kyu'
        img.setAttribute('src', 'imagens/1°Kyu.png')
    } else if (graduação == '2° Kyu' && nota >= 7 || graduação == '1° Kyu' && nota >= 7) {
        gradFaixa = '1° Dan'
        img.setAttribute('src', 'imagens/1°Dan.png')
    }

    if (graduação == '10° Kyu' && nota < 7) {
        gradFaixa = '9° Kyu'
        img.setAttribute('src', 'imagens/9°Kyu.png')
    } else if (graduação == '9° Kyu' && nota < 7) {
        gradFaixa = '8° Kyu'
        img.setAttribute('src', 'imagens/8°Kyu.png')
    } else if (graduação == '8° Kyu' && nota < 7 || graduação == '7° Kyu' && nota < 7) {
        gradFaixa = '6° Kyu'
        img.setAttribute('src', 'imagens/6°Kyu.png')
    } else if (graduação == '6° Kyu' && nota < 7 || graduação == '5° Kyu' && nota < 7) {
        gradFaixa = '4° Kyu'
        img.setAttribute('src', 'imagens/4°Kyu.png')
    } else if (graduação == '4° Kyu' && nota < 7 || graduação == '3° Kyu' && nota < 7) {
        gradFaixa = '2° Kyu'
        img.setAttribute('src', 'imagens/2°Kyu.png')
    } else if (graduação == '2° Kyu' && nota < 7 || graduação == '1° Kyu' && nota < 7) {
        gradFaixa = '1° Dan'
        img.setAttribute('src', 'imagens/1°Dan.png')
    }
    
    if (resultadoFinal == '<strong style=" color: green; ">Aprovado<strong>') {
        res.innerHTML = `${atleta}<br>${idade} Anos <br> Graduação: ${graduação} <br> Nota Final: ${nota} <br> Aluno: ${resultadoFinal} <br>`
         res.appendChild(img)
    } else {
        res.innerHTML = `${atleta}<br>${idade} Anos <br> Graduação: ${graduação} <br> Nota Final: ${nota} <br> Aluno: ${resultadoFinal}`
    }

    
    
    
}
