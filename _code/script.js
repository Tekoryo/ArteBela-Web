/*Scroll */
const menuitem = document.querySelectorAll('.cabecalho a[href^="#"]')
menuitem.forEach(item=>{
    item.addEventListener('click',scrollToIdOnClick)
})
function scrollToIdOnClick(event){
    const element = event.target;
    const id = element.getAttribute('href')
    const section = document.querySelector(id)
    console.log(id)

}
/*Banner*/
let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max = images.length;
function nextImage(){
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if(currentImageIndex>=max){
        currentImageIndex = 0
    }
    images[currentImageIndex].classList.add("selected")
}    
function start(){
    setInterval(()=>{
        // troca de imagem
        nextImage()
    },time)
}
window.addEventListener("load",start)
