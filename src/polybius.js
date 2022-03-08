// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
let letters = [
  {letter: "a", number: "11"},
  {letter: "b", number: "21"},
  {letter: "c", number: "31"},
  {letter: "d", number: "41"},
  {letter: "e", number: "51"},
  {letter: "f", number: "12"},
  {letter: "g", number: "22"},
  {letter: "h", number: "32"},
  {letter: "i/j", number: "42"},
  {letter: "k", number: "52"},
  {letter: "l", number: "13"},
  {letter: "m", number: "23"},
  {letter: "n", number: "33"},
  {letter: "o", number: "43"},
  {letter: "p", number: "53"},
  {letter: "q", number: "14"},
  {letter: "r", number: "24"},
  {letter: "s", number: "34"},
  {letter: "t", number: "44"},
  {letter: "u", number: "54"},
  {letter: "v", number: "15"},
  {letter: "w", number: "25"},
  {letter: "x", number: "35"},
  {letter: "y", number: "45"},
  {letter: "z", number: "55"},
]
  function polybius(input, encode = true) {
    let result = []

    if (encode){
      const lowerCase = input.toLowerCase()
      const text = lowerCase.split("")

      for (let i = 0; i < text.length; i++){
        for (let j = 0; j < letters.length; j++)
        if (letters[j].letter.includes(text[i])){
          result.push(letters[j].number)
        }
        if (text[i] === " "){
          result.push(text[i])
        }
        
      }
      return result.join("")
    }

    if (!encode){
      let testInput = input.replace(" ", "").length;
      if (testInput % 2 === 1) return   false;
      input.split()
      let newInput = [];
      let count = 2

      for (let i = 0; i < input.length; i++){
        if (input[i] === " "){
          newInput.push(input[i])
          count += 1
        };
        if (count % 2 === 0) {
          if ([i] % 2 === 0 || [i] === 0){
            newInput.push(input[i] + input[i + 1])
          }
        }
        if (count % 2 === 1){
          if ([i] % 2 === 1){
            newInput.push(input[i] + input[i + 1])
          }
        }
      }
      for (let i = 0; i < newInput.length; i++){
        if (newInput[i] === " "){
          result.push(newInput[i])
        }
        for (let j = 0; j < letters.length; j++){
          if (newInput[i] === letters[j].number){
            result.push(letters[j].letter)
          }
        }
        
      }

    return result.join("")
    }
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
