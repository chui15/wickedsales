<?php

require_once('functions.php');

if (!defined('INTERNAL')){
  exit('Direct Access not allowed');
}

$bodyData = getBodyData();
if(!$bodyData['id']){
  throw new Exception('Must have a product id to add to cart');
} else {
  $id = intval($bodyData['id']);
}

if (!$id > 0){
  throw new Exception('Product id must be valid: ' . $bodyData['id']);
}

if(!empty($_SESSION['cartId'])){
  $cartID = $_SESSION['cartId'];
} else {
  $cartID = false;
}

$query = "SELECT Products.Price
    FROM Products
      WHERE `ID` = $id" ;

$priceResult = mysqli_query($conn, $query);

if(!$priceResult){
  throw new Exception('Select query error: ' . mysqli_error($conn));
}

$rowCount = mysqli_num_rows($priceResult);
if (!$rowCount > 0){
  throw new Exception('invalid product id: ' . $bodyData['id']);
}

$productData = [];
while ($row = mysqli_fetch_assoc($priceResult)){
  $productData = $row;
}

$startQuery = "START TRANSACTION";
$startResult = mysqli_query($conn, $startQuery);

if(!$startResult){
  throw new Exception('Start query error: ' . mysqli_error($conn));
}

if(!$cartID){
  $insertQuery = "INSERT INTO `cart` SET `created`=NOW()";
  $insertResult = mysqli_query($conn, $insertQuery);
  if (!$insertResult) {
    throw new Exception('Insert query error: ' . mysqli_error($conn));
  }
  $rowCheck = mysqli_affected_rows($conn);
  if (!$rowCheck === 1) {
    throw new Exception('Row was not inserted: ' . mysqli_error($conn));
  }
  $cartID = mysqli_insert_id($conn);
  $_SESSION['cartId'] = mysqli_insert_id($conn);
}

$quantity = intval($bodyData['count']);

$cartItemsQuery = "INSERT INTO `cartItems` SET count = {$quantity}, `productID`=$id, `price`= {$productData['Price']}, `added`= NOW(), `cartID` = $cartID
      ON DUPLICATE KEY UPDATE count = count + 1";

$cartItemResult = mysqli_query($conn, $cartItemsQuery);

if(!$cartItemResult){
  throw new Exception('cartItems insert query error: ' . mysqli_error($conn));
}

$cartItemRowCheck = mysqli_affected_rows($conn);
if (!$cartItemRowCheck < 0){
  $rollbackQuery = "ROLLBACK";
  $rollbackResult = mysqli_query($conn, $rollbackQuery);
  throw new Exception('Row not updated: ' . mysqli_error($conn));
}

$commitQuery = "COMMIT";
$commitResult = mysqli_query($conn, $commitQuery);

if(!$commitResult){
  throw new Exception('Commit query not valid ' . mysqli_error($conn));
}

print(json_encode($productData));

?>
