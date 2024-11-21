var menu = document.querySelector("#nav h5")
var full = document.querySelector("#full")
var flag =0
menu.addEventListener("click",function(){
    if(flag==0){    
        full.style.right=0
        menu.innerHTML=`<i class="ri-close-large-line"></i>`
        flag=1
    }else{
         full.style.right='-50%'
        menu.innerHTML=`<i class="ri-menu-3-line"></i>`
        flag=0
    }
})