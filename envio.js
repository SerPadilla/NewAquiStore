function mostrarOcultarCampos(metodoPago) {
    if (metodoPago === 'tarjeta') {
        document.getElementById('datos-tarjeta').style.display = 'block';
        document.getElementById('seleccion-banco').style.display = 'none';
    } else if (metodoPago === 'transferencia') {
        document.getElementById('datos-tarjeta').style.display = 'none';
        document.getElementById('seleccion-banco').style.display = 'block';
    }
    calcularTotal();
}


function enviarConfirmacion() {
    window.location.href = "index.html";
}

function regresarAIndex() {
    window.location.href = "index.html";
}

// Suma de valores del precio// 


var productosSeleccionados = JSON.parse(localStorage.getItem('productosSeleccionados'));

if (productosSeleccionados && productosSeleccionados.length > 0) {
var tabla = document.createElement("table");
tabla.border = "1";
tabla.innerHTML = "<thead><tr><th>Imagen</th><th>Nombre</th><th>Precio</th></tr></thead><tbody id='productos-seleccionados'></tbody>";

var total = 0;
var tbody = tabla.querySelector("tbody");

productosSeleccionados.forEach(function (producto) {
    var fila = document.createElement("tr");
    fila.innerHTML = "<td><img src='" + producto.imagen + "' alt='" + producto.nombre + "'></td><td>" + producto.nombre + "</td><td>" + producto.precio + "</td>";
    tbody.appendChild(fila);
  
    // Normalizar el precio eliminando caracteres no numéricos y convertirlo a número
    var precioNumerico = parseFloat(producto.precio.replace(/[^\d.-]/g, ''));
    if (!isNaN(precioNumerico)) {
        total += precioNumerico;
    }
});

var filaTotal = document.createElement("tr");
filaTotal.innerHTML = "<td colspan='2'><strong>Total:</strong></td><td>" + formatearPrecio(total.toFixed(2)) + "</td>";
tbody.appendChild(filaTotal);

document.getElementById("informacion-carrito").appendChild(tabla);
} else {
var mensajeCarritoVacio = document.createElement("p");
mensajeCarritoVacio.textContent = "No hay productos seleccionados en el carrito.";
document.getElementById("informacion-carrito").appendChild(mensajeCarritoVacio);
}

// Función para formatear el precio
function formatearPrecio(precio) {
return parseFloat(precio).toLocaleString('es-CO', { minimumFractionDigits: 2 });
}



// Mostrar el total en la tabla
filaTotal.innerHTML = "<td colspan='2'><strong>Total:</strong></td><td>" + totalFormateado + "</td>";

  
    var metodoPagoRadios = document.querySelectorAll('input[name="metodoPago"]');
    metodoPagoRadios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'tarjeta') {
                document.getElementById('datos-tarjeta').style.display = 'block';
                document.getElementById('seleccion-banco').style.display = 'none';
            } else if (this.value === 'transferencia') {
                document.getElementById('datos-tarjeta').style.display = 'none';
                document.getElementById('seleccion-banco').style.display = 'block';
            }
        });
    });

   
   

    function mostrarOcultarCampos(opcion) {
        var datosTarjeta = document.getElementById('datos-tarjeta');
        var seleccionBanco = document.getElementById('seleccion-banco');

        if (opcion === 'tarjeta') {
            datosTarjeta.style.display = 'block';
            seleccionBanco.style.display = 'none';
        } else if (opcion === 'transferencia') {
            datosTarjeta.style.display = 'none';
            seleccionBanco.style.display = 'block';
        }
    }



