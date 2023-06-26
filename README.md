# Unit-5-Pig-Latin

Pig Latin

Intro: Pig Latin is a children’s word game in English where starting consonants are flipped to the ends of words and -ay added to each word.  Hello World would be ellohay orldway in Pig Latin, for instance.  Many languages have games similar to this--read more at http://mentalfloss.com/article/50242/pig-latins-11-other-languages 

Task: Use TDD practices to build a function that translates from English to Pig Latin.

Build Specifications
Translation must all be done in a translate function that takes a string parameter and returns the translated Pig Latin string.
The translation functionality must be developed with TDD using tests on the translate function.
If desired, you may also create other helper functions and optionally test them.

Additional Build Specifications
Convert each word to lowercase before translating.
If a word starts with a vowel, just add “way” onto the ending.
If a word starts with a consonant, move all of the consonants that appear before the first vowel to the end of the word, then add “ay” to the end of the word.

Hints
Treat “y” as a consonant.
Start with the simplest cases and work up, for example…
words that start with vowels… write tests for several different starting vowels
words that start with vowels with capital letters are converted to lowercase
words that start with one consonant… write tests for the second letter being several different vowels
words that start with two consonants
words that start with more consonants

Extended Challenges
In a separate JS file piglatin-prompt.js, use the promptly NPM package to prompt the user for a word or phrase. Call your function to translate it, then log the result.
In a separate JS file piglatin-args.js, use process.argv to accept a word as a command line argument. Call your function to translate it, then log the result. E.g. running node piglatin-args.js sweet would log "eetsway".
Allow punctuation in the input string.
Translate words with contractions. Ex: can't become an'tcay
Don’t translate words that have numbers or symbols. Ex: 189 should be left as 189 and hello@grandcircus.co should be left as hello@grandcircus.co.
Make the function take a phrase or sentence instead of a single word, and then find the Pig Latin for each word in the line.
Keep the case of the word, whether its uppercase (WORD), title case (Word), or lowercase (word).

Test Cases
Start with these sample test cases, then you must create more of your own (see Grading Criteria)
Words starting with different vowels
translate("apple") → "appleway"
translate("else") → "elseway"
Words starting with one consonant
translate("giraffe") → "iraffegay"

Remember: Never delete your old tests. Keep adding more and more.
