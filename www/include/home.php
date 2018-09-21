
<?php
$relative_path = __DIR__.'/../libs/head.php';
$first_load = (@$head_loaded) ? true : false;
if(!$first_load) require_once($relative_path);
if(!$first_load) ob_start("ob_gzhandler"); // AJAX size
$head->title = 'hackweb'; // SEO
hw_setTitle($head->title);
?>

<div class="jumbotron p-3 p-md-5 text-white rounded bg-dark main_post">
    <div class="hw-center col-md-8 px-0">
    <h1 class="display-4 title home-title">
        Studio Zamara
    </h1>
    <p class="lead my-3 excerpt">
        Descrizione dello studio.<br>
        "Tutte le domande richiedono una risposta certa o, almeno, una profonda ricerca."
    </p>
    <!-- <p class="lead mb-0"><a href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>post/hw" class="text-white font-weight-bold link hw-link">Continue reading</a></p> -->
    </div>
</div>

<div class="container sticky-posts">    
    <div class="row mb-2">
        <div class="col-md-6">
        <div class="card flex-md-row mb-4 shadow-sm h-md-250 sticky_post-0">
            <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-primary categories"></strong>
            <h3 class="mb-0">
                <a class="text-dark title" >...</a>
            </h3>
            <div class="mb-1 text-muted date"></div>
            <p class="card-text mb-auto excerpt"></p>
            <a class="link opaque hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>post/">Continue reading</a>
            </div>
            <!-- <img class="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"> -->
        </div>
        </div>
        <div class="col-md-6">
        <div class="card flex-md-row mb-4 shadow-sm h-md-250 sticky_post-1">
            <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-primary categories"></strong>
            <h3 class="mb-0">
                <a class="text-dark title" >...</a>
            </h3>
            <div class="mb-1 text-muted date"></div>
            <p class="card-text mb-auto excerpt"></p>
            <a class="link opaque hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>post/">Continue reading</a>
            </div>
            <!-- <img class="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"> -->
        </div>
        </div>
    </div>
</div>

<div class="container posts-container">
    <div class="row">
        <div class="col-md-12 blog-main">
        <h3 class="pb-3 mb-4 border-bottom section-title">
            RSS Feed
        </h3>

        <div class="posts">            
            <div class="posts-wrapper"></div>
            <div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><br><br><br></div>
        </div>

        <nav class="blog-pagination">            
            <a class="btn btn-outline-secondary load_more" >Load more</a>
        </nav>

        </div><!-- /.blog-main -->

        <!-- <aside class="col-md-4 blog-sidebar">
            <div class="p-3 mb-3 bg-light rounded">
                <h4 class="font-italic">Info</h4>
                <p class="mb-0">                    
                                      
                </p>
            </div>

            <div class="p-3">
         
            </div>

            <div class="p-3">
  
            </div>
        </aside> -->

    </div>

</div>


<script>
    //clock($('#clock'));     

    if(content_loaded.frontline.length > 0){
        // $('.main_post .title').html(content_loaded.frontline[0].title.rendered);
        // $('.main_post .excerpt').html(content_loaded.frontline[0].excerpt.rendered);
        // $('.main_post .link').removeClass('opaque');
    }else{
        //recupero del post con tag "frontline"
        // var dataURL = wp_endpoint+'posts/?_embed&lang='+wp_lang+'&slug=hw&tags_exclude=40,41&tags=42,43'
        // // console.log(dataURL)
        // $.ajax({ 
        //     type: "GET",
        //     url: dataURL,
        //     async: true,
        //     cache: false,
        //     error: function (xhr, ajaxOptions, thrownError) {				
        //         //
        //     },
        //     xhr: function () {					
        //         var xhr = new window.XMLHttpRequest();        
        //         return xhr;
        //     },
        //     beforeSend: function () {					
        //         //	
        //     },
        //     complete: function () {				
        //         //            
        //     },		
        //     success : function(data)
        //     {                          
        //         // console.log('dev10n', data)       
        //         // $('.main_post .title').html(data[0].title.rendered);
        //         // $('.main_post .excerpt').html(data[0].excerpt.rendered);
        //         // $('.main_post .link').removeClass('opaque');
        //         // content_loaded.frontline = data;                
        //     }
        // });
    }

    //caricamento del resto
    // if(content_loaded.sticky.length > 0){
    //     parseSticky(content_loaded.sticky)
    // }else{
    //     //recupero dei due post sticky
    //     dataURL = wp_endpoint+'posts?_embed&lang='+wp_lang+'&per_page=2&tags=40,41&tags_exclude=42,43'        
    //     $.ajax({ 
    //         type: "GET",
    //         url: dataURL,
    //         async: true,
    //         cache: false,
    //         error: function (xhr, ajaxOptions, thrownError) {				
    //             //
    //         },
    //         xhr: function () {					
    //             var xhr = new window.XMLHttpRequest();        
    //             return xhr;
    //         },
    //         beforeSend: function () {					
    //             //	
    //         },
    //         complete: function () {				
    //             //            
    //         },		
    //         success : function(data)
    //         {            
    //             // data = JSON.parse(data);                                     
    //             parseSticky(data)
    //             content_loaded.sticky = data;
    //         }
    //     });
    // }
        
    // if(!$.isEmptyObject(content_loaded.posts)){
    //     $('.posts .spinner').hide()
    //     for(var i = 0; i < content_loaded.posts.render.length; i++) {
    //         $('.posts .posts-wrapper').append(content_loaded.posts.render[i])            
    //     }
    // }else{
    //     home_blog = 1;
    //     //recupero del blog
    //     createBlog(home_blog).then(function(data){   
    //         // console.log(data);  
    //         content_loaded.posts = data;   
    //         $('.posts .spinner').hide()
    //         for(var i = 0; i < data.render.length; i++) {
    //             $('.posts .posts-wrapper').append(data.render[i]);                  
    //             for(var cat = 0; cat < data.data[i].categories.length; cat++){			
    //             	if(data.data[i].categories[cat] != 1 && data.data[i].categories[cat] != 23){
    //                     parseCategory(data.data[i].categories[cat], i, data.data[i].id).then(function(result){                                        
    //                         $('.blog-post[post="post-'+result[2]+'"] .categories').append(($('.blog-post[post="post-'+result[2]+'"] .categories').html() === '') ? result[1].name : ', '+result[1].name);
    //                     }); 
    //                 }	                        
    //             }          
    //         }
    //     })
    // }

    // load more
    $('.load_more').click(function(e){
        home_blog += 1;        
        $('.posts .spinner').show();
        createBlog(home_blog).then(function(data){   
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