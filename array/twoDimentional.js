// Get the number of rows and columns for the 2D array
let rows = parseInt(prompt("Enter the number of rows:"));
let cols = parseInt(prompt("Enter the number of columns:"));

// Initialize the 2D array
// let arr = [
//     ['Abdullah', 70],
   
//      ['Nazmus', 90],
  
//     ['sakib', 100]
// ];
let arr=[];
// Loop through rows
for (let i = 0; i < rows; i++) {
  arr[i] = []; // Initialize each row as an empty array
  // Loop through columns
  for (let j = 0; j < cols; j++) {
    arr[i][j] = prompt(`Enter value for element [${i}][${j}]:`);
  }
}
for (let j = 0; j < cols; j++) {
    arr[j][1] =parseInt(arr[j][1]) ;
  }

// Output the 2D array
console.log(arr);

function highestScorer(arr){
    var h_score=arr[0][1];
    var h_names=arr[0][0];
    for(var i=1;i<rows;i++)
    {
        // console.log(i);
        if(h_score<arr[i][1]){
            h_score=arr[i][1];
            h_names=arr[i][0];
        }
    }
    return h_names;
}

var names= highestScorer(arr);
console.log("Winner : "+names);