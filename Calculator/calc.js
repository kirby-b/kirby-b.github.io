function calculate(){
    var numOne = parseInt(document.getElementsByClassName("numOne").value);
    var numTwo = parseInt(document.getElementsByClassName("numTwo").value);
    if(document.getElementsByClassName("sign") == "+"){
        addFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign").value == "-"){
        subtractFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign").value == "/"){
        divideFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign").value == "*"){
        multiplyFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign").value == "%"){
        moduloFunc(numOne, numTwo);
    }
}
function addFunc(one, two){
    var result = one + two;
    document.getElementById("result").innerHTML = result;
}
function subtractFunc(one, two){
    var result = one - two;
    document.getElementById("result").innerHTML = result;
}
function divideFunc(one, two){
    var result = one / two;
    document.getElementById("result").innerHTML = result;
}
function multiplyFunc(one, two){
    var result = one * two;
    document.getElementById("result").innerHTML = result;
}
function moduloFunc(one, two){
    var result = one % two;
    document.getElementById("result").innerHTML = result;
}