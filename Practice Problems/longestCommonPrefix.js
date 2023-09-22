// FROM: Leetcode
// LEVEL: easy

// PROBLEM: Write a function to find the longest common prefix string amongst an aray of strings. 
//          If there is not common prefix, return an empty string.

// CONSTRAINTS:
   
// EXAMPLES GIVEN:
//          Input: strs = ["flower","flow","flight"]
//          Output: "fl"

//          Input: strs = ["dog","racecar","car"]
//          Output: ""
//          Explanation: There is no common prefix among the input strings.

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Given an array of strings, find the longest series of letters beginning from the start of each 
//          string that all strings have in common. 

//     b.  WHAT ARE THE INPUTS?
//          An array of strings        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          A string containing a series of characters that is common among the strings in the input array,
//          starting at index 0 of each string.
    
//     d.  DO I HAVE ENOUGH INFORMATION?
//          Some questions: 
//              1. Will all characters be letters?     
//              2. Will all of the characters be of the same data type?    
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//              Perhaps call the output string prefix
        
// 2.  EXPLORE CONCRETE EXAMPLES
//           Input: strs = ["candy", "cannibis", "cannon"]
//           Output: "can"
//          
//          Input: strs = ["1234", "1237654", "1248736"]
//          Output: "12"

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//              ~ If the input array is empty, return an empty string
//   
//     b. Create a step-by-step plan to solve the problem.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
//          1. Perhaps start by somehow isolating each string in the input array.  We could do this by finding the length of the 
//          array and then creating a variable equal to each element.
//          2. Then we could use charAt method for each character of each of the variables and see if they are equal at each index
//           COULDN'T FIGURE OUT THE ABOVE SOLUTION.  See new solution below

//          Step 1: Return an empty string if the input string is emtpy
//          Step 2: Loop through the characters of the first string
//          Step 3: Loop through the other strings
//          Step 4: Check if the character in the first string is also present in the same position of the other strings
//          Step 5: If not, return the string up to and including the previous character;
//          Step 6: If both loops finish, return the first string.

function longestCommonPrefix(strs) {
    // Return early on empty input
    if (!strs.length) return "";
    // Loop through characters of first string
    for (let i=0; i<strs[0].length; i++) {
        // Loop through the other strings
        for (let j=1; j<strs.length; j++) {
            // Check if this character is also present in the same position of each string
            if (strs[0][i] !== strs[j][i]) {
                // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
            } 
        }
    }
    // If loops finish without modifying strs[0], return strs[0]
    return strs[0];
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