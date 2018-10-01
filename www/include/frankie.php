<?php
$relative_path = __DIR__.'/../libs/head.php';
$first_load = (@$head_loaded) ? true : false;
if(!$first_load) require_once($relative_path);
if(!$first_load) ob_start("ob_gzhandler"); // AJAX size
$head->title = 'zamara | Frankie'; // SEO
?>

<div class="container">
    <div class="frankie">
        <br>
        <h3 class="text-dark title">Frankie</h3>
        <div class="text-muted date">Full Stack Developer, Casual Lawyer | 2018</div><br>
        <div>                        
            When I was a child i felt in love with computers. I <strong>needed</strong> to know the meaning of all those strings of text on a black background.<br>
            Then I started C and PHP at 9 and never left coding life.<br>
            <br>
            But I wasn't just a nerd, I loved also writing, reading books, playing sports.
            <br>
            I really didn't find a place that i liked for studying IT, so I decided to study Law at University.
            <br><br>
            Two reasons:<br>
            1. Everyone was trying to force me to study IT, but I don't like to be forced. I preferred rebellion in that case.
            <br>
            2. I like order of things, order of society. Rules, schemes. I like to know them also to better avoid them.
            <br>            
            <br>
            ...            
        </div>
    </div>
</div>

<?php
hw_setTitle($head->title);
if(!$first_load) ob_hw_end();
?>