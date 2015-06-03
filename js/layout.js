$(document).ready(function(){
	//top nav
	$('#locationDropDown').find('li').not('.disabled').click(function(){
		var location = $(this).text();
		$('#selectLocation').text(" " + location);
	});
	$('#locationDropDown').find('li').not('.disabled')[0].click();
	
	
});
