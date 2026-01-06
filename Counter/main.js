var counter = 0;
var countingnum = document.getElementById("countingnum");

function plus(){
    counter = counter + 1;
    countingnum.innerText = counter; 
}

function minus() {
    counter = counter - 1;
    countingnum.innerText = counter  ;

}

function refresh( ) {
    counter = counter * 0;
    countingnum.innerText = counter ;
}
//
