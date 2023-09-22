// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Write an algorithm to determine if a number n is happy.
//          A happy number is a number defined by the following process:
//              - Starting with any positive integer, replace the number by the sum of the square
//                of its digits.
//              - Repeat the process until the number equals 1 (where it will stay), or it loops 
//                endlessly in a cycle which does not include 1.
//              - Those numbers for which this process ends in 1 are happy
//          Return true if n is a happy number, and false if not.
    
// CONSTRAINTS:  1 <= n <= 231 - 1
   
// EXAMPLES GIVEN:  Input: n = 19                           Input: n = 2
//                  Output: true                            Output: false
//                  Explanation:  1^2 + 9^2 = 82            Explanation: 2^2 = 4
//                                8^2 + 2^2 = 68                         4^2 = 16   
//                                6^2 + 8^2 = 100                        1^2 + 6^2 = 37
//                                1^2 + 0^2 + 0^2 = 1                    3^2 + 7^2 = 58
//                                                                       5^2 + 8^2 = 89
//                                                                       8^2 + 9^2 = 145
//                                                                       1^2 + 4^2 + 5^2 = 42
//                                                                       4^2 + 2^2 = 20
//                                                                       2^2 + 0^2 = 4
//                                                                       4^2 = 16
//                                                                       1^2 + 6^2 = 37          
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Determine if a number returns 1 when put through the process 
//           - Square each digit and sum up the squares
//           - Repeat the process until the number equals 1.  This means the number is happy and you can 
//             return true.
//           - If the number doesn't ever equal 1, return false 

       
//     b.  WHAT ARE THE INPUTS?
//          A positive integer

//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          true or false

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//          I would ask if we can assume that the input is positive         

        
// 2.  EXPLORE CONCRETE EXAMPLES
//          Input: n = 23                                    Input: n = 46
//          Output: true                                     Output: false
//          Explanation:  2^2 + 3^2 = 13                     Explanation:   4^2 + 6^2 = 52
//                        1^2 + 3^2 = 10                                    5^2 + 2^2 = 29
//                        1^2 + 0^2 = 1                                     2^2 + 9^2 = 85
//                                                                          8^2 + 5^2 = 89                   
//                                                                          8^2 + 9^2 = 145
//                                                                          1^2 + 4^2 + 5^2 = 42
//                                                                          4^2 + 2^2 = 20
//                                                                          2^2 + 0^2 = 4
//                                                                          4^2 = 16
//                                                                          1^2 + 6^2 = 37
//                                                                          3^2 + 7^2 = 58
//                                                                          5^2 + 8^2 = 89

//      Input: n = 7                                        Input: n = 130
//      Output: true;                                       Output: true
//      Explanation:   7^2 = 49                             Explanation: 1^2 + 3^2 + 0^2 = 10
//                     4^2 + 9^2 = 97                                          1^2 + 0^2 = 1
//                     9^2 + 7^2 = 130
//               1^2 + 3^2 + 0^2 = 10
//                     1^2 + 0^2 = 1

 //      
// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//                    

//     b. Create a step-by-step plan to solve the problem.
//          Since there's a lot of repetition, we'll try using recursion to solve it.
//          1. Add sums = [] to the parameters so we can store the squareSums we have already seen for the next recursive call
//          2. Create variable squareSum and set it equal to 0;    
//          3. Convert n to a string and call it nString   
//          4. Create a pointer to point to each digit as we iterate through nString and set it equal to 0
//          5. Create a while-loop that runs while pointer is less than nString.length
//          6. For each digit, create a variable called num and set it equal to the square of nString[pointer]
//          7. Add num to squareSum
//          8. When the for-loop finishes, check to see if squareSum is already in nums.
//          9. If so, return false because if we called the function recursively, it would result in an infinite loop.
//          10. If not, add squareSum to sums
//          11. Check to see if 1 is included in sums. 
//          12. If so, return true
//          11. If not, recursively call the function on squareSum and nums.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// O(log n) time - where n is the input number. This is because the while loop iterates through the digits 
//          of the number, and the number of digits in n is proportional to log n.

// O(log n) space - because the space required to store the sums array is proportional to the number of digits in n.

function isHappy(n, sums = []) {
    // Convert n to a string so we can iterate through the digits
    nString = n.toString();
    // Create a pointer that will point to each digit in nString and set it equal to zero
    let pointer = 0
    // Create a variable squareSum that will hold the sum of the squares of each digit in n
    let squareSum = 0
    // Create a while-loop to iterate through nString while pointer is less than nString.length
    while (pointer < nString.length) {
        // Add the square of the digit the pointer is pointing to squareSum
        squareSum += (nString[pointer] * nString[pointer])
        // increment pointer to the next digit
        pointer++  
    }
    // Once the while loop finishes, if squareSum is already in sums, 
    if (sums.includes(squareSum)){
        // Return false because it means that the happyNumber process is infinite, hence n is not a happy number
        return false;
    } else {
        // If squareSum is not in nums, add it to nums
        sums.push(squareSum)
    }
    // If 1 is a value in sums, return true, because n is a happy number.
    if (sums.includes(1)){
        return true
    } else {
        return isHappy(squareSum, sums,)
    }
} 

// n = 46
// console.log(isHappy(n))


// console.log('TEST CASES:') 
// console.log('')
// console.log('TEST CASE 1:')
// n = 19
// console.log('Input: ', 'n = 19')
// let solution = true
// console.log('solution: ', solution)
// let output = isHappy(n);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// console.log('TEST CASE 2:')
// n = 2
// console.log('Input: ', 'n = 2')
// solution = false
// console.log('solution: ', solution)
// output = isHappy(n);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// console.log('TEST CASE 3:')
// n = 23
// console.log('Input: ', 'n = 23')
// solution = true
// console.log('solution: ', solution)
// output = isHappy(n);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// console.log('TEST CASE 4:')
// n = 46
// console.log('Input: ', 'n = 46')
// solution = false
// console.log('solution: ', solution)
// output = isHappy(n);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// console.log('TEST CASE 5:')
// n = 7
// console.log('Input: ', 'n = 7')
// solution = true
// console.log('solution: ', solution)
// output = isHappy(n);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// console.log('TEST CASE 6:')
// n =130
// console.log('Input: ', 'n = 130')
// solution = true
// console.log('solution: ', solution)
// output = isHappy(n);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');


// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?