$(document).ready(function() {
		$("#further-projects").hide();
		$("#projects-separator").mouseenter(function() {
			$(this).animate({
				opacity: 0.5,
				top: '-=2px'
			}, 'fast');
		});
		$("#projects-separator").mouseleave(function() {
			$(this).animate({
				opacity: 1.0,
				top: '+=2px'
			}, 'fast');
		});
		$("#projects-separator").click(function() {
			if($('#further-projects').is(':visible')) {
				$("#further-projects").hide(200);
			}
			else {
				$("#further-projects").show(500);
			};
		});
		
		$("#further-products").hide();
		$("#products-separator").mouseenter(function() {
			$(this).animate({
				opacity: 0.5,
				top: '-=2px'
			}, 'fast');
		});
		$("#products-separator").mouseleave(function() {
			$(this).animate({
				opacity: 1.0,
				top: '+=2px'
			}, 'fast');
		});
		$("#products-separator").click(function() {
			if($('#further-products').is(':visible')) {
				$("#further-products").hide(200);
			}
			else {
				$("#further-products").show(500);
			};
		});
		
});
