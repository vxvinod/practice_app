( function (){

	$('#shadow').on('click',function(){
		console.log("clicked");
		var val=$(this).css('box-shadow');
		var c= val.split('px');
		var b=c[c.length-2];
		var v=c[c.length-3];
		b=parseInt(b)+1;
		v=parseInt(v)+3;
		$(this).css('box-shadow','grey 0px 0px '+b+'px '+v+'px ');
		console.log(b);
		console.log(v);
	});

		$('#text-shadow').on('click',function(){
		console.log("clicked");
		var val=$(this).css('text-shadow');
		var c= val.split('px');
		var b=c[c.length-2];
		var v=c[c.length-3];
		b=parseInt(b)+1;
		v=parseInt(v)+2;
		$(this).css('text-shadow','grey '+b+'px '+v+'px ');
		console.log(b);
		console.log(v);
	});

})();