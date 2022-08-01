var menuSidebar = function()
{
	$(document).on('click','li.li_sidebar',function(event){
		event.preventDefault();
		$('li.li_sidebar').find('ul').removeClass('active');
		$('li.li_sidebar').find('ul').slideUp();
		ul = $(this).find('ul');
		if (ul.css('display')=='block') {
			$(this).removeClass('active');
			ul.slideUp();	
		}else{
			$(this).toggleClass('active');
			ul.slideDown();
		}
	});
}

$(function(){
	menuSidebar();
});