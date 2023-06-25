var result;
var passwordParts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&?";
const partsArray = passwordParts.split("");
function passgen(){
    result = "";
    /*Make it generate a 12 character password that contains random letters, numbers, and characters
    call getparts()*/
    var i = 0;
    while (i < result.length){
        /*check to make sure there are no immediate repeats
        make sure it is at least 1/3 letters, 1/3 numbers, and 1/3 special characters */
        const letterPattern = /[a-z]/i;
        const numPattern = /[0-9]/i;
        if (letterPattern.test(result[i]) == True || numPattern.test(result[i]) == True){
            if(result[i] == result[i + 1]){
                passgen()
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}
function getparts(){
    var i = 0;
    var selected = "";
    while (i < 12){
        /*grab a character from a split string/list
        add it to a string*/
        selected = partsArray[Math.floor(Math.random() * passwordParts.length)];
        result += selected;
    }
}