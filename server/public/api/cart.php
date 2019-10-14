<?php

define('INTERNAL', true);

require_once('functions.php');

set_exception_handler('error_handler');

session_start();

require_once('db_connection.php');

switch($_SERVER['REQUEST_METHOD']) {
  case 'POST':
    require('cart_add.php');
    break;
  case 'GET':
    require('cart_get.php');
    break;
}

?>
