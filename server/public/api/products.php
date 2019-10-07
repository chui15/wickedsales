<?php
require_once('functions.php');

set_exception_handler('error_handler');

require_once('db_connection.php');

startUp();

$output = file_get_contents('dummy-products-list.json');
print($output);

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
