(function($) {

	"use strict";

	$('.status_menu_item').click(function() {

        let id_selector = "#" + this.id;
        let status_text = $(id_selector).text();

        $("#status_bar").text(status_text);

    });

})(jQuery);