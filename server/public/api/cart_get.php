<?php

if (!defined('INTERNAL')) {
  exit('Direct Access not allowed');
}

if(empty($_SESSION['cartId'])){
  $data = json_encode([]);
  print($data);
  exit();
}

$cartID = intval($_SESSION['cartId']);

$dummyDataQuery = "SELECT Products.`ID`, Products.`Price`, Products.`Name`, Products.`Short Description`, Products.`Image`, cartItems.count FROM cartItems JOIN Products WHERE cartItems.productID = Products.ID";
$dummyResult = mysqli_query($conn, $dummyDataQuery);

if(!$dummyResult){
  throw new Exception('Dummy Data Query error: ' . mysqli_error($conn));
}

$output = [];
while($row = mysqli_fetch_assoc($dummyResult)){
  $output[] = $row;
}

$jsonData = json_encode($output);
print($jsonData);

?>
