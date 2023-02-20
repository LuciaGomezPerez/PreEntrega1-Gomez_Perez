//CATALOGO DE JUEGOS
let productos = { "elden ring": { precio: 8599 }, "hogwarts legacy": { precio: 8999 }, "dark souls": { precio: 5699 }, "signalis": { precio: 1060 }, "god of war": { precio: 4199 }, "rimworld": { precio: 2100 }, }

//IMPUESTOS
const calcularIva = a => a * 0.75;

//INPUTS CON CONDICIONALES Y CICLOS

let seleccion = prompt("Hola desea adquirir algún producto? ingrese si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("Dale no tengo todo el día")
    seleccion = prompt("Desea comprar algo si o no")
}
if (seleccion == "si") {
    console.log(productos)
    alert("Aqui tiene una lista de productos")
    comprar = prompt("Que producto quiere comprar?").toLowerCase()
} else if (seleccion == "no") {
    alert("Perfecto, tenga un buen día")
}

while (comprar !== "dark souls" && comprar !== "elden ring" && comprar !== "signalis" && comprar !== "rimWorld" && comprar !== "god of war" && comprar !== "hogwarts legacy") {
    alert("Por favor elija un producto")
    comprar = prompt("Que producto quiere comprar?").toLowerCase()
}
if (comprar == "dark souls" || comprar == "elden ring" || comprar == "signalis" || comprar == "rimWorld" || comprar == "god of war" || comprar == "hogwarts legacy") {
    let cantidad = parseInt(prompt("Cuantas unidades quieres?"))
    if (!isNaN(cantidad)) {
        let subtotal = cantidad * productos[comprar].precio;
        let total = subtotal + calcularIva(subtotal);
        console.log("Precio unitario: " + productos[comprar].precio + ", Precio total sin IVA: " + subtotal + ", Precio total con IVA: " + total)
        alert("Gracias vuelva prontos")
    } else {
        console.log("Flaco ingresa un número")
    }
}
