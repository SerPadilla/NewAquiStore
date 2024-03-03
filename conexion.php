<?php 
$conn=new mysqli("localhost","root","123","aquistore");
if (mysqli_connect_error()) {
    printf("Falló la conexión: %s\n", mysqli_connect_error());
    exit();
}
if(!$conn){
    die("imposible conectarse, error en el servidor".mysqli_error($conn));
}
if(@mysqli_connect_error()){
    die("conexiona la BD fallado:".mysqli_connect_error().":".mysqli_connect_error());
}
return $conn;
?>