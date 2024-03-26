function procesarRegistro() {
         
    const nombreUsuario = "nom"; 
  
   
    document.getElementById('botonRegistro').style.display = 'none';
  
  
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    mensajeBienvenida.innerHTML = `<h1>Bienvenido, ${nom}!</h1>`;
    mensajeBienvenida.style.display = 'block';
  
        return false;
  }
  function submit() {
  
    var nom = document.getElementById("nom").value;
    document.getElementById("submit").innerHTML = "<p>Bienvenido, " + nom + ".</p>";
}
productosSeleccionados.forEach(function (producto) {
  var fila = document.createElement("tr");
  fila.innerHTML = "<td><img src='" + producto.imagen + "' alt='" + producto.nombre + "'></td><td>" + producto.nombre + "</td><td>" + producto.precio + "</td>";
  tbody.appendChild(fila);
});

function registrarUsuario(event) {
  event.preventDefault();

  var nombre = document.getElementById("user").value;

  var usuarioAutenticado = {
      nombre: nombre,
  };

  localStorage.setItem("usuarioAutenticado", JSON.stringify(usuarioAutenticado));

  console.log("Usuario registrado:", usuarioAutenticado);
  window.location.href = "index.html";
}



