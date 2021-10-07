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

function Producto  (id , nombreProducto, precio , stock){
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
            return true
        }
        else {
            return false
        }
    }
}
let productoUno = new Producto ("###", "Playstation 5" , 100000, 10, 1500)
let productoDos = new Producto ("###", "Xbox One" , 100000, 10)

console.log(productoUno)
console.log(productoDos)
console.log(productoDos.stock)
console.log(productoDos.getstock)