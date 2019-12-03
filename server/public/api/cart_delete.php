<?php

define('INTERNAL', true);
require_once('functions.php');
set_exception_handler('error_handler');
session_start();
require_once('db_connection.php');

$data = json_decode(file_get_contents('php://input'), 1);

$id = intval($data);

if (empty($_SESSION['cartId'])) {
  $data = json_encode([]);
  exit();
}

$cartID = intval($_SESSION['cartId']);

$deleteQuery = "DELETE FROM `cartItems` WHERE `productID` = $id && `cartID` = $cartID";

$deleteResult = mysqli_query($conn, $deleteQuery);

if (!$deleteResult) {
  throw new Exception('delete query failed' . mysqli_connect_error());
}

print(json_encode($data));

?>
