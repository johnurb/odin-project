const reverseString = function(input_string) {
    if (input_string.length == 0) return '';
    reversed_string = '';
    for (let i=input_string.length - 1; i >= 0; i--){
        reversed_string += input_string[i];
    }
    return reversed_string;
}

module.exports = reverseString
