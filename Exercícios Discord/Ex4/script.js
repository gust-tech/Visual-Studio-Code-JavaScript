let peso, altura, resultado
peso = prompt("Qual seu peso: ")
altura = prompt("Qual sua altura: ")

function imc() {
resultado = parseFloat(peso) / parseFloat(altura * altura)
return alert(resultado.toFixed(2))
}
imc (peso, altura)