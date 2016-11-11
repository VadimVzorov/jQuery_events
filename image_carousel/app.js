//IP - current image on top + clicked image
//OP - image on top


function changeSrc(src, $target){
	$target.attr('src', src); // setting src
}



$(document).ready(function() {
	$('.img').click(function(event) {
		var curr = $(this).find('img').attr('src'); // getting the src
		var $hero = $(".hero img");
		changeSrc(curr, $hero);
	});
});



// var src = $(dom).attr('src')

// $(dom).attr('src', "set src")