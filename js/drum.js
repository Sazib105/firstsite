
const drum=["crash","kick","snare","tom"];
const drumContainer=document.querySelector(".drumContainer");

drum.forEach(i=>{
    const element=document.createElement("button");
    element.classList.add("drumBtn")
    element.innerHTML=i;
    element.style.backgroundImage="url(image/" + i + ".jpg)";

    const audio=document.createElement("audio");

    audio.src="music/"+i+".mp3";


    drumContainer.appendChild(element);
    drumContainer.appendChild(audio);

    element.addEventListener("click",()=>{
        audio.play();
    },10)

    window.addEventListener("keydown",(e)=>{ 
        const ch=i.slice(0,1);
        console.log(e.key);
        if(e.key==ch){
            element.click();
        }
    })

})


