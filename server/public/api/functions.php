<?php

function error_handler($error){
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
