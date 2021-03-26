let a = document.getElementById("option-a");
let b = document.getElementById("option-b");
let c = document.getElementById("option-c");
let d = document.getElementById("option-d");

function startTest() {
}


function exitTest() {
  setTimeout(() => {
    let leave= confirm("Are you sure you want to leave?");
  }, 2000); //wait 2 seconds
  if(leave)
  {
    //yes leave this page
  }
}


document.getElementById("start").addEventListener("click", teststart());
document.getElementById("settings").addEventListener("click", popup());
document.getElementById("exit").addEventListener("click", exit());







