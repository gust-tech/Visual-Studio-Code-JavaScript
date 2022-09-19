let hora, minuto, conversão
hora = prompt("Digite a hora: ")
minuto = prompt("Digite os minutos: ")

function converter_hora(hora){
    if(hora >= 12){
    conversão = hora - 12
    return (conversão)
    }
}

function imprime_hora(hora, minuto) {
    if (hora <= 12) {
        alert("São" +  hora +  "horas" +  "e " +  minuto +  "minutos" +  "AM")
    } else {
        alert("São" +  converter_hora(hora) +  "horas" +  "e" + minuto +  "PM");
    }
}
    imprime_hora(hora, minuto);