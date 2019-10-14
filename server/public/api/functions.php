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

function getBodyData(){
  $data = json_decode(file_get_contents('php://input'), true);
  print_r($data);
  return $data;
}

?>
