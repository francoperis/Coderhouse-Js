let user ="";
let pass = "";



function ingreso(e){
    e.preventDefault();

    let userUserLogin = document.getElementById("userLogin");
    let passUserLogin = document.getElementById("passwordLogin")

    for(let i = 0 ; i <= localStorage.length; i++){

        user = localStorage.key(i);
        pass = localStorage.getItem(user);
        if ( user === userUserLogin.value && pass === passUserLogin.value){
            let mensaje = document.getElementById("mensajeError");
            mensaje.innerHTML = `<h3> INGRESO EXITOSO </h3>
                                <br>
                                <h4> Bienvenido </h4>`

            mensaje.style.backgroundColor = "green";
            mensaje.style.textAlign="center";
            

    
            let msjHola = document.getElementById("msjHola");
            msjHola.innerHTML= `Hola,  ${userUserLogin.value}`;
            setTimeout(redirectIndex, 2000);
            break; 
        }
    
        if ( userUserLogin.value ==="admin" && passUserLogin.value === "admin"){
            let mensaje = document.getElementById("mensajeError");
            mensaje.innerHTML = `<h3> INGRESO EXITOSO </h3>
                                <br>
                                <h4> Bienvenido </h4>`
            mensaje.style.backgroundColor = "green";
            mensaje.style.textAlign="center";
    
    
            let msjHola = document.getElementById("msjHola");
            msjHola.innerHTML= `Hola,  ${userUserLogin.value}`;
            setTimeout(redirectIndex, 2000);
            break; 
        }
        else {
            let mensaje = document.getElementById("mensajeError");
            mensaje.innerHTML=`<h3> ERROR AL INGRESAR </h3>
                                <br>
                                <h4>Ingrese usuario y/o password correcto<h4>
            `
            mensaje.style.backgroundColor = "red";
            mensaje.style.textAlign="center";
        }
    } 
}

let btn = document.getElementById("btnIngreso");
btn.addEventListener("click" , ingreso);

