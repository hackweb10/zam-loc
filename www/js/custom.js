var clockInterval,clock,initial_uri,menu_mobile,timeout=0,pagina="",utente="",potere=0,avatar="avatar_base.png",informazioni="Version 5.0<br>© hackweb, Riccione / Bologna 2002 - 2018",sez=["","","",""],lang="en",include_dir="include",first_loaded=!1,menu_class=".hw-link",firstLoad=function(){$("#barra-sopra").load("include/admin.php"),$("#menu").load("include/menu.php",function(){initial_uri=host+uri_lang+sez[0];for(var e=1;e<sez.length;e++)""!=sez[e]&&(initial_uri+="/"+sez[e]);changePage(initial_uri,".hw-link",!1,!1)}),initMenu(),clockInterval=setInterval(function(){clock($("#clock"))},1e3)};function initMenu(){$("#menu-mobile").click(function(){$("#menu").fadeIn(function(){menu_mobile=!0,window.scroll({top:0,left:0}),$("#struttura").css("height","0").css("overflow","hidden")})}),$("body").on("click","#menu-close",function(){menu_mobile?($(this).html("men&ugrave;"),$("#struttura").removeClass("hidden"),$("#menu").removeClass("show"),$("#menu-content").removeClass("show"),menu_mobile=!1):($(this).html("close"),$("#struttura").addClass("hidden"),$("#menu").addClass("show"),$("#menu-content").addClass("show"),menu_mobile=!0)})}var changeUrl=function(e,n){var t=$.Deferred();$(n).each(function(){$(this).attr("href")!=e&&$(this).removeClass("active")}),$(n+'[href="'+e+'"]').addClass("active"),0==(e=e.includes(host+uri_lang)&&host+uri_lang!=="/"?e.split(host+uri_lang)[1]:e).indexOf("/")&&(e=e.replace("/","")),sez=e.split("/");for(var o="it"!=lang?lang+"/":"",i=0;i<sez.length;i++)o+=0===i?sez[i]:"/"+sez[i],"/"+sez[i];return 0!==sez.length&&""!==sez[0]||"home",window.history.pushState(null,null,o),t.resolve("url refreshed."),t.promise()},changePage=function(e,n){"undefined"==typeof push&&(push=!0),"undefined"==typeof toload&&(push=!0);var t=$.Deferred();$(n).each(function(){$(this).attr("href")!=e&&$(this).removeClass("active")}),$(n+'[href="'+e+'"]').addClass("active"),0==(e=e.includes(host+uri_lang)&&host+uri_lang!=="/"?e.split(host+uri_lang)[1]:e).indexOf("/")&&(e=e.replace("/","")),sez=e.split("/");for(var o="it"!=lang?lang+"/":"",i=include_dir,a=0;a<sez.length;a++)o+=0===a?sez[a]:"/"+sez[a],i+="/"+sez[a];return 0!==sez.length&&""!==sez[0]||(i+="home"),push&&window.history.pushState(null,null,o),console.log(i),i+=".php"+querystring,first_loaded&&(void 0!==window.stop?window.stop():void 0!==document.execCommand&&document.execCommand("Stop",!1)),menu_mobile&&$("#menu-close").click(),toload?$.ajax({type:"POST",url:i,async:!0,cache:!1,error:function(e,n,t){$("#content").html("pagina non trovata...")},xhr:function(){var e=new window.XMLHttpRequest;return e.addEventListener("progress",function(e){if(e.lengthComputable){var n=e.loaded/e.total,t=Math.round(100*n)+"%";$("#loading_bar").stop().animate({width:t},300,function(){1==n&&$("#loading_bar").hide()})}},!1),e},beforeSend:function(){$("#loading_bar").css("width","1%"),$("#loading_bar").show()},complete:function(){$("#loading_bar").stop().animate({width:"100%"},300,function(){$("#loading_bar").hide()})},success:function(e){$("#content").html(e),window.scroll({top:0,left:0,behavior:"smooth"}),first_loaded=!0,t.resolve("page loaded.")}}):t.resolve("loaded without rendering"),t.promise()},changeHistoryState=function(){var e=host+uri_lang,n=window.location.pathname,t=n.replace(e,""),o=n.substring(n.indexOf(e)+e.length,n.length);t==n&&(o=n.substring(n.indexOf(host)+host.length,n.length)),0!==o.length&&1!=o.length||(o=""),changePage(host+uri_lang+o,".hw-link",!1)};function clock(e){var n=new Date,t=n.getHours(),o=n.getMinutes(),i=n.getSeconds();t<=9&&(t="0"+t),i<=9&&(i="0"+i),o<=9&&(o="0"+o),e.html(n.getDate()+"/"+(n.getMonth()+1)+"/"+n.getFullYear()+" - "+t+":"+o+":"+i)}function parallax(){var e=$(window).scrollTop();$("#backgr").css("top",0-.2*e+"px"),$("#immagini").css("top",0-.5*e+"px")}function startVideo(){$("#fascia4").offset().top-100<=$(window).scrollTop()&&player.play()}function objectifyForm(e){for(var n={},t=0;t<e.length;t++)n[e[t].name]=e[t].value;return n}var logout=function(){var n=$.Deferred();return $.ajax({type:"POST",url:"libs/call_func.php",data:JSON.stringify({action:"logout",data:{test:"test"}}),contentType:"application/json",async:!0,success:function(e){0!=(e=JSON.parse(e)).success&&2!=e.success||($("#barra-sopra").html("sei uscito"),$("#menu").load("include/menu.php",function(){changePage(host+uri_lang,".hw-link",!0),utente="",n.resolve(e)}))}}),n.promise()},validateForm=function(e){var n=!1;for(i in e)e[i]?$('.required[name="'+i+'"]').removeClass("warning"):(n=!0,$('.required[name="'+i+'"]').addClass("warning"));return n?"compila tutti i campi obbligatori":e.password.length<8?"la password deve avere almeno 8 caratteri":e.password!==e.password_check?"le password non corrispondono":isEmail(e.email)?"ok":"inserisci una mail valida"};function isEmail(e){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}function createCookie(e,n,t){if(t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3);var i="; expires="+o.toGMTString()}else i="";document.cookie=e+"="+n+i+"; path=/"}function getCookie(e){for(var n=e+"=",t=document.cookie.split(";"),o=0;o<t.length;o++){for(var i=t[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return null}function deleteCookie(e){createCookie(e,"",-1)}$(function(){$("body").on("click",".hw-link",function(e){switch(e.preventDefault(),$(this).attr("href")){case"logout":logout().then(function(e){});break;default:changePage($(this).attr("href"),".hw-link")}return!1}),$(window).on("popstate",function(e){return e.preventDefault(),changeHistoryState(),!1}),$(window).on("pushstate",function(e){return e.preventDefault(),changeHistoryState(),!1})});