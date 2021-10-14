/*function producto  (id , nombreProducto, precio , stock , precioFinal){
    this.id =id;
    this.nombreProducto = nombreProducto;
    this.precio = precio;
    this.stock = stock;
    this.precioFinal = precioFinal;

    /*getprecioFinal(){
        this.precio = this.precio - (this.precio * 0.21);
        return this.precio;
    }
    
    getstock(){
        if ( this.stock > 0){
            return true
        }
        else {
            return false
        }
    }
    
}


let productoUno = new producto ("###", "Playstation 5" , 100000, 10, )
let productoDos = new producto ("###", "Xbox One" , 100000, 10)
*/

class Producto {
    constructor (id , nombreProducto, precio , stock){
        this.id =id;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.stock = stock;
        this.preciofinal = this.precio + (this.precio * 0.21);

        this.getprecioFinal = function(){
            return this.preciofinal
        }
        this.getstock = function(){
            if ( this.stock > 0){
                return this.stock
            }
            else {
                return this.stock
            }
        }
}
}

let Carrito = [];
let suma = 0;

function main(){
    let opcion = mostrarProductos();

    while(opcion != 0){
        switch(opcion){
            case 1:
                alert("Agregaste una " + galeriaProductos[0].nombreProducto)
                agregarProducto(galeriaProductos[0]);
                suma = suma + galeriaProductos[0].preciofinal;
                break;

            case 2:
                alert("Agregaste una "+ galeriaProductos[1].nombreProducto)
                agregarProducto(galeriaProductos[1]);
                suma = suma + galeriaProductos[1].preciofinal;
                break;
            default:
                alert("Ingreso incorrecto");
                break;
        }

        opcion = mostrarProductos();
    }
console.log(Carrito);
console.log("Total $" + (suma) + " con 21% IVA" )
}

let productoUno = new Producto ("###", "Playstation 5" , 100000, 10, 150)
let productoDos = new Producto ("###", "Xbox One" , 90000, 7)
let galeriaProductos = [productoUno,productoDos];


function mostrarProductos(){
    let opcion = parseInt(prompt("SELECCIONE PRODUCTO,\n\n Presione 0 para salir:\n\n 1- Playstation 5, presione 1\n\n 2- Xbox One, presione 2 "))
    return opcion;
}

function agregarProducto(producto){
    Carrito.push(producto);
}

main();


/*console.log(productoUno)
console.log(productoDos)
console.log ("El precio final es de : " + (productoUno.getprecioFinal()))
console.log ("El precio final es de : " + (productoDos.getprecioFinal()))
console.log ("El numero de stock de la Playstation 5 : "  +  (productoUno.getstock())   +  " El numero de stock de la Xbox One : " + (productoDos.getstock()))
*/