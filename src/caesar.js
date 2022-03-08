// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
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

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25 || shift === 0){         return false;
                                                           }
    const lowerCase = input.toLowerCase();
    const text = lowerCase.split("");
    let newLetter;
    let newInput = [];
    let result = [];
    
    if (encode){
      for (let i = 0; i < text.length; i ++){
        for (let j = 0; j < letters.length; j++)
          if (text[i] === letters[j].letter){
          newLetter = letters[j].number + shift
          };
          if (newLetter > 25){
            newLetter = newLetter - 26
          };
          if (newLetter < 0){
           newLetter += 26
          };
        if (text[i] === " " || text[i] === "."){
            newLetter = text[i]
          }
          
        newInput.push(newLetter)
      };
      for (let i = 0; i < newInput.length; i ++){
        for (let j = 0; j < letters.length; j++)
          if (newInput[i] === letters[j].number){
            result.push(letters[j].letter)
          };
          if(newInput[i] === " " || newInput[i] === "."){
            result.push(newInput[i])
          }
      };
        return result.join("")
    };

    if(!encode){
      for (let i = 0; i < text.length; i ++){
        for (let j = 0; j < letters.length; j++)
          if (text[i] === letters[j].letter){
          newLetter = letters[j].number - shift
          };
          if (newLetter > 25){
            newLetter = newLetter - 26
          };
          if (newLetter < 0){
           newLetter += 26
          };
        if (text[i] === " " || text[i] === "."){
            newLetter = text[i]
          }
          
        newInput.push(newLetter)
      };
      for (let i = 0; i < newInput.length; i ++){
        for (let j = 0; j < letters.length; j++)
          if (newInput[i] === letters[j].number){
            result.push(letters[j].letter)
          };
        if(newInput[i] === " " || newInput[i] === "."){
            result.push(newInput[i])
          }
      };
        return result.join("")
    };
  };

return {
  caesar
};
})();

module.exports = { caesar: caesarModule.caesar };
