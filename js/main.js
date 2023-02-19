let productos = {
"Elden ring": {precio: 8599
},
"Hogwarts legacy": {precio: 8999
},
"Dark souls": {precio: 5699
},
"Signalis": {precio: 1060
},
"God of war": {precio: 4199
},
"RimWorld": {precio: 2100
},
"JoJo's Bizarre Adventure: All-Star Battle R": {precio: 3499
},
}
const calcularIva = a => a * 0.75;

let seleccion = prompt("Hola desea adquirir algún producto? ingrese si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Dale no tengo todo el día")
    seleccion = prompt("Desea comprar algo si o no")
}
if (seleccion == "si"){
    alert ("Aqui tiene una lista de productos")
    console.log(productos)
    comprar = prompt("Que producto quiere comprar?")
} else if (seleccion == "no"){
    alert("Perfecto, tenga un buen día")
}

while (comprar !== "Dark souls" && comprar !== "Elden ring" && comprar !== "Signalis" && comprar !== "RimWorld" && comprar !== "God of war" && comprar !== "Hogwarts legacy" ){
    alert ("Por favor elija un producto")
    comprar = prompt("Que producto quiere comprar?")
} 
if (comprar == "Dark souls" || comprar == "Elden ring" || comprar == "Signalis" || comprar == "RimWorld" || comprar == "God of war" || comprar == "Hogwarts legacy" ) {
    let cantidad = parseInt(prompt("cuantas unidades quieres?"))
    let subtotal = cantidad * productos[comprar].precio;
    let total = subtotal + calcularIva(subtotal);
    console.log ("Precio unitario: " + productos[comprar].precio + ", Precio total sin IVA: " + subtotal + ", Precio total con IVA: " + total )
    alert ("gracias vuelva prontos")
}




// for (let index = 0; index < productos.length; index++) {
//     const element = productos[index];
//     document.write(element.nombre + " " + element.precio +"<br>")
//     console.log(index)
// }

