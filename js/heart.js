
const containerEI=document.querySelector(".container");

containerEI.addEventListener("mousemove",(e)=>{
    const element=document.createElement("span");

    const xPos=e.offsetX;
    const yPos=e.offsetY;

    element.style.left=xPos+"px";
    element.style.top=yPos+"px";

    containerEI.appendChild(element);

    const rand=Math.floor(Math.random()*100);

    element.style.height=rand+"px";
    element.style.width=rand+"px";

    setTimeout(()=>{
        element.remove();
    },3000)

})