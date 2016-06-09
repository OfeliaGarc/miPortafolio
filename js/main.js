var cosasQueHagoDespuesDeUnTiempo = function(){
	$('').removeClass('animated swing');		
	console.log("Quitando clases");
};

var cosasQueHagoEnMouseOver = function(){
	console.log("Agregando clases");
	$('').addClass('animated swing');

	setTimeout(cosasQueHagoDespuesDeUnTiempo, 1200);
};

var DespuesDeUnTiempo = function(){
	$('').removeClass('animated pulse');		
	console.log("Quitando clases");
};

var MouseOver = function(){
	console.log("Agregando clases");
	$('').addClass('animated pulse');

	setTimeout(DespuesDeUnTiempo, 700);
};

var despuesDelEfecto =function(){
	$('.icons').removeClass('animated shake')
	console.log("Quitando la clase");
}

var otroEfecto = function(){
	console.log("Agregando la clase");
	$('.icons').addClass('animated shake');

	setTimeout(despuesDelEfecto, 1555);
}


/*............................ AQUI FUNCIONA .........................*/ 
	$(document).ready(function() {

		$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    		event.preventDefault();
    		$(this).ekkoLightbox();
		});


	$('').mouseover(cosasQueHagoEnMouseOver);

	$('').mouseover(MouseOver);

	$('.icons').mouseover(otroEfecto);

});

/*..........................:D ....................EFECTOS HOVER ..........................:D.............................*/

$(function() {
	var pull   		=$('#pull');
	var menu   		=$('nav ul');
	var menuHeight 	= menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function() {
		var w = $(window).width();
		if (w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});