<?php
// Inicia la sesión (si no se ha iniciado)
session_start();

// Incluye el archivo de conexión a la base de datos
include("conexion.php");

// Obtén los datos del formulario de registro
$nombre = $_POST['nombre'];


// Inserta los datos del usuario en la tabla nombre_usuario
$consulta_insertar = "INSERT INTO nombre_usuario (nombre, apellido, contraseña) VALUES ('$nombre',)";

if ($conexion->query($consulta_insertar) === TRUE) {
    // Guarda el nombre de usuario en una variable de sesión
    $_SESSION['nombre_usuario'] = $nombre;

    // Redirige al usuario a la página principal
    header("Location: inicio.php");
    exit;
} else {
    echo "Error al registrar el usuario: " . $conexion->error;
}

// Cierra la conexión a la base de datos
$conexion->close();
?>