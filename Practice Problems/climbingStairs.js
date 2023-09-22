// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: You are climbing a staircase.  It takes n steps to reach the top.  Each time you can 
//          either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
    

// CONSTRAINTS: 1<= n <= 45
   
// EXAMPLES GIVEN:  INPUT: n = 2
//                  OUTPUT: 2
//                  EXPLANATION: There are 2 ways to climb to the top:
//                               1. 1 step + 1 step
//                               2. 2 steps

//                  INPUT: n = 3
//                  OUTPUT: 3
//                  EXPLANATION: There are 3 ways to climb to the top.
//                               1. 1 step + 1 step + 1 step
//                               2. 1 step + 2 steps
//                               3. 2 steps + 1 step

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        // You are about to climb a staircase of n steps.  You can either climb 1 step OR
        // 2 steps. How many combinations of 1 or 2 steps does it take to reach the top  
//     b.  WHAT ARE THE INPUTS?
        // n = the number of steps in the staircase
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
        //  The number of possible step combinations to reach the top
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//      // I think so
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        // distinctCount = 0 (will increment as we discover distict ways to reach the top)
        // n = number of stairs
        // moveType1 = number of 1 step moves
        // moveType2 = number of 2 step moves
        // maxMoves = n (the maximum number of moves to reach the top is always n because 
        //            going up one step at a time is always an option
        // minMoves = n/2 + n%2 (n/2 (the max number of moveType2) + n%2 (the max number of moveType1))
        // max1 = n (max possible sets of 1 steps)
        // max2 = n/2 (max possible sets of 2 steps) 
        // min1 = n % 2 (min number of single steps necessary, will be either 1 or 0)
        // min2 = 0 (it is always 0 because we can always reach the top by going up 1 step at a time)

        
// 2.  EXPLORE CONCRETE EXAMPLES
        // INPUT: n = 5
        // OUTPUT: 8
        // EXPLAINATION: 
        //    1. 1 + 1 + 1 + 1 + 1
        //    2. 2 + 1 + 1 + 1
        //    3. 1 + 2 + 1 + 1
        //    4. 1 + 1 + 2 + 1
        //    5. 1 + 1 + 1 + 2
        //    6. 2 + 2 + 1
        //    7. 1 + 2 + 2
        //    8. 2 + 1 + 2
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
            // If there is only 1 step, return 1, if there are 0 steps, return 0
       
//     b. Create a step-by-step plan to solve the problem.
            // 1. Implement the above cases to rule them out
            // 2. create variables one and two
            // 2. Set max1 = n;
            // 3. Find min1 by calculating n % 2
            // 4. Find max2 by dividing n by 2. 
            // 4. We know that maxMoves = n the maximum number of moves to reach the top is n, and that the minimum
            //    number of moves to reach the top is n/2 + n % 2
            // 5. We also know that if n%2 = 1, then there are multiple ways to implement the minimum case in step 4
            //    because the one  can go anywhere in the sequence of twos
            // 6. Our task now is to figure out all possible sequences of ones and twos.  We could do this by looping 
            //    


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// function climbingStairs(n) {
//     //  If the staircase has zero steps, return 0
//     if (n = 0) return 0;
//     // If the staircase has 1 step, return 1
//     if (n = 1) return 1;
//     // The max number of moves to reach the top is always the number of steps because going up one step at a time
//     // is always an option
//     let maxMoves = n; 
//     //  Initialize the count to 1 because going up one step at a time is always an option
//     let distinctCount = 1;
//     let minMoves = n/2 + n%2;
//     let moveType1 = n;
//     let moveType2 = n/2;
//     for (let i=maxMoves; i>=minMoves; i--) {
        
//     }
//     }


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