function procesarRegistro() {
    // Envía la solicitud al servidor para procesar el registro
    // (puedes usar Fetch API o XMLHttpRequest)
  
    // Supongamos que la respuesta del servidor es un objeto JSON con el nombre de usuario
    const nombreUsuario = "nom"; // Reemplázalo con la respuesta real del servidor
  
    // Oculta el formulario de registro
    document.getElementById('botonRegistro').style.display = 'none';
  
    // Muestra el mensaje de bienvenida con el nombre del usuario
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    mensajeBienvenida.innerHTML = `<h1>Bienvenido, ${nom}!</h1>`;
    mensajeBienvenida.style.display = 'block';
  
    // Evita el envío normal del formulario
    return false;
  }
  function submit() {
  
    var nom = document.getElementById("nom").value;

    // Puedes realizar validaciones adicionales aquí antes de proceder con el registro.

    // Reemplazar el botón por el nombre de usuario
    document.getElementById("submit").innerHTML = "<p>Bienvenido, " + nom + ".</p>";
}
productosSeleccionados.forEach(function (producto) {
  var fila = document.createElement("tr");
  fila.innerHTML = "<td><img src='" + producto.imagen + "' alt='" + producto.nombre + "'></td><td>" + producto.nombre + "</td><td>" + producto.precio + "</td>";
  tbody.appendChild(fila);
});

