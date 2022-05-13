(function($) {

	"use strict";

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});
	
	$("button.navbar-toggler").click(function() {
		var that = $(this)[0]

		var dataMenu = $(that).attr("data-menu");
		var dataTarget = $(that).attr("data-target")

		$(dataTarget).toggleClass("d-none")
		$(dataMenu).toggleClass("d-none")
	})

	// $('#pick-date').pickadate();

})(jQuery);