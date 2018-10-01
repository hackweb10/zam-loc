<?php
@session_start();

//globs
define('HOST', str_replace("index.php", "", $_SERVER['SCRIPT_NAME']));
define('ABS', __DIR__);
define('HOME_DIR', __DIR__.'/../');

//version
$filename = ABS.'/../version.txt';
$handle = fopen($filename, 'r');
$local_ver = fread($handle, filesize($filename));

$head = new stdClass();
$head_loaded = true;
$version = $local_ver;
$protocol = 'https';
$params = array();
$sections = array();
$url = '';
$redirect = '';
$querystring = '';
$cur_slug = '';
$uri_lang = '';
$default_lang = 'en';
$error404 = false;
$accepted_langs = array('it','en');
$wp_endpoint = 'https://www.zamara.it/hw_wordpress/wp-json/wp/v2/'; //'http://localhost/zamara/hw_wordpress/wp-json/wp/v2/';

function __autoload($nome_classe){
    require_once ABS.'/'.$nome_classe.'.php';
}

function ob_hw_end(){
    $length = ob_get_length();
    header('Content-Length: '.$length."\r\n");
    header('Accept-Ranges: bytes'."\r\n");
    ob_end_flush(); 
}

function hw_setTitle($title){
    global $head;
    echo '
    <script>document.title = "'.$title.'";</script>
    ';
}

//get ip function
function Get_IP() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
        $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

function hwRouter($link){    
    global $cur_slug;

    $link_params = ltrim($link, '/');
    $link_params = explode( "/", $link_params);

    $result = array();
    $result['redirect'] = false;
    $result['link'] = '404';        
    switch($link){
        case '/':
        $result['link'] = 'home';
        break;        
        case '/user/login':
        $result['link'] = $link;
        break;
        case '/user/register':
        $result['link'] = $link;
        break;
        case '/user/register':
        $result['link'] = $link;
        break;
        case '/test':
        $result['link'] = $link;
        break;
        case '/code':
        $result['link'] = '/user/insert_code';
        break;
        case '/admin/add_news':
        $result['link'] = $link;
        break;
        case '/test':
        $result['link'] = $link;
        break;
        case '/frankie':
        $result['link'] = $link;
        break;
        case '/cookie':
        $result['link'] = '/cookie_policy';
        break;
        case '/privacy':
        $result['link'] = '/privacy_policy';
        break;
        
        case '/stories/'.@$link_params[1]:
        $result['link'] = '/stories';
        break;
        case '/post/'.@$link_params[1]:
        $result['link'] = '/post';        
        $cur_slug = @$link_params[1];                  
        break;
        case '/cat/'.@$link_params[1]:
        $result['link'] = '/cat';        
        $cur_slug = @$link_params[1];                  
        break;

        case '':
        $result['link'] = 'home';
        break;
        default:
        $result['link'] = '404';        
        break;
    } 
    $_SESSION['cur_slug'] = $cur_slug;
    return $result;
}

//user ip
$ip = Get_IP();
?>