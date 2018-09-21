<?php 
session_start();
if(!isset($_SESSION['username'])){
    echo 'Non hai accesso a questa pagina.';    
}else{
?>

<form name="form4" id="form4" >
    aggiungi la notizia:
	<br>
	<br>
	<textarea name="testo" id="testo" rows="5" style="width: 90%; max-width: 90%; min-width: 90%;"></textarea>
	<br><br>
	<input type="submit" name="invia" id="invia" value="invia">	
</form>

<script>		
	$('#form4').submit(function(e){		
		e.preventDefault();
        var send_data = { action: "addNews", data: objectifyForm($(this).serializeArray()) };
        // var check_data = objectifyForm($('#form4 .required').serializeArray());    
        // var form_valid = validateForm(check_data);        
        // if(form_valid != "ok"){
        //     $('#barra-sopra').html(form_valid);
        //     return false;
        // }
        
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
                    $('#barra-sopra').html('si è verificato un errore.');
                }else{                                    
                    $('#fascia-news').load('include/news.php', function(){
                        $('#barra-sopra').html('news aggiunta');                            
                    });                    
                } 
            }
        });
        return false;
	});
</script>

<?php
}
?>
