
var phtotArray=["https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg","https://img.freepik.com/free-photo/beautiful-butterfly-nature_23-2150765753.jpg","https://static.vecteezy.com/system/resources/previews/032/257/185/non_2x/wallpapers-for-the-beautiful-peacock-wallpaper-ai-generated-free-photo.jpg","https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/awesome-solitude-bess-hamiti.jpg","https://t4.ftcdn.net/jpg/07/41/71/93/360_F_741719394_C9BP3YbiXSJ7WspSDLtKdYxZKKWlf0Jz.jpg","https://wallpapers.com/images/featured/beautiful-girls-pictures-e8ukjnci8zrlm0i6.jpg","https://t4.ftcdn.net/jpg/07/23/14/93/360_F_723149335_tA0Fo8zefrHzYlSgXRMYHmBQk7CuWrRd.jpg","https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg","https://st2.depositphotos.com/10894906/43112/i/450/depositphotos_431122532-stock-photo-butterflies-hands-black-background-rays.jpg","https://static.vecteezy.com/system/resources/previews/002/465/675/non_2x/girl-frees-the-butterfly-from-the-moment-photo.jpg","https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg","https://static.vecteezy.com/system/resources/thumbnails/017/756/539/small_2x/valentine-s-day-sale-poster-with-cute-heart-and-valentines-day-gift-box-on-pink-background-promotion-and-shopping-template-for-love-and-valentine-s-day-concept-vector.jpg","img/pp.jpeg","img/Screenshot 2024-09-09 at 12.58.41 PM.png"];
var tergateImage=document.querySelector("img");
var count=0;

function previous(){
    count--;
    if(count<0){
        count=2;
    }
    tergateImage.src=phtotArray[count];
}
function next(){
    count++;
    if(count==phtotArray.length){
        count=0;
    }
    tergateImage.src=phtotArray[count];
}