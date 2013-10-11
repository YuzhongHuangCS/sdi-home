$(document).ready(function(){
	$(".nav").mouseenter(function(){
   		$(".drop").slideDown("slow");
  	});

	$(".drop").mouseleave(function(){
    	$(".drop").slideUp("slow");
  	});
	$("img.sliderimg").width(1366).height(400);
	$("#img2").css({"left":"1366px","top":"60px"});
	$("#img3").css({"left":"1366px","top":"60px"});
	$("#img4").css({"left":"1366px","top":"60px"});
	$("#img5").css({"left":"1366px","top":"60px"});
	$("#img6").css({"left":"1366px","top":"60px"});

	$("#img1").show(1000);//img1 enter view
	setTimeout(function(){
		$("#img1").animate({left:'-1366px'},500);
	},3000);//img1 leave view
	setTimeout(function(){
		$("#img2").show().animate({left:'0px'},500);
	},2820);//img2 enter view
	setTimeout(function(){
		$("#img2").animate({left:'-1366px'},500);
	},6000);//img2 leave view
	setTimeout(function(){
		$("#img3").show().animate({left:'0px'},500)
	},5820);//img3 enter view
	setTimeout(function(){
		$("#img3").animate({left:'-1366px'},500)
	},9000);//img3 leave view
	setTimeout(function(){
		$("#img4").show().animate({left:'0px'},500)
	},8820);//img4 enter view
	setTimeout(function(){
		$("#img4").animate({left:'-1366px'},500)
	},12000);//img4 leave view
	setTimeout(function(){
		$("#img5").show().animate({left:'0px'},500)
	},11820);//img5 enter view
	setTimeout(function(){
		$("#img5").animate({left:'-1366px'},500)
	},15000);//img5 leave view
	setTimeout(function(){
		$("#img6").show().animate({left:'0px'},500)
	},14820);//img6 enter viewf
	setTimeout(function(){
		history.go(0)
	},18000);
});