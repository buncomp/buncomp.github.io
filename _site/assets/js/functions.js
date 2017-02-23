$(function() {1

	//scroll to the clicked object in a time of 1 second.
smoothScrolling(1500);


});


function smoothScrolling(duration) {

	//Assign a click listener to the links containing a hash.
	$('a[href^="."]').on('click', function(event) {

		//The clicked link is the traget.
		var target = $( $(this).attr('href'));
		//If the target exists, don't reload the page, just scroll down by the offset amount.
		if(target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			//and do it over the provided time in ms.
			}, duration);
		}
	});
}