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
$name=$_GET['name'];
// echo $name;

$sel="select * from uname where name='$name'";
$res=$conn->query($sel);
if($res->num_rows>0){
    echo true;
}else{
    echo false;
}