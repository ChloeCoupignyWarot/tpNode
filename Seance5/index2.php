<?php

$test = $_POST["variable"];
//echo 'Bonjour ' . $test . ' !';
$result = array("resultat"=>$test);
echo json_encode($result);
?>

