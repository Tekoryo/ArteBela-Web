/*Scroll */
const menuitem = document.querySelectorAll('.cabecalho a[href^="#"]')
menuitem.forEach(item=>{
    item.addEventListener('click',scrollToIdOnClick)
})
function scrollToIdOnClick(event){
    event.preventDefault()
    const to = getscrollTopByhref(event.target) - 130
    scrollPositon(to)
}
function getscrollTopByhref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop;
}
function scrollPositon(to){
    window.scroll({
        top:to,
        behavior: "smooth",
    })
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
/* Galeria*/
const gM=document.querySelector(".galeria-modal")
const ImgM=document.querySelector(".galeria-modal img")
const btclose=document.querySelector(".galeria-modal")
btclose.addEventListener('click',function (){
    gM.style.visibility="hidden"; 
})

function abrirGaleria(){
    gM.style.visibility="visible"
    ImgM.style.transform ="scale(1)"
    ImgM.scr=scr
}