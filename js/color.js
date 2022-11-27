const colorContainer=document.querySelector(".colorContainer");

for (let index = 0; index < 30; index++) {
    const element = document.createElement("div");
    element.classList.add("innerColorContainer");

    colorContainer.appendChild(element);

    const colorCode=randomNumber();
    
    element.style.backgroundColor="#"+colorCode;
    element.innerHTML="#"+colorCode;
    
}




function randomNumber(){
    const chars="0123456789abcdef";
    let colors="";
    for (let index = 0; index < 6; index++) {
        const rand= Math.floor(Math.random()*chars.length);
        console.log(rand);
        colors +=chars.substring(rand,rand+1);
        console.log(colors);
        
    }
    return colors;
}