var idone=document.getElementById("product-search-one")
var product=document.querySelector(".product-contain")
var eachproduct=product.querySelectorAll("div")


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
