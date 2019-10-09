<?php
require_once('functions.php');

set_exception_handler('error_handler');

require_once('db_connection.php');

startUp();

if(isset($_GET['id'])){
  if (is_numeric($_GET['id'])){
    $whereClause = "WHERE Images.product_id =" . $_GET['id'];
  } else {
    throw new Exception('id needs to be a number');
  }
} else {
  $whereClause = "";
}

$query = "SELECT Images.product_id AS id,
	Products.Name, Products.Price, Products.`Short Description`,
  		GROUP_CONCAT(Products.Image) AS images
    		FROM Images
      			JOIN Products
        			ON Images.product_id = Products.ID
                  $whereClause
            				GROUP BY Images.product_id" ;

$result = mysqli_query($conn, $query);

$rowCount = mysqli_num_rows($result);
if(isset($_GET['id'])){
  if ($rowCount < 1){
    throw new Exception('invalid ID: ' . $_GET['id']);
  }
}

if(!$result){
  throw new Exception('query error: ' . mysqli_error($conn));
}

$output = [];
while($row = mysqli_fetch_assoc($result)){
  $row['images'] = explode(',' , $row['images']);
  $output[] = $row;
}

$jsonData = json_encode($output);
print($jsonData);

?>
