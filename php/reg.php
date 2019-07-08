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
$conn->query('SET NAMES UTF8');

    $user_name = $_POST['name'];
    $user_email = $_POST['email'];
    $user_pwd = sha1($_POST['pwd']);
   $conn->query("INSERT INTO `uname` (`id`, `name`, `email`, `password`) VALUES (NULL, '$user_name', '$user_email', '$user_pwd')");
   echo '<script> location.href = "http://10.31.158.25/1905/YOho_lipengpeng/src/login.html"</script>';
//    Header("Location: http://10.31.158.25/1905/YOho_lipengpeng/src/login.html"); 




