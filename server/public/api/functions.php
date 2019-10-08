<?php

function error_handler($error){
  header('HTTP/1.1 500 Internal Server Error');
  $output = [
    'success' => false,
    'error' => $error->getMessage()
  ];
  $jsonData = json_encode($output);
  print($jsonData);
}

function startUp(){
  header('Content-Type: application/json');
}

?>
