let number=parseInt(prompt("How many times do you want to play: "));
let win=0,lost=0;
for(let i=0;i<number;i++){
    let guss_number=parseInt(prompt("Enter Number between 1 to 5 : "));
    let ran_number=Math.floor( Math.random()*5)+1;
    if(guss_number==ran_number){
        console.log("You Wow");
        win++;
    }else{
        console.log("You lost, Gussing Number was "+ran_number);
        lost++;
    }
}
document.write("You won "+win+" times <br>");
document.write("You lose "+lost+" times <br>");