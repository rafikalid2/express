<section id="contact">
	<!-- Page Head -->
	<section id="page-head" class="page-head">
		<div class="overlay section-padding text-center font-Montserrat">
			<div class="container">
				<h1>Contactez-nous</h1>
				<p class="color-white">Notre meilleur services pour vous</p>
				<span><a href="#" class="color-white after">Accueil</a> Contact</span>
			</div>
		</div>
	</section><!-- /#page-head -->
	<!-- End of Page Head -->

	<!-- Main Contact Area -->
	<section id="our-main-office" class="our-main-office section-padding">
		<div class="container">
			<div class="section-head text-center">
				<h2>notre bureau principal</h2>
				<span>Appelez-nous aujourd'hui pour toute vos question</span>
			</div>

			<div class="main-contact-form">
				<div class="row">

					<div class="col-md-6">
						<div id="respond" class="comment-respond">
							<h4 id="reply-title" class="comment-reply-title color-212121 bold">
								reste en contact
							</h4><!-- /#reply-title -->
							<p>Notre personnel de soutien à la clientèle amical peut offrir des conseils d'experts et vous aider à économiser votre argent. Assurez-vous de poser des questions sur les promotions disponibles</p>
							<form action="#" method="post" id="commentform" class="contact-form">
								<div class="row">
									<div class="input-box-area">
										<div class="col-md-6">
											<label for="author">Votre Nom (obligatoires)</label>
											<input id="author" class="form-control" name="author" type="text" value="" size="30" aria-required="true" title="Name" required="">
										</div>
										<div class="col-md-6">
											<label for="email">Votre Email (obligatoires)</label>
											<input id="email" class="form-control" name="email" type="email" value="" size="30" aria-required="true" title="Email" required="">
										</div>
									</div>
								</div>	
								<label for="author">Votre Message</label>
								<textarea id="comment" class="form-control" name="comment" title="Comment" required=""></textarea>

								<button name="submit" class="submit text-uppercase custom-btn" type="submit" id="submit">Envoyer Message</button>
								
							</form><!-- /#commentform -->
						</div><!-- /#respond -->
					</div>

					<div class="col-md-3">
						<div class="comtact-info-area">
							<div class="single-icon-item">
								<div class="icon"><i class="fa fa-map-marker"></i></div>
								<div class="mm-small-box">
									<h5>Adresse</h5>
									<p>Avenue Yacoub El Marini. Résidence Tachfine. N° 13. Guéliz. Marrakech</p>
								</div>
							</div>
							<div class="single-icon-item">
								<div class="icon"><i class="fa fa-envelope-o"></i></div>
								<div class="mm-small-box">
									<h5>Email</h5>
									<p>contact@greenconsulting.com</p> 
									<p>support@greenconsulting.com</p>
								</div>
							</div>
							<div class="single-icon-item">
								<div class="icon"><i class="fa fa-phone"></i></div>
								<div class="mm-small-box">
									<h5>Téléphones</h5>
									<p>Tél : +212 5 24 45 85 85</p> 
									<p>Gsm : +212 6 61 83 14 04</p>
								</div>
							</div>
						</div><!-- /.comtact-info-area -->
					</div>

					<div class="col-md-3">
						<div class="opening-hour">
							<h4 class="color-212121 bold">Heures d'ouverture</h4>
							<ul>
								<li>Lundi<span>08:00am-06:00pm</span></li>
								<li>Mardi<span>08:00am-06:00pm</span></li>
								<li>Mercredi<span>08:00am-06:00pm</span></li>
								<li>Jeudi<span>08:00am-06:00pm</span></li>
								<li>Vendredi<span>08:00am-06:00pm</span></li>
								<li>Samedi<span>Fermer</span></li>
								<li>Dimanche<span>Fermer</span></li>
							</ul>
						</div>
					</div>

				</div>
			</div><!-- /.contact-wrapper -->
			
		</div><!-- /.container -->
	</section><!-- /#our-main-office -->
	<!-- End Of Main Contact Area -->
	
	<!-- Google Map -->
	<div id="google-map">
		<div class="map-container">
			<div id="googleMaps" class="google-map-container"></div>
		</div><!-- /.map-container -->
	</div><!-- /#google-map-->
	<!-- End of Google Map -->
	
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1cZtqidvg0m-f8Hd3S6RHx1mY-omuLS4"></script>
	<script>
        function initialize() {
            var mapOptions = {
                zoom: 16,
                scrollwheel: false,
                center: new google.maps.LatLng(31.630542, -8.006704),
            };

            var map = new google.maps.Map(document.getElementById('googleMaps'),
                mapOptions);


            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                map: map
            });

        }
        google.maps.event.addDomListener(window, 'load', initialize);
	</script>

</section>