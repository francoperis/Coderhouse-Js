/*let NombreVoto = prompt("INGRESE NOMBRE");
let EdadVoto = prompt("INGRESE EDAD");

EdadVoto = parseInt(EdadVoto)


if  (EdadVoto > 16) {

    alert("PODES VOTAR !!")
}

else  {
    alert("NO PODES VOTAR :( ")
}
*/

let NumeroA = prompt("PRIMER NUMERO")
let NumeroB= prompt("SEGUNDO NUMERO")

NumeroA = parseInt(NumeroA)
NumeroB = parseInt(NumeroB)

if (NumeroA < NumeroB) {
    console.log("EL NUMERO " + (NumeroB) + " ES MAYOR")
}

else {
    console.log ("EL NUMERO " + (NumeroA) + " ES MAYOR")
}