<?php
include 'config.php';


$conn = new mysqli($host,$username,$password,'karam');


if($conn->connect_error){
    die("Connection failec: " . $conn->connect_error);
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(empty($_POST['id'])){
        echo 'لطفا id را وارد کنید.';
    }else{
        $sql = "UPDATE Todos SET done=1 WHERE id=".$_POST['id'];
        if($conn->query($sql) == True){
            echo 'تسک با موفقیت آپدیت شد.';
        }else{
            echo 'مشکل در آپدیتس تسک' . $conn->error;
        }
    }
}


?>