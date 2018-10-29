
<?php
$relative_path = __DIR__.'/../libs/head.php';
$first_load = (@$head_loaded) ? true : false;
if(!$first_load) require_once($relative_path);
if(!$first_load) ob_start("ob_gzhandler"); // AJAX size
$head->title = 'CDF STUDIO'; // SEO
hw_setTitle($head->title);
?>

<div class="jumbotron p-3 p-md-5 text-white rounded bg-dark main_post">
    <div class="hw-center col-md-8 px-0">
        <h1 class="display-4 title home-title">
            CDF Studio
        </h1>
        <!-- <p class="lead my-3 excerpt">
            Descrizione dello studio.<br>
            "Tutte le domande richiedono una risposta certa o, almeno, una profonda ricerca."
        </p>
        <div class="google_search">
            <form action="http://google.com/search" target="_blank"> 
                <input name="q" placeholder="Google" style="width:80%; max-width:400px;">
                <input type="submit" value="Cerca" style="width:80px;">
            </form>
        </div>     -->
    </div>
</div>

<div class="container2">    
    <div class="row">

        <div class="col-md-9 calendario">
            <h3 class="pb-3 mb-4 border-bottom section-title">
                Calendario
            </h3>            

            <!-- CALENDARIO -->
            <table id="zamcal" style="display:none;" class=" table table-striped order-list">
                <thead>
                    <tr>
                        <th scope="col">OP.</th>
                        <th scope="col">CLIENTE</th>
                        <th scope="col">NOTA</th>
                        <th scope="col">DATA</th>
                        <th scope="col">URG.</th>
                        <th scope="col">VISTO</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="7" style="text-align: left;">
                            <input type="button" class="btn btn-lg btn-block margin-top" id="addrow" value="Aggiungi riga" />
                            <input type="button" class="btn btn-lg btn-block margin-top" id="updaterow" value="Aggiorna" />
                        </td>
                    </tr>                    
                </tfoot>
            </table>

            <!-- <nav class="blog-pagination">            
                <a class="btn btn-outline-secondary load_more" >Altro</a>
            </nav> -->
        </div>

        <!-- FEED RSS -->
        <div class="col-md-3 blog-main">
            <h3 class="pb-3 mb-4 border-bottom section-title">
                RSS Feed
            </h3>

            <div class="feed">            
                <div class="posts-wrapper" id="feed"></div>
                <div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><br><br><br></div>
            </div>

            <nav class="blog-pagination">            
                <!-- <a class="btn btn-outline-secondary load_more" >Altro</a> -->
            </nav>
        </div>
    </div>
</div>



<script>
    var counter = 0;
    $('#zamcal').show();   

    // ZAMCAL GET
    var send_data = { action: "zamGet", data: {} };    

    $.ajax({
        type: "POST",
        url: "libs/call_func.php",
        data: JSON.stringify(send_data),
        contentType: "application/json",
        async: true,
        success : function(data)
        {			  					
            data = JSON.parse(data);  						             
            data.forEach(function(el, i){
                console.log(el)
                var newRow = $("<tr>");
                var cols = "";                
                cols += '<td><input value="'+((el.operazione == null) ? '' : el.operazione)+'" '+((el.operazione == null) ? '' : 'disabled')+' type="text" class="form-control zaminput" count="'+el.count+'" name="operazione"/></td>';
                cols += '<td><input value="'+((el.cliente == null) ? '' : el.cliente)+'" '+((el.cliente == null) ? '' : 'disabled')+' type="text" class="form-control zaminput" count="' + el.count + '" name="cliente"/></td>';
                cols += '<td class="col-sm-3"><textarea type="text" class="form-control zaminput" count="' + el.count + '" name="nota">'+((el.nota == null) ? '' : el.nota)+'</textarea></td>';
                cols += '<td><input value="'+el.data+'" type="date" class="form-control zaminput" count="' + el.count + '" name="data"/></td>';
                cols += '<td><input value="'+el.urgenza+'" type="text" class="form-control zaminput" count="' + el.count + '" name="urgenza"/></td>';
                cols += '<td><input '+((el.visto) ? 'checked' : '')+' type="checkbox" class="form-control zaminput" count="' + el.count + '" name="visto"/></td>';            
                cols += '<td></td>';
                newRow.append(cols);
                $("table.order-list").append(newRow);   
            });                         			
        }
    });    

    // ZAMCAL SAVE
    $('body').on('change', '.zaminput', function(){                
        var data = {
            field: $(this).attr('name'),
            type: $(this).attr('type'),
            count: $(this).attr('count'),
            value: ($(this).attr('type') == 'checkbox') ? $(this).prop('checked') : $(this).val()
        }                
        var send_data = { action: "zamSave", data: data };
        console.log(data)

        $.ajax({
            type: "POST",
            url: "libs/call_func.php",
            data: JSON.stringify(send_data),
            contentType: "application/json",
            async: true,
            success : function(data)
            {			  					
                data = JSON.parse(data);  						 
                console.log(data)
                if(data.success == true){
                    console.log('success')
                }  						    			
            }
        });        
    })
    

    // TABELLE    
    $("#updaterow").on("click", function () {
        location.reload();
    });

    $("#addrow").on("click", function () {
        // ZAMCAL MAX
        var send_data = { action: "zamMax", data: {} };    
        $.ajax({
            type: "POST",
            url: "libs/call_func.php",
            data: JSON.stringify(send_data),
            contentType: "application/json",
            async: true,
            success : function(data)
            {			
                data = JSON.parse(data);  		  					            					 
                counter = (data[0].count);  

                counter++;
                var newRow = $("<tr>");
                var cols = "";

                cols += '<td><input type="text" class="form-control zaminput" count="' + counter + '" name="operazione"/></td>';
                cols += '<td><input type="text" class="form-control zaminput" count="' + counter + '" name="cliente"/></td>';
                cols += '<td class="col-sm-3"><textarea type="text" class="form-control zaminput" count="' + counter + '" name="nota"/></td>';
                cols += '<td><input type="date" class="form-control zaminput" count="' + counter + '" name="data"/></td>';
                cols += '<td><input type="text" class="form-control zaminput" count="' + counter + '" name="urgenza"/></td>';
                cols += '<td><input type="checkbox" class="form-control zaminput" count="' + counter + '" name="visto"/></td>';
                
                cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="X"></td>';

                newRow.append(cols);
                $("table.order-list").append(newRow);               
            }
        });                
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });

    function calculateRow(row) {
        var price = +row.find('input[name^="price"]').val();
    }

    function calculateGrandTotal() {
        var grandTotal = 0;
        $("table.order-list").find('input[name^="price"]').each(function () {
            grandTotal += +$(this).val();
        });
        $("#grandtotal").text(grandTotal.toFixed(2));
    }

    // CARICAMENTO ALTRO
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
    
    // FEED RSS
    $.ajax({
        url: 'https://cors.io/?http://www.ipsoa.it/RSS-Feeds/Lavoro.aspx',
        type: 'GET',
        dataType: "xml"
    }).done(function(xml) {
        $('.feed .spinner').hide();

        $.each($("item", xml), function(i, e) {

            var blogNumber = i + 1 + ". ";

            var itemURL = ($(e).find("link"));
            var blogURL = "<a target=\"_blank\" href='" + itemURL.text() + "'>Scopri di più</a>";

            var itemTitle = ($(e).find("title"));
            var blogTitle = "<div>" + blogNumber + itemTitle.text() + "</div>";
            var itemDesc = ($(e).find("description"));
            var blogDesc = "<p style=\"margin-bottom: 0px;\">"+itemDesc.text() + "</p>";

            $("#feed").append('<div style=\"margin-bottom: 10px;\">'+blogTitle+blogURL+'</div>');            
            // return i<9;

        });
    });
</script>

<?php if(!$first_load) ob_hw_end(); ?>