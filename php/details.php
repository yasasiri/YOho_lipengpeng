<?php
header("content-type:text/html;charset=utf-8");
define('hot','localhost');
define('name','root');
define('paw','');
define('doc','yoho');
$conn=new mysqli(hot,name,paw,doc);
if($conn->connect_error){
    die('错了'.$conn->connect_error);
}
$conn->query("SET NAMES UTF8");
$arr=[];
$id=$_GET['id'];
$sele="select * from yohoyi where id='$id'";
$rel=$conn->query($sele);
for($i=0;$i<$rel->num_rows;$i++){
    $arr[$i]=$rel->fetch_assoc();
}
echo json_encode($arr);