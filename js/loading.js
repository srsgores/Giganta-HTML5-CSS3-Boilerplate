/*------------------------------------------------------------------------------------------------------------------------

    Author: Sean Goresht
    www: https://seangoresht.com/
    github: https://github.com/srsgores

    twitter: http://twitter.com/S.Goresht

    Licensed under the GNU Public License

--------------------------------------------------------------------------------------------------------------------- */

function hideLoader (loader_div, selector, hidden_class) {
	$(loader_div).toggle("40ms");
	$(selector).not(loader_div).hide().removeClass(hidden_class).fadeIn("slow");
}

jQuery(document).ready(function($) {
	hideLoader("#ajaxloader1", "body > div", "loading");
});
