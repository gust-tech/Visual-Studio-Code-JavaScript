let C, N, S, exc, adi, bru
N=20
C=prompt("Quantas horas você trabalhou: ");
console.log(C)
S=C*10
if(C <= 50){
("\nNão recebe hora extra!");
}else if (C >= 51){
alert("\nVocê vai receber hora extra!");
exc=C-50
alert("\nSuas horas extras são: " + exc);
adi=exc*20
alert("\nSua remuneração extra é: " + adi);
bru=(C*10)+(exc*10)
alert("\nSeu salário bruto é: " + bru);
}