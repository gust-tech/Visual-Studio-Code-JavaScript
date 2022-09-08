let valor, result
valor = prompt("Valor depositado no banco: ")
console.log(valor)
result = parseFloat(valor * 0.70/100) + parseFloat(valor)
alert("\nEm um mês terá um rendimento de: " + result.toFixed(2))