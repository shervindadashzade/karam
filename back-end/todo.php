<?php
include 'config.php';


$conn = new mysqli($host,$username,$password,'karam');


if($conn->connect_error){
    die("Connection failec: " . $conn->connect_error);
}


if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $sql = "SELECT * FROM Todos";
    $query = $conn->query($sql);
        if($query){
        $rows = array();
        while($r = mysqli_fetch_assoc($query)){
            $rows[] = $r;
        }
        echo json_encode($rows,JSON_UNESCAPED_UNICODE);
    }else{
        echo "error in getting datas " . $conn->error;
    }
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(empty($_POST['title']) || empty($_POST['color']) || empty($_POST['desc']) ) {
        die('همه فرم ها را پر کنید.');
    }else{
        $sql = "INSERT INTO Todos (title, color,description,done) VALUES ('". $_POST['title'] . "','" . $_POST['color'] . "','" . $_POST['desc'] . "'," .  "0)";
        $query = $conn->query($sql);
        if( $query == True){
            echo $conn->insert_id;
        }else{
            die('مشکل در ایجاد تسک' . $conn->error);
        }
    }
}



?>