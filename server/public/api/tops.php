<?php

define('INTERNAL', true);

require_once('functions.php');

set_exception_handler('error_handler');

session_start();

require_once('db_connection.php');

$cartID = intval($_SESSION['cartId']);

$query = "SELECT * FROM `Products` WHERE Products.Category = 'Top'";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception ('query failed' . mysqli_error($conn));
}

$output = [];
while($row = mysqli_fetch_assoc($result)){
  $output[] = $row;
}

$JSONdata = json_encode($output);
print($JSONdata);

?>
