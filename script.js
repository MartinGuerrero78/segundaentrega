// Nombre del comercio
alert("Bienvenido/as a Náutica Guerrero");

// Nombre y Apellido
let nombreApellido = prompt("Por favor, ingrese su nombre y apellido aquí:");

// Bienvenida
alert(`Qué tal ${nombreApellido}, acá vas a tener la posibilidad de realizar tu pedido.`);

const productosNauticos = [
    { nombre: "Velero", precio: 150000 },
    { nombre: "Kayak", precio: 20000 },
    { nombre: "Salvavidas", precio: 1000 },
    { nombre: "Ancla", precio: 5000 },
    { nombre: "Chaleco salvavidas", precio: 2000 },
    { nombre: "Remo", precio: 1500 },
    { nombre: "Boyas", precio: 1200 }
];

let infoProductosNauticos = "Productos náuticos disponibles:\n";

for (const producto of productosNauticos) {
    infoProductosNauticos += `Nombre: ${producto.nombre} - Precio: ${producto.precio} pesos\n`;
}

alert(infoProductosNauticos);

// Funciones
function mostrarProductosNauticos() {
    let mensaje = "Productos Náuticos Disponibles:\n";

    for (let i = 0; i < productosNauticos.length; i++) {
        mensaje += `Nombre: ${productosNauticos[i].nombre} - Precio: ${productosNauticos[i].precio} pesos\n`;
    }

    alert(mensaje);
}

function encontrarProductoPorNombre(nombre) {
    const productoEncontrado = productosNauticos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

    if (productoEncontrado) {
        return productoEncontrado;
    } else {
        return null;
    }
}

let totalGastado = 0;

// Entrada de datos del cliente
const productoCliente = prompt("Ingresa el nombre del producto deseado:");

// Búsqueda de producto náutico
const productoElegido = encontrarProductoPorNombre(productoCliente);

// Mostrar resultados
if (productoElegido) {
    const precioConIVA = productoElegido.precio * 1.21; // 21% de IVA
    alert(`Has elegido un/a ${productoElegido.nombre}. El costo es de ${precioConIVA.toFixed(2)} pesos (IVA incluido).`);
    totalGastado += precioConIVA;
} else {
    alert("Lo siento, no tenemos ese producto disponible en nuestra tienda náutica.");
}

// Otra compra
let otraCompra = prompt("¿Quieres comprar algo más? (si/no)").toLowerCase();

while (otraCompra === "si") {
    mostrarProductosNauticos(); // Mostrar productos náuticos disponibles

    // Entrada de datos del cliente para la nueva compra
    const nuevoProductoCliente = prompt("Ingresa el nombre del nuevo producto deseado:");

    // Búsqueda de producto náutico para la nueva compra
    const nuevoProductoElegido = encontrarProductoPorNombre(nuevoProductoCliente);

    // Mostrar resultados para la nueva compra
    if (nuevoProductoElegido) {
        const precioConIVANuevo = nuevoProductoElegido.precio * 1.21; // 21% de IVA
        alert(`Has elegido un/a ${nuevoProductoElegido.nombre}. El costo es de ${precioConIVANuevo.toFixed(2)} pesos (IVA incluido).`);
        totalGastado += precioConIVANuevo;
    } else {
        alert("Lo siento, no tenemos ese producto disponible en nuestra tienda náutica.");
    }

    otraCompra = prompt("¿Quieres comprar algo más? (si/no)").toLowerCase();
}

// Mostrar total gastado
alert(`El total gastado en la tienda de náutica es de ${totalGastado.toFixed(2)} pesos. ¡Gracias por tu compra!`);

