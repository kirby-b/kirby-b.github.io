function calculate(){
    var numOne = parseInt(document.getElementsByClassName("numOne")[0].value);
    var numTwo = parseInt(document.getElementsByClassName("numTwo")[0].value);
    if(document.getElementsByClassName("sign")[0].value === "+"){
        addFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign")[0].value === "-"){
        subtractFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign")[0].value === "/"){
        divideFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign")[0].value === "*"){
        multiplyFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign")[0].value === "%"){
        moduloFunc(numOne, numTwo);
    }
    else if(document.getElementsByClassName("sign")[0].value === "^"){
        powerFunc(numOne, numTwo);
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
function powerFunc(one, two){
    var result = one ** two;
    document.getElementById("result").innerHTML = result;
}