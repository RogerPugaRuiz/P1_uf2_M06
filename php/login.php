<?php
session_start();
// array("John" => "123", "Jan"  => "123");
$array_users = [
    [
        "name"=>"John",
        "password"=>"123",
        "rol"=>"encargado"
    ],
    [
        "name"=>"Jan",
        "password"=>"123",
        "rol"=>"operario"
    ]    
];

//$userDataArray = Array("JOH121280" => "John", "JAN020578" => "Jane") ;



$username_entered;
$password_entered;

if (isset($_POST['submit'])) {
    $found = false;
    foreach ($array_users as $username => $password) {
        if ($_POST['username'] == $username && $_POST['password'] == $password) {
            $found=true;
        }
    }

    if(!$found){
        echo "Error username or password";
    }
}


//if($username = $username_entered && $password = $password_entered){      
//}


//if(isset($_POST['username']) && ($_POST['password'])){
//}





if(isset($_SESSION['username'])) { 
    $_SESSION['username'] = $_SESSION['username'] + 1; 
} 
else{ 
    $_SESSION['username'] = 1;    
} 
   //unset($_SESSION["username"]);
   //unset($_SESSION["password"]);
   
   
   header('index.html');
?>