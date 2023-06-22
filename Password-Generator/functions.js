function passgen(){
    var result = "";
    /*Make it generate a 12 character password that contains random letters, numbers, and characters
    Pseudocode:
    for 12 times{
        grab a character from a split string/list
        add it to a string
        check to make sure there are no immediate repeats
        make sure it contains at least 3 letters, 3 numbers, and 3 special characters
    }*/
    document.getElementById("result").innerHTML = result;
}