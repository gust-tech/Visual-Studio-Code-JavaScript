let n1, n2, n3
n1 = prompt("Insira primeiro número: ")
n2 = prompt("Insira segundo número: ")
n3 = prompt("Insira terceiro número: ")

function numeromaior(){
    return alert(Math.max(n1, n2, n3))
}
function numeromenor(){
    return alert(Math.min(n1, n2, n3))
}

alert("O maior número é: ") 
numeromaior()
alert("O menor número é: ") 
numeromenor()