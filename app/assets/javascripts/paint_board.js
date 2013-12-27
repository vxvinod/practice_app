(function (){
	
	var paint="white";
	$(".color").on("click",function (){
		console.log("clicked");
		paint = $(this).css("background-color");
		alert(paint);
	})

	$(".row").on("click",function (){
		console.log("box");
		$(this).css("background-color",paint);
	});
})();

