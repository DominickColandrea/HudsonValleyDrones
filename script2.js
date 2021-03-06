$(function() {
	$("#home").click(function() {
		$(".link").removeClass("active");
		$("#home").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".home").removeClass("hidden-xs-up");
		location.replace("#home");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}) //end home click
	$("#drones").click(function() {
		$(".link").removeClass("active");
		$("#drones").addClass("active");
		$("#about").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".drones").removeClass("hidden-xs-up");
		location.replace("#drones");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}) //end drones click
	$("#pilots").click(function() {
		$(".link").removeClass("active");
		$("#pilots").addClass("active");
		$("#about").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".pilots").removeClass("hidden-xs-up");
		location.replace("#pilots");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}) //end pilots click
	$("#licenses").click(function() {
		$(".link").removeClass("active");
		$("#licenses").addClass("active");
		$("#about").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".licenses").removeClass("hidden-xs-up");
		location.replace("#licenses");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}) //end licenses click
	$("#eventP").click(function() {
		$(".link").removeClass("active");
		$("#eventP").addClass("active");
		$("#services").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".eventP").removeClass("hidden-xs-up");
		location.replace("#eventPhotos");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}) //end eventP click
	$("#realEstateP").click(function() {
		$(".link").removeClass("active");
		$("#realEstateP").addClass("active");
		$("#services").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".realEstateP").removeClass("hidden-xs-up");
		location.replace("#realEstatePhotos");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}) //end realEstateP click
	$("#weddingP").click(function() {
		$(".link").removeClass("active");
		$("#weddingP").addClass("active");
		$("#services").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".weddingP").removeClass("hidden-xs-up");
		location.replace("#weddingPhotos");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}) //end weddingP click
	$("#aerial").click(function() {
		$(".link").removeClass("active");
		$("#aerial").addClass("active");
		$("#services").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".aerial").removeClass("hidden-xs-up");
		location.replace("#aerialInspections");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}) //end aerial click
	$("#contact").click(function() {
		$(".link").removeClass("active");
		$("#contact").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".contact").removeClass("hidden-xs-up");
		location.replace("#contact");
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}) //end contact click
	$(document).on('click', function(event) {
		var $clickedOn = $(event.target),
			$collapsableItems = $('.collapse'),
			isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
			isLink = ($clickedOn.closest('a').length == 1),
			isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
		if ((!isToggleButton && isLink) || isOutsideNavbar) {
			$collapsableItems.each(function() {
				$(this).collapse('hide');
			});
		}
	});
}) //end ready
