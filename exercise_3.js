//  Logic Challenge - Mencari Mean
function cariMean(arr) {
  // create a mean variable
  // create a total variable, is a total of all athe array items
  // divide total with the array length to create mean
  // round down the mean

  var mean;
  var total = 0;

  for (var index1 = 0; index1 <= arr.length-1; index1 += 1){
    total += arr[index1];
  }
  // console.log(total);
  mean = Math.round(total / (arr.length));
  return mean;
}
// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
