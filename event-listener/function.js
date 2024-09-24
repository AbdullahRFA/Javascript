// document.querySelector(".btn").addEventListener("click",myfunction);

// function myfunction(){
//     alert("Hello");
// }

// using annonimous function
document.querySelector(".btn").addEventListener("click",function(){
    alert("Hello");
});

var myvar=document.querySelector(".heading");

myvar.addEventListener("mouseover",function(){
    myvar.classList.add("mystyle");
});


myvar.addEventListener("mouseout",function(){
    myvar.classList.remove("mystyle");
});


let val=document.querySelectorAll(".mybtn").length;
for(var i=0;i<val;i++)
{
    document.querySelectorAll(".mybtn")[i].addEventListener("click",function(){
        var txt=this.innerHTML;
        document.querySelector("h2").innerHTML=txt+" is clicked";
    });

}
