<?php
header("Access-Control-Allow-Origin: *");
$conexiones = mysqli_connect("localhost","root","","sistemadegestion") or die(mysqli_error($conexiones));
$query = mysqli_query("SELECT * FROM libros") or die(mysqli_error($conexion));

$rows = array();
while($reg = mysqli_fetch_array($query)) {
	$rows = array();
}
echo json_encode($rows)
?>