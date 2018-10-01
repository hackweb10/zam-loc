<?php
$relative_path = __DIR__.'/../libs/head.php';
$first_load = (@$head_loaded) ? true : false;
if(!$first_load) require_once($relative_path);
if(!$first_load) ob_start("ob_gzhandler"); // AJAX size
$head->title = 'zamara'; // SEO
if($first_load){    
    $wp_lang = ($lang === $default_lang) ? '' : $lang;
    $endpoint = $wp_endpoint.'posts/?_embed&lang='.$wp_lang.'&slug='.$cur_slug;      
    //curl post    
    $curl = curl_init();
    curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $endpoint,
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
    ));    
    $resp = curl_exec($curl);    
    $post = json_decode($resp);
    curl_close($curl);     

    //assign
    $head->title .= ' | '.$post[0]->title->rendered;
}
hw_setTitle($head->title);
?>

<div class="cur_post container">
    <?php if(!$first_load): ?>        
        <div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><br><br><br></div>            
    <?php else: ?>    
        <div class="single-post">
            <br>
            <h3 class="text-dark title"><?php echo $post[0]->title->rendered; ?></h3>
            <div class="text-muted date"></div><br>
            <div><?php echo $post[0]->content->rendered; ?></div>
        </div>
    <?php endif; ?>
</div>

<script>
    <?php if(!$first_load): ?>
        // get post
        getPost(cur_slug).then(function(data){        
            $('.cur_post .spinner').hide();        
            var date = new Date(data[0].date);   
            document.title += ' | '+data[0].title.rendered;
            var html = 
            '<div class="single-post"><br>'+
                '<h3 class="text-dark title">'+data[0].title.rendered+'</h3>'+
                '<div class="text-muted date">'+monthNames[date.getMonth()]+' '+date.getFullYear()+'</div><br>'+
                '<div>'+data[0].content.rendered+'</div>'+
            '</div>';
            $('.cur_post').html(html);
        })
    <?php else: ?>
        var date = new Date("<?php echo $post[0]->date; ?>");
        $('.date').html(monthNames[date.getMonth()]+' '+date.getFullYear());
    <?php endif; ?>
</script>

<?php
if(!$first_load) ob_hw_end();
?>