var timeout;
$(document).ready(function(){
	$('.header').delay(250).css('display:block;')
});

$('.header-wrapper').mouseenter(function(){
	timeout = window.clearTimeout(timeout);
	$('.header').stop().slideDown(250);
});
$('.header-wrapper').mouseleave(function(){
	timeout = window.setTimeout(function(){
		$('.header').slideUp(750)
	}, 750);
});

$('#searchbox').click(function(){
	$('#searchbox').css({'font-style':'normal','color':'#444'}).attr('value','')
});

$('#searchrandom').click(function(){
	window.open('https://en.wikipedia.org/wiki/Special:Random','_blank')
});

var search = "";

$('#searchsubmit').click(function(){
	search = $('#searchbox').html();
	var url = "http://wikipedia.org";
	if(search!=="") {
		url = "http://wikipedia.org/w/api.php/action=query&list=search&format=json&srsearch=" + encodeURI(search);
	}
	window.open(url,'_blank')
});