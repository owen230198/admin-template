var mainContent = function(){
	header = $('header').outerHeight();
	sidebar = $('.sidebar_menu').width();
	$('.main_content').css({'padding-top': header, 'padding-left': sidebar});
}

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
var explandMiniSizeSidebar = function()
{
	$(document).on('click', '.button_sidebar', function(event){
		event.preventDefault();
		sidebar = $('.sidebar_menu');
		content = $('.main_content');
		if(sidebar.hasClass('show')){
			$(this).html('<i class="bi bi-list"></i>');
			sidebar.removeClass('show');
			content.css('padding-left', 0);
		}else{
			$(this).html('<i class="bi bi-arrow-bar-left"></i>');
			sidebar.addClass('show');
			content.css('padding-left', 175);
		}

	});
}

var profileMenu = function()
{
	$(document).on('click', '.admin_menu', function(event){
		event.preventDefault();
		ul = $(this).find('ul.profile_menu');
		if(ul.css('display')=='none'){
			ul.slideDown(175);
		}else{
			ul.slideUp(175);
		}
	});
}

$(function(){
	mainContent();
	menuSidebar();
	explandMiniSizeSidebar();
	profileMenu();
});