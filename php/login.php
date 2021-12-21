<?php
session_start();

require_once "users.class.php";
$users = new Users();
$data = json_decode(file_get_contents("php://input"));
$exist_user = $users->validate_user($data->name,$data->password);
$response = ["idSession" => $exist_user];
echo json_encode($response);

?>