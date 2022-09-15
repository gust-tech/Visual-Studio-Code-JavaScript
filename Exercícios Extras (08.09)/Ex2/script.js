let dias, anos, meses, dia
dias=prompt("Quantos dias de vida você tem: ")
anos=(dias / 365).toFixed(0);
meses=(dias / 30).toFixed(0);
dia=dias-(anos * 365)-(meses * 30).toFixed(0);
alert("\nSeus anos são: " + anos + "\nSeus meses de vida são: " + meses + "\nSeus dias de vida são: " + dias)
