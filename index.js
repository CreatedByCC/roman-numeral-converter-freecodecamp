function convertToRoman(num) {
    const numerals = [
     ["M", 1000],
     ["CM", 900],
     ["D", 500],
     ["CD", 400],
     ["C", 100],
     ["XC", 90],
     ["L", 50],
     ["XL", 40],
     ["X", 10],
     ["IX", 9],
     ["V", 5],
     ["IV", 4],
     ["I", 1]
    ];
    
    let result = [];
  
    numerals.map(numeral => {   // loop over each line of the numerals arr
      let value = numeral[1];   // "M"
      let roman = numeral[0];   // 1000

      while (num >= value) {    // while the num provided is more or equal to the value in the numerals arr the roman letter will be pushed to the result arr
        result.push(roman);
        num -= value;           // then we deduct the value and the loops starts again until the num is less, the loop moves onto the next line in the numerals arr
      } 
    });
  
    return result.join("");     // join all the numerals to form the response
  }
  
  convertToRoman(36);