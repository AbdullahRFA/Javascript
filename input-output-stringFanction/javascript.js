// var txt=prompt("Enter your name");
var txt="Abdullah", txt1=" Nazmus",txt2="Sakib";

document.write("Your name is "+txt+"<br>")
document.write("Total Character are "+txt.length+"<br>");
document.write("3 number character is "+txt.charAt(2));

document.write("<br>Your Name in Upppercase : "+txt.toUpperCase());
document.write("<br>Your Name in Lowercase : "+txt.toLowerCase());
document.write("<br>Concate txt and txt1 : "+txt.concat(txt1));
document.write("<br>slice first three charecter of txt : "+txt.slice(0,3));