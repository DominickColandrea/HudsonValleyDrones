$(function(){
	
$("#home").click(function(){
	$(".link").removeClass("active");
	$("#home").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".home").removeClass("hidden-xs-up");
	location.replace("#home");
})//end home click

$("#drones").click(function(){
	$(".link").removeClass("active");
	$("#drones").addClass("active");
	$("#about").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".drones").removeClass("hidden-xs-up");
	location.replace("#drones");
})//end drones click

$("#pilots").click(function(){
	$(".link").removeClass("active");
	$("#pilots").addClass("active");
	$("#about").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".pilots").removeClass("hidden-xs-up");
	location.replace("#pilots");
})//end pilots click

$("#licenses").click(function(){
	$(".link").removeClass("active");
	$("#licenses").addClass("active");
	$("#about").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".licenses").removeClass("hidden-xs-up");
	location.replace("#licenses");
})//end licenses click

$("#eventP").click(function(){
	$(".link").removeClass("active");
	$("#eventP").addClass("active");
	$("#services").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".eventP").removeClass("hidden-xs-up");
	location.replace("#eventPhotos");
})//end eventP click

$("#realEstateP").click(function(){
	$(".link").removeClass("active");
	$("#realEstateP").addClass("active");
	$("#services").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".realEstateP").removeClass("hidden-xs-up");
	location.replace("#realEstatePhotos");
})//end realEstateP click

$("#weddingP").click(function(){
	$(".link").removeClass("active");
	$("#weddingP").addClass("active");
	$("#services").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".weddingP").removeClass("hidden-xs-up");
	location.replace("#weddingPhotos");
})//end weddingP click

$("#aerial").click(function(){
	$(".link").removeClass("active");
	$("#aerial").addClass("active");
	$("#services").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".aerial").removeClass("hidden-xs-up");
	location.replace("#aerialInspections");
})//end aerial click

$("#contact").click(function(){
	$(".link").removeClass("active");
	$("#contact").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".contact").removeClass("hidden-xs-up");
	location.replace("#contact");
})//end contact click

})//end ready