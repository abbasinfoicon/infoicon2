equalheight = function(container){
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {
   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;
   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
$(document).ready(function() {
  equalheight('.main-cont .eqHeight');
});
$(window).load(function() {
  equalheight('.main-cont .eqHeight');
});
$(window).resize(function(){
  equalheight('.main-cont .eqHeight');
});


var flag=1;
function counter(){	
	if(flag==1){
	  $('.count1').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
					duration: 500,
					easing: 'swing',
					step: function (now) {
					$(this).text(Math.ceil(now));
					}
				});
			});	
	  $('.count2').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
					duration: 2000,
					easing: 'swing',
					step: function (now) {
					$(this).text(Math.ceil(now));
					}
				});
			});	
	  $('.count3').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
					$(this).text(Math.ceil(now));
					}
				});
			});	
	  $('.count4').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
					duration: 1000,
					easing: 'swing',
					step: function (now) {
					$(this).text(Math.ceil(now));
					}
				});
			});	
	}
	flag=0;
}

/*----Start of Menu-----*/
$(document).ready(function() {
	/*-------------mobmenu---------------*/
	$(".mobmenu").click(function(){
	  $(this).toggleClass("open");
	  $("nav").toggleClass("open");
	  $(".logoBx").toggleClass("open");
	  $("body").toggleClass("active");
	 });
						   
	/*-------- Vender Detail List------*/
	$(".client-video ul li a").on("click" , function(e){
		 e.preventDefault();
		var weddInd = $(this).attr('href');
		$(".client-Video").hide(0);
		$(weddInd).show(0);
		$(".client-video ul li a").removeClass('active');
		$(this).addClass('active');
	});
	
	$('.client-video ul li a').on('click', function() {    
		$('.videoFile')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');        
		$('.videoFile')[1].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');        
		$('.videoFile')[2].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');        		
	});
	
	/*-------------------- section height-------------------*/
	
	$(".hireTab ul li a").click(function(event) {
		event.preventDefault();
		$(this).parent().addClass("active");
		$(this).parent().siblings().removeClass("active");
		var tab = $(this).attr("href");
		$(".hireBx").not(tab).hide();
		$(tab).show();
	});
	
	$('.showMapPopup').hover(function(){
     $(this).children('.contactPopup').stop(true,true).delay(20).fadeIn(200);
	 
	}, function(){
		 $(this).children('.contactPopup').delay(20).fadeOut(200);
	});
	
	$(document).mouseup(function (e)
		{ 
			var container = $(".showDD");
			var container1 = $(".ddBox");
			var container2 = $(".ddBox *");
			if (!container.is(e.target)  && !container2.is(e.target)   &&   !container.is(e.target)  && !container1.is(e.target)   && container.has(e.target).length === 0) // ... nor a descendant of the container
			{	
				 container1.stop().slideUp(300);
				$(".ddCover").removeClass("active");
			} 
		});
	
	$(".showDD").click(function(){
		$(".ddBox").slideUp(300);	
		if($(this).parent(".ddCover").hasClass("active")){
				$(".ddCover").removeClass("active");
				$(this).next(".ddBox").slideUp(300);
		}
		else{
				$(".ddCover").removeClass("active");
				$(this).parent(".ddCover").addClass("active");
				$(this).next(".ddBox").slideDown(300);
		}
	}); 
	
	$(".solutionTab ul li a").click(function(event) {
		event.preventDefault();
		$(this).parents('li').addClass("active");
		$(this).parents('li').siblings().removeClass("active");
		var tab = $(this).attr("href");
		$(".contentBx").not(tab).hide();
		$(tab).show();
	});
	$(".solutionTab ul li a").click(function() {
		equalheight('.main-cont .eqHeight');
	});
	$("a.moreBtn").click(function() {
		$(this).prev('ul').toggleClass('showHide');
		$(this).toggleClass('active');
	});
	
	
	$("ul.tabular li a").click(function(event) {
		event.preventDefault();
		$(this).parents('li').addClass("active");
		$(this).parents('li').siblings().removeClass("active");
		var tab = $(this).attr("href");
		$(".contentBx").not(tab).hide();
		$(tab).show();
	});
	
	var videoBxH = $('.videoLft').height();
	$('.videoRgt').css('height', videoBxH);
	
	$(".showFullJob").click(function(event) {
		event.preventDefault();
		$(this).prev('div').slideToggle(300);
		$(this).toggleClass('active');
	});
	
	$(".searchPopup ul li").click(function(event) {
		event.preventDefault();
		$('.ddBox').hide(0);
		$('.ddCover ').removeClass('active');
	});
	
	$("ul.productTab li a").click(function(event) {
		event.preventDefault();
		$(this).parents('li').addClass("active");
		$(this).parents('li').siblings().removeClass("active");
		var tab = $(this).attr("href");
		$(".feacontent").not(tab).hide();
		$(tab).show();
	});
	
	var headHeight = $('.menuBg').height();
	$('a.scroll[href^="#"]').on('click.smoothscroll',function(event) {
		event.preventDefault();
		var target = this.hash,
		$target = jQuery(target);
		$('html, body').stop().animate( {
			'scrollTop': $target.offset().top-headHeight
		}, 900, 'swing');
	});
	
	$("#thumbSlider li a").click(function(event) {
		event.preventDefault();
		$('#thumbSlider li a').removeClass('active');
		$(this).addClass('active');
	});
	
	
	$('.videoLink li a').on('click', function() {    
		$('.videoFile')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');        
		$('.videoFile')[1].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');        
		$('.videoFile')[2].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');        
		$('.videoFile')[3].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');        
		$('.videoFile')[4].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');        
		$('.videoFile')[5].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$('.videoFile')[6].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		$('.videoFile')[7].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');    
	});
	
	var maxHeight = -1;

   $('.whySlider .item .content').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.whySlider .item .content').each(function() {
     $(this).height(maxHeight);
   });
	
});
	
$(window).resize(function(){
	var videoBxH = $('.videoLft').height();
	$('.videoRgt').css('height', videoBxH);
	
	var maxHeight = -1;

   $('.whySlider .item .content').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.whySlider .item .content').each(function() {
     $(this).height(maxHeight);
   });
});

$('a.scrollNew[href^="#"]').on('click.smoothscroll',function(event) {
		event.preventDefault();
		var target = this.hash,
		$target = jQuery(target);
		$('html, body').stop().animate( {
			'scrollTop': $target.offset().top-0
		}, 900, 'swing');
	});


/*-------------------scroll function-----------------------*/

$(window).scroll(function(){
	var scrltop = $(window).scrollTop();
	var hdrHight = $(".banner-img ul li").height();
	var abutBx = $(".aboutBg").height()+40;
	var indBx = $(".industBg").height();
	var casstudy = $(".casestudyBx").height();
	var scrlHgt = hdrHight+abutBx+indBx+casstudy;
	if(scrltop > scrlHgt){
		counter();
	}
	
	if(scrltop >1 ){
		$(".menuBg").addClass("hdrWhite");		
		$(".logoBx").addClass("hdrtop");
		$("nav ul li").addClass("hdrtop");
		$(".hdr-right").addClass("hdrtop");
		$(".megamenuBx").addClass("megamenutop");
		$("nav ul li a").addClass("navClr");
		$(".hdr-right a").addClass("hdrLogin");
		$(".hdr-right span").addClass("hdrContnumb");
		$(".mobmenu").addClass("mobmenu-black");
		$(".topcall-icon").css("display","none");
		$(".topcall-icon2").css("display","inline-block");
		$(".logo1").css("display","none");
		$(".logo2").css("display","block");
	}
	else{
		$(".menuBg").removeClass("hdrWhite");
		$(".logoBx").removeClass("hdrtop");
		$("nav ul li").removeClass("hdrtop");
		$(".hdr-right").removeClass("hdrtop");
		$(".megamenuBx").removeClass("megamenutop");
		$("nav ul li a").removeClass("navClr");
		$(".hdr-right a").removeClass("hdrLogin");
		$(".hdr-right span").removeClass("hdrContnumb");
		$(".mobmenu").removeClass("mobmenu-black");
		$(".topcall-icon").css("display","inline-block");
		$(".topcall-icon2").css("display","none");
		$(".logo1").css("display","block");
		$(".logo2").css("display","none");
	}
	
});



$(document).ready(function() {	
var url1 = $('.vidPp1 iframe').attr('src');
	$(".showVidPp1").click(function(e) {
		$(".vidPp1").show(0);
		$('.vidPp1 iframe').attr('src', url1+'?rel=0&autoplay=1');
	});
	$(".closeVidPopup1").click(function() {
		$(".vidPp1").hide(0);
		$('.vidPp1 iframe').attr('src', '');
	});
var url2 = $('.vidPp2 iframe').attr('src');
	$(".showVidPp2").click(function() {
		$(".vidPp2").show(0);
		$('.vidPp2 iframe').attr('src', url2+'?rel=0&autoplay=1');
	});
	$(".closeVidPopup2").click(function() {
		$(".vidPp2").hide(0);
		$('.vidPp2 iframe').attr('src', '');
	});
var url3 = $('.vidPp3 iframe').attr('src');
	$(".showVidPp3").click(function() {
		$(".vidPp3").show(0);
		$('.vidPp3 iframe').attr('src', url3+'?rel=0&autoplay=1');
	});
	$(".closeVidPopup3").click(function() {
		$(".vidPp3").hide(0);
		$('.vidPp3 iframe').attr('src', '');
	});
});


$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
 /*
  $(".videoDots li a").on("click", function (e) {
    e.preventDefault();
    var weddInd = $(this).attr('href');
    $(".client-Video").hide(0);
    $(weddInd).show(0);
    $(".videoDots li a").removeClass('active');
    $(this).addClass('active');
  });

  $('.videoDots li a').on('click', function () {
    $('.videoFile')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('.videoFile')[1].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('.videoFile')[2].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  });*/
  
	$(".videoDots li a").on("click", function (e) {
    	e.preventDefault();
		var url = $(this).attr('data-');
		$('.videoBox iframe').attr('src', url);
		$('.videoDots li a').removeClass('active');
		$(this).addClass('active');
	});

  $(".showtab1").click(function (e) {
    e.preventDefault();
    $('.serviceList').removeClass('active')
    $('#tab1').addClass('active')
    $('.serviceLink .active').css('top','0');
    $('.serviceLink a').removeClass('current');
    $(this).addClass('current');
  });
  $(".showtab2").click(function (e) {
    e.preventDefault();
    $('.serviceList').removeClass('active')
    $('#tab2').addClass('active')
    $('.serviceLink .active').css('top','25%');
    $('.serviceLink a').removeClass('current');
    $(this).addClass('current');
  });
  $(".showtab3").click(function (e) {
    e.preventDefault();
    $('.serviceList').removeClass('active')
    $('#tab3').addClass('active')
    $('.serviceLink .active').css('top','50%');
    $('.serviceLink a').removeClass('current');
    $(this).addClass('current');
  });
  $(".showtab4").click(function (e) {
    e.preventDefault();
    $('.serviceList').removeClass('active')
    $('#tab4').addClass('active')
    $('.serviceLink .active').css('top','75%');
    $('.serviceLink a').removeClass('current');
    $(this).addClass('current');
  });

  $(".mobMenu").click(function (e) {
    e.preventDefault();
    $('.mobMenuCover').toggleClass('active');
    $('body').toggleClass('active');
    $('.popupDDBox').removeClass('active');
  });

  $(".popupMenu li a").hover(function (e) {
    var linkid = $(this).attr('data-');
    $('.popupDDBox').removeClass('active');
    $(linkid).addClass('active');
  });

  $(".back").click(function (e) {
    $('.popupDDBox').removeClass('active');
  });

 
  $(".menu").hover(
		function(){
      $('header').addClass('open');
		},	
		function(){
			$('header').removeClass('open');
		}
  );
  
  $(".menu ul li").hover(
		function(){
      $(this).find('.submenuBox').show();
		},	
		function(){
      $(this).find('.submenuBox').hide(400);
		}
	);
  

/*

$(window).scroll(function(){
  var magicnumber = $(window).scrollTop()/($(document).height());
 $('.ServiceCon').css({'backgroundPosition': Math.round(-2000*magicnumber) + 'px 0px'});
});
  */
});
