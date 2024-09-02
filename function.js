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
