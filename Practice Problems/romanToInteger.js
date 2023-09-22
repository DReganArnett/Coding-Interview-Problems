// FROM:
// LEVEL:

// PROBLEM: Given a roman numeral, convert it to an integer.
//          Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

//          Symbol:       Value:
//              I             1
//              V             5
//              X             10
//              L             50
//              C             100
//              D             500
//              M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, 
// which is XX + V + II. Roman numerals are usually written largest to smallest from 
// left to right. However, the numeral for four is not IIII. Instead, the number four 
// is written as IV. Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. There are six 
// instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.


 // CONSTRAINTS:  1 <= s.length <= 15
//               s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
//               It is guaranteed that s is a valid roman numeral in the range [1, 3999].
   
// EXAMPLES GIVEN:   
//                // Testcase #1:
//                   Input: s = "III"
//                   Output: expected = 3
//                   Explanation: III = 3.

                  // Testcase #2:
//                   Input: s = "LVIII"
//                   Output: expected = 58
//                   Explanation: L = 50, V= 5, III = 3.

                  // Testcase #3:
//                   Input: s = "MCMXCIV"
//                   Output: expected = 1994
//                   Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//        We are given a string of roman numerals.  Convert that string to it's integer value and 
//        return that integer
        
//     b.  WHAT ARE THE INPUTS?
//        A string of roman numerals
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//        The integer value that corresponds to the roman numeral string
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//        Yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES

    // Testcase #4:
//     Input: s = "MMMXXIII"
//     Output: expected = 3023
//     Explanation: MM = 2000, XX = 20, III = 3

    // Testcase #5:
//     Input: s = "CMXLIX"
//     Output: expected = 949
//     Explanation: CM = 900, XL = 40, IX = 9 

    // Testcase #6:
//     Input: s = "CDXCVII"
//     Output: expected = 497
//     Explanation: CD + 400, XC = 90, VII = 7  

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//         If the string is empty, return 0
//         If the string has a length of 1, return the value of the character.  
       
//     b. Create a step-by-step plan to solve the problem.
//      We will need to look at each character in the string, so we will traverse the whole string at least once.
//      each character in the integer value can be represented by as few as 1 numeral and as many as 3. 
//      We should use two pointers called prev and curr, one index apart so that we can compare two adjacent 
//      indices and decide whether we need to add the values, subtract the values, or look at the following value to  see if
//      it is also equal to curr. We will also need a variable to keep track 
//      of the integer value as we traverse the string, so we can create a variable called intValue and set it equal to an 
//      empty string.  

//      Intuitively, I'm thinking we should actually iterate through the string backwards so that we are starting at the ones value
//      in the integer and moving up towards the larger place values.  I'm not totally sure about this though.  We'll try this first.

//      - In the case where prev is greater than curr, we add the values to get the digit to be concatenated to the string . 
//      - In the case where prev is less than curr value, then we subtract the prev value from the curr value and concat the
//        value to intVal.
//      - In the case where prev and curr are equal, we should decrement prev by one to see if the following numeral is also equal to
//        curr, because if so, we will take all three numerals into account to determine the digit to be concatenated to intVal.
//      
//   
//      STEPS:
//      1. Create an object to store the characters and their corresponding values.  Call it numVals. 
//      2. Create a prev pointer and a curr pointer, initializing prev to s.length-2 and curr to s.length-1.  
//      3. Create a variable called intVal and set it equal to an empty string.
//      4. Iterate backwards through the string using a for-loop
//      5. If prev is greater than curr, concat the value to the intVal and decrement prev and curr each by 1.
//      6. If prev is less than curr, subtract prev from curr, concat the difference to intVals and decrement prev by 2 and curr by 1.
//      7. If the prev is equal to curr, decrement prev. If the new prev is equal to curr, multiply prev by 3, concat the product to intVals,
//         and decrement prev by 2 and curr by 3.  If the new prev is not equal to curr, then multiply curr by 2, concat the product to inVals,
//         and decrement curr by 1.
//      8. When the entire string has been traversed, return intVal.


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
///  Turns out I made it waaay more complicated than necessary.  See solution below

// O(n) time - where n is the length of the input string
// O(1) space -  because although we create an object and a sum variable, both take up a constant amount of space since neither scale with the size of the input string.

var romanToInteger = function(s) {
    // Create an object to save the roman numerals and their corresponding values.
    let obj = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M:1000
        };
    // Create a variable to represent the integer value we will return
    let int = 0;
    // Iterate through the input string
    for (let i=0; i<s.length; i++) {
        // Create a variable called currentVal and set it equal to the integer value at i
        let currentVal = obj[s[i]];
        // Create a variable called nextVal and set it equal to the value to the right of currentVal
        let nextVal = obj[s[i+1]];
        // If currentVal is less than nextVal
        if (currentVal < nextVal) {
            // subtract currentVal from int
            int -= currentVal;
        } else {
            // Else add the currentVal to int
            int += currentVal
        }
    }
    // Once the whole string is traversed, return int.
    return int
};

// function romanToInteger(s) {
//     if (s.length === 0) return 0;
//     const oneCharVals = {
//                         I: 1,
//                         V: 5,
//                         X: 10,
//                         L: 50,
//                         C: 100,
//                         D: 500,
//                         M:1000
//                     };
//     const twoCharVals = {
//                         IV: 4,
//                         IX: 9,
//                         XL: 49,
//                         XC: 90,
//                         CD: 400,
//                         CM: 900,
//                     };

//     if (s.length === 1) return oneCharVals[s[0]];

//     let prev = s.length-2;
//     let curr = s.length-1;
//     let intVal = 0;

//     console.log(oneCharVals[s[prev]] , oneCharVals[s[curr]])
//     console.log(intVal + oneCharVals[s[0]])

//     while (prev !== null && curr !== null) {
//         if (oneCharVals[s[prev]] > oneCharVals[s[curr]]) {
//             intVal = intVal + oneCharVals[s[curr]];  
//             prev --;
//             curr --;
//         } else if (oneCharVals[s[prev]] < oneCharVals[s[curr]]) {
//             intVal = intVal + twoCharVals[s[prev] + s[curr]] 
//             console.log('intVal: ', intVal)
//             prev -= 2;
//             curr -= 2;
//         } else if (oneCharVals[s[prev]] === oneCharVals[s[curr]]) {
//             prev --;
//             if (oneCharVals[s[prev]] === oneCharVals[s[curr]]) {
//                 intVal = intVal + 3;
//                 prev += 2;
//                 curr += 3;
//             } else {
//                 intVal = 2 + intVal;
//                 prev --;
//                 curr -= 2
//             }
//         } else {
//             intVal = intVal + oneCharVals[s[curr]];
//         }
        
//         console.log('intVal: ', intVal);
//     }
//    return intVal;
// };
// console.log("TEST CASES:")
// console.log('')
// s = 'III';
// console.log('s: ', 'III')
// let expected = 3;
// console.log('expected: ', expected)
// if (romanToInteger(s) === expected) {
//     console.log('Pass')
// } else {
//     console.log('Fail')
// }
// console.log('')
// s = 'LVIII';
// console.log('s: ', "LVIII")
// expected = 58
// console.log('expected: ', expected)
// if (romanToInteger(s) === expected) {
//     console.log('Pass')
// } else {
//     console.log('Fail')
// }
// console.log('')
// s = "MCMXCIV"
// console.log('s: ', "MCMXCIV")
// expected = 1994
// console.log('expected: ', expected)
// if (romanToInteger(s) === expected) {
//     console.log('Pass')
// } else {
//     console.log('Fail')
// }
// console.log('')
// s = "MMMXXIII"
// console.log('s: ', "MMMXXIII")
// expected = 3023
// console.log('expected: ', expected)
// if (romanToInteger(s) === expected) {
//     console.log('Pass')
// } else {
//     console.log('Fail')
// }
// console.log('')
// s = "CMXLIX"
// console.log('s: ', "CMXLIX")
// expected = 949
// console.log('expected: ', expected)
// if (romanToInteger(s) === expected) {
//     console.log('Pass')
// } else {
//     console.log('Fail')
// }
// console.log('')
// s = "CDXCVII"
// console.log('s: ', "CDXCVII")
// expected = 497
// console.log('expected: ', expected)
// if (romanToInteger(s) === expected) {
//     console.log('Pass')
// } else {
//     console.log('Fail')
// }



// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?