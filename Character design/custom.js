$(document).ready(function() {

	var right = $('header').css('margin-right');
	$('.start-button').css('right', right);

	var total_hairs = $('.hair').length;
	var total_beards = $('.beard').length;
	var total_clothes = $('.clothes').length;
	var current_hair = 1;
	var current_beard = 1;
	var current_cloth = 1;
	var sex = 'male';
	var player_name;

	$('.next').click(function() {
		if($(this).hasClass('change_hair')) {
			current_hair++;
			$('#hair .active').removeClass('active');
			if(current_hair > total_hairs) {
				$('#hair').find('[data-lineup="1"]').addClass('active');
				current_hair = 1;
			} else {
				$('#hair').find('[data-lineup="'+current_hair+'"]').addClass('active');
			}
		} else if($(this).hasClass('change_beard')) {
			current_beard++;
			$('#beard .active').removeClass('active');
			if(current_beard > total_beards) {
				$('#beard').find('[data-lineup="1"]').addClass('active');
				current_beard = 1;
			} else {
				$('#beard').find('[data-lineup="'+current_beard+'"]').addClass('active');
			}
		} else if($(this).hasClass('change_clothes')) {
			current_cloth++;
			$('#clothes .active').removeClass('active');
			if(current_cloth > total_clothes) {
				$('#clothes').find('[data-lineup="1"]').addClass('active');
				current_cloth = 1;
			} else {
				$('#clothes').find('[data-lineup="'+current_cloth+'"]').addClass('active');
			}
		}
	});

	$('.prev').click(function() {
		if($(this).hasClass('change_hair')) {
			current_hair = current_hair - 1;
			$('#hair .active').removeClass('active');
			if(current_hair < 1) {
				$('#hair').find('[data-lineup="'+total_hairs+'"]').addClass('active');
				current_hair = total_hairs;
			} else {
				$('#hair').find('[data-lineup="'+current_hair+'"]').addClass('active');
			}
		} else if($(this).hasClass('change_beard')) {
			current_beard = current_beard - 1;
			$('#beard .active').removeClass('active');
			if(current_beard < 1) {
				$('#beard').find('[data-lineup="'+total_beards+'"]').addClass('active');
				current_beard = total_beards;
			} else {
				$('#beard').find('[data-lineup="'+current_beard+'"]').addClass('active');
			}
		} else if($(this).hasClass('change_clothes')) {
			current_cloth = current_cloth - 1;
			$('#clothes .active').removeClass('active');
			if(current_cloth < 1) {
				$('#clothes').find('[data-lineup="'+total_clothes+'"]').addClass('active');
				current_clothes = total_clothess;
			} else {
				$('#clothes').find('[data-lineup="'+current_cloth+'"]').addClass('active');
			}
		}
	});

	$('#female').click(function() {
		alert('Then you are not allowed to play, FUCK OFF!')
	});




	$('.start-button').click(function() {
		player_name = $('#name').val();

		var playerDetails = { 'name': player_name, 'sex': sex, hair: current_hair, 'beard': current_beard, 'cloth': current_cloth};
		localStorage['player'] = JSON.stringify(playerDetails);

		console.log('Navn: ' + player_name + ' Køn: ' + sex + ' Hår: ' + current_hair + ' Skæg: ' + current_beard + ' Tøj: ' + current_cloth);

		window.location.href = "game.html";
	});
});