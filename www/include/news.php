<?php
//funzione che carica automaticamente le classi
function __autoload($nome_classe){
    require_once '../libs/' . $nome_classe . '.php';
}
//inizializzazione della classe ACCOUNT
$acc = new ADMIN;
$acc->getNews();
?>           