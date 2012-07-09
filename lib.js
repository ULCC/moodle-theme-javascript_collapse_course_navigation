jQuery.noConflict();

function minimisecourses()	{
	jQuery("li.type_system:not(:has(collapsed))").addClass('collapsed');
}
minimisecourses();


function minimisecc()	{
	jQuery("div.category, with_children:not(:has(collapsed))").addClass('collapsed');
}
minimisecc();
	