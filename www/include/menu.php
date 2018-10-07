<?php 
//funzione che carica automaticamente le classi
function __autoload($nome_classe){
    require_once '../libs/' . $nome_classe . '.php';
}
//inizializzazione della classe ACCOUNT
$acc = new ADMIN;
$acc->checkLogin();
?>

<div class="">
	<header class="blog-header py-3">
		<div class="row flex-nowrap justify-content-between align-items-center">
		<div class="col-4 pt-2">
			<!-- <a class="text-muted link-normal" href="#">Subscribe</a> -->			
			<?php if(!isset($_SESSION['username'])): ?>
				<a class="btn btn-sm btn-outline-secondary hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>user/register">Sign up</a>
			<?php endif; ?>
		</div>
		<div class="col-4 text-center">
			<a class="blog-header-logo text-dark hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']; ?>"><span class="logo logo1">Studio</span><span class="logo logo2"> Zamara</span></a>
		</div>
		<div class="col-4 d-flex justify-content-end align-items-center">
			<!-- <a class="text-muted" href="#">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
			</a> -->
			<?php if(!isset($_SESSION['username'])): ?>
				<a class="btn btn-sm btn-outline-secondary hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>user/login">Accedi</a>
			<?php else: ?>
				<a class="btn btn-sm btn-outline-secondary hw-link" href="logout">Sign out</a>
			<?php endif; ?>
		</div>
		</div>
	</header>

	<nav class="navbar fixed-top navbar-expand-lg navbar-light ">
		<a class="navbar-brand hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']; ?>"><span class="logo logo1">Studio</span><span class="logo logo2"> Zamara</span></a>
		<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<!-- <span class="navbar-toggler-icon"></span> -->
			<span></span>
			<span></span>
			<span></span>
		</button>
		

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">											
				
				<li class="nav-item">
					<a class="nav-link hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>zamara">Pagina</a>					
				</li>												

				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Dropdown
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" href="#">Action</a>
					<a class="dropdown-item" href="#">Another action</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="#">Something else here</a>
					</div>
				</li>                				
				
				<?php if(!isset($_SESSION['username'])): ?>					
					<li class="nav-item">
						<a class="btn btn-sm btn-outline-secondary hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>user/login">Accedi</a>
					</li>
					<!-- <li class="nav-item">
						<a class="nav-link hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>user/login">Sign in</a>
					</li> -->
					<!-- <li class="nav-item">
						<a class="nav-link hw-link" href="<?php echo $_SESSION['HOST'].$_SESSION['uri_lang']?>user/register">Sign up</a>
					</li> -->
				<?php else: ?>
					<li class="nav-item">
						<a class="nav-link hw-link" href="logout">Sign out</a>
					</li>
				<?php endif; ?>				
			</ul>                
			
			<!-- <form class="form-inline my-2 my-lg-0 mobile-search">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
			</form> -->
		</div>
	</nav>

	<!-- <hr class="no-margin_padding"> -->

	<?php if($_SESSION['lang'] == 'it'): ?>
		<!-- <div class="nav-scroller py-1 mb-2">          
			<nav class="nav d-flex justify-content-between">
				<a class="p-2 text-muted" href="#">World</a>
			</nav>
		</div> -->
	<?php endif; ?>
</div>