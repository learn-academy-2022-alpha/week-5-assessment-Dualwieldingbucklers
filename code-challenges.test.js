// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("leetSpeak", () => {
  it("returns a coded message", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(leetSpeak(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(leetSpeak(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(leetSpeak(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})
// FAIL  ./code-challenges.test.js
//  leetSpeak
//    ✕ returns a coded message
//  ● leetSpeak › returns a coded message
//    ReferenceError: leetSpeak is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE
//1. Create a function called leetSpeak that takes in a string as a parameter
//2. Turn the string into an array using split
//3. Map through the array using value.toLowerCase() to account for any upper case letters
//4. Create a set of conditionals to return the corresponding numbers for each instance of the specified letters
//5. Create an else catchall to return the original value for anything unspecified by the conditional so it they don't return undefined
//6. Join the array

const leetSpeak = (string) => {
  var arr = string.split("").map(value => {
    if (value.toLowerCase() === "a"){
      return "4"
    } else if (value.toLowerCase() === "e"){
      return "3"
    } else if (value.toLowerCase() === "i"){
      return "1"
    } else if (value.toLowerCase() === "o"){
      return "0"
    } else {
      return value
    }
  })
  return arr.join("")
}
// PASS  ./code-challenges.test.js
//  leetSpeak
//    ✓ returns a coded message

//MORE PSEUDOCODE
//1. Create a function named leetSpeak that takes a string as a parameter
//2. Return the string with chained replace methods for all case insensitive global instances of each specified letter and its corresponding new

// const leetSpeak = (string) => {
//   return string.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")
// }
// PASS  ./code-challenges.test.js
//  leetSpeak
//    ✓ returns a coded message





// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("letterIncluder", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(letterIncluder(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(letterIncluder(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})
// FAIL  ./code-challenges.test.js
//  letterIncluder
//    ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter
//  ● letterIncluder › takes in an array of words and a single letter and returns all the words that contain that particular letter
//    ReferenceError: letterIncluder is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE
//1. Create a function named letterIncluder that takes in two parameters, an array and a string respectively
//2. Use an array filter that iterates through the array of strings
//3. Operate on each value with the includes method
//4. Save the remaining words that include the letter on a new array of strings
//5. Return the new array

const letterIncluder = (array, string) => {
var newArr = array.filter(value => value.toLowerCase().includes(string))
return newArr
}
// PASS  ./code-challenges.test.js
//  letterIncluder
//    ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("theTannerFamily", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(theTannerFamily(hand1)).toEqual(true)
    expect(theTannerFamily(hand2)).toEqual(false)
    expect(theTannerFamily(hand3)).toEqual(false)
  })
})
// FAIL  ./code-challenges.test.js
//  theTannerFamily
//    ✕ takes in an array of 5 numbers and determines whether or not the array is a full house
//  ● theTannerFamily › takes in an array of 5 numbers and determines whether or not the array is a full house
//    ReferenceError: theTannerFamily is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE
//1. Create a function that takes in an array as a parameter
//2. Sort the array numerically
//3. Create a conditional that outputs true if the sorted array has matching values at the first three and last two indexes
//4. Use an else if statement to cover for the double occurrence happening first and the triple occurrence happening after
//5. Use a not operator on both the if and else if to keep a 5 of a kind from working
//6. Have an else catchall that outputs false for everything else

const theTannerFamily = (array) => {
  array.sort((a,b)=>a-b)
  if (array[0] === array[2] && array[3] === array[4] && array[0] !== array[4]) {
    return true
  } else if (array[0] === array[1] && array[2] === array[4] && array[0] !== array[4]) {
    return true
  } else {
    return false
  }
}
// PASS  ./code-challenges.test.js
//  theTannerFamily
//    ✓ takes in an array of 5 numbers and determines whether or not the array is a full house

// PASS  ./code-challenges.test.js
//  leetSpeak
//    ✓ returns a coded message
//  letterIncluder
//    ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter
//  theTannerFamily
//    ✓ takes in an array of 5 numbers and determines whether or not the array is a full house
