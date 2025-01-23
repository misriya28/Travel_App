document.getElementById("nav").addEventListener("click",()=>{
    document.getElementById("rooms_area").scrollIntoView({behavior:"smooth"})
})

document.getElementById("nav1").addEventListener("click",()=>{
    document.getElementById("premium1").scrollIntoView({behavior:"smooth"})
})

document.getElementById("nav2").addEventListener("click",()=>{
    document.getElementById("end_box").scrollIntoView({behavior:"smooth"})
})

document.getElementById("nav3").addEventListener("click",()=>{
    document.getElementById("foot_detail").scrollIntoView({behavior:"smooth"})
})

// -----------------------------------------------------------------------------------

window.addEventListener("scroll",()=>{
    console.log(window.scrollY);

   if(window.scrollY<=2700){
    document.getElementById("bottom").style.display="flex"
   }

   else{
    document.getElementById("bottom").style.display="none"
   }
   if(window.scrollY>=800){
    document.getElementById("top").style.display="flex"
   }

   else{
    document.getElementById("top").style.display="none"
   }
    
})


document.getElementById("bottom").addEventListener("click",()=>{
    window.scrollTo({top: document.body.scrollHeight,behavior: "smooth"})

})

   document.getElementById("top").addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"})
   })
   


// ----------------------------------------------------------------------------------------


// window.addEventListener("scroll",()=>{
//    console.log(window.scrollY);

//    if(window.scrollY>=3000){
//     document.getElementById("top").style.display="flex"
//    }

//    else{
//     document.getElementById("top").style.display="none"
//    }

//    document.getElementById("top").addEventListener("click",()=>{
//     window.scrollTo({bottom: document.body.scrollHeight,behavior:"smooth"})
//    })
   
// })



