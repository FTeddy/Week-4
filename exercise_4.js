function cariMedian(arr) {
  // you can only write your code here!
  // find the middle index(es). store as indexarr
  // if arr length modulus 2 is not 0 then round down(arr length/2)
  //    else arr length/2-1 and arr length/2 is the indexes
  // if index array length is > 1 then (array contents[on indexarr 0]+array contents[on index arr 1])/2, return the result
  //    else display array contents[on indexarr 0]

  var indexARR =[];
  // console.log(arr.length);
  if ((arr.length%2) !== 0){
    indexARR.push(Math.floor((arr.length/2)));
  } else {
    indexARR.push((arr.length/2)-1);
    indexARR.push((arr.length/2));
  }
  // console.log(indexARR);
  if (indexARR.length > 1){
    return (arr[indexARR[0]]+arr[indexARR[1]])/2;
  } else {
    return arr[indexARR[0]];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
