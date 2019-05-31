$(function() {
	$(document).on('mouseover', '.level1 > a', function() {
		if($(this).next('.level2').is(':visible')) {
			$(this).next('.level2').slideUp();
		} else {
			$('.level2').slideUp();
			$(this).next('.level2').slideDown();
		}
		return false
	});
});