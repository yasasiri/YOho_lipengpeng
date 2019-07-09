<?php
header("content-type:text/html;charset=utf-8");
define('hot','localhost');
define('name','root');
define('pwd','');
define('doc','usrname');

$conn=new mysqli(hot,name,pwd,doc);
if($conn->connect_error){
    die('错了'.$conn->connect_error);
}
if(isset($_POST["email"])){
    $email=$_POST['email'];
    $pwd=sha1($_POST['pwd']);
    $sele="select * from uname where email='$email' and password='$pwd'";
    $rel=$conn->query($sele);
    echo json_encode ($rel->fetch_assoc());
}
if(isset($_POST["name"])){
    $name=$_POST['name'];
    $pwd=sha1($_POST['pwd']);
    $sele="select * from uname where name='$name' and password='$pwd'";
    $rel=$conn->query($sele);
    echo json_encode ($rel->fetch_assoc());
}


