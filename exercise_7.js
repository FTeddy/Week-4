/*

create a variable arrString

split the string with no parameters and store in arrString
sort arrString alphabetically
join arrString

return arrString


*/

function urutkanAbjad(str) {
  var arrString;

  arrString = str.split('').sort().join('');

  return arrString;
}

// function urutkanAbjad(str) {
//   var arrString = str;
//
//   for (var index = 0; index < str.length; index++){
//     for (var iteration = 0; iteration < str.length; iteration++){
//       if (index !== iteration){ // if not on the same position
//         if (str.charAt(index) > str.charAt(iteration)){
//
//         }
//       }
//     }
//   }
//
//
//   return arrString;
// }


// TEST CASES
//                        ehllo
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
