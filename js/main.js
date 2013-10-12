$(document).ready(function(){
	$(".nav").mouseenter(function(){
   		$(".drop").slideDown(1000);
  	});

	$(".drop").mouseleave(function(){
    	$(".drop").slideUp(1000);
  	});
  	var w=window.innerWidth;
  	var h=window.innerHeight;
  	var hslider=h*0.65;
	$(".sliderimg").width(w).height(hslider);
	$("#img2").css({"left":"100%","top":"4em"});
	$("#img3").css({"left":"100%","top":"4em"});
	$("#img4").css({"left":"100%","top":"4em"});
	$("#img5").css({"left":"100%","top":"4em"});
	$("#img6").css({"left":"100%","top":"4em"});


	//banner animation start

	$("#img1").show(1000);//img1 enter view
	
	setTimeout(function(){
		$("#img1").animate({left:-w},500);
		$("#img6").hide().css({"left":w});
	},5000);//img1 leave view
	setTimeout(function(){
		$("#img2").show().animate({left:'0'},500);
	},4800);//img2 enter view
	setTimeout(function(){
		$("#img2").animate({left:-w},500);
		$("#img1").hide().css({"left":w});
	},8000);//img2 leave view
	setTimeout(function(){
		$("#img3").show().animate({left:'0'},500)
	},7800);//img3 enter view
	setTimeout(function(){
		$("#img3").animate({left:-w},500)
		$("#img2").hide().css({"left":w});
	},11000);//img3 leave view
	setTimeout(function(){
		$("#img4").show().animate({left:'0'},500)
	},10800);//img4 enter view
	setTimeout(function(){
		$("#img4").animate({left:-w},500)
		$("#img3").hide().css({"left":w});
	},14000);//img4 leave view
	setTimeout(function(){
		$("#img5").show().animate({left:'0'},500)
	},13800);//img5 enter view
	setTimeout(function(){
		$("#img5").animate({left:-w},500);
		$("#img4").hide().css({"left":w});
	},17000);//img5 leave view
	setTimeout(function(){
		$("#img6").show().animate({left:'0'},500)
	},16800);//img6 enter view
	setTimeout(function(){
		$("#img6").animate({left:-w},500);
		$("#img5").hide().css({"left":w});
	},20000)//img6 leave view
	setTimeout(function(){
		$("#img6").show().animate({left:'0'},500)
	},19800);//img1 enter view

	//watchroom animation start

	$(".merge1").mouseenter(function(){
  		$("#cover1").show().animate({top:'-=50%'},400).delay(50).animate({top:'+=5%'},100);
  	});
  	$(".merge1").mouseleave(function(){
  		$("#cover1").animate({top:'+=45%'},400).hide(100);
  	});
});