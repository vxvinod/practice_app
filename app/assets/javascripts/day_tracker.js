(function (){

	var d = new Date();
	var da=d.getDay();
	console.log(da);

	var msg=["Happy sunday !!!!!!!!",
				"freaking Monkay :(:(",
					"Derking Tuesday :|:|",
					"sterling wednesday:/:/",
						"oops god Thursday came only one day to heaven",
						"Oh my God its friday",
						"its dead coool Saturday"];
	console.log(msg[da]);

	
	function display_message(){
	$('#display').text(msg[da]).show();
	setTimeout(hidemessage,600);
	console.log('disp');
	};	
	function hidemessage(){
		$('#display').hide();
		console.log('hide');

		setTimeout(display_message,600);
	};


	display_message();

})();