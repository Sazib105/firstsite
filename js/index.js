const contEI=document.querySelector(".container");
const paraEI=document.querySelector(".para");
const navEI=document.querySelector(".nav");
const popUpBoxEI=document.querySelector(".popUpBox");
const iconEI=document.querySelector(".icon");
const popBtnEI=document.querySelector(".popBtn");
const bodyEI=document.querySelector("body")


//for sticky navigation
window.addEventListener("scroll",()=>{
    console.log(paraEI.offsetTop);
    console.log(window.scrollY);
    console.log(navEI.offsetHeight);

   if(paraEI.offsetTop < window.scrollY+navEI.offsetHeight){
     navEI.classList.add("active");
   }
   else{
     navEI.classList.remove("active")
   }
})


// for pop up box
popBtnEI.addEventListener("click",()=>{
  contEI.classList.add("bgBlur");
  popUpBoxEI.classList.remove("unvisible");
  bodyEI.style.position="fixed";
})

iconEI.addEventListener("click",()=>{
  contEI.classList.remove("bgBlur");
  popUpBoxEI.classList.add("unvisible");
  bodyEI.style.position="unset";
})

const  textEffectEI=document.querySelector(".textEffect");

const career=["YouTuber","Freelancer","Programmar","Instructor"];

let careerIndex=0;
let index=0;

updateCareer();

function updateCareer(){
  index++;
  textEffectEI.innerHTML=` <h2> I am ${career[careerIndex].slice(0,1)=='I'? 'an':'a'} <i>${career[careerIndex].slice(0,index)}</i></h2>`;

  if(index>career[careerIndex].length){
    index=0;
    careerIndex++;
  }
  if(careerIndex==career.length)careerIndex=0;
  setTimeout(updateCareer, 400);
  
}
