$(document).ready(function(){
	$(".nav").mouseenter(function(){
   		$(".drop").slideDown("slow");
  	});

	$(".drop").mouseleave(function(){
    	$(".drop").slideUp("slow");
  	});
  	var w=window.innerWidth;
  	var h=window.innerHeight;
  	var hslider=h*0.7;
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
	},3000);//img1 leave view
	setTimeout(function(){
		$("#img2").show().animate({left:'0px'},500);
	},2800);//img2 enter view
	setTimeout(function(){
		$("#img2").animate({left:-w},500);
		$("#img1").hide().css({"left":w,"top":"60px"});
	},6000);//img2 leave view
	setTimeout(function(){
		$("#img3").show().animate({left:'0px'},500)
	},5800);//img3 enter view
	setTimeout(function(){
		$("#img3").animate({left:-w},500)
		$("#img2").hide().css({"left":w,"top":"60px"});
	},9000);//img3 leave view
	setTimeout(function(){
		$("#img4").show().animate({left:'0px'},500)
	},8800);//img4 enter view
	setTimeout(function(){
		$("#img4").animate({left:-w},500)
		$("#img3").hide().css({"left":w,"top":"60px"});
	},12000);//img4 leave view
	setTimeout(function(){
		$("#img5").show().animate({left:'0px'},500)
	},11800);//img5 enter view
	setTimeout(function(){
		$("#img5").animate({left:-w},500);
		$("#img4").hide().css({"left":w,"top":"60px"});
	},15000);//img5 leave view
	setTimeout(function(){
		$("#img6").show().animate({left:'0px'},500)
	},14800);//img6 enter view
	setTimeout(function(){
		$("#img6").animate({left:-w},500);
		$("#img5").hide().css({"left":w,"top":"60px"});
	},18000)//img6 leave view
	setTimeout(function(){
		$("#img6").show().animate({left:'0px'},500)
	},17800);//img1 enter view
	
});