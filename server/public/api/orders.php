<?php

require_once('functions.php');

header('Content-Type: application/json');

if (!defined('INTERNAL')) {
  exit('Direct Access not allowed');
}

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
  $creditCard = $data['creditCard'];
} else {
  $errors[] = 'No credit card info provided';
}

if (count($errors)) {
  print_r($errors);
  exit;
}

$query = "INSERT INTO `Orders` (`Name`, `Address`, `creditCard`) VALUES ($name, $address, $creditCard)";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('order add insert query error: ' . mysqli_error($conn));
}

$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
}

$jsonData = json_encode($output);
print($jsonData);

?>
