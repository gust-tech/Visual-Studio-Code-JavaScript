let n1, porc, result
n1 = prompt("Insira o valor: ")
porc = prompt("Insira a porcentagem(%): ")

function porcentagem(){
    result = parseInt(n1) * parseInt(porc)/100;
    return alert(result);
}
porcentagem(n1, porc);