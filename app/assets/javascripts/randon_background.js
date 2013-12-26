(function (){

	$('button').on('click',function(){
		
		
		$('body').css('background-color',generate_rand_color());
		
	})

	function generate_rand_color(){

		var letters='123456789ABCDEF'.split('');
		var colors='#'

		for(var i=0; i<6;i++){
			colors+=letters[Math.floor(Math.random()*15)];
		}

		return colors;

	}
})();