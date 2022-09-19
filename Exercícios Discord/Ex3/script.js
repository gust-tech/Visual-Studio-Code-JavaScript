let f, resposta
f = prompt("Insira Fahrenheit: ");

function ConversorFC(){
resposta = parseInt(f - 32) * 5 / 9
return alert(resposta.toFixed(2))
}
ConversorFC(f, resposta)