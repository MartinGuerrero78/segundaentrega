document.addEventListener("DOMContentLoaded", function() {
    const nombreApellidoInput = document.getElementById("nombreApellidoInput");
    const mensajeBienvenida = document.getElementById("mensajeBienvenida");
    const productosDisponibles = document.getElementById("productosDisponibles");
    const metodosPagoSection = document.getElementById("metodosPagoSection");
    const metodoPagoSelect = document.getElementById("metodoPago");
    const resumenYFinalizarCompra = document.getElementById("resumenYFinalizarCompra");
    const resumenCompra = document.getElementById("resumenCompra");
    const finalizarCompraBtn = document.getElementById("finalizarCompraBtn");
    const modificarPedidoBtn = document.getElementById("modificarPedidoBtn");
    const mensajeModificarPedido = document.getElementById("mensajeModificarPedido");
    const mensajeDespedida = document.getElementById("mensajeDespedida");

    let productosSeleccionados = [];
    let metodoPagoSeleccionado = '';

    const productosNauticos = [
        { nombre: "Velero", precio: 150000 },
        { nombre: "Kayak", precio: 20000 },
        { nombre: "Salvavidas", precio: 1000 },
        { nombre: "Ancla", precio: 5000 },
        { nombre: "Chaleco salvavidas", precio: 2000 },
        { nombre: "Remo", precio: 1500 },
        { nombre: "Boyas", precio: 1200 }
    ];

    const enviarBtn = document.getElementById("enviarBtn");

    enviarBtn.addEventListener("click", function() {
        const nombreApellido = nombreApellidoInput.value.trim();
        if (nombreApellido !== "") {
            mensajeBienvenida.textContent = `¡Qué tal ${nombreApellido}, acá vas a tener la posibilidad de realizar tu pedido!`;
            mostrarProductos();
        } else {
            mostrarError("Por favor, ingrese su nombre y apellido.");
        }
    });

    function mostrarProductos() {
        productosDisponibles.style.display = "block";
        let mensaje = "Productos Náuticos Disponibles:<br>";

        for (const producto of productosNauticos) {
            mensaje += `<input type="checkbox" class="productoCheckbox" value="${producto.nombre}"> ${producto.nombre} - Precio: ${producto.precio} pesos<br>`;
        }

        productosDisponibles.innerHTML = mensaje;
        metodosPagoSection.style.display = "block";

        finalizarCompraBtn.addEventListener("click", function() {
            finalizarCompra();
        });

        modificarPedidoBtn.addEventListener("click", function() {
            modificarPedido();
        });
    }

    const seleccionarMetodoPagoBtn = document.getElementById("seleccionarMetodoPagoBtn");

    seleccionarMetodoPagoBtn.addEventListener("click", function() {
        metodoPagoSeleccionado = metodoPagoSelect.value;
        const checkboxes = document.querySelectorAll('.productoCheckbox:checked');
        productosSeleccionados = Array.from(checkboxes).map((checkbox) => checkbox.value);

        if (metodoPagoSeleccionado !== '' && productosSeleccionados.length > 0) {
            mostrarResumenCompra(productosSeleccionados);
        } else {
            mostrarError("Por favor, seleccione un método de pago y al menos un producto.");
        }
    });

    function mostrarResumenCompra(productosSeleccionados) {
        let totalGastado = 0;
        let mensaje = `<strong>Resumen de Compra:</strong><br><strong>Método de Pago:</strong> ${metodoPagoSeleccionado}<br>`;

        productosSeleccionados.forEach((nombreProducto) => {
            const producto = encontrarProductoPorNombre(nombreProducto);
            const precioConIVA = producto.precio * 1.21; // 21% de IVA
            totalGastado += precioConIVA;
            mensaje += `Has elegido un/a ${producto.nombre}. El costo es de ${precioConIVA.toFixed(2)} pesos (IVA incluido).<br>`;
        });

        mensaje += `<strong>Total Gastado:</strong> ${totalGastado.toFixed(2)} pesos`;

        resumenCompra.innerHTML = mensaje;
        resumenCompra.style.display = "block";
        resumenYFinalizarCompra.style.display = "block";
        finalizarCompraBtn.style.display = "block";
        modificarPedidoBtn.style.display = "block";
        mensajeModificarPedido.style.display = "block";

        finalizarCompraBtn.addEventListener("click", function() {
            finalizarCompra();
        });

        modificarPedidoBtn.addEventListener("click", function() {
            modificarPedido();
        });
    }

    function finalizarCompra() {
        mensajeDespedida.textContent = "¡Gracias por elegirnos!";
    }

    function modificarPedido() {
        mensajeDespedida.textContent = "Pedido modificado. ¡Continúa con tu compra!";
    }

    function mostrarError(mensaje) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = mensaje;
        errorDiv.style.color = 'red';
        document.body.appendChild(errorDiv);
    }

    function encontrarProductoPorNombre(nombre) {
        return productosNauticos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
    }
});
