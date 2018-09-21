<?php 
session_start();
if(isset($_SESSION['username'])):
    echo '<div class="container">Sei già loggato.</div>';        
else:
?>


<div class="formsDiv container">
    <hr>
    Register here:<br>
    <hr>
    <br>    
    <div >
        <form class="forms" name="form2" id="form2">
            <label for="textfield">username:
            </label>
            <br>
            <input name="username" type="text" class="style1 required" id="textfield" />
            <br>            
            <label for="label2">password:
            </label>
            <br>
            <input name="password" type="password" class="style1 required" id="label2" />
            <br>
            <label for="label3">confirm:</label>
            <br>
            <input name="password_check" type="password" class="style1 required" id="label3" />
            <br>
            <label for="label"> email:</label>
            <br>
            <input name="email" type="text" class="style1 required" id="label" />
            <br><br>            
            <label>*leave a message:</label>
            <textarea name="messaggio" class="style1"></textarea>            
            <br><br>
            <div>* = optional</div>
        
            <br>
            <input name="send" type="submit" class="btn btn-sm btn-outline-secondary" value="send" />
            <input name="clear" type="reset" class="btn btn-sm btn-outline-secondary" value="reset" />
            <br>
        </form>
    </div>
    <br>
    <span id="error-log"></span>
</div>    
       
<script type="text/javascript">		
    if(utente){        
        changePage('home', '.hw-link', true);
    }

	$('#form2').submit(function(e){        
        e.preventDefault();
        var send_data = { action: "register", data: objectifyForm($(this).serializeArray()) };
        var check_data = objectifyForm($('#form2 .required').serializeArray());    
        var form_valid = validateForm(check_data);        
        if(form_valid != "ok"){            
            $('#error-log').html(form_valid);
            return false;
        }        

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
                if(data.success == 1){                                    
                    $('#error-log').html('username & email not available');
                }else if(data.success == 2){
                    $('#error-log').html('username not available');
                }else if(data.success == 3){
                    $('#error-log').html('email not available');
                }else if(data.success == 4 || data.success == 5){
                    $('#error-log').html('there\'s some generic error that this lazy developer didn\'t catch');
                }else{                                    
                    $('#error-log').html('check your email to activate your account');                    
                    fbq('track', 'CompleteRegistration'); //facebook
                    // changePage('home', '.hw-link', true);                   
                } 
            }
        });
        return false;
	        
	});
</script>

<?php
endif;
?>