var tr = document.querySelector(".para");
var trb = document.querySelector(".AddStyle");
var trb2 = document.querySelector(".RemoveStyle");

function addstyle() {
  tr.classList.add("parag");
  trb.classList.add("AddStylee");
  trb2.classList.add("RemoveStylee");
}
function removestyle() {
  tr.classList.remove("parag");
  trb.classList.remove("AddStylee");
  trb2.classList.remove("RemoveStylee");
}
