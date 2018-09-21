<?php
//inizializzazione
require_once('head.php');

$head->title = 'hackweb';
$head->description = 'Hackweb is the Global Network. "All the questions need a real answer or, at least, a deep investigation."';

//https redirect
if(!isset($_SERVER["HTTPS"]) && $_SERVER['SERVER_NAME'] != 'localhost' && strpos($_SERVER['SERVER_NAME'], '.loc') === false ){
    header('HTTP/1.1 301 Moved Permanently');
    header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]);
    die();
}else{
    $protocol = 'http';
}

//assignation
$link = $_SERVER['HTTP_HOST'];
$full_link = $protocol.'://'.$link.HOST;

//params read
$replace = (HOST == '/') ? '' : HOST;
if(isset($_SERVER['REDIRECT_URL'])) $url = str_replace($replace, '', $_SERVER['REDIRECT_URL']);
if(HOST == '/') $url = ltrim($url, '/');
$url = str_replace(' ', '%20', $url);
$params = explode( "/", $url);
if($_SERVER['QUERY_STRING'] != "") $querystring = '?'.$_SERVER['QUERY_STRING'];

//canonical
$canonical = rtrim($full_link,'/');
for($i=0;$i<count($params);$i++) $canonical .= "/".$params[$i];

//IP
$ctx = stream_context_create(array('http'=>
    array(
        'timeout' => 3,  //1200 Seconds is 20 Minutes
    )
));

//geolocation by ip
//$geolocation = json_decode(file_get_contents('http://pro.ip-api.com/json/'.$_SESSION['USER_IP'].'?key=WdYJbc0rtoQIjXE',false,$ctx)); //old service
// @$geolocation = json_decode(file_get_contents('http://freegeoip.net/json/'.$_SESSION['USER_IP'].'',false,$ctx));
// @$geolocation = json_decode(file_get_contents('https://geoip.nekudo.com/api/'.$_SESSION['USER_IP'].'',false,$ctx));
// $_SESSION['countryCode']=(isset($geolocation->country->code))? strtolower($geolocation->country->code) : false;

//setting manual countrycode
$_SESSION['countryCode'] = null;

if(isset($_GET['market'])){
    $_SESSION['countryCode'] = $_GET['market'];
}

$country_code = (!isset($_SESSION['countryCode'])) ? $default_lang : $_SESSION['countryCode'];

switch($country_code){
    case 'us':
        $country_code = 'en';
    break;
    default:
        $country_code = $default_lang;
    break;
}

$lang = $country_code;
$country_lang = $country_code;

if(!@$params[0]) @$params[0] = '';

switch (@$params[0]) {    
    case 'hero':
        header('Location: http://hackweb.herokuapp.com');
        die();
    default:    
        $lang = (@$params[0] == '') ? $lang : @$params[0];        
    break;
}

$uri_lang = ($lang === $default_lang) ? '' : $lang.'/';

//last check for language
if(!in_array($lang, $accepted_langs) || $lang == $default_lang){     

    $lang = $country_lang;       
    // for($i=1;$i<count($params);$i++) $redirect .= "/".$params[$i];
    // header('Location: '.$_SESSION['full_link'].'it'.$redirect);   

    $link = '';
    for($i=0;$i<count($params);$i++) if($params[$i] != '') {
        $link .= '/'.$params[$i];  
        $sections[$i] = $params[$i];        
    }    

    // $link = preg_replace("/(?![.=$'€%-])\p{P}/u", "", $link); 
    // $link = str_replace('http','',$link);   
    // $link = str_replace('txt','',$link);      
    // $link = str_replace('.', '', $link);  
    
    $canonical_link = $link;
    $router = hwRouter($link); 
    $link = $router['link'];        
}else{    
    if(!@$params[1]) $link = '/';
    else{
        $link = '';
        for($i=1;$i<count($params);$i++) if($params[$i] != '') {            
            $link .= '/'.$params[$i];
            $sections[$i-1] = $params[$i];
        }     
    }
    
    $canonical_link = $link;
    $router = hwRouter($link); 
    $link = $router['link'];    

    if($router['redirect']){
        header('HTTP/1.1 301 Moved Permanently');
        header('Location: '.HOST.$lang.$link);
        die();
    }     
}

if(!$error404 && $link !== '404'){    
    $_SESSION['version'] = $version;
    $_SESSION['HOST'] = HOST;
    $_SESSION['full_link'] = $full_link;
    $_SESSION['canonical'] = $canonical;
    $_SESSION['USER_IP'] = $ip;
    $_SESSION['lang'] = $lang;
    $uri_lang = $_SESSION['uri_lang'] = ($lang === $default_lang) ? '' : $lang.'/';    
}

ob_start("ob_gzhandler");
if(!@include('include/'.$link.'.php')){         
    $error404 = true;        
};

$pagina = ob_get_clean();

if($error404 || $link === '404') {        
    http_response_code(404);
    header("HTTP/1.0 404 Not Found");        
}

$connection = "ADMIN.php";
require_once($connection);

$acc = new ADMIN;
$result = $acc->checkLogin();
$utente = @$_SESSION['username'];
?>
