const palindromes = function(input) {
  if (input===''){
    return true;
  }

  const cleanedInput = Array.from(input.toLowerCase()).filter(char => (char >= 'a' && char <= 'z')).join('');

  let reversedInput = ''
  for(let i=cleanedInput.length-1; i >= 0; i--){
    reversedInput += cleanedInput[i];
  }

  return ((cleanedInput == reversedInput) ? true : false);
}

module.exports = palindromes
