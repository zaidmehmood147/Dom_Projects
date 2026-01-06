

function checkNum() {
  var num = Number(document.getElementById("num").value);
 
   
  if(num === 0){
    alert("0 is Even but not Prime")
  }
  if (num<0) {
    alert("Negative number are not allowed")
  }

 if(num % 2 === 0){
  alert(num + " is a Even number")
   
 } else {
  alert(num + " is a Odd number")
 }
}


