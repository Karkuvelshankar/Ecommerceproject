var toggle=document.querySelector(".nav-toggle")
var sidenav=document.querySelector(".sidenav")

toggle.addEventListener("click",function(){
    sidenav.style.left="0"

 toggle.addEventListener("dblclick",function(){
    sidenav.style.left="-60%"
 })   
})

var xmark=document.querySelector(".xmark")
xmark.addEventListener("click",function(){
    sidenav.style.left="-60%"
})



var idone=document.getElementById("product-search-one")
var product=document.querySelector(".product-contain")
var eachproduct=product.querySelectorAll("p")


idone.addEventListener("keyup",function(event){
 var entertext=event.target.value.toUpperCase()
for(var i=0;i<eachproduct.length;i++){
    if(eachproduct[i].textContent.toUpperCase().indexOf(entertext)<0){
     eachproduct[i].style.display="none"
    }
    else{
        eachproduct[i].style.display="block"
    }
}

})