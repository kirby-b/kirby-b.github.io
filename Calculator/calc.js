function calculate(){
    var numOne = parseInt(document.getElementsByClassName("numOne"));
    var numTwo = parseInt(document.getElementsByClassName("numTwo"));
    if(document.getElementsByClassName("sign") == "+"){
        addFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign") == "-"){
        subtractFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign") == "/"){
        divideFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign") == "*"){
        multiplyFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign") == "%"){
        moduloFunc(numOne, numTwo);
    }
}
function addFunc(one, two){
    var result = one + two;
    document.getElementById('result').innerHTML = result;
}
function subtractFunc(one, two){
    var result = one - two;
    document.getElementById('result').innerHTML = result;
}
function divideFunc(one, two){
    var result = one / two;
    document.getElementById('result').innerHTML = result;
}
function multiplyFunc(one, two){
    var result = one * two;
    document.getElementById('result').innerHTML = result;
}
function moduloFunc(one, two){
    var result = one % two;
    document.getElementById('result').innerHTML = result;
}