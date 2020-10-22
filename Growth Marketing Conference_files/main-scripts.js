//mm-menu options
jQuery(document).ready(function($) {
  	$(function() {
		$('nav#menu').mmenu({
			classes: "mm-zoom-menu",
			searchfield: false,
			pageScroll: true,
			extensions: ["position-top"],
			offCanvas: {
					pageNodetype: "section",
                			zposition : "back"
			},
                navbar: {
                    title: ""
                },
			onClick : {
				close	       : true,
				preventDefault : false,
			},
		},{
			classNames: {
				fixedElements: {
				   fixed: "fix",
				   sticky: "stick"
				}
			}
		});

		var api = $("nav#menu").data("mmenu");

		$("#closemm2").click(function() {
			console.log("here");
			api.close();
		});
	});

    //smooth scrolling for down and up arrows
    $('.menu-item-989>a,.menu-item-35>a,#buyticket,#reserveticket,#smoothscroll1,#smoothscroll2,#smoothscroll3,#footerbuyticket').on('click', function(event) {
        var target = jQuery(this).attr('href')

        var arr = target.split('/');
        //alert(target+'=='+arr[0]+'=='+arr[1]);
		if(arr[0]=="")
		{
            target=arr[1];
		}
        var topto=90;
        if( target.length ) {
            event.preventDefault();
            if($(target).length){
            	if(target=='#agenda'){
            		topto=0;
				}
                $('html, body').animate({scrollTop: jQuery(target).offset().top-topto}, 1000);
            }
            else
			{
                window.location.href = jQuery(this).attr('href');
			}
        }

    });
});


// Make banners & Sliders fill viewport
jQuery(document).ready(function($) {
	//$('.bg-image').css({'height': (($(window).height()) ) + 'px'});
	if ($(window).width() > 767) {
		//$('.bg-image').css({'height': (($(window).height()) ) + 1 + 'px'});
		$('.banner-image.video').css({'height': (($(window).height()) ) + 1 + 'px'});
		$('.banner-image.img-frame, li.slide-img').css({'height': (($(window).height()) ) - 30 + 'px'});		
	}
	else {
		//$('.bg-image').css({'min-height': (($(window).height()) ) + 'px'}).css('height', 'auto');
		$('.banner-image.video').css({'min-height': (($(window).height()) ) + 'px'}).css('height', 'auto');
	}
});
jQuery(function($){
	$(window).resize(function(){
		if ($(window).width() > 767) {
			//$('.bg-image').css({'height': (($(window).height()) ) + 1 + 'px'});
			$('.banner-image.video').css({'height': (($(window).height()) ) + 1 + 'px'});
            $('.banner-image.video').css({ 'min-height' :''});
			$('.banner-image.img-frame, li.slide-img').css({'height': (($(window).height()) ) - 30 + 'px'});
            jQuery(".banner-image.video").css({'width': ''});
		}
		else {
			//$('.bg-image').css({'min-height': (($(window).height()) ) + 'px'}).css('height', 'auto');
			$('.banner-image.video').css({'min-height': (($(window).height()) ) + 'px'}).css('height', 'auto');
            jQuery(".banner-image.video").css({'width': ((jQuery(window).width()) - 0) + 'px'});
            	}


    });
});


// Slider sizing full screen for large tablet and desktop
jQuery(document).ready(function($){
  if ($(window).width() > 991) {
	$('li.slide-img').css({'height': (($(window).height()) ) + 'px'});
  }
});

//To swap label and input for form fields - for floating label functionality
jQuery(document).ready(function($){
	$('div.wpforms-container-full.contact-form .wpforms-form .form-control-fname .wpforms-field-label').insertAfter('div.wpforms-container-full.contact-form .wpforms-form #wpforms-1979-field_3');
	$('div.wpforms-container-full.contact-form .wpforms-form .form-control-lname .wpforms-field-label').insertAfter('div.wpforms-container-full.contact-form .wpforms-form #wpforms-1979-field_4');
	$('div.wpforms-container-full.contact-form .wpforms-form .form-control-email .wpforms-field-label').insertAfter('div.wpforms-container-full.contact-form .wpforms-form #wpforms-1979-field_1');
	$('div.wpforms-container-full.contact-form .wpforms-form .form-control-message .wpforms-field-label').insertAfter('div.wpforms-container-full.contact-form .wpforms-form #wpforms-1979-field_2');

	$('.sponsorship-packet-form .wpforms-form .first-name .wpforms-field-label').insertAfter('.sponsorship-packet-form .wpforms-form #wpforms-1983-field_0');
	$('.sponsorship-packet-form .wpforms-form .last-name .wpforms-field-label').insertAfter('.sponsorship-packet-form .wpforms-form #wpforms-1983-field_3');
	$('.sponsorship-packet-form .wpforms-form .email-address .wpforms-field-label').insertAfter('.sponsorship-packet-form .wpforms-form #wpforms-1983-field_1');
	$('.sponsorship-packet-form .wpforms-form .job-title .wpforms-field-label').insertAfter('.sponsorship-packet-form .wpforms-form #wpforms-1983-field_4');
	$('.sponsorship-packet-form .wpforms-form .company-name .wpforms-field-label').insertAfter('.sponsorship-packet-form .wpforms-form #wpforms-1983-field_5');
	$('.sponsorship-packet-form .wpforms-form .goals .wpforms-field-label').insertAfter('.sponsorship-packet-form .wpforms-form #wpforms-1983-field_6');
	$('.sponsorship-packet-form .wpforms-form .message .wpforms-field-label').insertAfter('.sponsorship-packet-form .wpforms-form #wpforms-1983-field_2');

	$('.newsletter-sign-up-form .wpforms-form .first-name .wpforms-field-label').insertAfter('.newsletter-sign-up-form .wpforms-form #wpforms-1980-field_3');
	$('.newsletter-sign-up-form .wpforms-form .last-name .wpforms-field-label').insertAfter('.newsletter-sign-up-form .wpforms-form #wpforms-1980-field_2');
	$('.newsletter-sign-up-form .wpforms-form .email-address .wpforms-field-label').insertAfter('.newsletter-sign-up-form .wpforms-form #wpforms-1980-field_1');
	
	$('div.wpforms-container-full.reserve_seat_home .wpforms-form .first-name .wpforms-field-label').insertAfter('div.wpforms-container-full.reserve_seat_home .wpforms-form #wpforms-2183-field_3');
	$('div.wpforms-container-full.reserve_seat_home .wpforms-form .last-name .wpforms-field-label').insertAfter('div.wpforms-container-full.reserve_seat_home .wpforms-form #wpforms-2183-field_5');
	$('div.wpforms-container-full.reserve_seat_home .wpforms-form .email-address .wpforms-field-label').insertAfter('div.wpforms-container-full.reserve_seat_home .wpforms-form #wpforms-2183-field_6');
	$('div.wpforms-container-full.reserve_seat_home .wpforms-form .preferred_phone_number .wpforms-field-label').insertAfter('div.wpforms-container-full.reserve_seat_home .wpforms-form #wpforms-2183-field_7');	
	
});




// Navigation for Ignyte_Subnav
jQuery(document).ready(function($) {
	var navItems=$('.Ignyte_subNavItem');
	if (navItems.length>0) {
		navItems.each(function(index) {
			console.log("Item: "+index );
			//Title
			title=$( this ).find(".menutitle").text();
			console.log("Title:"+ $( this ).find(".menutitle").text());
			//ID
			id=$( this ).attr('id');
            console.log("ID:"+ $( this ).attr('id'));
			// put in subnav-menu, as li elements

			$("#subnav-menu").append("<li><a href='#"+id+"'>"+title+"</li>");
        });
	}else{
		jQuery("#subnav-wrap").remove();
	}

	jQuery('#subnav-menu a[href^="#"]').on('click', function(event) {
		var target = jQuery(this).attr('href')
		if( target.length ) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: jQuery(target).offset().top-133
			}, 1000);
		}
	});
});
// End Navigation for Ignyte_Subnav

//isInViewport code for header navs
(function($) {
  $(document).ready(function() {
    $(window).scroll(function() {
	  $('#page-wrap:in-viewport(123)').do(function(){
		  $('#main-nav-wrap').addClass("navbar-fixed-top mm-fixed-top");
	  });
	  $('#main-content:in-viewport(83)').do(function(){
		  $('#subnav-menu').addClass("showme");
	  });
	  $('#global-nav-wrap:in-viewport(0)').do(function(){
		  $('#main-nav-wrap').removeClass("navbar-fixed-top mm-fixed-top");
		  $('#page-wrap').css('padding-top','0');
		  $('#subnav-menu').removeClass("showme");
		  //$('#sidebar').removeClass("sidebar-fixed-top");
	  });
	  
	});
  });
}(jQuery));


jQuery(function () {
 // jQuery('[data-toggle="popover"]').popover();
});


// BS Affix for sidebars
/*jQuery(document).ready(function($) {
  if ($(window).width() > 767) {
      if($('#sidebar').length) {
          $('#sidebar').affix({
              offset: {
                  top: function () {
                      return (this.top = $('header').outerHeight(true) + $('.banner-image').outerHeight(true) - (123))
                  },
                  bottom: function () {
                      return (this.bottom = $('footer').outerHeight(true) + $('#bottom-content').outerHeight(true) + (123))
                  }
              }
          });
      }
  }
  else {}
});*/

// Sticky Sidebar height adjustment
jQuery(window).load(function($) {
    if (jQuery(window).width() > 767) {
        jQuery("#sidebar-sticky").css({'height':(jQuery(".post-content").parent().outerHeight()-jQuery("#sidebar").outerHeight()-110+'px')});
    }
});
/* Check if we are in safari */
jQuery(document).ready(function($) {
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		var stickywidget = $('#sidebar');
		var explicitlySetAffixPosition = function() {
			stickywidget.css('left',stickywidget.offset().left+'px');
		};
		/* Before the element becomes affixed, add left CSS that is equal to the distance of the element from the left of the screen */
		stickywidget.on('affix.bs.affix',function(){
			explicitlySetAffixPosition();
		});
		
		$(window).scroll(function(){ 
			if(stickywidget.hasClass("affix-bottom")){
				stickywidget.css('left','auto');
			}else if (stickywidget.hasClass("affix-top")){
				
			}else{
			//	stickywidget.css('left',stickywidget.offset().left+'px');
			}
		});
		/* On resize of window, un-affix affixed widget to measure where it should be located, set the left CSS accordingly, re-affix it */
		$(window).resize(function(){
			if(stickywidget.hasClass('affix')) {
				stickywidget.removeClass('affix');
				explicitlySetAffixPosition();
				stickywidget.addClass('affix');
			}
		});
	}
});



// Slider sizing full screen for large tablet and desktop
jQuery(document).ready(function($){  
	if ($(window).width() > 991) {	
		$('li.slide-img').css({'height': (($(window).height()) ) + 'px'});  }
});
		
// VIDEO BACKGROUND ON HERO
// Video background code to show image for mobile or safari
jQuery(document).ready(function() {
	if (typeof jQuery('.placeholder-image').css('background-image') != 'undefined') {
		var imageUrl = jQuery('.placeholder-image').css('background-image').replace('url(', '')
			.replace(')', '')
			.replace("'", "")
			.replace('"', '')
			.replace('"', '');
	}	
		
	else {
		var imageUrl = "/wp-content/uploads/2018/10/01-HERO.png";
	}
    if($('#bgvid').length) {
		/* Get browser */
        if (jQuery(window).width() > 767) {
            var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

            // if(iOS || is_safari)
            if (iOS) {
                jQuery('.home .banner-image').css('background', 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0)), url("' + imageUrl + '")');
                jQuery('.banner-image').css('background-attachment', "scroll");
                jQuery(".video-content").css({'width': '0px'});
                jQuery("video").fadeOut(0);
            }
            else {
                // if not iOS then play video
                jQuery('li.slide-img').css({'height': ((jQuery(window).height()) ) + 'px'});
                jQuery('.banner-image').css('background-image', 'none');
                jQuery(".video-content").css({'height': ((jQuery(window).height()) - 0) + 'px'});
                jQuery("video").css({'display': 'block'});
                jQuery(".video-content").css({'width': ((jQuery(window).width()) + 140) + 'px'});
				/*jQuery("video").on('play', function(){
				 jQuery(this).fadeIn(2000);
				 }); */
            }

            console.log("onload greater than 767");
            jQuery(".banner-image").css({'width': ((jQuery(window).width()) - 0) + 'px'});
        }
        else {
            jQuery('.banner-image').css('background', 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0)), url("' + imageUrl + '")');
            jQuery('.banner-image').css('background-size', 'cover');
            jQuery("video-withbanner.banner-image").css({'width': ((jQuery(window).width()) - 0) + 'px'});
            jQuery('.video-withbanner.banner-image').css('background-attachment', "scroll");
            jQuery(".video-content").css({'width': '0px'});
            jQuery("video").fadeOut(0);
            console.log("onload less than 767");
        }

        jQuery(".banner-image.video").css({'width': ((jQuery(window).width()) - 0) + 'px'});
    }
    else
	{
       // jQuery('.video-withbanner .banner-image').css('background-image:url(' + imageUrl + ')');
        jQuery('.video-withbanner .banner-image').css('background-image', 'url(' + imageUrl + ')');
        jQuery('.video-withbanner .banner-image').css('background-size', 'cover');
        jQuery(".video-withbanner .banner-image").css({'width': ((jQuery(window).width()) - 0) + 'px'});
        jQuery('.video-withbanner .banner-image').css('background-attachment', "scroll");

	}
});


// VIDEO BACKGROUND ON HERO
// Adjust the content over the video background code on resize	
jQuery(function($){
    if($('#bgvid').length) {
        $(window).resize(function () {

            if (typeof jQuery('.placeholder-image').css('background-image') != 'undefined') {
                var imageUrl = jQuery('.placeholder-image').css('background-image').replace('url(', '')
                    .replace(')', '')
                    .replace("'", "")
                    .replace('"', '')
                    .replace('"', '');
            }
            else {
                var imageUrl = "/wp-content/uploads/2018/10/01-HERO.png";
            }

            if (jQuery(window).width() > 767) {

				/* Get browser */
                var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

                // if(iOS || is_safari)
                if (iOS) {
                    jQuery('.banner-image').css('background', 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0)), url("' + imageUrl + '")');
                    jQuery('.banner-image').css('background-attachment', "scroll");
                    jQuery(".video-content").css({'width': '0px'});
                    //jQuery("video").fadeOut(0);
                }
                else {
                    // if not iOS then play video
                    jQuery('.banner-image').css('background-image', 'none');
                    jQuery(".video-content").css({'height': ((jQuery(window).height()) - 0) + 'px'});
                    jQuery("video").css({'display': 'block'});
                    jQuery(".video-content").css({'width': ((jQuery(window).width()) + 140) + 'px'});

					/*jQuery("video").on('play', function(){
					 jQuery(this).fadeIn(2000);
					 }); */
                }

                jQuery(".banner-image").css({'width': ((jQuery(window).width()) - 0) + 'px'});
                console.log("resize greater than 767");
            }
            else {
                //alert(imageUrl);
                jQuery('.banner-image').css('background', 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0)), url("' + imageUrl + '")');
                jQuery('.banner-image').css('background-attachment', "scroll");
                jQuery(".video-content").css({'width': '0px'});
                jQuery("video").fadeOut(0);
                console.log("resize less than 767");
            }
            jQuery(".banner-image").css({'width': ((jQuery(window).width()) - 0) + 'px'});
        });
    }
});
// END VIDEO BACKGROUND ON HERO





//PNG fallback for SVG:
function supportsSVG() {
  return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
}

jQuery(document).ready(function($) {
	if (!supportsSVG()) {
	  var imgs = document.getElementsByTagName('img');
	  var dotSVG = /.*\.svg$/;
	  for (var i = 0; i != imgs.length; ++i) {
		if(imgs[i].src.match(dotSVG)) {
		  imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
		}
	  }
	}
});