// FROM: AlgoExpert
// LEVEL: Easy

// PROBLEM: Write a function that takes in a non-empty string and returns a boolean representing whether
//          the string is a palindrome.  A palindrome is defined as a string that's written tthe same 
//          forward and backward.  Note that single-character strings are palindromes.
    

// CONSTRAINTS: O(n) time | O(1) space
   
// EXAMPLES GIVEN:  INPUT: "abcdcba"
//                  OUTPUT: true

// -----------------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Check if the input string is the same forward and backward. If so, return true, else return false
        
//     b.  WHAT ARE THE INPUTS?
//          a string
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          true or false
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//          Yes.  We know the input is a non-empty string
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
//         INPUT: "1234321"     INPUT: "aabbdddba"
//         OUTPUT: true         OUTPUT: false
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          If the string has a length of 1, then return true
       
//     b. Create a step-by-step plan to solve the problem.
//         My first impulse: 
//         1. Split the string into an array 
//         2. Use array.reverse() to reverse it
//         3. Join the reversed array back into a string
//         4. compare the string to the reversed string.  If equal, return true

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// Not optimal - O(n) time | O(n) space because string.split('') creates a new array
function palindromCheck(string) {
    let revStr = string.split('').reverse().join('')
    return string === revStr;
}

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?
//          O(n) time | O(n) space because string.split('') creates a new array.  
//          The constraints tell us that O(n) time | O(1) space is optimal

//     b. Are there parts of the solution that could be more efficient?
        //  Yes, if we can get the space down to constant time

//     c. Are there parts of the solution that could be shorter?
        // Probably not...

//     d. Consider other approaches to the problem.  Are any of them more efficient?
//      Yes.  Here's one from AlgoExpert that is O(n) time | O(1) space:

        // 1. Loop through HALF of the string...
        //      for (let i=0; i<Math.floor(string.length/2); i++) {
        // 2. Compare the value at string[i] to the value at the opposite end of the string.
        //    If they are ever not equal, return false.
        //      if (string[i] !== string[string.length-1-i]) return false
        // 3. If the loop finishes without returning false, return true.

function palindromeCheck2(string) {
    for (let i=0; i<Math.floor(string.length/2); i++) {
        if (string[i] !== string[string.length-1-i]) return false;
    }
    return true;
}
         

