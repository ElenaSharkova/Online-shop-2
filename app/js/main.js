$(function () {
   $('.top__slider').slick({
        dots: true, //врубили дотсы
        arrows: false, // вырубили стрелочки
        fade: true, // чтобы менялось плавно
        autoplay: true
        
    });
    $('.content__slider').slick({
        //dots: true, //врубили дотсы
        arrows: false, // вырубили стрелочки
        fade: true, // чтобы менялось плавно
        autoplay: true
        
    });
    
    $(".footer__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
    
    
})