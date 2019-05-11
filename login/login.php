<?php

mysql_connect('127.0.0.1','root','root');
mysql_query('use info');

$username = $_GET['username'];
$pwd = $_GET['pwd'];


$sql = "select * from user where username = '$username'and pwd = '$pwd'";
$result = mysql_query($sql);

$row = mysql_fetch_assoc($result);

if($row){
    $responseData = ['code'=>200,'message'=>'登陆成功!'];
}else{
    $responseData = ['code'=>-1,'message'=>'登录失败，用户名或密码错误'];
}

echo json_encode($responseData);
?>
