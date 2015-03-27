$(document).ready(function() {
		$("#further-projects").hide();
		$(".separator").mouseenter(function() {
			$(this).animate({
				opacity: 0.25,
				top: '-=2px'
			}, 'fast');
		});
		$(".separator").mouseleave(function() {
			$(this).animate({
				opacity: 1.0,
				top: '+=2px'
			}, 'fast');
		});
		$(".separator").click(function() {
			if($('#further-projects').is(':visible')) {
				$("#further-projects").hide(200);
			}
			else {
				$("#further-projects").show(500);
			};
		});
		
});
