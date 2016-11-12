/*function addLight(){
	$(this).addClass("bulb-on");
}

function removeBulb(){

}

$(".lightbulb").click(function(event) {
	addLight();
})*/


$(".lightbulb").click(function(event) {
	$(".lightbulb").removeClass("bulb-on");
	$(this).addClass("bulb-on");
})