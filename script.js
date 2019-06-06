$(document).ready(function(){
	$("#bob").on({
	mouseenter:function(){
		$("#bob").animate({width: "+=40px"}, 100);
	 },
	 mouseleave:function(){
		$("#bob").animate({width: "-=40px"}, 200);
	}
	});
	$("#elasti").on({
	mouseenter:function(){
		$("#elasti").animate({width: "+=30px"}, 100);
	 },
	 mouseleave:function(){
		$("#elasti").animate({width: "-=30px"}, 200);
	}
	});
	$("#violette").on({
	mouseenter:function(){
		$("#violette").animate({width: "+=50px"}, 100);
	 },
	 mouseleave:function(){
		$("#violette").animate({width: "-=50px"}, 200);
	}
	});
	$("#fleche").on({
	mouseenter:function(){
		$("#fleche").animate({width: "+=50px"}, 100);
	 },
	 mouseleave:function(){
		$("#fleche").animate({width: "-=50px"}, 200);
	}
	});
	$("#baby").on({
	mouseenter:function(){
		$("#baby").animate({width: "+=50px"}, 100);
	 },
	 mouseleave:function(){
		$("#baby").animate({width: "-=50px"}, 200);
	}
	});

});
