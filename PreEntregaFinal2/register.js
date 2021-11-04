

function newUser(e){
    e.preventDefault();

    newUserName = document.getElementById("newName").value;
    newUserLastname = document.getElementById("newLastName").value;
    newUserDni = document.getElementById("newDni").value;
    newUserEmail = document.getElementById("newEmail").value;
    newUserUser = document.getElementById("newUsuario").value;
    newUserPass = document.getElementById("newPassword").value;

    let confirma = prompt (` Son correctos los datos ingresados ? Indique si o no. Nombre: ${newUserName} . Apellido: ${newUserLastname} . DNI: ${newUserDni} . Email: ${newUserEmail} . Usuario: ${newUserUser} . Password: ${newUserPass}` );
    confirma = confirma.toLowerCase();
    if ( confirma = "si"){
        localStorage.setItem(newUserUser, newUserPass);
        alert("El registro fue completado correctamente");
        redirecIndex();
    }
    else{
        alert("Complete el registro nuevamente")
    }
}

let btnReg = document.getElementById("btnRegistro");
btnReg.addEventListener ("click" , newUser);