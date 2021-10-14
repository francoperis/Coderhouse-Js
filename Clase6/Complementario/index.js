const ecommerce = [ {id: 1, nombre: "Ryzen 5600x", precio: 40000, stock: true},
                    {id: 2, nombre: "Mother ASUS 450", precio: 10000, stock: false},
                    {id: 3, nombre: "RAM 8GB HYPERX", precio: 7000, stock: true},
                    {id: 4, nombre: "SSD 240GB", precio: 5500, stock:true}
                ];

class Producto {
    constructor (producto) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.stock = producto.stock;
    }
}

const carrito = []

const comprar = (nombreProducto) =>{
    let producto = ecommerce.find(producto => producto.nombre == nombreProducto)
    if(producto){
        carrito.push(producto);
    }
    else{
        console.log("lo siento, no tenemos stock de este producto.")
    }
    }

const Fuente600w = new Producto ({id:5, nombre:"Fuente600w", precio:6600, stock:true});
ecommerce.push(Fuente600w)

comprar("SSD 240GB")
comprar("RTX 3090")
comprar("Mother ASUS 450")

console.log(carrito)

const FiltroNombre = (nombreProducto)=>{
    const buscar = ecommerce.filter(producto => producto.nombre === nombreProducto)
    console.log(buscar)
};

FiltroNombre ("Fuente600w");