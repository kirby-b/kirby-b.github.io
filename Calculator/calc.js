var numOne = parseInt(document.getElementsByClassName("numOne"));
var numTwo = parseInt(document.getElementsByClassName("numTwo"));

function calculate(){
    if(document.getElementsByClassName("sign") == "+"){
        addFunc();
    }
    else if(document.getElementsByClassName("sign") == "-"){
        subtractFunc();
    }
    else if(document.getElementsByClassName("sign") == "/"){
        divideFunc();
    }
    else if(document.getElementsByClassName("sign") == "*"){
        multiplyFunc();
    }
    else if(document.getElementsByClassName("sign") == "%"){
        moduloFunc();
    }
}
function addFunc(){
    var result = numOne + numTwo;
    document.getElementById('result').innerHTML = result;
}
function subtractFunc(){
    var result = numOne - numTwo;
    document.getElementById('result').innerHTML = result;
}
function divideFunc(){
    var result = numOne / numTwo;
    document.getElementById('result').innerHTML = result;
}
function multiplyFunc(){
    var result = numOne * numTwo;
    document.getElementById('result').innerHTML = result;
}
function moduloFunc(){
    var result = numOne % numTwo;
    document.getElementById('result').innerHTML = result;
}