const caesar = function(input, magnitude) {
  let enciphered = '';
  for(let i=0; i<input.length; i++){
    currentCharCode = input.charCodeAt(i);
    shiftedChar = '';
    if (currentCharCode >= 97 && currentCharCode <= 122){ //lowercase
      let shiftedCharCode = (((((currentCharCode + magnitude - 97) % 26) + 26) % 26) + 97);
      shiftedChar = String.fromCharCode(shiftedCharCode);
    } else if (currentCharCode >= 65 && currentCharCode <= 90) { //uppercase
      let shiftedCharCode =  (((((currentCharCode + magnitude - 65) % 26) + 26) % 26) + 65);
      shiftedChar = String.fromCharCode(shiftedCharCode);
    } else {
      shiftedChar = String.fromCharCode(currentCharCode);
    }
    enciphered += shiftedChar;
  }
  return enciphered;
}

module.exports = caesar
