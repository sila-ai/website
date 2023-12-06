let plans = [];
			
(function($){
	$(document).ready(function() {	

		// Scroll to Top
		// jQuery('.scrolltotop').click(function(){
		// 	jQuery('html').animate({'scrollTop' : '0px'}, 400);
		// 	return false;
		// });
		
		// jQuery(window).scroll(function(){
		// 	var upto = jQuery(window).scrollTop();
		// 	if(upto > 500) {
		// 		jQuery('.scrolltotop').fadeIn();
		// 	} else {
		// 		jQuery('.scrolltotop').fadeOut();
		// 	}
		// });


			jQuery.ajax({
				url:'https://backend-app.sila-ai.com/plans',//https://backend-app.sila-ai.com
				method:'GET'
			}).done(function(data){
				
				plans = data.data.sort((a,b) => parseInt(a.nickname) - parseInt(b.nickname))
				console.log(plans)
			});

		
			  
	const input = document.getElementById('input');

	

	input.oninput = ()=>{
		const click = document.getElementById('input')?.value;
		if(click != null){
			for(const plan of plans){
				if(click <= parseInt(plan.nickname)){
					
					const value = document.getElementById('value');
					const valx = document.getElementById('valx');
					const registerLink = document.getElementById("registerLink");

					if(value != null) value.innerHTML = click;
					if(valx != null) valx.innerHTML = plan.amount/100;
					if(registerLink != null) registerLink.href = `https://app.sila-ai.com/#/register/${plan.id}`;

					break;
				}
			}
		}
		
}
		
		
		
		
	});
})(jQuery);


// input.oninput = (()=>{
// 	let ival = input.value;
// 	value.textContent = ival;
// 	valx.textContent = ival * 5;
// 	let y = span.style.width = (ival /input.max) *100 + '%';
// });