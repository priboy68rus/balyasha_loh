$(document).ready(function() {
		var cur = 0;
		$('.sof').click(function() {
			if (cur === 1)
			{
				$('p').fadeOut(400, function(){
					$('p').html('Who is Sonya?');
				});
				
				$('p').fadeIn(400);

				cur = 0;
			}
			else
			{
				$('p').fadeOut(400, function (){
					$('p').html('Sonya loshara');
				});
			
				$('p').fadeIn(400);
				cur = 1;
			}

		});
});
