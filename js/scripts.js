$(document).ready(function(){

	
	//coverpage animation
	$(function() {
	
	$start = $('#start-images');
	$pause = $('#pause'),
	$resume = $('#resume'),
	$freeze = $('#freeze'),
	$stop = $('#stop'),
	$restart = $('#restart')

	$start.crossSlide({
	  speed: 22,
	  fade: 1
	}, [
	  { src: 'images/coverphotos/1.jpg', dir: 'down'   },
	  { src: 'images/coverphotos/2.jpg',   dir: 'right' },
	  { src: 'images/coverphotos/3.jpg',  dir: 'up'   },
	  { src: 'images/coverphotos/4.jpg', dir: 'left' }
	]);
	});

	// Parallax plugin shit
	$('#intro').parallax("50%", 1125, 0.1, true);
	$('#second').parallax("50%", 2800, 0.1, true);
	$('#third').parallax("50%", 3700, 0.1, true);
	$('#fourth').parallax("50%", 5000, 0.1, true);
	$('#fifth').parallax("50%", 6600, 0.1, true);
	$('#sixth').parallax("50%", 7700, 0.1, true);
	$('#seven').parallax("50%", 8800, 0.1, true);
	$('#eight').parallax("50%", 9925, 0.1, true);
	$('#nine').parallax("50%", 11050, 0.1, true);
	$('#ten').parallax("50%", 11600, 0.1, true);
	$('#eleven').parallax("50%", 13100, 0.1, true);
	$('#twelve').parallax("50%", 14425, 0.1, true);
	$('#thirteen').parallax("50%", 15550, 0.1, true);
	$('#fourteen').parallax("50%", 16675, 0.1, true);
	$('#fifteen').parallax("50%", 17800, 0.1, true);
	$('#sixteen').parallax("50%", 18925, 0.1, true);
	$('#seventeen').parallax("50%", 20050, 0.1, true);
	
	function viewport()
		{
		var e = window
		, a = 'inner';
		if ( !( 'innerWidth' in window ) )
		{
		a = 'client';
		e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
		}
	
		var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],screen_width=w.innerWidth||e.clientWidth||g.clientWidth,screen_height=w.innerHeight||e.clientHeight||g.clientHeight;
		
	// Setup
	function init(){
		winwidth = $(window).width();
		winheight = $(window).height();	
		$('#cover').height(winheight);

        var ih = window.innerHeight || document.documentElement.clientHeight;
        $('#enter-button').delay(500).css('top', ih).animate({top:ih-90}, 600, 'easeOutQuad');


	}

	init();
	
	
	
	
	// Global vars
	var $artHeaderInner = $('.art-header-inner');
	var $artHeader = $('.art-header');
	var $spread = $('.spread');
	var $nav = $('.nav');
	var windowScroll;
	
	// Identify if visitor has a large enough viewport for parallaxing title
	function isLargeViewport() {
	if($nav.css('position') == "relative") {
	  return false;
	} else {
	  return true;
	}

	}
	
  // Functional parallaxing calculations
  function slidingTitle() {
    //Get scroll position of window
    windowScroll = $(this).scrollTop();

    //Slow scroll of .art-header-inner scroll and fade it out
    $artHeaderInner.css({
      'margin-top' : -(windowScroll/3)+ 100 +"px",
      'opacity' : 1-(windowScroll/100)
    });

    //Slowly parallax the background of .art-header
    $artHeader.css({
      'background-position' : 'center ' + (-windowScroll/8)+"px"
    });
  }
  
    $(window).scroll(function() {
        slidingTitle();
    });


 //Takes the user to the first issue
  $('a.intro').click(function(e){
  e.preventDefault();
  $('body').stop().scrollTo('#intro', 1000, {axis:'y', easing:'easeInOutExpo'});
  return false;
  })

 var articles = $('article');


// Find next
	function findnext(){
		var scrollPosition = $(window).scrollTop();
		
		articles.each(function() {
			var that = $(this);
			artPosition = that.offset().top;
			if (artPosition > scrollPosition + 10) {
				target = that;
				$.scrollTo(target, 1000, {axis:'y', easing:'easeInOutExpo'});

				return false;
			}
		});
	}

	// Find prev
	function findprev(){
		var scrollPosition = $(window).scrollTop();
		$(articles.get().reverse()).each(function() {
			var that = $(this);
			artPosition = that.offset().top;
			if (artPosition < scrollPosition - 10) {
				target = that;
					$.scrollTo(target, 1000, {axis:'y', easing:'easeInOutExpo'});
				return false;
			}
		});
	}

	$('#arrow_up').click(function(e){
	e.preventDefault();
	findprev();
	return false;

	})

	$('#arrow_down').click(function(e){
	e.preventDefault();
	findnext();
	return false;
	})
	
	
    // Link to top of page without changing URL
	$('a.back-to-top').click(function(e) {
	e.preventDefault();
	$('body').stop().scrollTo('.title-page', 2500);
	return false;
	})
	
	 // Link to top of page without changing URL
	$('#arrow_top').click(function(e) {
	e.preventDefault();
	$('body').stop().scrollTo('.title-page', 2500);
	return false;
	})
	
	  // Link to top of page without changing URL
	$('#arrow_bottom').click(function(e) {
	e.preventDefault();
	$('body').stop().scrollTo('#ender', 2500);
	return false;
	})
	
	
	// Keybinding
	
	$(document).keydown(function(event) {
		if (event.keyCode == 40) {
			event.preventDefault();
			$('#toc').fadeOut(500);//hide on movement
			findnext();
			return false;
		} else if (event.keyCode == 38) {
			event.preventDefault();
			$('#toc').fadeOut(500);//hide on movement
			findprev();
			return false;
			
		}  else if (event.keyCode == 32) {
			event.preventDefault();
			$('#toc').fadeOut(500);//hide on movement
			findnext();
			return false;
			
		}	else if (event.keyCode == 39) {
			event.preventDefault();
			$('#toc').fadeOut(500);//hide on movement
			currentinview();
			$('a.next', thatarticle).click();
			return false;
			
		} else if (event.keyCode == 37) {
			event.preventDefault();
			$('#toc').fadeOut(500);//hide on movement
			currentinview();
			$('a.prev', thatarticle).click();
			return false;
		} else if (event.keyCode == 13) {
			event.preventDefault();
			$('#toc').fadeOut(500);//hide on movement
			currentinview();
			thatarticle.find('.current-item').click();
			return false;
			
		} else if (event.keyCode == 27) {
			$('#toc').fadeToggle(500);
			$('.loading').hide();
			$('header').removeClass('active');
			return false;
		}
	});


	// Detect currently in view
	scrollwheel = false;
	fromLeft = 0;
	fromTop = 0;
	currentscroll = 0;
	
	function currentinview(){
		$.each(articles, function(){
			that = $(this);
			var thisheight = that.height();
			var thisoffset = that.offset().top;
			var currentscroll = fromTop + thisheight / 2;
			if(thisoffset + thisheight > currentscroll){
				thatarticle = $(this);
				return false;
			}
		});
	}

	var timer;	 var my_div = $("#cover");
        var div_top = my_div.offset().top;

	$(window).scroll(function(){
		fromTop = $(window).scrollTop();
		        $(document).scroll(function() {
            if (div_top < $(window).scrollTop()) {
			$start.crossSlidePause();
            }
            else {
            $start.crossSlideResume();}
        });
		// Detect stop scrolling
		function time(){
			timer = window.setTimeout(function(){
				// Update number
				currentinview();

				if(scrollwheel === true && winheight > 700){
					scrollwheel = false;
					$.scrollTo(thatarticle, 1000, {easing:'easeInOutExpo'});
				}
			}, 100);
		}
		
		window.clearTimeout(timer);
		time();

	});


})
