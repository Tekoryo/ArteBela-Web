// var img = document.querySelector("#image");

// img.setAttribute('src', 'outra_imagem.png');
var x=5;
var item,tip;
var fotos1 = document.getElementById("fotos1")

function image(item){
    let y,z;
    y = 5
    if(item == 1){
        y -= 1
    }else if(item == 2){
        y += 1
    }
    console.log(y)
   switch(y){
    case 4:
        fotos1.setAttribute('src','imagens/fotos/im4.jpg')
        break;
    case 6:
        fotos1.setAttribute('src','imagens/fotos/im6.jpg')
        break;
    default:
        alert("[ERRO!]")
        break;
   }
}