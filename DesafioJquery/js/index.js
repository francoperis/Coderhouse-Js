function ingresarData(){

    let miUsuario = "Franco";
    let miClave = "1234";

    let usuario = $("#usuario").val();
    let pass = $("#contrasenia").val();
    let error = $(".error");
 
    if( miUsuario == usuario  && miClave == pass ){
        console.log("Bienvenido al sistema!");
        mostrarPerfil();
    }
    else{
        console.log("Datos incorrectos");
        error.css("display" , "block");
        error.html("Datos incorrectos!");
    }

}


$("#btn1").on("click" , ingresarData)


function mostrarPerfil(){
    $("#main").html(
          "<div id='caja'>"+
          "<h3>"+ usuario[0]+"</h3>"+
          "<p>"+ usuario[1] + "años"+"</p>"+
          "<img src="+ usuario[3]+">"+
          "<h4>"+ usuario[4]+"</h4>"+
          "<hr>"+
          "<p>"+usuario[2]+"</p>"+
          "<button id='agregarInfo'>Agregar descripcion</button>"+
          "<div id='info'></div>"+
          "</div>"

    )

    $("#agregarInfo").on("click" , agregarInfo);

}


function agregarInfo(){

    let parrafo = prompt("¿Que quieres agregar a tu perfil?");
    $("#info").append("<p>"+ parrafo +"</p>");

}


let usuario = [
    "Franco",
    27,
    "francoperis@gmail.com",
     "img/chico2.jpg",
     "Alumno "   
]