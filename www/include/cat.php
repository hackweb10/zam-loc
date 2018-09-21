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

<div class="cur_post container">
    <br>
    <h3 class="pb-3 mb-4 border-bottom section-title">
        <?php echo $_SESSION['cur_slug']; ?>
    </h3>
    <div class="posts">            
            <div class="posts-wrapper">
                <?php if($first_load): ?>
                    <script>
                        var first_load_cat = [];
                    </script>
                    <?php foreach($posts as $key => $post): ?>
                        <?php $post_date = date_parse($post->date); ?>
                        <div class="blog-post" post="post-<?php echo $post->id; ?>" post_id="<?php echo $post->id; ?>" categories="<?php echo count($post->categories); ?>">
                            <a class="blog-link hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang'].'post/'.$post->slug; ?>">
                                <h3 class="blog-post-title"><?php echo $post->title->rendered; ?></h3>
                            </a>
                            <p class="blog-post-meta"><?php echo($monthNames[$post_date['month']].' '.$post_date['year']); ?> by <span class="color-1"><?php echo $post->_embedded->author[0]->name; ?></span><br>
                                <span class="text-primary categories"></span>
                            </p>
                            <?php echo $post->content->rendered; ?>
                        </div>
                        <script>
                            first_load_cat[<?php echo $key; ?>] = <?php echo json_encode($post->categories); ?>
                        </script>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            <div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><br><br><br></div>
    </div>

    <nav class="blog-pagination">            
        <a class="btn btn-outline-secondary load_more" >Load more</a>
    </nav>
</div>

<script>
    
    home_blog = 1;
    var _catId = 0;

    <?php if(!$first_load): ?>
        document.title += ' | '+cur_slug;    
        $('.section-title').html(cur_slug);
        //recupero del blog
        getCategoryIdBySlug(cur_slug).then(function(catId){
            if(catId == 'error'){
                $('.posts .spinner').hide()
                return;
            }
            _catId = catId;
            createBlog(home_blog, _catId).then(function(data){            
                content_loaded.posts = data;   
                $('.posts .spinner').hide()
                for(var i = 0; i < data.render.length; i++) {
                    $('.posts .posts-wrapper').append(data.render[i]);                  
                    for(var cat = 0; cat < data.data[i].categories.length; cat++){			
                        if(data.data[i].categories[cat] != 1 && data.data[i].categories[cat] != 23){
                            parseCategory(data.data[i].categories[cat], i, data.data[i].id).then(function(result){                                        
                                $('.blog-post[post="post-'+result[2]+'"] .categories').append(($('.blog-post[post="post-'+result[2]+'"] .categories').html() === '') ? result[1].name : ', '+result[1].name);
                            }); 
                        }	                        
                    }          
                }
            })
        });
    <?php else: ?>
        $('.posts .spinner').hide();
        var cur_post_id = 0;
        for(var i = 0; i < first_load_cat.length; i++){            
            cur_post_id = $('.blog-post').eq(i).attr('post_id');
            for(var cat = 0; cat < first_load_cat[i].length; cat++){
                if(first_load_cat[i][cat] != 1 && first_load_cat[i][cat] != 23){
                    parseCategory(first_load_cat[i][cat], i, cur_post_id).then(function(result){                                        
                        $('.blog-post[post="post-'+result[2]+'"] .categories').append(($('.blog-post[post="post-'+result[2]+'"] .categories').html() === '') ? result[1].name : ', '+result[1].name);
                    }); 
                }	  
            }                    
        }
    <?php endif; ?>


    // load more
    $('.load_more').click(function(e){
        home_blog += 1;        
        $('.posts .spinner').show();
        createBlog(home_blog, _catId).then(function(data){   
            if(data === 'error' || data.render.length === 0){
                $('.posts .spinner').hide();
                $('.load_more').addClass('disabled');
                return;    
            }
            $.map(data, function(el, i){
                if(i==='data') content_loaded.posts.data.push(el);
                else content_loaded.posts.render.push(el);
            })
            $('.posts .spinner').hide()
            for(var i = 0; i < data.render.length; i++) {
                $('.posts .posts-wrapper').append(data.render[i]);                          
            }
        })
    });
</script>

<?php if(!$first_load) ob_hw_end(); ?>