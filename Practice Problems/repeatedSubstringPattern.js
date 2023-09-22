// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given a string s, check if it can be constructed by taking a substring of it and appending 
//          multiple copies of the substring together.
    

// CONSTRAINTS:  1 <= s.length <= 104
//               s consists of lowercase English letters.
   
// EXAMPLES GIVEN:  Input: s = "abab"                               
//                  Output: true
//                  Explanation: It is the substring "ab" twice.

//                  Input: s = "aba"
//                  Output: false
//                  
//                  Input: s = "abcabcabcabc"
//                  Output: true
//                  Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Given a string, return true if any substring within the given string can be repeated to 
//          create the original string given
        
//     b.  WHAT ARE THE INPUTS?
//          A string of lowercase letters
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          True or false

//     d.  DO I HAVE ENOUGH INFORMATION?
//          Yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//          
        
// 2.  EXPLORE CONCRETE EXAMPLES
//         Input: s = "catcatcat"           Input: "ccbbaa"
//         Output: true                     Output: false

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          If the string is empty or has less than two characters, return false.        

//     b. Create a step-by-step plan to solve the problem.
//      Intuition: We will need to find all substrings in the FIRST HALF of the input string.  This is
//                 because the substring that can be repeated to create the original string can't be 
//                 longer than half of the length of the input string, or else repeating it will be 
//                 longer than the original string.  


//      1. Create an empty string to become subStr
//      2. Iterate through the first half of s
//      3. At each iteration, concatenate s[i] onto subStr
//      4. Calculate the number of repetitions of subStr necessary to make subStr.length === s.length
//      5. Using string.repeat(), repeat subStr the number of times calculated in step 4
//      6. If subStr === s, return true
//      7. If the loop ends without returning true, return false

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY


// O(n^2) time | O(n) space
// The time complexity of this function is O(n^2), where n is the length of the input string s. 
// This is because there is a nested loop where the outer loop iterates through the first half of the 
// string, and the inner loop calculates the number of repetitions needed for each substring. In the 
// worst case scenario, the outer loop will iterate n/2 times, and the inner loop will iterate n/2 times 
// as well, resulting in a total of (n/2) * (n/2) = n^2/4 iterations.

// The space complexity of this function is O(n), where n is the length of the input string s. This is 
// because the function creates a new string subStr to store the substring, and the length of subStr can 
// be at most equal to the length of s.

function repeatedSubstringPattern(s) {
    // Create an empty string to store subStr
    let subString = '';
    // Iterate through the first half of s.  
    for(let i=0; i< Math.floor(s.length/2); i++) {
         // At each iteration, add the character at s[i] to subStr
        subString += s[i];
        // Calculate the number of times subStr must repeat in order for subStr.length to equal s.length
        let repetitions = s.length/subString.length;
        // If when repeating subStr repetitions # of times, subStr === s, return true
        if (subString.repeat(repetitions) === s) return true; // console.log(true)
    }
    // else return false
    //console.log(false);
    return false;
}

// let s = "abcdabcd"
repeatedSubstringPattern(s)

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?