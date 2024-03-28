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





