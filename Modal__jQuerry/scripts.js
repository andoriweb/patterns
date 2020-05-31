$(document).ready(function(event) {
	$('.button').on("click", function() {
		$('.overlay').show();
	});
	$('.popup__close').on("click", function() {
		$('.overlay').hide();
	});
});

/*show().fadeIn() - плавно*/
/*hide() -заменить- fadeOut*/