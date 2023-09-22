

// PROBLEM: A school si trying to take an annual photo of all the students.  the students are asked to 
//          stand in a single file line in non-increasing order by height.  Let this ordering be 
//          represented by the integer array 'expected' where expected[i] is the expected height of 
//          the ith student in line.  You are given an integer array heights representing the current order
//          that the students are standing in.  Each heights[i] is the height of the ith student in line.
//          Return the number of indices where heights[i] != expected[i]
    

// CONSTRAINTS:
   
// EXAMPLES GIVEN:

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        
//     b.  WHAT ARE THE INPUTS?
        // an array, heights
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
       // the number of indices where expected[i] != heights[i]
//     d.  DO I HAVE ENOUGH INFORMATION?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.
//        1. Create a variable called count and set it equal to 0
//        2. Create array expected and set it to an empty array.
//        3. Push all items in heights into expected using a for-loop
//        4. Sort expected array
//        5. Compare each item in heights to it's corresponding index in expected.  
//        6. If the values are equal, move on to the next index
//        7. If the values are not equal, add 1 to count
//        8. Once we've examined each index in the arrays, we return count.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function heightChecker (heights) {
    let count = 0;
    let expected = []
    for (let i=0; i<heights.length; i++) {
        expected.push(heights[i]);
    }
    console.log(expected)
    expected.sort((a, b) => a - b);
    console.log(expected)
    let index = 0
    while (index < heights.length) {
        if (heights[index] !== expected[index]) count += 1;
        index += 1;
    }
    return count;   
}


// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?