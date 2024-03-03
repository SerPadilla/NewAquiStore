<?php
include('conexion.php');
$user = $_POST['user'];
$nombre = $_POST['nombre'];
$apel = $_POST['apel'];
$ced = $_POST['ced'];
$edad = $_POST['edad'];
$tel = $_POST['tel'];
$dir = $_POST['dir'];
$email = $_POST['email'];
$cont = $_POST['cont'];

header("location: registrarme.html");
echo json_encode(['user' => $_POST['user']]);
exit;
$consulta = "INSERT INTO datos VALUES ('$user','$nombre','$apel','$ced','$edad','$tel','$dir','$email','$cont')";
mysqli_query ($conn, $consulta);

?>