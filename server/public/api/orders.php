<?php

define('INTERNAL', true);
require_once('functions.php');
set_exception_handler('error_handler');
session_start();
require_once('db_connection.php');

if (!isset($_SESSION['cartId'])) {
  $data = json_encode([]);
  exit();
}

$cartID = intval($_SESSION['cartId']);

$data = json_decode(file_get_contents('php://input'), true);


if (isset($data['name'])) {
  $name = $data['name'];
} else {
  throw new Exception('name error ' . mysqli_error($conn));
}
if (isset($data['shippingAddress'])) {
  $address = $data['shippingAddress'];
} else {
  throw new Exception('shipping address error ' . mysqli_error($conn));
}
if (isset($data['creditCard'])){
  $creditCard = intval($data['creditCard']);
} else {
  throw new Exception('credit card error ' . mysqli_error($conn));
}

$insertQuery = "INSERT INTO `Orders` (`Name`, `Address`, `creditCard`, `cartID`) VALUES ('$name', '$address', $creditCard, $cartID)";

$result = mysqli_query($conn, $insertQuery);

if (!$result) {
  throw new Exception('order add insert query error: ' . mysqli_error($conn));
}

$clearQuery = "DELETE FROM `cartItems` WHERE `cartID` = $cartID";

$clearResult = mysqli_query($conn, $clearQuery);

if (!$clearResult){
  throw new Exception('cart clear query error: ' . mysqli_error($conn));
}

print(json_encode($data));

// $getUpdatedOrders = "SELECT * FROM `Orders`";

// $ordersResult = mysqli_query($conn, $getUpdatedOrders);

// if (!$result) {
//   throw new Exception('sql error ' . mysqli_error($conn));
// }

?>
