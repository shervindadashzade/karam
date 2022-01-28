<?php

include 'config.php';


$conn = new mysqli($host,$username,$password);


if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected to MySQL successfully.\n";

$sql = "CREATE DATABASE IF NOT EXISTS " . $db_name;

if($conn->query($sql)){
    echo "Karam database has been created.\n";

    $sql = "USE " . $db_name;
    
    if($conn->query($sql) == False){
        die("Error in selecting database. ". $conn->error . "\n");
    }

    $sql = "CREATE TABLE IF NOT EXISTS Todos(
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        color VARCHAR(60) NOT NULL,
        description TEXT NOT NULL,
        done BOOLEAN NOT NULL
        )";

    if($conn->query($sql)){
        echo "Todos table has been created.\n";
    }else{
        echo "Error in creating Todos table." . $conn->error ."\n";
    }


}else{
    echo "Error in creating karam database.\n";
}








?>