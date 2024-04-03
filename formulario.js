function registrarUsuario(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;

    var usuarioAutenticado = {
        nombre: nombre,
    };

    localStorage.setItem("usuarioAutenticado", JSON.stringify(usuarioAutenticado));

    window.location.href = "index.html";
}