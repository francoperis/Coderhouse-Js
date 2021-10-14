// desafio arrays, mostrando objetos, clases, y arrays   este desafio contiene la parte del complementario 

alert("Bienvenido a Panera Rosa");



class Producto{ // creamos la clase producto y  agregamos los objetos. 
    constructor (id, nombreProducto, PrecioProducto, stock) {// cada clase va a tener estas propiedades , 

  this.idProducto = id;
  this.nombre = nombreProducto;
  this.PrecioProducto = PrecioProducto;
  this.stock = stock; 
} 
} 


// instanciamos los objetos, y los pasamos como parametros. 
let Producto1 = new Producto(001, "Torta Cheesecake oreo", 4000, 8);
let Producto2 = new Producto(002, "Torta marquisse de chocolate", 5500, 5);
let Producto3 = new Producto(003, "torta lemon pie ", 4500, 7);
let Producto4 = new Producto(004, "torta Carrot-Cake ", 4500, 3);
let Producto5 = new Producto(005, "torta Choco-torta ", 4500, 10);
let Producto6 = new Producto(006, "torta cheesecake frutos rojos", 4500, 9);

let ArrayProductos = [Producto1,Producto2,Producto3,Producto4,Producto5,Producto6]; // creamos/ inicializamos  el arreglo. 

console.log(ArrayProductos);


let Carrito = []; // creamos otro arreglo para el carrito. 

function Principal() {

    let opcionUsuario = mostrarProductos();

    while (opcionUsuario != 0){

        switch(opcionUsuario){
        case "1": 
        alert("Agregaste el producto: " + ArrayProductos[0].nombreProducto)
        agregarProducto(ArrayProductos[0]); 
        break// le mandamos el objeto producto que esta dentro de la posicion n del arreglo. 
    
   
        case "2": 
        alert("Agregaste el producto: " + ArrayProductos[1].nombreProducto)
        agregarProducto(ArrayProductos[1]);
        break

        case "3": 
        alert("Agregaste el producto: " + ArrayProductos[2].nombreProducto)
        agregarProducto(ArrayProductos[2]);
        break

        case "4": 
        alert("Agregaste el producto: " + ArrayProductos[3].nombreProducto)
        agregarProducto(ArrayProductos[3]);
        break

        case "5": 
        alert("Agregaste el producto: " + ArrayProductos[4].nombreProducto)
        agregarProducto(ArrayProductos[4]);
        break

        case "6": 
        alert("Agregaste el producto: " + ArrayProductos[5].nombreProducto)
        agregarProducto(ArrayProductos[5]);
        break

        default:
            alert("DATO INCORRECTO, POR FAVOR INGRESE UNA DE LAS OPCIONES!")
     
        } 

        opcionUsuario = mostrarProductos();


    } 

    console.log(Carrito);



} 



function mostrarProductos() {

    let opcionUsuario = parseInt(prompt("SELECCIONE QUE TIPO DE TORTA desea agregar: o  presiona 0 para salir: \n\n (PRESIONE 1) cheesecake-oreo \n\n (PRESIONE 2)- cheesecake frutos rojos \n\n (PRESIONE 3)-lemon pie \n\n (PRESIONE 4)- marquisse de chocolate \n\n (PRESIONE 5)- chocotorta \n\n(PRESIONE6)- carrot-cake" ));
    return opcionUsuario;



}


function agregarProducto(Producto){
    Carrito.push(Producto);

}



Principal();