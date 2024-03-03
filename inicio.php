<?php

session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Página Principal</title>
</head>
<body>
  <h2>Bienvenido</h2>

  <?php
  
  if (isset($_SESSION['user'])) {
      echo "<p>Hola, " . $_SESSION['user'] . "!</p>";
  } else {
      echo "<p>Bienvenido a nuestra página!</p>";
  }
  ?>

 
</body>
</html>