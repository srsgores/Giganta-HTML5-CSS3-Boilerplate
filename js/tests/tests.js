/*------------------------------------------------------------------------------------------------------------------------
    Author: Sean Goresht
    www: http://seangoresht.com/
    github: https://github.com/srsgores

    twitter: http://twitter.com/S.Goresht

    Giganta Template - HTML5 CSS3 Boilerplate Template
    Licensed under the GNU Public License

	=============================================================================
	Filename: tests.js
	=============================================================================
	This file will load CSS and javascript based on the browser's features.

	Default is to load flexbox.css when flexbox is enables; else, it will load no-flexbox.css
	To edit these files, please see the less folder.

--------------------------------------------------------------------------------------------------------------------- */
function checkFeatures () {
	// Give Modernizr.load a string, an object, or an array of strings and objects
	Modernizr.load([
	  // Presentational polyfills
	  {
	    // Logical list of things we would normally need
	    test : Modernizr.flexbox,
	    // Modernizr.load loads css and javascript by default
	    yep : ['css/flexbox.css'],
	    nope : ['css/no-flexbox.css', 'http://cdnjs.cloudflare.com/ajax/libs/masonry/2.1.04/jquery.masonry.min.js', 'js/masonry_init.js']
	  },
	]);
}