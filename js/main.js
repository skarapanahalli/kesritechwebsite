jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		/*var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
		
		//make current menu active
        var url = window.location;
		// Will only work if string in href matches with location
		$('ul.nav li').removeClass('active');
		$('ul.nav a[href="' + url + '"]').parent().addClass('active');
		// Will also work for relative and absolute hrefs
		$('ul.nav a').filter(function() {
			return this.href == url;
		}).parent().addClass('active');*/

		 //var active_link = $('.navbar li a[href~="<?= uri_string() ?>"]');
		 //if(active_link.size() > 0) active_link.parent().parent().addClass('active');
	});

	/*$(function(){
		$('.nav li a').on('click', function(e){
			e.preventDefault(); // prevent link click if necessary?

			var $thisLi = $(this).parent('li');
			var $ul = $thisLi.parent('ul');

			if (!$thisLi.hasClass('active'))
			{
				$ul.find('li.active').removeClass('active');
					$thisLi.addClass('active');
			}
		})

	})*/

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});