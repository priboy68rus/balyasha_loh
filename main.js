$(document).ready(function() {
		var cur = 0;
		$('.sof').click(function() {
			if (cur === 1)
			{
				$('p').fadeOut(400, function(){
					$('p').html('Who is Balyasha?');
				});
				
				$('p').fadeIn(400);

				cur = 0;
			}
			else
			{
				$('p').fadeOut(400, function (){
					$('p').html('Balyasha loshara');
				});
			
				$('p').fadeIn(400);
				cur = 1;
			}

		});
});
