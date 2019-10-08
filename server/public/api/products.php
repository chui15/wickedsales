<?php
require_once('functions.php');

set_exception_handler('error_handler');

require_once('db_connection.php');

startUp();

if(isset($_GET['id'])){
  if (is_numeric($_GET['id'])){
    $whereClause = "WHERE `id` =" . $_GET['id'];
  } else {
    throw new Exception('id needs to be a number');
  }
} else {
  $whereClause = "";
}

$query = "SELECT * from `Products`" . $whereClause;

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
