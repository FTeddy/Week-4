/*
## determining the list of the factor digits ##
create a digit variable, set as []
loop divisor from 1 to 'angka' with increment of 1
  if the modulus of angka and divisor is 0 then
    combine the divisor and division result as a string into the digit

## finding lowest value of the length ##
create digitLength variable, set as the length of starting value of digit
loop index from 0 to digit length - 1 with increment of 1
  if the string length of index+1 value is smaller than digitLength, then
    set digitLength as digit index+1 value
return the digitLength

*/
function digitPerkalianMinimum(angka) {
  var digit =[];
  for (var divisor=1; divisor<=angka; divisor++){
    if ((angka % divisor) === 0){
      digit.push((String(divisor) + String(angka/divisor)));
    }
  }
  // console.log(digit);

  var digitLength = digit[0].length;
  for (var index=0; index<digit.length-1; index++){
    if (digit[index+1].length < digitLength){
      digitLength = digit[index+1].length;
    }
  }
  // console.log(digitLength);
  return digitLength;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
