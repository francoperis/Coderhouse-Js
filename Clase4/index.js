/*function verificar (edad, supervisado) {
    
    if ( edad >= 13){
        return true;

    }

    else if( supervisado == true){
        return true;
    }
    else {
        return false;
    }
}

let edad  = parseInt(prompt("BIENVENIDO A CINEMAX, INGRESE SU EDAD"));
let tutor = prompt("VINO CON UN ALGUN TUTOR O FAMILIAR ? INGRESE : SI o NO")

if ( edad => 13){
    tutor = true
}
else if (tutor == "SI"){
    tutor = true
}
else{
    tutor =false
}


if (verificar (edad , tutor)){
    console.log("BIENVENIDO ! ")
}

else{
    console.log("NO PUEDE INGRESAR")
}


let edadUser = parseInt(prompt("BIENVENIDO A CINEMAX, INGRESE SU EDAD"));


function verificar (edad) {
    if (edad >= 13){
        alert("BIENVENIDO ! ")
    
    }
    else if(edad < 13){
        let supervisado = prompt("VINO CON UN ALGUN TUTOR O FAMILIAR ? INGRESE : SI o NO")
        if(supervisado.toLowerCase() === "si"){
            alert("BIENVENIDO ! ")
           
        }
    else {
        alert("NO PUEDE INGRESAR")
        
    }
    }
}




let entradaUser=parseInt(prompt("CUANTAS ENTRADAS QUIERE ?"))
cantidadEntrada = entradaUser

function precioEntrada (entrada){
    if(edad => 13 || supervisado == true){
        if (entrada => 2 && entrada < 4 ){
            alert ("Tenes un 10 % de descuento en el total de tus entradas :D")
        }
        else if (entrada => 4){
            alert ("Tenes un 20 % de descuento en el total de tus entradas :D")
        }
        else{
            alert("El precio de su entrada es de :" + 1000)
        }
}

    
}

*/


let edadUser = parseInt(prompt("INGRESE EDAD"));
let supervisado ;
let numeroEntrada ;


function verificar(edad) {
    if (edad >= 13) {
        alert("BIENVENIDO !")
    }
    else if (edad < 13){
        supervisado=prompt("VINO CON ALGUN FAMILIAR O TUTOR ? RESPONDA SI o NO")
        if (supervisado.toLowerCase()=== "si"){
            alert("Bienvenido !")
            return supervisado
            
        }
        else {
            alert("NO PUEDE INGRESAR ")
        }
    }
    
}

function cantidadEntrada (entrada) {
    if (edad => 13 || supervisado == "si"){
        numeroEntrada=parseInt(prompt(" INGRESE NUMERO DE ENTRADAS QUE DESEA "))
        if(numeroEntrada >= 2 && numeroEntrada < 4){
            alert(" TIENE UN 10% DE DESCUENTO EN SU COMPRA")
        }
        else if(numeroEntrada => 4 ){
            alert(" TIENE UN 20% DE DESCUENTO EN SU COMPRA")
        }
        else{
            alert("NO HAY DESCUENTO")
        }
    }
}




verificar(edadUser)
cantidadEntrada(numeroEntrada)
