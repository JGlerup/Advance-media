$(document).ready(function(){
	var playerDetails = JSON.parse(localStorage['player']);

	$('#player-name').text(playerDetails['name']);
	$('#hair').html('<img src="images/hair'+playerDetails['hair']+'.png">');
	$('#beard').html('<img src="images/beard'+playerDetails['beard']+'.png">');
	$('#cloth').html('<img src="images/shirt'+playerDetails['cloth']+'.png">');
});