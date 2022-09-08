let custo, produto, percentual
custo = prompt("Digite o seu custo: ")
console.log(custo)
percentual = prompt("Digite o seu percentual: ")
console.log(percentual)
produto = (parseInt(custo) + percentual/100 * custo)
alert("O valor final do produto é: " + produto)