let s, f, ft = 0, st= 0, ms = 0, mc = 0.0
for(i = 1; i <= 20; i++){
s=prompt("Digite o seu rendimento: ")
console.log(s)
f=prompt("Digite quantidade de filhos: ")
console.log(f)
st = parseFloat(st) + parseFloat(s)
ft = parseFloat(ft) + parseFloat(f)
if(s > ms){
ms = s
}
if(s <= 100){
mc++
}
}
alert("O maior salário é: " + ms)
alert("A média de filhos é: " + ft/20)
alert("A média do salário é: " + st/20)
alert("Percentual de pessoas com salário até R$ 100: " + (mc/20)*100 + "%")