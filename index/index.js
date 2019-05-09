     
			var index = 0;
			var timer = setInterval(autoPlay,2000);
			function autoPlay(){
				index++;
				$(".img-list > li").eq(index).fadeIn().siblings().fadeOut();
				if(index == $(".img-list > li").length - 1){
					index = -1;
				}
				$('.banner-nav-list > li').eq(index).addClass('active').siblings().removeClass('active');
				
			}
			// $(".banner").hover(function(){
			// 	$('arr').addClass('arr');
			// })
			
			
			