<?php

define('INTERNAL', true);
require_once('functions.php');
set_exception_handler('error_handler');
session_start();
require_once('db_connection.php');

if (empty($_SESSION['cartId'])) {
  $data = json_encode([]);
  exit();
}

$cartID = intval($_SESSION['cartId']);

$data = json_decode(file_get_contents('php://input'), 1);

$errors = [];

if (isset($data['name'])) {
  $name = $data['name'];
} else {
  $errors[] = 'No name provided';
}
if (isset($data['shippingAddress'])) {
  $address = $data['shippingAddress'];
} else {
  $errors[] = 'No address provided';
}
if (isset($data['creditCard'])){
  $creditCard = intval($data['creditCard']);
} else {
  $errors[] = 'No credit card info provided';
}

if (count($errors)) {
  print_r($errors);
  exit;
}

$insertQuery = "INSERT INTO `Orders` (`Name`, `Address`, `creditCard`, `cartID`) VALUES ($name, $address, $creditCard, $cartID)";

$result = mysqli_query($conn, $insertQuery);

if (!$result) {
  throw new Exception('order add insert query error: ' . mysqli_error($conn));
}

$clearQuery = "DELETE FROM `cartItems` WHERE `cartID` = {$cartID}";

$clearResult = mysqli_query($conn, $clearQuery);

if (!$clearResult){
  throw new Exception('cart clear query error: ' . mysqli_error($conn));
}

?>
