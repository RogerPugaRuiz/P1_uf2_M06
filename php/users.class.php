<?php

class Users{
    private $array_users;

    function __construct()
    {
        $this->array_users = [
            [
                "name"=>"John",
                "password"=>"123",
                "rol"=>"staff"
            ],
            [
                "name"=>"Jan",
                "password"=>"123",
                "rol"=>"operator"
            ]    
        ];
    }

    function get_user(String $name):array{
        foreach ($this->array_users as $user){
            if ($user["name"] == $name){
                return $user;
            }
        }
    }

    function add_user(String $name, String $password, String $rol){
        $this->array_users[] = [
            "name"=>$name,
            "password"=>$password,
            "rol"=>$rol
        ];
    }
}


$users = new Users();
$users->add_user("roger","1234","operator");
$user = $users->get_user("roger");
var_dump($user);



