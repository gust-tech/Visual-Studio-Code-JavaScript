let n1, n2, cal1, cal2, cal3
n1 = prompt("Digite o primeiro número: ");
n2 = prompt("Digite o segundo número: ");

function SMD (){

cal1 = parseInt(n1) + parseInt(n2)
cal2 = parseInt(n1) * parseInt(n2)
cal3 = parseInt(n1) / parseInt(n2)
return alert("Subtração: "+cal1+"\nMultiplicação: "+cal2+"\nDivisão: "+cal3);

}

SMD()