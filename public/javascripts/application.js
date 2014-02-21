$(function(){
	$('nav a').each(function(i, ele){
		$(ele).click(function(e){
			var $this = $(this);
			if($this.parent().is('.selected') == false){
				switch(this.className){
					case "about":
						$('#about').fadeIn('fast');
						$('#email').fadeOut('fast');
						break;
					case "email":
						$('#email').fadeIn('fast');
						$('#about').fadeOut('fast');
						break;
				}
				$('nav .selected').toggleClass('selected');
				$this.parent().toggleClass('selected');
				$('#description').hide();
			}
			e.preventDefault();
		});
	});


	$('.close').each(function(i, ele){
		$(ele).click(function(e){
			$('nav .selected').toggleClass('selected');
			$(this).parent().fadeOut('fast');
			$('#description').show();
			e.preventDefault();
		})
	});

	var pages = $('#gallery .page'),
		currentPageIndex = 0, 
		left = { left: "-100%", duration: 5000},
		right = { left: "100%", duration: 5000},	
		center = { left: "0", duration: 5000};

	$('.minus').toggle(currentPageIndex != 0);
	$('.plus').toggle(currentPageIndex != pages.length || pages.length != 1);
			
	$('.plus').click(function(e){
		if(currentPageIndex < pages.length){
			updateGallery(currentPageIndex+1, true, left);
		}
		e.preventDefault();
	});

	$('.minus').click(function(e){
		if(currentPageIndex != 0){
			updateGallery(currentPageIndex-1, true, right);
		}
		e.preventDefault();
	});

	function updateGallery(newPageIndex, animate, direction){

		if(animate){
			$('.page.current').animate(direction).toggleClass('current');
			$(pages[newPageIndex]).animate(center).toggleClass('current');
		}

		currentPageIndex = newPageIndex;
		$('.minus').toggle(currentPageIndex != 0);
		$('.plus').toggle(currentPageIndex != pages.length - 1);
	}

});