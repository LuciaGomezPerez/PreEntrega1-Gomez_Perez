
//LISTA DE JUEGOS Y CARRITO

const juegos =
    [
        {
            id: 1,
            nombre: "elden ring",
            descripcion: "i'm malenia blade of miquella",
            precio: 8599,
            stock: 10,
            cantidad: 0,
        },

        {
            id: 2,
            nombre: "dark souls",
            descripcion: "plin plin plon",
            precio: 5699,
            stock: 10,
            cantidad: 0,
        },

        {
            id: 3,
            nombre: "hogwarts legacy",
            descripcion: "you're a wizard harry",
            precio: 8999,
            stock: 10,
            cantidad: 0,
        },

        {
            id: 4,
            nombre: "signalis",
            descripcion: "achtung achtung",
            precio: 1060,
            stock: 10,
            cantidad: 0,
        },

        {
            id: 5,
            nombre: "god of war",
            descripcion: "boy",
            precio: 4199,
            stock: 10,
            cantidad: 0,
        },

        {
            id: 6,
            nombre: "rimworld",
            descripcion: "furros",
            precio: 2100,
            stock: 10,
            cantidad: 0,
        },
    ]

const carrito = [];

console.log(carrito)
console.log(juegos)

//FUNCIONES

function product(element) {
    let listaE = ""
    element.forEach(juego => {
        listaE += `ID: ${juego.id} Nombre: ${juego.nombre} Precio: ${juego.precio} Stock: ${juego.stock}\n`
    })
    return listaE;
}
console.log(product(juegos))

function confirmarCompra(el) {
    let listaDeCompras = ""
    el.forEach(juego => {
        listaDeCompras += '- ID: ' + juego.id + ' Nombre: ' + juego.nombre + ' | Cantidad: ' + juego.cantidad + '\n\n'
    })
    return listaDeCompras;
}

function calcular(arr) {
    let resultado = 0;
    arr.forEach(juego => {
        resultado += juego.precio * juego.cantidad
    })
    return resultado;
}

function calcularI(arr) {
    let preciofinal = 0;
    let resultado = 0;
    arr.forEach(producto => {
        resultado += producto.precio * producto.cantidad
        preciofinal = resultado * 1.75
    })
    return preciofinal;
}



rta = ""
do {

    let id = parseInt(prompt("Ingrese el ID del producto que le interesa" + "\n\n" + product(juegos) + "\n"))

    if (!isNaN(id)) {

        console.log(id)

        if (juegos.some(juego => juego.id == id)) {

            let cantidad = parseInt(prompt("Cuantas unidades quieres?"))
            const juegoIndice = juegos.findIndex(juego => juego.id == id)

            if (cantidad <= juegos[juegoIndice].stock && juegos[juegoIndice].stock >= 1) {

                juegos[juegoIndice].cantidad = cantidad;
                carrito.push(juegos[juegoIndice])
                juegos[juegoIndice].stock = juegos[juegoIndice].stock - cantidad;
                console.log(juegos[juegoIndice].stock)

            } else {

                alert("El numero ingresado excede nuestro stock, que actualmente es: " + juegos[juegoIndice].stock)

            }

        } else {

            alert("El ID ingresado no existe.")

        }

    } else {

        alert("Flaco ingresa un número")
    }

    rta = prompt("Desea seguir comprando? si o no").toLowerCase()

} while (rta != "no") {

    confirmarCompra(carrito)
    respuesta = prompt(`Su carrito esta compuesto por: \n\n${confirmarCompra(carrito)} Su subtotal es: ${calcular(carrito)}\n\n Desea eliminar algún producto?`)

    if (respuesta == "si") {

        const eliminar = parseInt(prompt('Ingrese ID de producto a eliminar de la lista \n' + confirmarCompra(carrito)));

        //ELIMINA UNO DE LA CANTIDAD (no supe como implementarlo para que elimine repetidamente más de un item. Con una function? o con un if else? AAA)
        // carrito[eliminar - 1].cantidad--

        //ELIMINA PRODUCTO COMPLETO
        carrito.splice(eliminar-1,1)
        alert(confirmarCompra(carrito))
        alert('TICKET: \n\n Precio sin IVA: ' + calcular(carrito) + ' Precio final con IVA: ' + calcularI(carrito) + '\n\n Gracias por su compra!')

    } else {

        alert('TICKET: \n\n Precio sin IVA: ' + calcular(carrito) + ' Precio final con IVA: ' + calcularI(carrito) + '\n\n Gracias por su compra!')
        rta = "no"
    }
}
