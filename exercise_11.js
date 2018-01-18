// Logic Challenge - Ubah Kapital

// trim kalimat for any possible errant ' ', store as a new variable 'output'.
// add a single ' ' to the beginning of output to determine first word
// separate the output as array
// loop through kalimat to find ' '
   // if the character at index is ' ' then the next character will be uppercased
// remove the first ' ', then join the output.
// return output

function ubahKapital(kalimat) {
   var output = kalimat.trim();
   output = ' ' + output
   output = output.split('');for (var index = 0; index < output.length; index++){
     if (output[index] === ' '){
       output.splice(index+1, 1, output[index+1].toUpperCase());
     }
   }
   output.splice(0,1);
   output = output.join('');
   return output;
}

// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun
