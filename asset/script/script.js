var mainContent = function(){
	if($('header').length>0 && $('.sidebar_menu').length>0 && $('.main_content').length>0){
		header = $('header').outerHeight();
		sidebar = $('.sidebar_menu').width();
		$('.main_content').css({'padding-top': header, 'padding-left': sidebar});
	}
}

var menuSidebar = function()
{
	$(document).on('click','li.li_sidebar>a',function(event){
		event.preventDefault();
		$('li.li_sidebar').find('ul').removeClass('active');
		$('li.li_sidebar').find('ul').slideUp(100);
		liSidebar = $(this).parent();
		ul = liSidebar.find('ul');
		if (ul.css('display')=='block') {
			liSidebar.removeClass('active');
			ul.slideUp(100);	
		}else{
			liSidebar.toggleClass('active');
			ul.slideDown(100);
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
			ul.slideUp(100);
		}
	});
}

$(function(){
	mainContent();
	menuSidebar();
	explandMiniSizeSidebar();
	profileMenu();
});