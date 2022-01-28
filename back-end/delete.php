<?php
include 'config.php';


$conn = new mysqli($host,$username,$password,$db_name);


if($conn->connect_error){
    die("Connection failec: " . $conn->connect_error);
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(empty($_POST['id'])){
        echo 'لطفا id را وارد کنید.';
    }else{
        $sql = "DELETE FROM Todos WHERE id=".$_POST['id'];
        if($conn->query($sql) == True){
            echo 'تسک با موفقیت حذف شد.';
        }else{
            echo 'مشکل در حذف تسک' . $conn->error;
        }
    }
}


?>