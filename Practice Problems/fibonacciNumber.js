// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: The Fibonacci numbers, commonly denoted F(n), form a sequence, called the Fibonacci 
//          sequence, such that each number is the sum of the two preceding ones starting from O 
//          and 1.  That is: 
//              F(0) = 0, F(1) = 1
//              F(n) = F(n-1) + F(n-2), for n>1.
//          Given n, calculate F(n).
    

// CONSTRAINTS: 0 <= n <= 30
   
// EXAMPLES GIVEN:      INPUT: n=2
//                      OUTPUT: 1
//                      EXPLANATION: F(2) = F(1) + F(0) = 1 + 0 = 1.

//                      INPUT: n=3
//                      OUTPUT: 2
//                      EXPLANATION: F(3) = F(2) + F(1) = 1 + 1 = 2.

//                      INPUT: n=4
//                      OUTPUT: 3
//                      EXPLANATION: F(4) = F(3) + F(2) = 2 + 1 = 3.
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        // Given a number, calculate it's value using the Fibonacci sequence
        
//     b.  WHAT ARE THE INPUTS?
        // A number
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
        // Another number
//     d.  DO I HAVE ENOUGH INFORMATION?
        // Can we assume that n is an integer?
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        // n is the input parameter
        // n-2 is the first addend
        // n-1 is the second addend;
        // F(n) = (n-1) + (n-2)

// 2.  EXPLORE CONCRETE EXAMPLES
       // INPUT: n=2
       // OUTPUT: 1
       // EXPLANATION: F(2) = F(1) + F(0) = 1 + 0 = 1.

       // INPUT: n=3
       // OUTPUT: 2
       // EXPLANATION: F(3) = F(2) + F(1) = 1 + 1 = 2.

       // INPUT: n=4
       // OUTPUT: 3
       // EXPLANATION: F(4) = F(3) + F(2) = 2 + 1 = 3.//

       // INPUT: n=5
       // OUTPUT: 5
       // EXPLANATION: F(5) = F(4) + F(3) = 3 + 2 = 5

       // INPUT: n=6
       // OUTPUT: 8
       // EXPLANATION: F(6) = F(5) + F(4) = 5 + 3 = 8

       // INPUT: n=7
       // OUTPUT: 13
       // EXPLANATION: F(7) = F(6) + F(5) = 8 + 5 = 13

       // INPUT: n=8
       // OUTPUT: 21;
       // EXPLANATION: F(8) = F(7) + F(6) = 13 + 8 = 21

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
        // If n < 1, return n
       
//     b. Create a step-by-step plan to solve the problem.
        // 1. 


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?