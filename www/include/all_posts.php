<?php
$relative_path = __DIR__.'/../libs/head.php';
$first_load = (@$head_loaded) ? true : false;
if(!$first_load) require_once($relative_path);
if(!$first_load) ob_start("ob_gzhandler"); // AJAX size
if($first_load){    
    $head->title = 'hackweb | '.$_SESSION['cur_slug']; // SEO
    $wp_lang = ($lang === $default_lang) ? '' : $lang;
    //curl cat
    $endpoint = $wp_endpoint.'categories?slug='.$cur_slug.'&lang='.$wp_lang;	        
    $curl = curl_init();
    curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $endpoint,
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
    ));    
    $resp = curl_exec($curl);    
    $resp = json_decode($resp);
    $cat_id = ($resp[0]->id);    
    curl_close($curl);     
    //curl post    
    if($cat_id == '') $cat_id = '0'; 
    $endpoint = $wp_endpoint.'posts/?_embed&lang='.$wp_lang.'&per_page='.'5'.'&page='.'1'.'&tags_exclude=40,41,42,43&categories='.$cat_id;        
    $curl = curl_init();
    curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $endpoint,
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
    ));    
    $resp = curl_exec($curl);    
    $resp = json_decode($resp);
    $posts = $resp;        
    curl_close($curl); 
    $monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
}else{
    $head->title = 'hackweb';
}
hw_setTitle($head->title);
?>