$(document).ready(function() {
	$('.promo-toggle').click(function(e) {
		if ($('#header-promo').css('display') == 'none') {
			$(this).addClass('hide');
			//$(this).css('background-image', 'url("img/promo-hide.gif")');
			//$(this).removeClass('showPromo').addClass('hide-promo');
			$('#header-promo').slideDown();
		} else {
			$(this).removeClass('hide');
			//$(this).css('background-image', 'url("img/promo-show.gif")');
			//$(this).removeClass('hide-promo').addClass('show-promo');
			$('#header-promo').slideUp();
		}
		e.preventDefault();
	});

	$('.media.thumb .bd p').ellipsis();
});