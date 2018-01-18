// Logic Challenge - Tambah Dash / Strip

// add a variable 'output' to contain the result. set as ''
// loop through str to inspect all characters
  // if character at index is even, then add that character in output
  // else, if odd, check for next number if it is odd as well
    // then add char at index with '-', then add the result to output
    //else, add char at index to output
// return the output

function tambahDash(str) {

  var output = '';
  for (var index=0; index<str.length; index++){
    if ( Number(str.charAt(index)) % 2 === 0 ){
      output += str.charAt(index);
    } else {
        if ( Number(str.charAt(index+1)) % 2 !== 0 ){
          output += (str.charAt(index)+'-');
        } else {
            output += (str.charAt(index));
        }
    }
  }
  return output;

}

// TEST CASES
console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'


// function tambahDash(str) {
//   // create a variable output as an array to store result
//   var output = [];
//
//
//
//   // loop through string to find odd number
//   for (var index=0; index<str.length; index++){
//
//     // console.log(index+' index');
//
//     // if oddChainIndex is completed (chainComplete=true), continue until after oddChainIndex
//     if (chainComplete === true && index < oddChainIndex){
//       continue;
//     }
//
//     // set variable chainComplete to false, to determine if this for oddChainIndex is completed or not
//     var chainComplete = false;
//
//
//     // if the character on index is an even number (turn it to number), then put into output
//     if ( Number(str.charAt(index)) % 2 === 0 || Number(str.charAt(index)) === 0 ){
//       output.push(str.charAt(index));
//     } else {
//       // if the character on index is a odd number (turn it to number), then
//       if ( Number(str.charAt(index)) % 2 !== 0 ){
//         // loop from index+1 to search if next characters are odd number as well
//         for ( var oddChainIndex=index+1; oddChainIndex<str.length; oddChainIndex++){
//           // if the next number is not odd , add the solo odd number then stop the chain search
//           if ( Number(str.charAt(oddChainIndex)) % 2 === 0 ){
//             output.push(str.charAt(index));
//             break;
//           }
//         }
//         // if the oddChainIndex has passed first iteration(index+1)
//         if (oddChainIndex > index+1){
//           // now characters from index to oddChainIndex are split from str and split with -, and put inside output
//           output.push( str.substr(index, oddChainIndex).split('').join('-') );
//
//           // chain search is complete , set chainComplete as true
//           chainComplete = true;
//         }
//       }
//     }
//
//   }
//   // return the output as string, with no separators
//   return output;
// }
