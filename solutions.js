// -----------------------------------------------------
// Verbal Questions
// -----------------------------------------------------

//? What is the difference between a parameter and an argument?
// parameter is a placeholder for when you write a function that can be used when invoking the function. function functionName(parameter)
// an argument is the input that is used when you invoke a function. functionName(argument)

//? Within a function, what is the difference between return and console.log?
// return is the result of the function that can be passed to another function
// console.log() prints the result in the console

const checkPalindrome = (word) => {
  // convert to all lower
  let wordProcessed = word.toLowerCase();
  // get rid of all spaces
  wordProcessed = wordProcessed.replace(/ /g, "");
  // distribute letters into array
  const wordArray = wordProcessed.split("");
  // show array
  console.log(wordArray);
  // define array's ends
  let i = 0;
  let j = wordProcessed.length - 1;
  // loop until they meet
  while (i <= j) {
    // if the ends meet, keep going inwards
    if (wordArray[i] == wordArray[j]) {
      //console.log(i, j, "pass");
      // move in 1 place
      i += 1;
      j -= 1;
      // full pass when i and j meet
      if (i > j) {
        //console.log("full pass");
        console.log(word, "is a palindrome");
      }
      // fail immediately if they don't match
    } else {
      //console.log(i, j, "fail");
      console.log(word, "is NOT a palindrome");
      break;
    }
  }
};

checkPalindrome("Github");
checkPalindrome("repaper");
checkPalindrome("my gym");
checkPalindrome("taco cat");

// -----------------------------------------------------
// Sum Array
// -----------------------------------------------------
//? The function takes an array as argument. Function returns the sum of numbers. Use 'for' loop.
{
  function sumArray() {
    let answer = 0;
    for (arg of arguments) {
      answer = answer + arg;
    }
    console.log(answer);
  }

  sumArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}
