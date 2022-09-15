let n1, n2, n3, soma, media
n1 = prompt("Digite primeiro número: ")
n2 = prompt("Digite segundo número: ")
n3 = prompt("Digite terceiro número: ")
if(n1 <= 0, n2 <= 0, n3 <+ 0){
alert("Error")
}
while(n1 >= 0 && n2 >= 0 && n3 >=0){
soma =  parseInt(n1) + parseInt(n2) + parseInt(n3)
media = soma / 3		
alert("\nA soma é: " + soma + "\nA média é: " + media )
}
		