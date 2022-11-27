const hourGEI=document.getElementById("hr");
const minuteGEI=document.getElementById("min");
const secondGEI=document.getElementById("sec");
const ampmGEI=document.getElementById("ampm");




function updateClock(){
    let date= new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let ampm="AM"

    if(h>12){
        h-=12;
        ampm="PM";
    }
    if(h==0)h=12;


    hourGEI.innerHTML=h;
    minuteGEI.innerHTML=m;
    secondGEI.innerHTML=s;
    ampmGEI.innerHTML=ampm;

   
    setTimeout(()=>{
        updateClock();
    },1000)
}

var toDay=new Date();

var day= document.getElementById("day");
var month=document.getElementById("month");
var year=document.getElementById("year");


const btn=document.getElementById("button");



function agCalculate(a,b=0,c=0){
    const agDay=document.getElementById("agDay");
    const agMonth=document.getElementById("agMonth");
    const agYear=document.getElementById("agYear");

    var tx=parseInt(toDay.getDate());
    var ty=parseInt(toDay.getMonth())+1;
    var tz=parseInt(toDay.getFullYear());

    var x=parseInt(day.value);
    var y=parseInt(month.value);
    var z=parseInt(year.value);

    if(tx<x){
        tx+=30;
        ty--;
    }
    if(ty<y){
        ty+=12;
        tz--;
    }

    agDay.value=tx-x;
    agMonth.value=ty-y;
    agYear.value=tz-z;
}


btn.onclick=(()=>{

    agCalculate();

})







//for button

const btnGEI=document.getElementById("button");

btnGEI.addEventListener("mouseover",(e)=>{
    const y=(e.pageY-btnGEI.offsetTop);
    const x=(e.pageX-btnGEI.offsetLeft);

    btnGEI.style.setProperty("--xPos",x +"px");
    btnGEI.style.setProperty("--yPos",y + "px");
})

updateClock();
calculateAge();
