
$('.filter-button').on('click', function(e) {

	var button = $(this).attr('id');

	if ( $(this).hasClass('active')) {

		hideTheseImages(button);

	} else {

		showTheseImages(button);

	}

});

function hideTheseImages(imageClass) {
	$('.' + imageClass).fadeOut();
	$('#' + imageClass).removeClass('active');
	alertify.success(imageClass +" has been removed.");
}

function showTheseImages(imageClass) {
	$('.' + imageClass).fadeIn();
	$('#' + imageClass).addClass('active');
	alertify.success(imageClass +" has been added.");
}