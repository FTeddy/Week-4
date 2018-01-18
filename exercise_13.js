// Logic Challenge - Hitung Huruf





function hitungHuruf(kata) {
  var words = kata.split(' '); //split by words, into an array named 'words'
  var frequency;  // create a var frequency, to count occuring repeats
  var frequencyAccumulated = 0; // frequencyAccumulated is default to 0, to help accumulate occuring repeats from different letters
  var frequencyHighest = 0; // the highest occuring, accumulated repeats
  var currentLetter = null; // to determine the letter that is currently counting the frequency
  var identity; // create var identity, to determine the word where the current highest repeat occured


  // console.log(words);
  for (var index = 0; index < words.length; index++){ // loop through words
    // console.log('loop ' + index);
    frequency = 0; // reset frequency to 0 when moving to next word
    frequencyAccumulated = 0; // reset the accumulation at the start of the next word
    // pick the word, store as an array of letters, and sort it
    var wordSorted;
    wordSorted = words[index].split('');
    wordSorted.sort();
    // console.log(wordSorted);

    // from here, loop through the sorted word
    for (var wordIndex = 0; wordIndex < wordSorted.length; wordIndex++){
      // console.log(words[index][wordIndex]);

      // if wordSorted[wordIndex] === current letter, increment the frequency by 1
      if (wordSorted[wordIndex] === currentLetter){
        frequency += 1;
      } else { // not the same letter encountered then:
        // check if frequency is larger than 1 (has a duplicate), if yes add frequency to frequencyAccumulated
        if (frequency > 1){
          frequencyAccumulated += frequency;
        }

        // if frequency is still 0, then determine current letter as current letter
        currentLetter = wordSorted[wordIndex];
        // count the current letter into frequency as the starting value for current letter
        frequency = 1;
      }

    }
    // console.log(frequencyAccumulated);
    // console.log(words[index]);
    
    // if frequencyAccumulated is higher than 0 (has duplicates recorded)
    if (frequencyAccumulated > 0){
      // if frequencyHighest is smaller than frequencyAccumulated, then set frequencyHighest as frequencyAccumulated
      if (frequencyHighest < frequencyAccumulated){
        frequencyHighest = frequencyAccumulated;
        // set identity as words[index]
        identity = words[index];
      }
    }
  }
  // after finding frequencyHighest and identity,
  // if frequencyHighest is > 1, return the word identity
      // else return -1
  if (frequencyHighest > 1) {
    return identity;
  } else {
    return -1;
  }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
