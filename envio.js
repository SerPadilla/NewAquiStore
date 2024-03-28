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

productosSeleccionados.forEach(function (producto) {
    var fila = document.createElement("tr");
    fila.innerHTML = "<td><img src='" + producto.imagen + "' alt='" + producto.nombre + "'></td><td>" + producto.nombre + "</td><td>" + producto.precio + "</td>";
    tbody.appendChild(fila);
  });
