let soma=0, porcentagem=0, taxaImposto=0, custo=0, total=0
custo = prompt("Insira o valor aqui: ")
taxaImposto = prompt("Qual a porcentagem de imposto: ")

function somaImposto(custo, taxaImposto){
   
porcentagem = taxaImposto / 100
soma = parseFloat(custo) * parseFloat(porcentagem)

total = parseFloat(custo) + parseFloat(soma)
return (alert(total.toFixed(2)))
}
somaImposto(custo, taxaImposto);
