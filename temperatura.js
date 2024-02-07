let resposta = document.getElementById('resposta')

function calcular(){
    let cel = Number(document.getElementById('cel').value)
    let calcula = (cel * 9 / 5) + 32
    resposta.innerHTML = "Isso da " + calcula + " graus Fahrenheit"
}