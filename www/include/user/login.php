<?php 
@session_start();
//SEO
// $head->title = 'hackweb | login';
if(!isset($_SESSION['username'])):
?>

<div class="formsDiv container" >
    <hr>
    Insert username and password:<br>
    <hr>
    <br>  
    <div >
        <form class="forms" name="form3" id="form3">
            <label>username:</label><br>
            <input name="username" type="text"  id="username" />            
            <br><br>
            <label>password:</label>
            <br>
            <input name="password" type="password" id="password" />
            <br>
            <br>
            <div >
                <input name="ricordami" type="checkbox" id="ricordami" value="true" />
                remember me</div>
            
            
            <br>
            <div >
                <input name="Submit" type="submit" class="btn btn-sm btn-outline-secondary" value="Sign in" />
            </div>
            <div class="error-bar">
            
            </div>
            
        </form>
    </div>

</div>

<script>		    
    if(utente){        
        changePage('', '.hw-link', true);
    }

	$('#form3').submit(function(e){
        e.preventDefault();
        var send_data = { action: "login", data: objectifyForm($(this).serializeArray()) };

        $.ajax({
            type: "POST",
            url: "libs/call_func.php",
            data: JSON.stringify(send_data),
            contentType: "application/json",
            async: true,
            success : function(data)
            {
                console.log(data);       
                data = JSON.parse(data);                           
                if(data.success == 0){                                    
                    $('.error-bar').html('username/password invalid');
                }else if(data.success == 3){
                    $('.error-bar').html('account not verified');
                }else{                                    
                    createCookie(data.cookie_name, data.cookie_value, 30);                    
                    if(data.success == 99){
                        changeUrl(host+uri_lang, '.hw-link').then(function(data2){
                            // setTimeout("document.location.reload(true)",1000);
                        });                        
                    }else{                    
                        $('#menu').load('include/menu.php', function(){                        
                            utente = data.utente;                    
                            $('#barra-sopra').html('bentornato ' + data.utente);                                                               
                            changePage(host+uri_lang, '.hw-link', true).then(function(data2){
                                //
                            });
                        });              
                    }      
                } 
            }
        });
        return false;
	});
</script>

<?php 
else:
    echo '<div class="container">Sei già loggato.</div>';
endif;    
?>