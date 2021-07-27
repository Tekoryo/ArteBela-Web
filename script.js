
$(document).ready(function image(){

  $("#fotos1").click(function image(){
    if($(this).attr("src") == "imagens/fotos/im4.jpg") 
      $(this).attr("src","imagens/fotos/im5.jpg");
    else
      $(this).attr("src","imagens/fotos/im2.jpg");

  });
});
