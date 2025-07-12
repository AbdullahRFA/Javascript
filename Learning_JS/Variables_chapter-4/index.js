let item = 0
function update_count(){
    let result=document.querySelector('#count')
    result.innerHTML=item
}

function increament_by_1(){
    item += 1;
    update_count()
}

function decreament_by_1(){
    if (item>=1){
        item -= 1;
        update_count()

    }
}

function increament_by_2(){
    item += 2
    update_count()
}

