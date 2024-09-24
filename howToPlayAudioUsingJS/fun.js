let ln=document.querySelectorAll(".mybtn").length;

for(let i=0;i<ln;i++)
{
    document.querySelectorAll(".mybtn")[i].addEventListener("click",function(){

        var myvar=this.innerHTML;
        audioPlay(myvar);
        animationadd(myvar);
        
        
    });
}

function audioPlay(myvar){
    switch(myvar){
        case "A":
            var audio=new Audio("sounds/তুমি কি এখনো আমার ফোনের অপেক্ষায় থাকো II Tumi Ki Ekhono Amar Phone er Opekkhay  (1).mp4");
            audio.play();
            break;
        case "B":
            var audio=new Audio("sounds/তোমার স্মৃতি মেঘের ছোঁয়ায় II Tomar Smriti Megher Choyay II New Bangla Song (1).mp4");
            audio.play();
            break;
        case "C":
            var audio=new Audio("sounds/সেই চেনা পথ আবার মনে পড়ে যায় II Sei Chena Poth Abar Mone Pore Jay II New Bangl (1).mp4");
            audio.play();
            break;
    }
}

function animationadd(myvar){
    var anim=document.querySelector("."+myvar);
    anim.classList.add("style");

    setTimeout(function(){
        anim.classList.remove("style");
    },1000);
}

document.addEventListener("keypress",function(event){
 var txt=event.key;
document.querySelector("p").innerHTML+=" "+txt;
 audioPlay(txt);
 animationadd(txt);
});
