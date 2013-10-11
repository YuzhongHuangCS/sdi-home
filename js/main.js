$(document).ready(function(){
	$(".nav").mouseenter(function(){
   		$(".drop").slideDown(900);
  	});

	$(".drop").mouseleave(function(){
    	$(".drop").slideUp(900);
  	});
  	var w=window.innerWidth;
  	var h=window.innerHeight;
  	var hslider=h*0.65;
	$("img.sliderimg").width(w).height(hslider);
	$("#img2").css({"left":w,"top":"60px"});
	$("#img3").css({"left":w,"top":"60px"});
	$("#img4").css({"left":w,"top":"60px"});
	$("#img5").css({"left":w,"top":"60px"});
	$("#img6").css({"left":w,"top":"60px"});

	$("#img1").show(1000);//img1 enter view
	
	setTimeout(function(){
	$("#img1").animate({left:-w},500);
	$("#img6").hide().css({"left":w,"top":"60px"});
	},5000);//img1 leave view
	setTimeout(function(){
		$("#img2").show().animate({left:'0px'},500);
	},4800);//img2 enter view
	setTimeout(function(){
		$("#img2").animate({left:-w},500);
		$("#img1").hide().css({"left":w,"top":"60px"});
	},8000);//img2 leave view
	setTimeout(function(){
		$("#img3").show().animate({left:'0px'},500)
	},7800);//img3 enter view
	setTimeout(function(){
		$("#img3").animate({left:-w},500)
		$("#img2").hide().css({"left":w,"top":"60px"});
	},11000);//img3 leave view
	setTimeout(function(){
		$("#img4").show().animate({left:'0px'},500)
	},10800);//img4 enter view
	setTimeout(function(){
		$("#img4").animate({left:-w},500)
		$("#img3").hide().css({"left":w,"top":"60px"});
	},14000);//img4 leave view
	setTimeout(function(){
		$("#img5").show().animate({left:'0px'},500)
	},13800);//img5 enter view
	setTimeout(function(){
		$("#img5").animate({left:-w},500);
		$("#img4").hide().css({"left":w,"top":"60px"});
	},17000);//img5 leave view
	setTimeout(function(){
		$("#img6").show().animate({left:'0px'},500)
	},16800);//img6 enter view
	setTimeout(function(){
		$("#img6").animate({left:-w},500);
		$("#img5").hide().css({"left":w,"top":"60px"});
	},20000)//img6 leave view
	setTimeout(function(){
		$("#img6").show().animate({left:'0px'},500)
	},19800);//img1 enter view
	$("#watch1").mouseenter(function(){
  		$("#cover1").show(100).animate({top:'-=5%'},500);
  	});
  	$("#watch1").mouseleave(function(){
  		$("#cover1").animate({top:'+=5%'}.hide(),500);
  	});
});