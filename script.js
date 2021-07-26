// var img = document.querySelector("#image");

// img.setAttribute('src', 'outra_imagem.png');
var x=5;
var item,cal,z,y;
var fotos1 = document.getElementById("fotos1")

console.log(z)
// mudando a imagem
function image(item){  
    z = x  
    if(item == 1){
       
       z = z - 1
    }else if(item == 2){
       cal = +1
       z = z + 1
    }
    
    
    switch(z){
        case 3:
            fotos1.setAttribute('src','imagens/fotos/im3.jpg')
            break;
        case 4:
            fotos1.setAttribute('src','imagens/fotos/im4.jpg')
            break;
        case 5:
            fotos1.setAttribute('src','imagens/fotos/im5.jpg')
            break;
        case 6:
            fotos1.setAttribute('src','imagens/fotos/im6.jpg')
            break;
        case 7:
            fotos1.setAttribute('src','imagens/fotos/im7.jpg')
            break;
        default:
            alert("[ERRO!]")
            break;
    }
    console.log(z)

    return  z;
}
y = z 
x = z
