<?php

?><?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nosfer";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener el dato enviado por el método POST
$search = $_POST['documento'];

// Consulta a la base de datos
$sql = "SELECT * FROM category_list WHERE documento = '$search'";
$result = $conn->query($sql);

// Mostrar los datos encontrados
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $id= $row["id"];
        $nombres=$row["nombres"];
        $Apellidos=$row["apellidos"];
        $Documento=$row["documento"]; 
        $Tipo_de_sangre=$row["tipo_sangre"];
        $Fecha_de_nacimiento=$row["fecha_nacimiento"];
    }
    include_once 'ui-info_donante.php';
} else {
    echo "No se encontraron resultados";
}

$conn->close();
?>
