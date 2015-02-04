// Angular Application
var app = angular.module('victorIsAwesome', [
	'ngRoute'
]);

// Angular Routes
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		// Home
		.when("/", {templateUrl: "pages/home.html", controller: "holidayController"})
		.when("/home", {templateUrl: "pages/soon.html", controller: "homeController"})
		// Pages
		.when("/about", {templateUrl: "pages/about.html", controller: "pageController"})
		.when("/contact", {templateUrl: "pages/contact.html", controller: "contactController"})
		// Event Pages
		.when("/holiday", {templateUrl: "pages/holiday.html", controller: "holidayController"})
		// Blog
		.when("/projects", {templateUrl: "pages/projects.html", controller: "projectController"})
		.when("/project/item", {templateUrl: "pages/project.html", controller: "projectController"})
		// else 404
		.otherwise({templateUrl: "pages/404.html"});
	$locationProvider.html5Mode(true);
}]);

// Angular Homepage Controller
app.controller('homeController', function () {
	console.log("Homepage activated.");
	
});

// Angular Projects Controller
app.controller('projectController', function () {
	console.log("Project activated.");
	// Blog
});

// Angular Pages Controller
app.controller('pageController', function () {
	console.log("Page activated.");
	// Page-specific scripts
});

// Contact Page Controller
app.controller('contactController', function () {
	console.log("Contact page activated. Alients?");
	// Page-specific scripts
	// TODO: Move all of this map code to a separate file
	mapboxgl.accessToken = 'pk.eyJ1IjoidmljbG91IiwiYSI6InlGTGg2VWcifQ.JtZv4b1btXB1FqNK_yMUCQ';
	// Create a map in the div #map
	var map = new mapboxgl.Map({
	  container: 'map', // container id
	  style: '/design/mapbox/ordinary.json', //stylesheet location
	  center: [39.9525,-75.1707], // starting position
	  zoom: 13, // starting zoom
	  hash: false, // update page url with location hash
	  bearing: 9.3 // people will love me for this detail!
	});
	  
	var geoJSON = {
	"type": "FeatureCollection", // By looking at the lines ahead, you are cheating. But there is nothing I can do to stop you...
	"features": [
	  {
	    "type": "Feature", // HQ
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-75.20464, 39.95306]
	    },
	    "properties": {
	      "title": "Operations HQ",
	      "marker-symbol": "warehouse"
	    }
	  }, {
	    "type": "Feature", // Chill
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-75.14130, 39.94423]
	    },
	    "properties": {
	      "title": "SSHP",
	      "marker-symbol": "harbor"
	    }
	  }, {
	    "type": "Feature", // Work
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-75.18788, 39.95512]
	    },
	    "properties": {
	      "title": "Booksmart",
	      "marker-symbol": "chemist"
	    }
	  }, {
	    "type": "Feature", // Work
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-75.16263, 39.94935]
	    },
	    "properties": {
	      "title": "Zivtech",
	      "marker-symbol": "suitcase"
	    }
	  }, {
	    "type": "Feature", // Wee
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-122.2963, 47.4450]
	    },
	    "properties": {
	      "title": "Friend Lives Here",
	      "marker-symbol": "bakery"
	    }
	  }, {
	    "type": "Feature", // ILITE
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-77.62990, 38.84524]
	    },
	    "properties": {
	      "title": "I Sold My Soul Here",
	      "marker-symbol": "heart"
	    }
	  }, {
	    "type": "Feature", // Elks
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-75.83390, 39.61574]
	    },
	    "properties": {
	      "title": "Circle of Life",
	      "marker-symbol": "embassy"
	    }
	  }, {
	    "type": "Feature", // MARC
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-75.75263, 39.68519]
	    },
	    "properties": {
	      "title": "Why hasn't MARC/SEPTA expanded service yet?",
	      "marker-symbol": "cross"
	    }
	  }, {
	    "type": "Feature", // Store
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-73.97301, 40.76384]
	    },
	    "properties": {
	      "title": "A Store to Visit",
	      "marker-symbol": "shop"
	    }
	  }, {
	    "type": "Feature", // Vibes
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-73.99855, 40.72947]
	    },
	    "properties": {
	      "title": "Chiptunes and Co.",
	      "marker-symbol": "music"
	    }
	  }, {
	    "type": "Feature", // Food
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-76.63367, 39.25784]
	    },
	    "properties": {
	      "title": "Great Cookies",
	      "marker-symbol": "bakery"
	    }
	  }, {
	    "type": "Feature", // Pokey
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-76.61835, 39.28457]
	    },
	    "properties": {
	      "title": "Fun! Fun! Fun!",
	      "marker-symbol": "playground"
	    }
	  }, {
	    "type": "Feature", // Yum
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-77.04331, 38.90967]
	    },
	    "properties": {
	      "title": "Circle of Startups",
	      "marker-symbol": "scooter"
	    }
	  }, {
	    "type": "Feature", // Yum
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-77.22125, 38.91792]
	    },
	    "properties": {
	      "title": "Best Mall",
	      "marker-symbol": "land-use"
	    }
	  }, {
	    "type": "Feature", // ?
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-77.73549, 38.96898]
	    },
	    "properties": {
	      "title": "Worlds Collide Here",
	      "marker-symbol": "museum"
	    }
	  }, {
	    "type": "Feature", // Plaza
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-77.43136, 38.89876]
	    },
	    "properties": {
	      "title": "International Love",
	      "marker-symbol": "farm"
	    }
	  }, {
	    "type": "Feature", // City that is not Atlantic
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-74.57098, 39.27468]
	    },
	    "properties": {
	      "title": "Plunging Spot",
	      "marker-symbol": "swimming"
	    }
	  }, {
	    "type": "Feature", // City that is not Atlantic
	    "geometry": {
	      "type": "Point",
	      "coordinates": [-75.14343, 39.94951]
	    },
	    "properties": {
	      "title": "Ice Cream",
	      "marker-symbol": "fast-food"
	    }
	  }
	]};
	var markers = new mapboxgl.GeoJSONSource({ data: geoJSON });
	map.addSource('markers', markers);

	var geoJSONMFL = {
	  "type": "FeatureCollection", // By looking at the lines ahead, you are cheating. But there is nothing I can do to stop you...
	  "features": [
	    {
	      "type": "Feature",
	      "properties": {},
	      "geometry": {
	        "type": "LineString",
	        "coordinates": [
	          [-75.25935173034668, 39.96185925653245],
	          [-75.2468204498291, 39.96271448002115],
	          [-75.14382362365723, 39.949819206129945],
	          [-75.13240814208984, 39.986590631428506],
	          [-75.08962154388428, 40.009603815001704],
	          [-75.07730484008789, 40.02373663935909]
	        ]
	      }
	    }
	  ]
	};
	var routemfl = new mapboxgl.GeoJSONSource({ data: geoJSONMFL });
	map.addSource('routemfl', routemfl);

	var geoJSONBSL = {
	  "type": "FeatureCollection", // By looking at the lines ahead, you are cheating. But there is nothing I can do to stop you...
	  "features": [
	    {
	      "type": "Feature",
	      "properties": {},
	      "geometry": {
	        "type": "LineString",
	        "coordinates": [
	          [-75.14433860778809, 40.04121785026443],
	          [-75.17377853393555, 39.90578590324711]
	        ]
	      }
	    }
	  ]
	};
	var routebsl = new mapboxgl.GeoJSONSource({ data: geoJSONBSL });
	map.addSource('routebsl', routebsl);

	var geoJSONTrolley = {
	  "type": "FeatureCollection", // By looking at the lines ahead, you are cheating. But there is nothing I can do to stop you...
	  "features": [
	    {
	      "type": "Feature",
	      "properties": {},
	      "geometry": {
	        "type": "LineString",
	        "coordinates": [
	          [-75.24664878845215,39.94356807095909],
	          [-75.2404260635376,39.945969890463914],
	          [-75.23175716400146,39.94787812530285],
	          [-75.22489070892334,39.94774652460901],
	          [-75.20841121673584,39.949819206129945],
	          [-75.19952774047852,39.95021399548981],
	          [-75.18970012664795,39.95406307233881],
	          [-75.1834774017334,39.95488549657055]
	        ]
	      }
	    }
	  ]
	};
	var routetrolley = new mapboxgl.GeoJSONSource({ data: geoJSONTrolley });
	map.addSource('routetrolley', routetrolley);

	// map.attributionControl.addAttribution('<a href="https://foursquare.com/">Places data from Foursquare</a>');
	// Add zoom and rotation controls to the map.
	map.addControl(new mapboxgl.Navigation());
});

// Angular Holiday Controller
app.controller('holidayController', ['$scope', function($scope) {
	// console.log("Ho, ho, ho!");
	// Page-specific scripts
	var greetingArray = [
		"Seasons Greetings!",
		"Happy Holidays!",
		"Ho Ho Ho!"
	];
	$scope.greeting = greetingArray[Math.floor(Math.random() * greetingArray.length)];
	var messageArray = [
		"You know what I truly love about the holiday season? I can eat everything I want because you know, it's the holidays!",
		"Want to know what I got for the holidays this year? A free domain name.",
		"Want to know what I got for the holidays this year? A $5 Applebees gift card.",
		"Want to know what I got for the holidays this year? A bunch of Amazon gift cards.",
		"I wish you a Merry Christmas, I wish you a Happy Hanukkah, I wish you a Cheery Kwanzaa, and a happy New Year!",
		"I hope that this holiday season will be for you a cheerful ending to the year and a great beginning to a happy new one.",
		"Wishing you a very happy holiday season and a wonderful  New Year! May all your resolutions for the coming year be fulfilled.",
		"The spirit of the holiday season should not be just for one day but for the whole year! Wishing you love, joy and peace the whole year round.",
		"Ho ho ho!",
		"May your home be filled with holiday songs, cakes, candies and all the love that this festive season brings.",
		"Eggnog is delicious.",
		"It's the time of eggnog, candles, cakes, songs, reindeer, carols, laughter – and most importantly LOVE.",
		"If you're feeling warm today, it's from all the love I'm sending your way.",
		"May your holidays be filled with lots of happiness, peace and love... ooh and lots of presents!",
		"You made the reading this card look easy.",
		"My letter to Santa this year asked for YOU! So don't be surprised when he comes through your window and puts you in a sack!",
		"I don't know about you, but the holiday season is the most wonderful tie of the year. The tree, the lights, all the presents to unwrap. Could there be anything more magical than that?! :)",
		"Holiday songs in the background to set the mood, the lights are blinking, the eggnog is ready and family and friends are on their way. What else could you ask for?!"
	];
	$scope.message = messageArray[Math.floor(Math.random() * messageArray.length)];
	var snow = function () {
	// SNOW!
	// -> Winter wrap-up planned for never!
	//    Minification breaks it!
	// -@ http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect
			//canvas init
			var canvas = document.getElementById("snow");
			var ctx = canvas.getContext("2d");
			//canvas dimensions
			var W = window.innerWidth;
			var H = window.innerHeight;
			canvas.width = W;
			canvas.height = H;
			//snowflake particles
			var mp = 45; //max particles
			var particles = [];
			for(var i = 0; i < mp; i++)
			{
					particles.push({
							x: Math.random()*W, //x-coordinate
							y: Math.random()*H, //y-coordinate
							r: Math.random()*4+1, //radius
							d: Math.random()*mp //density
					})
			}
			//Lets draw the flakes
			function draw()
			{
					ctx.clearRect(0, 0, W, H);

					ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
					ctx.beginPath();
					for(var i = 0; i < mp; i++)
					{
							var p = particles[i];
							ctx.moveTo(p.x, p.y);
							ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
					}
					ctx.fill();
					update();
			}
			//Function to move the snowflakes
			//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
			var angle = 0;
			function update()
			{
					angle += 0.01;
					for(var i = 0; i < mp; i++)
					{
							var p = particles[i];
							//Updating X and Y coordinates
							//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
							//Every particle has its own density which can be used to make the downward movement different for each flake
							//Lets make it more random by adding in the radius
							p.y += Math.cos(angle+p.d) + 1 + p.r/2;
							p.x += Math.sin(angle) * 2;

							//Sending flakes back from the top when it exits
							//Lets make it a bit more organic and let flakes enter from the left and right also.
							if(p.x > W || p.x < 0 || p.y > H)
							{
									if(i%3 > 0) //66.67% of the flakes
									{
											particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
									}
									else
									{
											//If the flake is exitting from the right
											if(Math.sin(angle) > 0)
											{
													//Enter fromth
													particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
											}
											else
											{
													//Enter from the right
													particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
											}
									}
							}
					}
			}
			//animation loop
			setInterval(draw, 100);
	};
	// And fire it after definition
	// snow();
}]);

// = require bower
// = require jquery
// = require_tree .

// Smooth scrolling across inline links
$( document ).ready(function() {
	$("a").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 500);
		return false;
	});
});


// Visibility Classes
// -> A small plugin that checks whether elements are within
//    the user visible viewport of a web browser.
//    only accounts for vertical position, not horizontal.
//    Adds .visible to visible sections for animations.
// -@ Sam Sehnert from Digital Fusion http://teamdf.com/jquery-plugins/license/
(function($) {
	$.fn.visible = function(partial) {
			var $t        = $(this),
			$w            = $(window),
			viewTop       = $w.scrollTop(),
			viewBottom    = viewTop + $w.height(),
			_top          = $t.offset().top,
			_bottom       = _top + $t.height(),
			compareTop    = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	};
})(jQuery);

// Scroll Timer!
// -> This actually improves the framerate and rendering time by 95%!
//    However, the user must stop scrolling or let go of the mouse wheel...
// -@ Modified from open source answer at http://stackoverflow.com/questions/15591002/jquery-setinterval-or-scroll
var scrollTimer = null;
$(window).scroll(function () {
		if (scrollTimer) {
				clearTimeout(scrollTimer);   // clear any previous pending timer
		}
		scrollTimer = setTimeout(handleScroll, 100);   // set new timer
});

function handleScroll() {
	scrollTimer = null;
	$("section").each(function(i, el) {
		var el = $(el);
		// if (el.visible(true)) {
		// -> A section MUST be in the viewport and 200px from the bottom in order for 
		//    some awesome CSS3 animations to happen!
		// -@ http://stackoverflow.com/questions/16569941/use-jquery-to-detect-when-an-element-is-near-the-bottom-of-the-page
		if (   ($(this).offset().top) < ($(window).scrollTop() + $(window).height() - 200)  &&  el.visible(true)  ) {
			el.addClass("visible");
			// Load iFrames only when visible
			// -> Improves site performance by like 20 frames and lowers bandwidth.
			// -@ http://stackoverflow.com/questions/19482601/have-iframe-load-when-visible
			// Show our element, then call our callback
			// Find the iframes within our newly-visible element
			$(this).find("iframe").not(".loaded").prop("src", function(){
				// Set their src attribute to the value of data-src
				$(this).addClass("loaded");
				return $(this).data("src");
			});
		} else {
			if (!$(this).hasClass("onceler")) {
					el.removeClass("visible"); 
			};
			// el.removeClass("visible"); 
		}
	});
	if( ($(window).scrollTop()) > 24 ) {
		$("nav").addClass("docked");
	}
	else {
		$("nav").removeClass("docked");
	}
};
