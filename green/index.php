<!DOCTYPE html>
<html>
<head>
	<title>Green Consulting</title>
	
	<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700|PT+Serif:400,700|Lato:400,700,300' rel='stylesheet' type='text/css'>
	<!-- Font Awesome Icon -->
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <!-- Bootstrap Icon -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- Owl Carousel -->
    <link rel="stylesheet" href="assets/css/owl.carousel.css">
    <!-- Magnific Popup -->
    <link rel="stylesheet" href="assets/css/magnific-popup.css">
    <!-- Animation Css -->
    <link rel="stylesheet" href="assets/css/animate.css">
    <!-- Menu Files -->
    <link rel="stylesheet" href="assets/css/menu/menuzord.css">
    <link rel="stylesheet" href="assets/css/menu/menuzord-min.css">
    <!-- Main css file -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Responsive css file -->
    <link rel="stylesheet" href="assets/css/responsive.css">
    <!-- icomoon fonts -->
    <link rel="stylesheet" type="text/css" href="assets/css/icomoon.css">
	
	<!-- Modernizr file -->
    <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>

</head>
<body>

	<!-- Header Area -->
	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="left-box">
						<p class="font-Montserrat">Avenue Yacoub El Marini. Résidence Tachfine. N° 13. Guéliz</p>
					</div>
				</div>
				<div class="col-md-6">
					<div class="right-box font-Montserrat text-right">
						<span class="border-right"><i class="fa fa-phone" aria-hidden="true"></i> + 212 5 24 45 85 85</span>
						<span>
							<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
							<a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
							<a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
						</span>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- End Of Header Area -->

	<!-- Main Menu -->
	<div id="main-menu" class="main-menu">
		<div class="container">
			<div id="menuzord" class="menuzord red">
				<a href="" class="menuzord-brand"><img src="assets/images/logo.png" alt="Logo Image"></a>
				<ul class="menuzord-menu">
					<li><a href="home">Accueil</a></li>
					<li><a href="aboutus">À propos de nous</a></li>
					<li><a href="services">Services</a></li>
					<li><a href="contact">Contact</a></li>
				</ul>
			</div><!-- /#menuzord -->
		</div>
	</div><!-- /.main-menu-->
	<!-- End of Main Menu -->
	
	<?php 
		if(isset($_GET['page']) && file_exists('pages/'. $_GET['page'] .'.php'))
			include 'pages/'. $_GET['page'] .'.php';
		else
			include 'pages/home.php';
	?>

	<!-- Footer start -->
	<footer class="font-Montserrat">
		<!-- Newsletter Area -->
		<div id="newslatter" class="newslatter dark-bg section-padding">
			<div class="container">
				<div class="section-content text-center">
					<p class="font-Montserrat">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br> been the industry's standard dummy text</p>
					<div class="social-btn">
						<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		</div><!-- /#newslatter -->
		<!-- End of Newsletter Area -->

		<!-- /.footer-widget -->
		<div class="copyright">
			<div class="container">
				<div class="col-md-5">
					<div class="row">
						<p class="font-Montserrat margin-bottom-0"> &copy; Copyright <?php echo date('Y') ?> - <a href="#" target="_blank">Green Consulting</a>. Tous les droits réservés. </p>
					</div>
				</div>
				<div class="footer-menu">
					<div class="col-md-7">
						<div class="row">
							<ul class="text-right">
								<li><a href="">Accueil</a></li>
								<li><a href="">À propos de nous</a></li>
								<li><a href="">Services</a></li>
								<li><a href="">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!-- /.copyright -->
	</footer>
	<!-- Footer end -->

	<!-- All Js File Load in footer -->
    <script src="assets/js/vendor/jquery-2.1.4.min.js"></script>
    <script src="assets/js/jquery.magnific-popup.js"></script>
    <script src="assets/js/isotope.pkgd.min.js"></script>
    <script src="assets/js/isotope.function.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/menuzord.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <!-- Js Custom Functions File -->
    <script src="assets/js/main.js"></script>
    
</body>
</html>