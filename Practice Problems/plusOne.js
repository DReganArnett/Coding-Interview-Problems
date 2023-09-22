// FROM: Leetcode       
// LEVEL: Easy  

// PROBLEM: You are given a large integer represented as an integer array digits, where each digits[i]
//          is the ith digit of the integer.  The digits are ordered from the most significant to least 
//          significant in left-to-trightorder.  The large integer does not contain any leading 0's.
//          Increment the large integer by one and return the resulting array of digits.

// CONSTRAINTS: 1 <= digits.length <= 100
//              0 <= digits[i] <= 9
//              digits does not contain any leading 0's.
   
// EXAMPLES GIVEN:  Input: digits = [1,2,3]
//                  Output: [1,2,4]
//                  Explanation: The array represents the integer 123.
//                               Incrementing by one gives 123+1 = 124.
//                               Thus, the result should be [1,2,4].

//                  Input: digits = [4,3,2,1]
//                  Output: [4,3,2,2]

//                  Input: digits = [9]
//                  Output: [1,0]

// ------------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          - We are given an array of digits whose elements, when joined, forms a large integer.
//          - Increment that integer by one and return it in an array of digits (numbers) separated by commas.
        
//     b.  WHAT ARE THE INPUTS?
//          An array of one-digit numbers
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          An array of one-digit numbers

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//          Yes.  We know through the constraints that the input array cannot be empty.  

//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
//      Input: digits = [9,9,9]
//      Output = [1,0,0,0]

//      Input: digits = [0]
//      Output: [1]
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          In the context of this proble, not really.

//     b. Create a step-by-step plan to solve the problem.
//      INTUITION: My first impulse is to join the array into a string, convert the string to a
//                 number, increment the number by one, convert the number back to a string, split the 
//                 string back into an array, and then return that array.  I'll go with this approach first.

//      1.  Join the array into a string. using array.toString()
//      2.  Convert the string to a number using BigInt() since some may be more than 15 digits long.
//      3.  Add 1 to the number using the += 1n to account for it being a bigInt
//      4.  Convert the number back to a string using the num.toString() 
//      5.  Create an empty array to push the digits into.
//      6.  Loop through the string and push the digits into the new array 1 by 1
//      6.  Return the array.


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function plusOne(digits) {
    // Convert digits array to a string
    digits = digits.toString();
    // Loop through the string and remove commas
    for (let i=0; i<digits.length; i++) {
        if (digits[i] === ',') {
            digits = digits.split(',').join('')
        }
    }
    // Convert to BigInt (because some may more than 15 digits)
    digits = BigInt(digits);
    // Add 1 to the BigInt
    digits = digits += 1n;
    // Convert it back to a string
    digits = digits.toString();
    // Define a new array to push the digits into
    let newArr = []
    // Loop through the digits string and push digits into newArr 1 by 1
    for (let i=0; i<digits.length; i++) {
        newArr.push(digits[i])
    }
    // return newArr;
    return newArr;
}
 

// // TEST CASES: 

// <!-- console.log('TEST CASE 1:')

// console.log('nums: ', nums)
// solution = 
// console.log('solution: ', solution)
// output = singleNumber(nums);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log(''); -->

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient? -->