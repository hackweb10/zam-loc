
<div id="menu-close">men&ugrave;</div>

<div id="menu-content">
	<div class="logincell" align="center">men&ugrave;</div>
		<div id="menu_block">
			<ul id="main_menu">
				<li><a class="hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']; ?>">home</a></li>
				<!-- <li><a class="hw-link" href="test">test</a></li> -->

				<!-- <li><a class="hw-link" href="include/assistenza.php">richieste lavoro</a></li> -->
			</ul>
		</div>
	<div class="logincell" align="center">utente</div>
	<div id="menu_block">
		<ul id="main_menu">
			<?php        
			if(isset($_SESSION['username'])){
				echo('<li><a class="hw-link" href="logout">logout</a></li></ul></div>');
				
				// $arr = (isset($_COOKIE[$acc->proteggi("g","giovi","sess_id","dfg","115")])) ? $_COOKIE : $_SESSION;			
				// $arr_txt = (isset($_COOKIE[$acc->proteggi("g","giovi","username","dfg","115")])) ? "cookie" : "session";			
				$potere = $_SESSION['potere'];
				$utente = $_SESSION['username'];

				if($potere >= 100){
					echo('					
						<div class="logincell" align="center">amministratore</div>
						<div id="menu_block">
						<ul id="main_menu">
						<li><a class="hw-link" href="'.$_SESSION['HOST'].$_SESSION['uri_lang'].'admin/add_news" onclick="">aggiungi news</a></li>
						<li><a class="hw-link" href="'.$_SESSION['HOST'].$_SESSION['uri_lang'].'test/prova">test</a></li>
						</ul></div>
						
						<!--<br>
						<div class="logincell" align="center">hacker utility</div>
						<div id="menu_block">
							<ul id="main_menu">
								<li><a class="hw-link" href="./404.php">anon <span class="hack_menu">mail_sender</span></a></li>
							</ul>
						</div>-->
					');
				}
				
				if($potere >= 999){
					echo('
						<div class="logincell" align="center">CANCELLERIA privata</div>
						<div id="menu_block">
						<ul id="main_menu">
						<li><a class="hw-link" href="include/canc_priv/vis_pratiche.php">visualizza pratiche</a></li>
						<li><a class="hw-link" href="include/canc_priv/ins_pratiche.php">aggiungi pratica</a></li>
						<li><a class="hw-link" href="include/canc_priv/index.php">aggiungi controparti</a></li>
						<li><a class="hw-link" href="include/canc_priv/index.php">archivio pratiche</a></li>
						<li><a class="hw-link" href="include/canc_priv/index.php">allega documenti alle pratiche</a></li>
						<li><a class="hw-link" href="include/canc_priv/index.php">richiedi accesso agli atti di una pratica</a></li>
						</ul></div>');
				}
			}else{ 
				echo('<li><a class="hw-link" href="'.$_SESSION['HOST'].$_SESSION['uri_lang'].'user/login" >login</a></li>
					<li><a class="hw-link" href="'.$_SESSION['HOST'].$_SESSION['uri_lang'].'user/register" >register</a></li>
					</ul></div>');					
			}
			?>		
	</div>

</div>