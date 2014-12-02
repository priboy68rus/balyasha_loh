$(document).ready(function() {
		var cur = 0;
		$('.sof').click(function() {
			if (cur == 1)
			{
				$('p').fadeOut(400, function(){
					$('p').html('Who is Marina?');
				});
				
				$('p').fadeIn(400);

				cur = 2;
			}
			else if (cur == 0)
			{
				$('p').fadeOut(400, function (){
					$('p').html('Balyasha loshara');
				});
			
				$('p').fadeIn(400);
				cur = 1;
			}
			else if (cur == 2)
			{
				$('p').fadeOut(400, function (){
					$('p').html('Marina is cool');
				});
			
				$('p').fadeIn(400);
				cur = 3;
			}
			else if (cur == 3)
			{
				$('p').fadeOut(400, function (){
					$('p').html('Who is Balyasha?');
				});
			
				$('p').fadeIn(400);
				cur = 0;
			}

		});
});
