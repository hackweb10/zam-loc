<!DOCTYPE html>
<html lang="<?php echo $lang; ?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta name="description" content="<?php echo $head->description; ?>">
    <meta property="og:image" content="<?php echo $full_link.'images/logo.png'; ?>" />
    <meta property="og:title" content="<?php echo $head->title; ?>" />
    <meta property="og:description" content="<?php echo $head->description; ?>"/>
    <meta property="og:site_name" content="Zamara"/>
    <meta property="og:type" content="website"/>
    <link rel="icon" type="image/png" href="favicon.png?v=<?php echo $version; ?>"/>
    <link rel="alternate" hreflang="en" href="<?php echo $protocol.'://'.$_SERVER["HTTP_HOST"].HOST.ltrim($canonical_link, '/'); ?>" />
    <link rel="alternate" hreflang="it" href="<?php echo $protocol.'://'.$_SERVER["HTTP_HOST"].HOST.'it'.$canonical_link; ?>" />
    <link id="canonical" rel="canonical" href="<?php echo $canonical; ?>" />
    <base href="<?php echo HOST; ?>">
    <title><?php echo $head->title; ?></title>

    <!-- CSS -->
    <link href="css/nd/nd.css?v=<?php echo $version; ?>" rel="stylesheet" type="text/css" />
    <link href="css/cs.css?v=<?php echo $version; ?>" rel="stylesheet" type="text/css" />

    <!-- JavaScript  -->
    <script src="js/nd/nd.js?v=<?php echo $version; ?>"></script>
    <script src="js/cs.js?v=<?php echo $version; ?>"></script>

    <script>
        var lang = '<?php echo $lang; ?>';        
        var default_lang = '<?php echo $default_lang; ?>';
        var wp_lang = (lang === default_lang) ? '' : lang;
        var uri_lang = '<?php echo $uri_lang; ?>';
        var utente = '<?php echo $utente; ?>';
        var querystring = '<?php if(isset($querystring)) echo $querystring; ?>';
        var cur_slug = '<?php echo $cur_slug; ?>';
        var host = '<?php echo HOST; ?>';
        var full_link = '<?php echo $full_link; ?>';
        var href_link = '<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>';
        <?php for($i=0;$i<count($sections);$i++) if($sections[$i] != '') echo "sez[".($i)."] = '".$sections[$i]."';\n"; ?>
    </script>

    <?php if($ip != '127.0.0.1'): ?>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-92261711-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-92261711-1');
        </script>

        <!-- Facebook Pixel Code -->
        <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1911742475786216');
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1911742475786216&ev=PageView&noscript=1"
        /></noscript>
        <!-- End Facebook Pixel Code -->
    <?php endif; ?>
</head>


<body>
    <!-- FACEBOOK SDK -->
    <script>
    window.fbAsyncInit = function() {
        FB.init({
        appId            : '285126145639180',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.1'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    </script>
        
    <div id="loading_bar"></div>

    <div id="menu"></div>

    <!-- MAIN -->
    <main id="content" role="main" class="page-container">        
        <?php echo $pagina; ?>
    </main>

    <footer class="blog-footer">
        <p><span class="color-1">Studio</span> Zamara<br>2018</p>
        <!-- <p class="blog-links">
            <a href="https://twitter.com/frank10gm" target="_blank">Twitter</a>
            <a class="hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>cookie" >Cookie Policy</a>
            <a class="hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>privacy" >Privacy Policy</a>
        </p>
        Zamara foundation: <span class="color-1">10.01.1996</span>
        <br>                    
        guest #: <?php include(HOME_DIR.'include/visite.php'); ?><br>
        <?php echo "Your IP address is: <span class=\"color-1\">$ip</span>"; ?>   -->
    </footer>

    <!-- <div id="cookie-popup" style="<?php echo @$_COOKIE['hwCookiePolicy']; ?>">
        <div class="text">Zamara uses cookies to make the site simpler. <a class="hw-link hwCookiePolicy" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>cookie">Find out more about cookies</a></div>
        <div class="close hwCookiePolicy"><div class="inner">ok</div></div>
    </div> -->

    <!-- Javascript -->
    <script>
        $(document).ready(function(e) {
            firstLoad();
        });
    </script>
</body>
</html>
