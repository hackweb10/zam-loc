<?php
session_start();

//funzione che carica automaticamente le classi
// function __autoload($nome_classe){
//     require_once '../../libs/' . $nome_classe . '.php';
// }

if(!class_exists('ADMIN')) require_once('../../libs/ADMIN.php');

$data = (object)[];
$data->username = @$_GET['u'];
$data->cod_verifica = @$_GET['c'];

$acc = new ADMIN;
$result = json_decode($acc->verificaAccount($data));
switch($result->success){
    case 1:
        echo 'non fare il furbo.';
    break;
    case 2:
        echo 'account già verificato.';
    break;
    default:
        echo 'hai verificato il tuo account, ora puoi effettuare il login.';
    break;
}
?>