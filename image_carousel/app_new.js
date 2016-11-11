
//select the link
$('.thumbnail').click(function(){
	var select = $(this).find("img").attr("src");
	console.log (select);
	var mainImg = $(".hero").find("img").attr("src", select);
	 
})

/*
function replaceURL(select, $target) {
	$target.attr("src", select);
}
*/

