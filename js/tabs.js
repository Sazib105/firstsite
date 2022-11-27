const btnConteinerEI=document.querySelectorAll(".button");



btnConteinerEI.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
       
        const id=e.target.dataset.id;
        console.log(id);
        btnConteinerEI.forEach((btn1)=>{
            btn1.classList.remove("live");
        })
        e.target.classList.add("live");

        const contentIdEI=document.getElementById(id);
        const contentClassEI=document.querySelectorAll(".content")
        contentClassEI.forEach((cnt)=>{
            cnt.classList.remove("live");
        })
        contentIdEI.classList.add("live");
    })
    
})