let n, pctg, cal1, cal2
n = prompt("Digite o número: ");
pctg = prompt("Digite a porcentagem: ");

function porcentagem(){

cal1 = pctg / 100;
cal2 = n * cal1;
return alert(cal2);

}

porcentagem()

