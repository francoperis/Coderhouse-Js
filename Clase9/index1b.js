//ARMAR UN FORMULARIO INGRESANDO 2 DATOS, QUE NO ESTEN VACIOS
//LUEGO VALIDAR Y SUSTITUIR FORMULARIO CON UN MENSAJE DE BENVENIDA
// O DE ERROR



function validar (e){


    e.preventDefault();

    let idUser = document.getElementById("idUser")
    let idPassword = document.getElementById("idPassword")


    if ( idUser.value != "" && idPassword.value != ""){
        let formulario = document.getElementById("form")
        formulario.style.display="none";

        let mensaje = document.getElementById("mensaje")
        mensaje.innerHTML=` <h1> Bienvenido a el sistema, ${idUser.value}</h1>`
        mensaje.style.textAlign = "center";
        mensaje.style.fontSize = "30 px"
        mensaje.style.letterSpacing = "2px"
        mensaje.style.backgroundColor = "#b22222"
        mensaje.style.borderRadius = "10px"
        mensaje.style.padding = "10px"
        

    }

    else{
        let formulario = document.getElementById("form")
        formulario.style.display="none";

        let mensaje = document.getElementById("mensaje")
        mensaje.innerHTML=` <h1>Error al entrar al sistema </h1>`
        mensaje.style.textAlign = "center";
        mensaje.style.fontSize = "30 px"
        mensaje.style.letterSpacing = "2px"
        mensaje.style.backgroundColor = "#b22222"
        mensaje.style.borderRadius = "10px"
        mensaje.style.padding = "10px"


    }
}

let btn = document.getElementById("enviarForm");
btn.addEventListener("click", validar)