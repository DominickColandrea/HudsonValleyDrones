$(function() {
	let loc ="home";

	function home(){
		$(".link").removeClass("active");
		$("#home").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".home").removeClass("hidden-xs-up");
		location.replace("#home");
		loc = "home";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end home

	function drones(){
		$(".link").removeClass("active");
		$("#drones").addClass("active");
		$("#about").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".drones").removeClass("hidden-xs-up");
		location.replace("#drones");
		loc = "drones";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end drones

	function pilots(){
		$(".link").removeClass("active");
		$("#pilots").addClass("active");
		$("#about").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".pilots").removeClass("hidden-xs-up");
		location.replace("#pilots");
		loc = "pilots";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end pilots

	function licenses(){
		$(".link").removeClass("active");
		$("#licenses").addClass("active");
		$("#about").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".licenses").removeClass("hidden-xs-up");
		location.replace("#licenses");
		loc = "licenses";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end licenses

	function eventPhotos(){
		$(".link").removeClass("active");
		$("#eventP").addClass("active");
		$("#services").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".eventP").removeClass("hidden-xs-up");
		location.replace("#eventPhotos");
		loc = "eventPhotos";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end eventPhotos

	function realEstatePhotos(){
		$(".link").removeClass("active");
		$("#realEstateP").addClass("active");
		$("#services").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".realEstateP").removeClass("hidden-xs-up");
		location.replace("#realEstatePhotos");
		loc = "realEstatePhotos";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end realEstatePhotos

	function weddingPhotos(){
		$(".link").removeClass("active");
		$("#weddingP").addClass("active");
		$("#services").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".weddingP").removeClass("hidden-xs-up");
		location.replace("#weddingPhotos");
		loc = "weddingPhotos";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end weddingPhotos

	function aerialInspections(){
		$(".link").removeClass("active");
		$("#aerial").addClass("active");
		$("#services").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".aerial").removeClass("hidden-xs-up");
		location.replace("#aerialInspections");
		loc = "aerialInspections";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end aerialInspections

	function contact(){
		$(".link").removeClass("active");
		$("#contact").addClass("active");
		$(".container").addClass("hidden-xs-up");
		$(".contact").removeClass("hidden-xs-up");
		location.replace("#contact");
		loc = "contact";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end contact

	$("#home").click(function() {
		if (loc != "home") {
			home();
		} //end if
	}) //end home click
	$("#drones").click(function() {
		if (loc != "drones") {
			drones();
		} //end if
	}) //end drones click

	$("#pilots").click(function() {
		if (loc != "pilots") {
			pilots();
		} //end if
	}) //end pilots click
	$("#licenses").click(function() {
		if (loc != "licenses") {
			licenses();
		} //end if
	}) //end licenses click
	$("#eventP").click(function() {
		if (loc != "eventPhotos") {
			eventPhotos();
		} //end if
	}) //end eventP click
	$("#realEstateP").click(function() {
		if (loc != "realEstatePhotos") {
			realEstatePhotos();
		} //end if
	}) //end realEstateP click
	$("#weddingP").click(function() {
		if (loc != "weddingPhotos") {
			weddingPhotos();
		} //end if
	}) //end weddingP click
	$("#aerial").click(function() {
		if (loc != "aerialInspections") {
			aerialInspections();
		} //end if
	}) //end aerial click
	$("#contact").click(function() {
		if (loc != "contact") {
			contact();
		} //end if
	}) //end contact click
	console.log(location.href);

	if (location.href == "hudsonvalleydrones.biz/#drones") {
		drones();
	}
	else if (location.href == "hudsonvalleydrones.biz/#pilots") {
		pilots();
	}
	else if (location.href == "hudsonvalleydrones.biz/#licenses") {
		licenses();
	}
	else if (location.href == "hudsonvalleydrones.biz/#eventPhotos") {
		eventPhotos();
	}
	else if (location.href == "hudsonvalleydrones.biz/#realEstatePhotos") {
		realEstatePhotos();
	}
	else if (location.href == "hudsonvalleydrones.biz/#weddingPhotos") {
		weddingPhotos();
	}
	else if (location.href == "hudsonvalleydrones.biz/#aerial") {
		aerialInspections();
	}
	else if (location.href == "hudsonvalleydrones.biz/#contact") {
		contact();
	}
	else {
		home();
	}

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
