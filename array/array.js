// var number=parseInt(prompt("How many name do you want to input : "));
// var names=new Array(number);
// for(var i=0;i<number;i++)
// {
//     names[i]=prompt("Name "+(i+1)+" : ");
// }
// for(var i=0;i<number;i++)
// {
//     document.write(names[i]+"<br>");
// }
// names.push("Abdullah");//insert at the last
// console.log(names);
// names.pop();//remove from last
// console.log(names);

// var ar1=["Rafiya","Akter"];
// var ara=["Juthi","Tahmina"];
// document.write(ar1+"<br>");
// document.write(ara+"<br>");
// document.write(ara.concat(ar1)+"<br>");
// ara.shift();//oposit of pop
// document.write(ara+"<br>");
// ara.unshift("Juthi");//oposit of push
// document.write(ara+"<br>");

// ara.splice(2,0,"Abdullah","Nazmus");
// document.write(ara+"<br>");
// ara.splice(2,1,"sakib");//splice(index,koita-item-delete-korbo,ki ki add korbo)
// document.write(ara+"<br>");

// var khan=ara.slice(1);
// document.write(khan+"<br>");

var ara=[1,4,2,8,4,7];
document.write(ara+"<br>");
// ara.sort();
// document.write(ara+"<br>");
// ara.reverse();
// document.write (ara+"<br>");
function heightscore(ara){
    ara.sort();
    return ara[ara.length-1];
}
document.write("HeightCore : "+heightscore(ara));



