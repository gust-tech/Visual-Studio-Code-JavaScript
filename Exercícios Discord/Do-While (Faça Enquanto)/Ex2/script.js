let num, soma, total = 0
num = prompt("Digite um numero: ")
do{
total = parseInt(total) + parseInt(num)
num--
soma = num + num
alert(total)
}while(num > 0)
alert(total)
