/*Translation must all be done in a translate function that takes 
a string parameter and returns the translated Pig Latin string.*/
function translate(word) {
  //Convert each word to lowercase before translating.
  word = word.toLowerCase();

  //If a word starts with a vowel, just add “way” onto the ending.
  if ("aeiou".includes(word[0])) {
    return word + "way";
    /*If a word starts with a consonant, move all of the consonants 
      that appear before the first vowel to the end of the word, 
      then add “ay” to the end of the word.*/
  } else {
    let consonants = "";
    let i = 0;

    while ("aeiou".includes(word[i]) === false) {
      consonants += word[i];
      i++;
    }
    const translatedWord = word.slice(i) + consonants + "ay";
    return translatedWord;
  }
}

exports.translate = translate;
