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

// -----------------------------------------------------
// Prime Numbers
// -----------------------------------------------------
{
  function checkPrimeMath(num) {
    let maxCheckNum = Math.ceil(Math.sqrt(num));
    //let maxCheckNum = num / 2 - 1;
    //console.log("max check", maxCheckNum);
    for (i = 2; i <= maxCheckNum; i++) {
      // show division number
      // console.log("div by", i);
      // show remainder
      // console.log("remainder", num % i);
      // if remainder is 0, then fail
      if (num % i == 0) {
        //console.log("div by", i, "reminder", num % i, ": fail");
        // console.log(num, "is NOT a prime");
        return false;
        break;
      } else {
        if (i == maxCheckNum) {
          //console.log("div by", i, "remainder", num % i, "passed everything");
          // console.log(num, "IS a prime");
          return true;
        } else {
          //console.log("div by", i, "reminder", num % i, ": pass");
        }
      }
    }
  }
  function checkPrime(num) {
    const isPrime = checkPrimeMath(num);
    if (isPrime) {
      console.log(num, "is a prime");
    } else {
      console.log(num, "is NOT a prime");
    }
  }

  checkPrime(77);
  checkPrime(97843);
  checkPrime(99);

  function printPrimes(primeAmount) {
    for (a = 1; a <= primeAmount; a++) {
      if (checkPrimeMath(a) == true) {
        console.log(a);
      }
    }
  }

  console.log("Prime Number List");
  printPrimes(50);
}

// -----------------------------------------------------
// Rock Paper Scissors
// -----------------------------------------------------

{
  const rpsKey = ["rock", "paper", "scissor"];
  function randomMove() {
    let choice = Math.floor(Math.random() * 3);
    // console.log(choice);
    return choice;
  }

  function rockPaperScissors() {
    let computersMove = randomMove();
    console.log("computer chose", rpsKey[computersMove]);
    let usersMove = randomMove();
    console.log("user chose", rpsKey[usersMove]);
    if (computersMove == usersMove) {
      console.log("draw");
    } else {
      if (computersMove == (usersMove + 2) % rpsKey.length) {
        console.log("user wins");
      } else {
        console.log("computer wins");
      }
    }
  }
  rockPaperScissors();
}

// -----------------------------------------------------
// Digit Sum
// -----------------------------------------------------

const sumDigits = (numberToAdd) => {
  const numberAsString = numberToAdd.toString();
  const numberArray = numberAsString.split("");
  const arrayMaxNum = numberArray.length;
  let answer = 0;
  for (i = 0; i < arrayMaxNum; i++) {
    answer += Number(numberArray[i]);
  }
  console.log(`Sum of the digits in ${numberToAdd} is ${answer}`);
};

sumDigits(12345);

function findHypotenuse(sideA, sideB) {
  let sideASquared = sideA ** 2;
  let sideBSquared = sideB ** 2;
  let sideCSquared = sideASquared + sideBSquared;
  let hypotenuse = Math.sqrt(sideCSquared);
  console.log(hypotenuse);
}

findHypotenuse(3, 4);
