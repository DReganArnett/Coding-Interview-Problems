// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given a string s consisting of words and spaces, return the length of the last word in
//          the string.  A word is a maximal substring consisting of non-space characters only.
    

// CONSTRAINTS: 1 <= s.length <= 104
//              s consists of only English letters and spaces ' '.
//              There will be at least one word in s.
   
// EXAMPLES GIVEN:  INPUT: s = "Hello World"
//                  OUTPUT: 5
//                  EXPLANATION: The last word is "World" with length 5.

//                  INPUT: s = "  fly me   to   the moon  "
//                  OUTPUT: 4
//                  EXPLANATION: The last word is "moon" with length 4

//                  INPUT s = "luffy is still joyboy"
//                  OUTPUT: 6
//                  EXPLANATION: The last word is 'joyboy' with length 6.

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        // Find the last word in a string and return it's length
        
//     b.  WHAT ARE THE INPUTS?
        // a string
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
        // a number that is the length of the last word in the string
//     d.  DO I HAVE ENOUGH INFORMATION?
        // Yes 
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//      
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct?
       
//     b. Create a step-by-step plan to solve the problem.
        // 1. Initialize variable count = 0;
        // 2. Initialize a pointer and set it to the final index of the string because 
        //    we will be iterating backwards though the string.
        // 3. Initialize a while-loop that runs while until pointer reaches 0, since
        //    since we are iterating backwards through the string.
        // 4. If the value at i is a space AND count is greater than 0, return count
        //    because it means that letters came before the value the pointer is pointing to
        //    so we have reached the end of the first word by reaching a space
        // 5. Else if the value at i is a space, and count still equals 0, decrement the pointer
        //    because we have not yet reached a letter in the string  
        // 6. If the value at i is not a space, AND pointer === 0, add 1 to count and return.
        //    pointer because it means that we have reached the beginning of the string.  
        // 7. Else increment count and decrement pointer because we are at a letter, but we have 
        //    not yet reached a space, so we count the letter and keep iterating.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function lengthOfLastWord(string) {
    let count = 0;
    let pointer = string.length-1;
    while (pointer >= 0) {
        if (string[pointer] === ' ' && count > 0) {
            console.log(string[pointer], count)
            return count; 
        } else if(string[pointer] === ' ') {
            console.log(string[pointer], count)
            pointer = pointer - 1;
        } else if (string[pointer] !== ' ' && pointer===0) {
            count ++;
            return count;
        } else {
            count ++
            pointer = pointer-1;
        }
    }
    return count;
}
// This solution is a little bit shorter, but has the same time/space complexity
function lengthOfLastWord2(string) {
    // Counts number of alphanumeric characters
    let lengthOfLastWord = 0;
    // Loops backwards through the string
    for (let i=string.length-1; i>=0; i--) {
        // If the value at i is not a space...
        if (string[i] !== ' ') {
            // Add 1 to the count
            lengthOfLastWord++;
        // Else
        } else {
            // If count is greater than 0 (and the value at i=== ' ')
            if (lengthOfLastWord > 0) {
                // return count
                return lengthOfLastWord;
            }
        }
    }
    // If we reach the end of the string and the function has not yet 
    // returned anything, return count
    return lengthOfLastWord;
}

let string = 'Hello World'
lengthOfLastWord2(string);


// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution? 
        //  O(n) time because worst case, the while loop will iterate through the whole string
        //  O(1) space because no additional space that is dependent on the length of the input
        //  is used.

//     b. Are there parts of the solution that could be more efficient?
//          I don't think so.
//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?
//      I'm wondering if there is a way to do this without the loop.  I don't think so.
