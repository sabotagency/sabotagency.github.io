$(document).ready(function(){
	var cardBox = $(".card-box");
	var pickupCardBox;
	var pickupCard;
	var openCardBox = $("#open-card-box");
	var dim = $("#dim");
	
	$(".card-box").on("click",function(){
		pickupCardBox = $(this);
		pickupCard = pickupCardBox.find(".card-paper");
		pickupCard.addClass("pickup");
		$("html, body").animate({
			scrollTop : pickupCard.offset().top - 240 - 10
		}, 300);

		pickupCard.one("transitionend",pickupCardFix);
	});
	function pickupCardFix() {
		var t = pickupCard.offset().top;
		openCardBox.css("top",t+"px");
		pickupCard.width(pickupCard.width());
		openCardBox.append(pickupCard);
		dim.addClass("on");

		openCardBox.one("click",function(){
			dim.removeClass("on").addClass("off");
			dim.one("transitionend",function(){
				dim.removeClass("off");
				pickupCardBox.append(pickupCard);
				setTimeout(function(){pickupCard.removeClass("pickup")},1);
			});			
		});
	}
});
