/*------------------------------------------------------------------------------------------------------------------------

    Author: Sean Goresht
    www: https://seangoresht.com/
    github: https://github.com/srsgores

    twitter: http://twitter.com/S.Goresht

    Licensed under the GNU Public License

--------------------------------------------------------------------------------------------------------------------- */

function main () {
	$('select').chosen();
	$('.features-wrapper').masonry({itemSelector: ".feature", isAnimated: !Modernizr.csstransitions, columnWidth: 240});
}

jQuery(document).ready(function($) {
	main();
});
