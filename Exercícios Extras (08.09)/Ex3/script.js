let segundos, horas, minutos
segundos=prompt("Qual a duração do evento: ")
horas=(segundos/24).toFixed(0);
minutos=(segundos/60).toFixed(0);
segundos=(segundos-(horas*24)+(minutos*60)).toFixed(0);
alert("\nSuas horas são: " + horas + "\nSeus minutos são: " + minutos + "\nSeus segundos são: " + segundos)
