

const darkInputEI=document.querySelector(".darkInput");

const darkBody=document.querySelector("body");

const darkLabel=document.querySelector(".darkLabel");

console.log(darkInput.checked);


function updateBody(){
    if(darkInputEI.checked){
        darkBody.style.backgroundColor="black";
        darkBody.style.transition="0.5s";
    }
    else{
        darkBody.style.backgroundColor="white";
        darkBody.style.transition="0.5s";
    }
}

darkInputEI.addEventListener("input",()=>{
    updateBody();
})