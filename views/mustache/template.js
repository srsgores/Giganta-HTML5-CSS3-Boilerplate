/*------------------------------------------------------------------------------------------------------------------------
    Author: Sean Goresht
    www: http://seangoresht.com/
    github: https://github.com/srsgores

    twitter: http://twitter.com/S.Goresht

    Giganta Template - HTML5 CSS3 Boilerplate Template
    Licensed under the GNU Public License

	=============================================================================
	Filename: template.js
	=============================================================================
	This file, for mustache.js, will allow dynamic creation of pages based off of data being put in in any of the html files

--------------------------------------------------------------------------------------------------------------------- */

template = "
{{#head}}
<!DOCTYPE html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <script src = "extras/icomoon/lte-ie7.js"></script><![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<!--[if IE]>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.5.3/modernizr.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/flexie/1.0.0/flexie.min.js"></script>
    <script src="js/vendor/move.js"</script>
<![endif]-->
<head>
    <meta charset="utf-8">

    <!-- Use the .htaccess and remove these lines to avoid edge case issues.
         More info: h5bp.com/i/378 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

     <title>{title}</title>
    <meta name="description" content="{meta-description}">

    <!-- Mobile viewport optimized: h5bp.com/viewport -->
    <meta name="viewport" content="width=device-width">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->
    <link href='http://fonts.googleapis.com/css?family=Erica+One|Ubuntu+Condensed|Open+Sans|Maven+Pro|Sans+Pro:300,400' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/base.css">
    <!-- <link rel="stylesheet/less" href="less/style.less"> -->
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/typography.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/no-flexbox.css">

    <link rel="stylesheet" href="css/bootstrap.css" type="text/css">
   <!-- <link type="text/css" rel="stylesheet" href="css/1140.css"> -->
    <link type="text/css" rel="stylesheet" href="css/media-queries.css">
    <!-- todo: add font-awesome and icomoon-->
    <link rel="stylesheet" href="extras/icomoon/style.css">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.5.3/modernizr.min.js"></script>
    <script src="js/tests/tests.js"></script>
    <link rel="stylesheet" type="text/css" href="css/chosen.css">

    <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

    <!-- All JavaScript at the bottom, except this Modernizr build.
         Modernizr enables HTML5 elements & feature detects for optimal performance.
         Create your own custom Modernizr build: www.modernizr.com/download/ -->
    
</head>
{{/head}}
<body>
    <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.
         chromium.org/developers/how-tos/chrome-frame-getting-started -->
    <!--[if lt IE 7]><p class="chromeframe">Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->

    <!-- Add your site or application content here -->
    <header id="main" class="main-menu loading">
        {{#logo}}<a href = "/index.html"><img src="img/logo.png" class="flash-hover"></img></a>{{/logo}}
        {{#nav}}<nav id="nav-main" class="top-menu">
            <ul class = "top-nav">
                <li><a href="index.html">Home</a></li>
                <li><a href="docs/about.html">About</a></li>
                <li><a href="docs/features.html">Features</a></li>
                <li><a href="docs/installation.html">Installation</a></li>
                <li><a href="help-support/contact.html">Contact</a></li>
            </ul>
        </nav>{{/nav}}
    </header>
    <div id="ajaxloader1"></div>
    <div id="main-content" role = "main" class = "loading">
    {{#top_a}}
    <div id="top-a">
    {{content}}
    </div>{{/top_a}}
    {{#article}}
    <article>
    <hgroup>
        <h1 class="article-header">{{header}}</h1>
        <h2 class="subtitle">{{subtitle}}</h2>
        </hgroup>
        {{content}}
    </article>
    {{/article}}

    {{#footer}}
    <!-- JavaScript at the bottom for fast page loading: http://developer.yahoo.com/performance/rules.html#js_bottom -->

    <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.7.2.min.js"><\/script>')</script>

    <!-- scripts concatenated and minified via build script -->
    <!-- <script src="js/plugins.js"></script> -->
    <script src="js/loading.js"></script>
    
    <script src="http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/hashgrid/6/hashgrid.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/store.js/1.1.1/store.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/kerning.js/0.2/kerning.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/masonry/2.1.04/jquery.masonry.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.0.4/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery.transit/0.1.3/jquery.transit.min.js"></script>
    <script src="extras/chosen/chosen.jquery.min.js"></script>
    <!-- <script src="js/vendor/can.jquery.min.js"></script> -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.5.0-dev/mustache.min.js"></script>
    <!-- <script src="js/vendor/can.fixture.js"></script> -->
    <script src = "js/main.js"></script>
    <!-- <script src="http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.8.19/jquery-ui.min.js" media = "@screen"></script> -->
    <!-- end scripts -->

    <!-- Asynchronous Google Analytics snippet. Change UA-XXXXX-X to be your site's ID.
         mathiasbynens.be/notes/async-analytics-snippet -->
    <!-- <script>
        var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
        (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
        s.parentNode.insertBefore(g,s)}(document,'script'));
    </script> -->
</body>
</html>
{{/footer}}

";