
const imageContainerEI=document.querySelector(".imageContainer");


let x=1;

setInterval(() => {
    if(x>3)x=1;
    imageContainerEI.style.transform=`translateX(-${500*(x-1)}px)`;
    x++;
}, 2000);



