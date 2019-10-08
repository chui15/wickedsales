<?php

function error_handler($error){
  http_response_code(500);
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
