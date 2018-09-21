<?php 
// funzione che carica automaticamente le classi
function __autoload($nome_classe){
    require_once '../libs/' . $nome_classe . '.php';
}

$acc = new ADMIN;
$acc->checkLogin();

//get user
if(isset($_SESSION['username'])){
	echo "bentornato ".$_SESSION['username'];
}else{
	echo "accedi per usare il sito";
}

?>