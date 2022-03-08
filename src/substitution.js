// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
letters = [
  {letter: "a", number: 0},
    {letter: "b", number: 1},
    {letter: "c", number: 2},
    {letter: "d", number: 3},
    {letter: "e", number: 4},
    {letter: "f", number: 5},
    {letter: "g", number: 6},
    {letter: "h", number: 7},
    {letter: "i", number: 8},
    {letter: "j", number: 9},
    {letter: "k", number: 10},
    {letter: "l", number: 11},
    {letter: "m", number: 12},
    {letter: "n", number: 13},
    {letter: "o", number: 14},
    {letter: "p", number: 15},
    {letter: "q", number: 16},
    {letter: "r", number: 17},
    {letter: "s", number: 18},
    {letter: "t", number: 19},
    {letter: "u", number: 20},
    {letter: "v", number: 21},
    {letter: "w", number: 22},
    {letter: "x", number: 23},
    {letter: "y", number: 24},
    {letter: "z", number: 25}
]
function hasDuplicates(alphabet) {
  let valuesSoFar = Object.create(null);
  for (let i = 0; i < alphabet.length; ++i) {
      let value = alphabet[i];
      if (value in valuesSoFar) {
          return true;
      }
      valuesSoFar[value] = true;
  }
  return false;
}
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26 || hasDuplicates(alphabet) === true) return false;
    let code = [];
    let result = [];

    for (let i = 0; i < alphabet.length; i++){
      code.push({letter: alphabet[i], number: i})
    };

    if(encode){
      for (let i = 0; i < input.length; i++){
        if (input[i] === " "){
          result.push(" ")
        };
        for (let j = 0; j < letters.length; j++){
          for (let k = 0; k < code.length; k++)
            if (input[i] === letters[j].letter && letters[j].number === code[k].number){
             result.push(code[k].letter)
           };
        };
      };
      return result.join("");
    };

    if(!encode){
      for (let i = 0; i < input.length; i++){
        if (input[i] === " ") {
          result.push(" ")
        };
        for (let j = 0; j < code.length; j++){
          for (let k = 0; k < letters.length; k++){
            if (input[i] === code[j].letter && code[j].number === letters[k].number){
              result.push(letters[k].letter)
            };
          };
        };
      };
      return result.join("");
    };
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
