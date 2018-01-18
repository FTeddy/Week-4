// greatest common divisor
function fpb(angka1, angka2) {
  // greatest common divisor, do a reverse count from the smaller
  // loop and compare both modulus samples
  // if both are 0, then return divisor
  // if not, go to next loop cycle until 1
  var sortARR = [angka1, angka2];
  sortARR.sort(function(val1,val2){return val1>val2});

  for (var divisor=sortARR[0]; divisor>=1; divisor-=1){
    if((angka1 % divisor) === 0 && (angka2 % divisor) === 0){
      return divisor;
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
