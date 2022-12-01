/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
Use the if-then-else construct available in Javascript. Do some googling to figure this out 
if you forget how conditionals work.
*/

maxOfTwoNumbers = (firstNum, secondNum) => {
    // ADD YOUR CODE HERE
    if (firstNum > secondNum) {
      console.log(firstNum + " is larger than " + secondNum);
   } else {
       console.log(firstNum + " is less than " + secondNum);
   }
   return;
    
  };
  
  maxOfTwoNumbers(234,345);
  
  
  /*
  2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (firstNum, secondNum, ThirNum) => {
    // ADD YOUR CODE HERE
    return Math.max.apply(Math, array)
  };

  let array = [1,2,3];

  console.log(maxOfThree(array));
  
  /*
  3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  isCharacterAVowel = (argument) => {
    // ADD YOUR CODE HERE
    var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
 var char='a';
  console.log(isCharacterAVowel(char));


  /*
  4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
  */
  
  sumArray = (numbers) => {
    // ADD YOUR CODE HERE
    var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
  };

 
console.log(sumArray([1,2,3,4]));


function multiplyArray(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}

console.log(multiplyArray([1,2,3,4]));
  
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  function ArgCounter() {
	return arguments.length;
}

console.log(ArgCounter(10,20));

  /*
  6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  
  function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("jag testar"));

  /*
  7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
  */

  function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  
  /*
  8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (array, int) => {
    // ADD YOUR CODE HERE
    var length = array.length;
    var longestWords = [];
    for (i = 0; i < length; i++) {
      if (array[i].length > int) {
        longestWords[longestWords.length] = array[i];
      }
    }
    return longestWords;
  };
  

  console.log(filterLongWords("doggy, hello, 2"));