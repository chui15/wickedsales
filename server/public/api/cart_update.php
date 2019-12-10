<?php

define('INTERNAL', true);
require_once('functions.php');
set_exception_handler('error_handler');
session_start();
require_once('db_connection.php');

$data = json_decode(file_get_contents('php://input'), 1);

$id = intval($data['productID']);

if (empty($_SESSION['cartId'])) {
  $data = json_encode([]);
  exit();
}

$cartID = intval($_SESSION['cartId']);

$count = intval($data['count']);

$updateQuery = "UPDATE `cartItems` SET `count` = $count WHERE `productID` = $id && `cartID` = $cartID";

$updateResult = mysqli_query($conn, $updateQuery);

if (!$updateResult) {
  throw new Exception('count update query failed' . mysqli_error($conn));
}

print(json_encode($data));

?>
