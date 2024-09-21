//Creating element/tag
var ele=document.createElement("h1");
//creating text node
var txt=document.createTextNode("Nazmus-Sakib");
//find element and edit
document.getElementsByTagName("p")[0].innerHTML="nazmus-sakib";
//push into element it value
ele.appendChild(txt);
//find div in which something will be added
let name=document.getElementsByClassName("mydiv")[0];
//element added into desired div
name.appendChild(ele);

//found element
var rmv=document.getElementsByTagName("p")[0];
//removing element
name.removeChild(rmv);



//Creating element/tag
var elem=document.createElement("h1");
//creating text node
var text=document.createTextNode("Nazmus-Sakib");
//find element and edit
elem.appendChild(text);
var position=document.getElementsByTagName("h1")[0];
name.insertBefore(elem,position);


