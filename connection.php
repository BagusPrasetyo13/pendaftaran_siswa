<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "pendaftaran_siswa";

$connect = new mysqli($host, $user, $pass, $db);

if ($connect->connect_error) {
  die("Connection failed: " . $connect->connect_error);
} 
// else {
//   echo "Connected successfully";
// }
