
//variabili globali
var timeout = 0;
var pagina = '';
var utente = '';
var potere = 0;
var avatar = 'avatar_base.png';
var informazioni = 'Version 5.0<br>© zamara, Riccione / Bologna 2002 - 2018';
var clockInterval;
var clock;
var sez = ['','','',''];
var lang = 'en';
var include_dir = 'include';
var initial_uri;
var menu_mobile;
var first_loaded = false;
var menu_class = '.hw-link';
var wp_endpoint = 'https://www.zamara.it/hw_wordpress/wp-json/wp/v2/'; //'http://localhost/zamara/hw_wordpress/wp-json/wp/v2/'; 
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var content_loaded = {
	frontline: [],
	sticky: [],
	posts: []
}
var last_scroll = 0;
var home_blog = 1;
var home_blog_max = 5;
var ctrlPressed = false;


//esecuzione
$(function() {
	
	//collegamento allo scorrimento della pagina
	// $(window).bind('scroll', function(e) {	
		//parallax();	
	// });
	
	//collegamento alla navbar
	// $('.nav-link').bind('click', function(event) {
    //     var $anchor = $(this);
    //     //console.log($anchor);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top -46
    //     }, 1500, 'easeInOutExpo');
    //     event.preventDefault();
    //     event.stopImmediatePropagation();
    // });	

	//pulsanti menu
	$('body').on('click', '.hw-link', function(e) {		
		if(!ctrlPressed){
			e.preventDefault();			
			switch($(this).attr('href')){
				case 'logout':
				logout().then(function(data){
					// console.log(data);
					// if(data.success == 2) setTimeout("document.location.reload(true)",1000);
				});
				break;
				default:
				changePage($(this).attr('href'), '.hw-link');
				break;
			}		
			return false;
		}		
	});

	//history control
	$(window).on('popstate', function(e){
		e.preventDefault();		
		changeHistoryState(true);
		return false;
	});

	// $(window).on('pushstate', function(e){		
	// 	e.preventDefault();		
	// 	changeHistoryState(false);
	// 	return false;
	// });

	$('body').on('click', '.hwCookiePolicy', function(e){
		e.preventDefault();
		createCookie('hwCookiePolicy','display:none;',1000);					
		$('#cookie-popup').css('bottom', -$('#cookie-popup').outerHeight(true));
		return false;
	});

	$(document).keydown(function(event){		
		if(event.which == 17 || event.which == 91 || event.which == 16){			
			ctrlPressed = true;			
		}			
	});
	
	$(document).keyup(function(){
		ctrlPressed = false;
	});	

});


//funzioni
var firstLoad = function(){
	$('#barra-sopra').load('include/admin.php');	
	$('#menu').load('include/menu.php', function(){
		initial_uri = host+uri_lang+sez[0];				
		for(var i = 1; i < sez.length; i++){			
			if(sez[i] != '') initial_uri += '/'+sez[i];				
		}								
		// initial_uri = (initial_uri == '') ? host+uri_lang : initial_uri;
		changePage(initial_uri, '.hw-link', false, false);	
	});        
	
	initMenu();     	
				
	clockInterval = setInterval(function(){                
		clock($('#clock'));  
	},1000);     	       
}

function initMenu(){
	$('#menu-mobile').click(function(){                                                
		$('#menu').fadeIn(function(){
			menu_mobile = true;
			window.scroll({ top: 0, left: 0 }); // behavior: 'smooth'
			$('#struttura').css('height', '0').css('overflow','hidden');
		});                                
	});

	$('body').on('click', '#menu-close', function(){    		  
		// if(!menu_mobile) return;		
		// $('#struttura').css('height', 'auto').css('overflow','auto'); 		
		if(!menu_mobile){
			$(this).html('close');
			$('#struttura').addClass('hidden');
			$('#menu').addClass('show');         
			$('#menu-content').addClass('show');   
			menu_mobile = true;           
		}else{
			$(this).html('men&ugrave;');
			$('#struttura').removeClass('hidden');
			$('#menu').removeClass('show');         
			$('#menu-content').removeClass('show'); 
			menu_mobile = false;
		}
	});
}

//cambia solo url
var changeUrl = function (uri, css){	
	var d = $.Deferred(); 
	var push = true
	$(css).each(function(){
		if($(this).attr('href') != uri){
			$(this).removeClass('active');
		}
	})
	$(css+'[href="'+uri+'"]').addClass('active');	
	uri = (!uri.includes(host+uri_lang) || (host+uri_lang) === '/' ) ? uri : uri.split(host+uri_lang)[1];	
	if(uri.indexOf('/') == 0) uri = uri.replace('/','');
	sez = uri.split('/');	
	var link = (lang != default_lang) ? lang+'/' : '';	
	var include_path = include_dir;
	for(var i = 0; i < sez.length; i++){
		link += (i === 0) ? sez[i] : '/'+sez[i];	
		include_path += '/'+sez[i];
	}	
	if(sez.length === 0 || sez[0] === '') include_path += 'home';
	if(push) window.history.pushState(null, null, link);
	d.resolve('url refreshed.');   
	return d.promise();
}

//cambia pagina
var changePage = function (uri, css, push, toload, scroll){		
    if(typeof push === 'undefined') push = true;
	if(typeof toload === 'undefined') toload = true;
	if(typeof scroll === 'undefined') scroll = false;
		
	var d = $.Deferred(); 	

	//saving scroll position	
	if(!scroll){
		last_scroll = $(window).scrollTop();			
	}	

	//toggle mobile menu
	if(!$('.navbar-toggler').hasClass('collapsed')) $('.navbar-toggler').click();

	$(css).each(function(){
		if($(this).attr('href') != uri){
			$(this).removeClass('active');
		}
	})
	$(css+'[href="'+uri+'"]').addClass('active');	
	uri = (!uri.includes(host+uri_lang) || (host+uri_lang) === '/' ) ? uri : uri.split(host+uri_lang)[1];	
	if(uri.indexOf('/') == 0) uri = uri.replace('/','');	
	sez = uri.split('/');	
	var link = (lang != default_lang) ? lang+'/' : '';		
	var include_path = include_dir;	
	for(var i = 0; i < sez.length; i++){
		link += (i === 0) ? sez[i] : '/'+sez[i];			
		include_path += '/'+sez[i];
	}	
	if(sez.length === 0 || sez[0] === '') include_path += 'home';	
	if(push) window.history.pushState(null, null, link);	
	//dynamic variables
	if(include_path.includes('/post/')){
		cur_slug = include_path.substring(include_path.lastIndexOf('/post/')+'/post/'.length);
		querystring = '?post=' + include_path.substring(include_path.lastIndexOf('/post/')+'/post/'.length)		
		include_path = include_path.substring(0, include_path.lastIndexOf('/post')+'/post'.length)		
	}else if(include_path.includes('/cookie')){		
		include_path = include_path.replace('/cookie', '/cookie_policy')
	}else if(include_path.includes('/privacy')){		
		include_path = include_path.replace('/privacy', '/privacy_policy')
	}if(include_path.includes('/cat/')){
		cur_slug = include_path.substring(include_path.lastIndexOf('/cat/')+'/cat/'.length);
		querystring = '?cat=' + include_path.substring(include_path.lastIndexOf('/cat/')+'/cat/'.length)		
		include_path = include_path.substring(0, include_path.lastIndexOf('/cat')+'/cat'.length)		
	}	
	include_path += '.php'+querystring;

	//cancel image downloads
	if(first_loaded){		
		if(window.stop !== undefined)
		{
			window.stop();
		}
		else if(document.execCommand !== undefined)
		{
			document.execCommand("Stop", false);
		}
	}	

	if(menu_mobile) $('#menu-close').click();	
	// $('img', '#content').stop().remove();	
	
	// $('#content').load(include_path,function(){
	// 	if(menu_mobile) $('#menu-close').click();			
	// 	//go to page top
	// 	window.scroll({
	// 		top: 0, 
	// 		left: 0, 
	// 		behavior: 'smooth' 
	// 	});		
	// });	
	// return;

	if(!toload) {
		d.resolve('loaded without rendering')
	}else{
		$.ajax({ 
			type: "POST",
			url: include_path,
			async: true,
			cache: false,
			error: function (xhr, ajaxOptions, thrownError) {				
				// console.log(xhr.responseText);
                // console.log(thrownError);
                $('#content').html('<div class="container">Error 404 | Page not found...</div>');
			},
			xhr: function () {					
				var xhr = new window.XMLHttpRequest();
				//Download progress
				xhr.addEventListener("progress", function (evt) {												
					if (evt.lengthComputable) {
						var percentComplete = evt.loaded / evt.total;	
						var w = Math.round(percentComplete * 100) + '%';									
						$('#loading_bar').stop().animate({
							width: w
						}, 300, function(){
							if(percentComplete == 1) $('#loading_bar').hide();
						});					
					}
				}, false);
				return xhr;
			},
			beforeSend: function () {					
				$('#loading_bar').css('width', '1%');
				$('#loading_bar').show();		
			},
			complete: function () {				
				$('#loading_bar').stop().animate({
					width: '100%'
				}, 300, function(){
					$('#loading_bar').hide();
				});
			},		
			success : function(data)
			{				
				$('#content').html(data);	
				
				//scroll to last position
				if(scroll){
					$('html, body').animate({
						scrollTop: last_scroll //$("#div1").offset().top
					}, 0);				
					last_scroll = 0;
				}else{
					$('html, body').animate({
						scrollTop: 0
					}, 0);
				}
								
				//go to page top
				// window.scroll({
				// 	top: 0, 
				// 	left: 0, 
				// 	behavior: 'smooth' 
				// });				
				first_loaded = true;	
				d.resolve('page loaded.');    				
			}
		});
	}

	return d.promise();
}

var changeHistoryState = function(scroll){
	var url = host + uri_lang;
	var path = window.location.pathname;
	var rep = path.replace(url, '');		
	var last = path.substring(path.indexOf(url) + url.length, path.length); 
	if(rep == path) {
		last = path.substring(path.indexOf(host) + host.length, path.length);
	}
	if(last.length === 0 || last.length == 1) {
		last = '';		
	}		
	changePage(host+uri_lang+last, '.hw-link', false, true, scroll);	
}

//orologio
function clock($el){	
	// console.log("tic");
	var data = new Date();	
	var h = data.getHours();
	var m = data.getMinutes();
	var s = data.getSeconds();

	if(h <= 9){
		h = "0"+h;
	}
	if(s <= 9){
		s = "0"+s;
	}
	if(m <= 9){
		m = "0"+m;
	}	

	$el.html(data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear()+" - "+h+":"+m+":"+s);	
}

function parallax() {
	var scrollPosition=$(window).scrollTop();
	$('#backgr').css('top',(0 - (scrollPosition *.2)) +'px');
	$('#immagini').css('top',(0 -(scrollPosition * .5)) + 'px');
}

function startVideo(){
	var posizione = $('#fascia4').offset().top - 100;
	var top = $(window).scrollTop();

	if (top >= posizione){
		player.play();
	}
}

//serialize data function
function objectifyForm(formArray) {
	var returnArray = {};
	for (var i = 0; i < formArray.length; i++){
		returnArray[formArray[i]['name']] = formArray[i]['value'];
	}
	return returnArray;
}

var logout = function(){
	var d = $.Deferred();    
	var send_data = { action: "logout", data: { test: "test" } };
	$.ajax({
		type: "POST",
		url: "libs/call_func.php",
		data: JSON.stringify(send_data),
		contentType: "application/json",
		async: true,
		success : function(data)
		{			  					
			data = JSON.parse(data);  						 
			if(data.success == 0 || data.success == 2){
				// deleteCookie(data.cookie_name);
				$('#barra-sopra').html('sei uscito');		
				$('#menu').load('include/menu.php', function(){
					changePage(host+uri_lang, '.hw-link', true);
					utente = '';
					d.resolve(data);    
				});			              
			}  						    			
		}
	});
	return d.promise();
}


var validateForm = function(data){
	var result = "ok";
	var empty = false;
	for (i in data) {
		if(!data[i]){
			empty = true;    		
			$('.required[name="'+i+'"]').addClass('warning');                     
		}else{
			$('.required[name="'+i+'"]').removeClass('warning');
		}
	}		
	if(empty) return "fill all mandatory fields";
	if(data.password.length < 8) return "password must be more than 8 chars";
	if(data.password !== data.password_check) return "passwords must be the same";
	if(!isEmail(data.email)) return "insert valid email";		
	return result;
}

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

// cookie
function createCookie(name,value,exp) {
    if (exp) {
	var date = new Date();
	date.setTime(date.getTime()+(exp*24*60*60*1000)); //*24*60*60*1000
	var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function deleteCookie(name) {
    createCookie(name,"",-1);
}


function parseSticky(data){    
    for (var i = 0; i < data.length; i++) {                
		$('.sticky_post-'+i+' .title').html(data[i].title.rendered);		
		var subs = 140;
		if($(document).width() >= 992) subs = 200;
        $('.sticky_post-'+i+' .excerpt').html(data[i].excerpt.rendered.substring(0, subs).substr(0, data[i].excerpt.rendered.substring(0, subs).lastIndexOf(' '))+' ...');
		var d = new Date(data[i].date);    		
        $('.sticky_post-'+i+' .date').html(monthNames[d.getMonth()]+' '+d.getFullYear());
		$('.sticky_post-'+i+' .link').removeClass('opaque');
		var href = $('.sticky_post-'+i+' .hw-link').attr('href');        
		$('.sticky_post-'+i+' .hw-link').attr('href', href+data[i].slug);
        // for(var cat = 0; cat < data[i].categories.length; cat++){			
		// 	if(data[i].categories[cat] != 1 && data[i].categories[cat] != 23)			
        //         parseCategory(data[i].categories[cat], i, data[i].id).then(function(result){                                        
        //             $('.sticky_post-'+result[0]+' .categories').append(($('.sticky_post-'+result[0]+' .categories').html() === '') ? result[1].name : ', '+result[1].name);
        //         }) 
		// }       
		// for(var cat = 0; cat < data[i]._embedded['wp:term'][0].length; cat++){																	
		// 	if(data[i]._embedded['wp:term'][0][cat].id != 1 && data[i]._embedded['wp:term'][0][cat].id != 23)
		// 		$('.sticky_post-'+i+' .categories').append( ($('.sticky_post-'+i+' .categories').html() === '') ? data[i]._embedded['wp:term'][0][0].name : ', '+result[1].name)										
		// }
    }    
}

function parseCategory(cat, post, post_id){
    var d = $.Deferred();     
    var dataURL = wp_endpoint+'categories/'+cat;           
    $.ajax({ 
        type: "GET",
        url: dataURL,
        async: true,
        cache: false,
        error: function (xhr, ajaxOptions, thrownError) {				
            //                
        },
        xhr: function () {					
            var xhr = new window.XMLHttpRequest();        
            return xhr;
        },
        beforeSend: function () {					
            //	
        },
        complete: function () {				
            //            
        },		
        success : function(data)
        {   
            var result = [];                      
            result[0] = post;
			result[1] = data;
			result[2] = post_id
            d.resolve(result);
        }
    });    
    return d.promise()
}

function createBlog(page, cat){
	cat = (typeof cat === 'undefined') ? '' : '&categories='+cat;
    var d = $.Deferred();
	dataURL = wp_endpoint+'posts/?_embed&lang='+wp_lang+'&per_page='+home_blog_max+'&page='+page+'&tags_exclude=40,41,42,43'+cat;    
	console.log(dataURL);
    $.ajax({ 
        type: "GET",
        url: dataURL,
        async: true,
        cache: false,
        error: function (xhr, ajaxOptions, thrownError) {				
			//
			d.resolve('error');   
        },
        xhr: function () {					
            var xhr = new window.XMLHttpRequest();        
            return xhr;
        },
        beforeSend: function () {					
            //	
        },
        complete: function () {				
            //            
        },		
        success : function(data)
        {
            // console.log(data)
            var result = {
				render: [],
				data: data
			}
            for(var i = 0; i < data.length; i++){  
				var post_categories = ''	
				var go = true;	
				var date = new Date(data[i].date); 										
				//categories				
				// for(var cat = 0; cat < data[i]._embedded['wp:term'][0].length; cat++){																	
				// 	if(data[i]._embedded['wp:term'][0][cat].id != 1 && data[i]._embedded['wp:term'][0][cat].id != 23)
				// 		post_categories += (post_categories === '') ? data[i]._embedded['wp:term'][0][cat].name : ', '+data[i]._embedded['wp:term'][0][cat].name
				// }				

                result.render[i] = '<div class="blog-post" post="post-'+data[i].id+'">'+
                    '<a class="blog-link hw-link" href="'+href_link+'post/'+data[i].slug+'"><h3 class="blog-post-title" >'+data[i].title.rendered+'</h3></a>'+
					'<p class="blog-post-meta">'+monthNames[date.getMonth()]+' '+date.getFullYear()+' by <span class="color-1">'+data[i]._embedded.author[0].name+'</span>'+
					'<br><span class="text-primary categories">'+post_categories+'</span></p>'+
                    data[i].content.rendered+
                    '</div>'
            }            
            d.resolve(result);                                       
        }
    });
    return d.promise()
}

function getPost(slug){
	var d = $.Deferred();
	dataURL = wp_endpoint+'posts/?_embed&lang='+wp_lang+'&slug='+slug;   

    $.ajax({ 
        type: "GET",
        url: dataURL,
        async: true,
        cache: false,
        error: function (xhr, ajaxOptions, thrownError) {				
            //
        },
        xhr: function () {					
            var xhr = new window.XMLHttpRequest();        
            return xhr;
        },
        beforeSend: function () {					
            //	
        },
        complete: function () {				
            //            
        },		
        success : function(data)
        {            
            d.resolve(data);                                       
        }
    });
	return d.promise()
}

function getCategoryIdBySlug(slug){
	var d = $.Deferred();
	dataURL = wp_endpoint+'categories?slug='+slug+'&lang='+wp_lang;	
	$.ajax({ 
        type: "GET",
        url: dataURL,
        async: true,
        cache: false,
        error: function (xhr, ajaxOptions, thrownError) {							
			d.resolve('error');   
        },
        xhr: function () {					
            var xhr = new window.XMLHttpRequest();        
            return xhr;
        },
        beforeSend: function () {					
            //	
        },
        complete: function () {				
            //            
        },		
        success : function(data)
        {            
			if(data.length == 0) d.resolve('error');   
            else d.resolve(data[0].id);                                       
        }
    });
	return d.promise()
}