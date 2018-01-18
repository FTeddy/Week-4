// Logic Challenge - Ubah Huruf

// store the output as variable 'output' set as ''
// loop through kata to process each letter
    // add a character with the char code of (current word at index) + 1
// return the output


function ubahHuruf(kata) {


  var output = '';

  for (var index = 0; index < kata.length; index++){
    output += String.fromCharCode(kata.charCodeAt(index)+1);
  }

  return output;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
