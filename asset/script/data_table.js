var showFunctionButton = function()
{
	$(document).on('click', '.data_table_fnc_btn', function(event){
		event.preventDefault();
		$('ul.function_group_btn').slideUp(100);
		nParent = $(this).parent();
		groupButton = nParent.find('ul.function_group_btn');
		if(groupButton.css('display')=='none'){
			groupButton.slideDown(100);		
		}else{
			groupButton.slideUp(100);
		}
	});
	if($('ul.function_group_btn').length>0)
		$(window).click(function(e) 
		{
			if($('.funtion_data_table').has(e.target).length == 0 && !$('.funtion_data_table').is(e.target)){
				if($('.funtion_data_table').css('display')=='block')
				$('ul.function_group_btn').slideUp(100);
			}
		});
}
$(function(){
    showFunctionButton();    
})