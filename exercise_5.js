//  Mencari Modus
//
// find the correct modus identity
// how many times the appear ie, frequency
// set variable modusID as 0, frequency as 0
// loop from index 0 to arr length with increment of 1
//    loop from index2 to arr length with increment of 1
//      check if the value not on the same index position is the same or not
//        if true, then increase the frequency.
//        modusID and frequencyHighest are interlinked, to determine modusID requires frequencyHighest
//        if the frequency is higher than frequencyHighest, then frequencyHighest is set to frequency
//        and set modusID as the current value at index1, as it has the highest frequency count
// if the highest frequency is 0 then return -1
// if the frequencyHighest is equal to arr length then return -1
// return the modusID

function cariModus(arr) {
  // you can only write your code here!\
  var modusID = 0;
  var frequencyHighest = 0;
  //  loop from index1 0 to arr length and increment with 1
  for (var index1 = 0; index1 < arr.length; index1++){
    var frequency = 1; // set the starting frequency of a data entry
    // loop from index2 0 to arr length and increment with 1
    for (var index2 = 1; index2 < arr.length; index2++){
      // check if the value not on the same index position is the same or not
      if (index1 !== index2 && arr[index1]===arr[index2]){
        // if true, then increase the frequency.
        frequency++;
        // modusID and frequencyHighest are interlinked, to determine modusID requires frequencyHighest
        // if the frequency is higher than frequencyHighest, then frequencyHighest is set to frequency
        // and set modusID as the current value at index1, as it has the highest frequency count
        if (frequency > frequencyHighest){
          frequencyHighest = frequency;
          modusID = arr[index1];
        }
      }
    }
  }
  // if the highest frequency is 0 then return -1
  if (frequencyHighest === 0){
    return -1;
  }
  // if the frequencyHighest is equal to arr length then return -1
  if (frequencyHighest === arr.length){
    return -1
  }
  return modusID;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
