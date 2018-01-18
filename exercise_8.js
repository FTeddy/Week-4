/*
set variable kalimatARR as kalimat split into an array
loop
  if the letter at index is > '9' (all letters are higher value than number as a string, uppercase or not)
    then if the letter is < letter(lowercased)
      then replace letter with letter(lowercased) (as array)
    else replace the letter with letter(uppercased)

return kalimat
*/

function tukarBesarKecil(kalimat) {
  var kalimatARR = kalimat.split('');
  for (var index=0; index < kalimat.length; index++){
    if (kalimat.charAt(index) > '9'){
      if (kalimat.charAt(index) < kalimat.charAt(index).toLowerCase()){
        kalimatARR.splice(index, 1, kalimat.charAt(index).toLowerCase());
      } else {
        kalimatARR.splice(index, 1, kalimat.charAt(index).toUpperCase());
      }
    }
  }
  return kalimatARR.join('');
}



// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
