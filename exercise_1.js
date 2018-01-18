//  determine if number is a prime number
function angkaPrima(angka) {
  // if angka is prime number, true. else, false.

  // if angka is 1 then true
  if (angka === 1){
    return false;
  } else {
    for (var divisor=2; divisor <= angka; divisor+=1){
      // if the only divisor is equal to angka then true
      if (angka == divisor){
        return true;
      } else {
        // if any other divisor possiblities is a clean division, false
        if ((angka % divisor) === 0){
          return false;
        }
      }
    }
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
