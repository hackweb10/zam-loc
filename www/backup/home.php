
<?php
$relative_path = __DIR__.'/../libs/head.php';
if(require_once($relative_path)) $first_load = true;
if(!$first_load) ob_start("ob_gzhandler"); // AJAX size
$head->title = 'hackweb'; // SEO
?>

<hr>
<span class="Stile2" style="">h@ckweb</span><br>
Founded: 10/01/1996
<hr>
<br>  
<span class="stilo3">SHARING THE KNOWLEDGE</span>
<br>
<p>
  "I nuovi eroi sono i militanti politici. Negli anni Venti erano gli sportivi, negli anni Trenta e Quaranta le star del cinema e della seconda guerra mondiale, poi i nuovi eroi sono diventati i musicisti. 
  Credo che i prossimi eroi saranno più intellettuali, politici o scienziati, o <strong>esperti di informatica</strong>. Insomma, gente di questo tipo: quelli che comprendono, <strong>quelli che riescono a capire come funzionano veramente le cose</strong>, come funziona la società moderna. Ecco i nostri prossimi eroi."
  <span class="color-1">Jim Morrison</span>
</p>

<!-- <p>Ciao sono <span class="color-1">Frankie</span>, faccio il programmatore e mi occupo di informatica.<br>Ho sempre passato molto tempo ad aggiustare computer,<br>
  fornire assistenza/consulenza informatica, configurare reti di vario genere, ecc...</p>
<p>Di seguito sono elencate le mie <span class="color-1">competenze</span>:</p>
<div id="list-home">
  - Programmazione in C, C++, php, javascript, AJAX, java, Objective C, Swift, C#, Angular...<br>
  - Aggiustare computer con qualsiasi problema<br>
  - Formattazione sistemi e backup di dati<br>
  - Assistenza informatica<br>
  - Configurazione reti<br>  
  - Creazione e sviluppo di siti web<br>
  - Assistenza per l'acquisto di soluzioni informatiche<br>
</div> -->

<div style="display:none;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a tincidunt justo, sed efficitur ante. In quis nibh eu libero sagittis mattis. Proin in quam elementum nisi pharetra tempor eget pulvinar tellus. Nullam sit amet ipsum nisl. Curabitur lacus tellus, mollis vel tincidunt auctor, egestas non sapien. Nunc nibh orci, accumsan non ornare vel, ultrices ac mauris. Suspendisse viverra sem quis dolor pulvinar rutrum. Quisque eu turpis volutpat, pellentesque ligula convallis, blandit lectus. Cras orci lectus, pulvinar facilisis auctor a, sodales sed odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla varius congue velit, quis dapibus ipsum consequat a. Suspendisse cursus mauris ut metus porta ornare. Donec id lorem eget mi auctor euismod. Morbi justo augue, ornare eget bibendum ac, sodales ultricies ipsum.

Nunc id nisl ut augue euismod iaculis quis in erat. Praesent mauris elit, porttitor nec turpis id, faucibus viverra erat. Pellentesque id metus neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet fringilla nisi non egestas. Curabitur convallis pulvinar accumsan. Nulla porttitor mattis quam. Curabitur eu felis eu ante consectetur consequat. Aenean vel leo consequat, scelerisque orci at, placerat sapien. Suspendisse pulvinar ornare risus rhoncus tempor. Vestibulum nunc nisl, pharetra consectetur metus vitae, mollis feugiat massa. Duis et quam in justo maximus vestibulum.

Pellentesque fringilla sit amet mi eget faucibus. Suspendisse a quam venenatis, fringilla nibh quis, tempor ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris cursus orci quis consequat tempus. Mauris eleifend ullamcorper finibus. Nulla porta pellentesque urna vel sollicitudin. Donec aliquam interdum venenatis. Praesent imperdiet justo eu velit laoreet cursus. In ac purus auctor, cursus tortor non, ultricies erat. Curabitur placerat ante ac hendrerit luctus.

Donec porttitor risus tellus, nec aliquet mauris tempus vitae. Mauris pellentesque ligula ac ante tincidunt tempus. Aliquam tincidunt odio ut diam dictum finibus gravida nec lectus. In hac habitasse platea dictumst. Nam ut lectus magna. In pellentesque libero et egestas ultrices. Cras eget ligula sodales, condimentum arcu et, fringilla nisl. Vestibulum nisl dui, ullamcorper a lacinia non, consectetur vitae mauris. Aenean sollicitudin sapien nec ipsum auctor, ut consectetur ante dapibus. Donec ultrices eget nulla in fringilla. Nunc magna erat, condimentum a faucibus aliquet, tempor sit amet purus. Curabitur porta semper eros eget ultrices. Sed molestie mi vel sollicitudin rhoncus. Vestibulum convallis urna purus, quis facilisis massa laoreet non.

Quisque dignissim ut quam gravida vestibulum. Sed cursus, quam nec tempor elementum, arcu urna suscipit magna, a pellentesque magna est sit amet quam. Nulla sodales, justo id scelerisque pulvinar, lacus elit porta purus, at tristique purus nisi ac dui. Praesent lacinia ultricies vehicula. Phasellus at augue vitae urna congue volutpat non sit amet nisl. Donec luctus, dui in tristique pretium, quam metus pulvinar ipsum, vel aliquam sapien lacus in diam. Sed non nisi erat. Nullam id facilisis elit. Fusce arcu ex, gravida et interdum vel, iaculis ut velit. Vestibulum efficitur porttitor dui nec tincidunt. Donec at convallis sapien. Phasellus vel mollis elit, malesuada commodo ante. Nullam tortor nulla, venenatis et velit at, gravida porta orci. Vestibulum risus metus, accumsan varius leo non, mollis venenatis turpis.
</div>


<br>  
<hr>
<br>
<span id="clock" class="stilo1"></span>
<div class="space"></div>

<!-- <input name="Aggiornamenti" type="button" class="xfr1" value="Info" /><br><br> -->

<div id="hide" style="visibility:hidden;"></div>

<script>
  clock($('#clock'));    
</script>

<?php
hw_setTitle($head->title);
if(!$first_load) ob_hw_end();
?>