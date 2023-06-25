var result = "";
var passwordParts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&?";
const partsArray = passwordParts.split("");
function passgen(){
    /*Make it generate a 12 character password that contains random letters, numbers, and characters
    Pseudocode:
    call get parts
    check to make sure there are no immediate repeats
    make sure it is at least 1/3 letters, 1/3 numbers, and 1/3 special characters
    */
    document.getElementById("result").innerHTML = result;
}
function getparts(){
    var i = 0;
    while (i < 12){
        /*grab a character from a split string/list
        add it to a string*/
    }
}