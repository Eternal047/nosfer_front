<?php
if(!defined('base_url')) define('base_url','http://localhost/nosfer_front/');
// Verificar si se recibieron los datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  // Obtener los datos del formulario
  $nombres = $_POST['nombres'];
  $apellidos = $_POST['apellidos'];
  $documento = $_POST['documento'];
  $tipo_sangre = $_POST['tipo_sangre'];
  $fecha_nacimiento = $_POST['fecha_nacimiento'];

  // Conectar a la base de datos
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "nosfer";

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Verificar si la conexión fue exitosa
  if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
  }

  // Preparar la consulta SQL para insertar los datos en la tabla category_list
  $sql = "INSERT INTO category_list (nombres, apellidos, documento, tipo_sangre, fecha_nacimiento) VALUES ('$nombres', '$apellidos', '$documento', '$tipo_sangre', '$fecha_nacimiento')";

  // Ejecutar la consulta SQL
  if ($conn->query($sql) === TRUE) {
    header("Location: " . $_SERVER["HTTP_REFERER"] . "?success=1");
    echo "<script>alert('Registro exitoso');</script>";
    echo "<script>window.location.href = '".$_SERVER["HTTP_REFERER"]."';</script>";
    exit();
  } else {
    echo "Error al almacenar los datos en la base de datos: " . $conn->error;
  }

  // Cerrar la conexión a la base de datos
  $conn->close();
}

?>
