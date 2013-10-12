$(document).ready(function(){
	$(".nav").mouseenter(function(){
   		$(".drop").slideDown(1000);
  	});

	$(".drop").mouseleave(function(){
    	$(".drop").slideUp(1000);
  	});
  	var w=document.body.clientWidth;
  	var h=window.innerHeight;
  	var hslider=h*0.8;
	$(".sliderimg").width(w).height(hslider);
	$("#img2").css({"left":"100%","top":"4em"});
	$("#img3").css({"left":"100%","top":"4em"});
	$("#img4").css({"left":"100%","top":"4em"});
	$("#img5").css({"left":"100%","top":"4em"});
	$("#img6").css({"left":"100%","top":"4em"});


	//banner animation start

	$("#img1").show(1000);//img1 enter view
	setTimeout(function(){
		$("#float1").animate({left:'10%'},400)
	},1500);//float1 enter view
	setTimeout(function(){
		$("#img1").animate({left:-w},500);
		$("#float1").animate({left:-w},500);
	//	$("#img6").hide().css({"left":w});
	},5000);//img1 leave view
	setTimeout(function(){
		$("#img2").show().animate({left:'0'},500);
	},4800);//img2 enter view
	setTimeout(function(){
		$("#img2").animate({left:-w},500);
	//	$("#img1").hide().css({"left":w});
	},8000);//img2 leave view
	setTimeout(function(){
		$("#img3").show().animate({left:'0'},500)
	},7800);//img3 enter view
	setTimeout(function(){
		$("#float3").animate({left:'10%'},400);
	},8400)
	setTimeout(function(){
		$("#img3").animate({left:-w},500)
		$("#float3").animate({left:-w},500)
	//	$("#img2").hide().css({"left":w});
	},11000);//img3 leave view
	setTimeout(function(){
		$("#img4").show().animate({left:'0'},500)
	},10800);//img4 enter view
	setTimeout(function(){
		$("#float4").animate({left:'-20%'},2000)
	},11100)//float enter and leave
	setTimeout(function(){
		$("#img4").animate({left:-w},500)
	//	$("#img3").hide().css({"left":w});
	},14000);//img4 leave view
	setTimeout(function(){
		$("#img5").show().animate({left:'0'},500)
	},13800);//img5 enter view
	setTimeout(function(){
		$("#img5").animate({left:-w},500);
	//	$("#img4").hide().css({"left":w});
	},17000);//img5 leave view
	setTimeout(function(){
		$("#img6").show().animate({left:'0'},500)
	},16800);//img6 enter view


	//middle click animation start
	$("#middle1").click(function(){
		$("html").animate({scrollTop: h}, 800);
	});
	$("#middle2").click(function(){
		$("html").animate({scrollTop: 1.9*h}, 1000);
	});
	$("#middle3").click(function(){
		$("html").animate({scrollTop: 2.82*h}, 1200);
	});
	//watchroom animation start

	$(".merge1").mouseenter(function(){
  		$(".cover1").show().animate({top:'-=50%'},400).delay(50).animate({top:'+=5%'},100);
  	});
  	$(".merge1").mouseleave(function(){
  		$(".cover1").animate({top:'+=45%'},400).hide(100);
  	});

  	$(".merge2").mouseenter(function(){
  		$(".cover2").slideDown(400);
  	});
  	$(".merge2").mouseleave(function(){
  		$(".cover2").slideUp(400);
  	});

  	$(".merge3").mouseenter(function(){
  		$(".cover3").slideDown(400);
  	});
  	$(".merge3").mouseleave(function(){
  		$(".cover3").slideUp(400);
  	});
  	$(".merge4").mouseenter(function(){
  		$(".cover4").show(500);
  	});
  	$(".merge4").mouseleave(function(){
  		$(".cover4").hide(500);
  	});
  	$(".merge5").mouseenter(function(){
  		$(".cover5").show().animate({left:'10%'},400).delay(50).animate({left:'0%'},100);
  	});
  	$(".merge5").mouseleave(function(){
  		$(".cover5").animate({left:'-105%'},400).hide(50);
  	});
  	$(".merge6").mouseenter(function(){
  		$(".cover6").slideDown(400);
  	});
  	$(".merge6").mouseleave(function(){
  		$(".cover6").slideUp(400);
  	});
});