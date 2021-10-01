



for (let i = 1 ; i <= 10 ; i++){
    let nombreAlumno = prompt("NOMBRE DEL ALUMNO")
    let apellidoAlumno = prompt("APELLIDO DEL ALUMNO")
    let primerNota = parseInt(prompt("INGRESE PRIMER NOTA"))
    let segundaNota = parseInt(prompt("INGRESE SEGUNDA NOTA"))
    let terceraNota = parseInt(prompt("INGRESE TERCERA NOTA"))
    let promedio = parseInt((primerNota + segundaNota + terceraNota) / 3 )


    console.log("Nombre: " + (nombreAlumno) + " Apellido: " + (apellidoAlumno) + " Promedio: " + (promedio))


}