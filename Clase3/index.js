console.log("BIENVENIDO A MI CALCULADORA DE JAVASCRIPT")

let operacion = prompt("ESCRIBIR QUE OPERACION DESEA REALIZAR: SUMA - RESTA - MULTI - DIVISION - ESC para salir")

while(operacion != "ESC"){
    let numeroUno = parseInt(prompt("INGRESE EL PRIMER NUMERO"))
    let numeroDos = parseInt(prompt("INGRESE OTRO NUMERO"))

    if(operacion == "SUMA"){
        console.log(numeroUno + numeroDos)
        alert(numeroUno + numeroDos)
    }

    else if (operacion == "RESTA"){
        console.log(numeroUno - numeroDos)
        alert(numeroUno - numeroDos)
    }

    else if(operacion == "MULTI"){
        console.log (numeroUno * numeroDos)
        alert(numeroUno * numeroDos)
    }

    else if (operacion == "DIVISION"){
        console.log (numeroUno / numeroDos)
        alert(numeroUno / numeroDos)
    }

    else{
        console.log("OPERACION NO ENCONTRADA")
        alert("OPERACION NO ENCONTRADA")
    }


}