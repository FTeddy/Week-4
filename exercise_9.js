
// Logic Challenge - Check AB
// store result variable with default boolean as false
// loop through the string to look for 'a'
    // if the character at the current index is 'a' then
        // if the character at index+4 or index-4 is 'b' then set result to true and return result

// if match is found then return result


function checkAB(num) {
  var result = false;
  for ( var index = 0; index < num.length; index++ ){
    if (num.charAt(index) === 'a'){
      if (num.charAt(index+4) === 'b' || num.charAt(index-4) === 'b'){
        result = true;
        return result;
      }
    }
  }

  return result;

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
