	$(document).ready(function()
{

	$("#ClickF").click(function(){
		/*Mostramos el Formulario mediante este efecto*/
    $("#FormContacto").slideToggle("slow");

   								});
	$(".programs, .movies, .op img").hover(function(){
    $(this).css("border","2px dotted magenta");

    $(".logo").hover(function(){
    $(this).slideToggle("slow")
		 
    });
	  });
    
	
});