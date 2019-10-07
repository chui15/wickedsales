<?php

require_once('db_connection.php');

header('Content-Type: application/json');

if (empty($_GET['id'])) {
  readfile('dummy-products-list.json');
} else {
  readfile('dummy-product-details.json');
}

$query = "SELECT * from `Products`";

$result = mysqli_query($conn, $query);

if(!$result){
  throw new Exception('query error: ' . mysqli_error($conn));
}

$output = [];
while($row = mysqli_fetch_assoc($result)){
  $output[] = $row;
}

$jsonData = json_encode($output);
print($jsonData);

?>
