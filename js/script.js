$(document).ready(function(){
"use strict";
	$(".sort-menu li").hover(function(){
		$(this).addClass("sort-menu-active");
	});
	
	$(".news-slider-tab li").hover(function(){
		$(this).addClass("tab-selected").siblings().removeClass("tab-selected");
		var tabSelectedIndex = $(".tab-selected").index();
		//alert(tabSelectedIndex);
		
		$(".news-slider-images li").eq(tabSelectedIndex).addClass("tab-img").siblings().removeClass("tab-img");

	})

	//DEAL OF THE DAY SLIDER JS SATRT
	 $('.slider4').bxSlider({
    slideWidth: 300,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 4,
    slideMargin: 10,
	after: function(sSlide){
		$(".detail li").css("display","none");
		  var sIndex = $(".bx-pager").find("a.bx-pager-link.active").index();
		  $(".detail li").eq(sIndex).addClass("iActive").siblings().removeClass('iActive');
		  $(".detail li.iActive").fadeIn();
	},
	sync: "#carousel",
	});
	//DEAL OF THE DAY SLIDER JS END
	
	//DEAL OF THE DAY SLIDER JS SATRT
	 $('.slider5').bxSlider({
    slideWidth: 300,
    minSlides: 5,
    maxSlides: 5,
    moveSlides: 5,
    slideMargin: 10,
	after: function(sSlide){
		$(".detail li").css("display","none");
		  var sIndex = $(".bx-pager").find("a.bx-pager-link.active").index();
		  $(".detail li").eq(sIndex).addClass("iActive").siblings().removeClass('iActive');
		  $(".detail li.iActive").fadeIn();
	},
	sync: "#carousel",
	});
	//DEAL OF THE DAY SLIDER JS END
	
	//KIT SLIDE DOWN JS START
	
	
	$(".kit-pro li").hover(function(){
		var kitIndex = $(".kit-pro li").index();
		$(".sub-kit  li").eq(kitIndex).addClass("subkit-slide").siblings().removeClass("subkit-slide");
		$(".sub-kit li.subkit-slide").show();
	});
});