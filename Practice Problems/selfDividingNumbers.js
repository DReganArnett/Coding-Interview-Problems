

// PROBLEM: 
    

// CONSTRAINTS:
   
// EXAMPLES GIVEN:

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        
//     b.  WHAT ARE THE INPUTS?
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
       
//     d.  DO I HAVE ENOUGH INFORMATION?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.
        // Step1 Initial empty array to hold nums to return
        // Step2 Initialize a counter starting at left number
        // Step3 Initilaize a while loop, while between left and right
        // Step 4 Turn the number into a string
        // Step 5 Check if its only one digit.  If so, push to output array
        // Step 5 Intitialize a for-loop to iterate through the digits
        // Step 6. For each digit check modulo if it is divisible by each digit.  
        // Step 7.  If any mods return false, increment counter
        // Step8.  If we reach the end of the for-loop then push to output array and increment counter.
        // Step 9: When the while loop finishes, return output array.



// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function selfDividingNumbers(left, right) {
    // Create an empty array output numbers
    let output = [];
    // Loop through the range of numbers between left and right one at a time
    for (let i=left; i<= right; i++) {
        // Create a variable called strNum and set it equal to the conversion of the current number to a string 
        let strNum = i.toString();
        // Loop through the digits in the string 
        for (let j=0; j<strNum.length; j++) {
            // If the current digit is not equal to 0 AND the number is divisible by the current digit
            if (strNum[j] !== 0 && strNum % strNum[j] == 0 ) {
                // If the current digit is the last digit in the string			  
                if (j == strNum.length-1) {
                    // Convert the string back to a number and push it into the output array
                    output.push(+strNum);
                }
                // If the current digit is equal to 0 OR if the number is not divisible by the current digit
        } else {
            // break out of the loop and move on to the next number in the range
                break;
            }
        }
    }
    // Return the output array
    return output;
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









