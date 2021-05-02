<?php
$telegram = $_POST['telegram']; 
$name = $_POST['name']; 
$phone = $_POST['phone'];
$telegram = htmlspecialchars($telegram);
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$telegram = urldecode($telegram);
$name = urldecode($name);
$phone = urldecode($phone);

$telegram = trim($telegram);
$name = trim($name);
$phone = trim($phone);

if ($name and $phone){
	mail("golodniuk.k@gmail.com", "Заказ с сайта", "ФИО:".$name.". E-mail: ".$phone.". E-mail: ".$telegram ,"From: tonybonybob@gmail.com \r\n");
	header("Location: success.php");
} else {
    header("Location: fail.php");
}
?>