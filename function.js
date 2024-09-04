const cursorDot=document.getElementsByClassName('cursor-dot')[0];
const cursorOutline=document.getElementsByClassName('cursor-outline')[0];
window.addEventListener('mousemove', (e)=>{
const posX=e.clientX;
const posY=e.clientY;
cursorDot.style.left= `${posX}px`;
cursorDot.style.top= `${posY}px`;
// cursorOutline.style.left= `${posX}px`;
// cursorOutline.style.top= `${posY}px`;
cursorOutline.animate({
    left:`${posX}px`,
    top:`${posY}px`
},{duration:500, fill: "forwards"})
})
let textChange=document.getElementById('text-change');

setInterval(() => {
    textChange.innerText="Web Development";
    textChange.style.opacity=0.8
    
}, 2000);
setInterval(() => {
    textChange.innerText="Digital Marketing";
    textChange.style.opacity=1
    
}, 4000);
setInterval(() => {
    textChange.innerText="Branding";
    textChange.style.opacity=0.5
    
}, 6000);
setInterval(() => {
    textChange.innerText="Digital Transformation";
    textChange.style.opacity=1
    
}, 8000);

window.addEventListener('scroll',()=>{
    if(window.scrollY>=80){
     document.getElementsByClassName('navbar')[0].classList.add('bg-nav')
     document.getElementsByClassName('navbar')[0].classList.remove('bg-transparent')
   }
   else{
     document.getElementsByClassName('navbar')[0].classList.add('bg-transparent')
     document.getElementsByClassName('navbar')[0].classList.remove('bg-nav')
     }


   })