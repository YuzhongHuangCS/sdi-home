$(document).ready(function(){
	$(".nav").mouseenter(function(){
   		$(".drop").slideDown("slow");
  	});

	$(".drop").mouseleave(function(){
    	$(".drop").slideUp("slow");
  	});
	$("img.sliderimg").width(1366).height(400);
	$("#img2").css({"left":"1366px","top":"60px","display":"inline"});
	$("#img3").css({"left":"1366px","top":"60px"});
	$("#img4").css({"left":"1366px","top":"60px"});
	$("#img5").css({"left":"1366px","top":"60px"});
	$("#img6").css({"left":"1366px","top":"60px"});

	$("#img1").show(1000).delay(2000).animate({right:'1366px'});
	$("#img2").delay(2820).show().animate({left:'0px'});
	
	setTimeout(function(){
		$("#img2").hide(1000)
	},5000)
});