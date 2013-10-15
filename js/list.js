$(document).ready(function(){
	$(".nav").mouseenter(function(){
   		$(".drop").slideDown(1000);
	});
	$(".drop").mouseleave(function(){
    	$(".drop").slideUp(1000);
	});

	$(".nav li").click(function(){
        window.location.href="list.html";
    });
    $(".nav li:first-child").click(function(){
        window.location.href="index.html";
    });
  	$(".drop li").click(function(){
    	window.location.href="list.html";
  	});
    $(".post b").click(function(){
      window.location.href="post.html";
    });
    $(".continue").click(function(){
      window.location.href="post.html";
    });
  	$(".recentPost li").click(function(){
    	window.location.href="post.html";
  	});
  	$(".recentComment li").click(function(){
    	window.location.href="post.html";
  	});

  	//gotop animation
	var w=document.body.clientWidth;
  	var h=window.innerHeight;
  	var hslider=h*0.8;
	$(window).scroll(function(){
		if($(document).scrollTop()<=h*0.25){
        	$("#gotop").hide(100);
    	}
    	else{
        	$("#gotop").show(100);
    	}
    });

    $("#gotop").click(function(){
		$("html,body").animate({scrollTop: 0}, 800);
	});
    //go top end

	$(".newcomment button").click(function(){
		alert("天哪噜,demo要被你玩坏了")
  	});

});
