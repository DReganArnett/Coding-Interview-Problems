// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//          A subsequence of a string is a new string that is formed from the original string by
//          deleting some (or none) of the characters without disturbing the relative positions of
//          the remaining characters (ie., "ace" is a substring of "abcde", while "aec" is not).
    

// CONSTRAINTS: 0 <= s.length <= 100
//              0 <= t.length <= 104
//              s and t consist only of lowercase English letters.
   
// EXAMPLES GIVEN:      Input: s = "abc", t = "ahbgdc"          Input: s = "axc", t = "ahbgdc"
//                      Output: true                            Output: false

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//         You are given string s and string t.  Return true if the charaters in s are also in 
//         t in the same relative order.
        
//     b.  WHAT ARE THE INPUTS?
//          two strings
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//         true or false

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES

//      Input: s = "cab", t = "abacadabra"   Input: s = "hill", t = "shellfish"
//      Output: true                         Output: false
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//         If s.length > t.length, return false
       
//     b. Create a step-by-step plan to solve the problem.

//      Perhaps we could create a hashmap (empty pojo where the characters are keys, and indices are values) and use 
//      string.indexOf() to search t for the indices of each character in s.  As we get each index we can push it to 
//      the hashmap.  Once we have traversed t, we can then use Object.values to extract the indices in order.  We can
//      then sort the values array and make sure that it is equal to the original version of Object.values.  If so, 
//      we return true, otherwise we return false.

//      1. Create hashmap using pojo
//      2. Create a variable called sPointer and set it equal to 0
//      3. Create a while loop that runs while sPointer < s.length
//      4. If t.indexOf(s[sPointer]) does not equal -1, 
//      5. Add s and it's index in t to the hashmap
//      6. Increment sPointer by 1
//      7. If so, return false;
//      8. When the while-loop is finished, create variable indices, and set it equal to hashmap.values();
//      9. Create a variable called sortedIndices and set it equal to indices.sort((a,b) => a-b)
//      10. If indices === sortedIndices, return true
//      11. Else return false
//      
//      The above plan only works if all characters are distinct.  We need to iterate in order to get the answer
//      if the characters are not distinct.  Here's a new plan:

//      1. Create hashmap called indices using an empty array
//      2. Create a variable called sPointer and set it equal to 0
//      3. Create a varable called tPointer and set it equal to 0
//      4. Create a while loop that runs while tPointer < t.length 
//      5. If s[sPointer] === t[i] 
//      6. Push tPointer to indices and increment both sPointer and tPointer
//      7. If not, only increment tPointer
//      8. When the while-loop ends, if s.length is greater than indices.length, return false
//          (this means that not all characters in s are in t)
//      9. Create a variable called sortedIndices and set it equal to the sorted version of indices
//      10. If indices === sorted indices, return true
//      11. Else return false
//      

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// Code from plan 2:

//O(n) time, where n is the length of the string t. This is because we iterate through the string t once, comparing each character with the corresponding character in s.

// O(n) space, where m is the length of the string s. This is because we store the indices of the matching characters in an array, which can have a maximum length of m.
var isSubsequence = function(s, t) {
    // Create a hashmap called indices and set it equal to an empty array
    let indices = [];
    // Create a pointer for s and set it to 0
    let sPointer = 0;
    // Create a pointer for t and set it to 0
    let tPointer = 0
    // Create a while loop that runs while tPointer is less than the length of t
    while (tPointer < t.length){
        // If the value at sPointer in s is equal to the value of t pointer in t
        if (s[sPointer] === t[tPointer]) {
            // Push tPointer to indices
            indices.push(tPointer); 
            // increment sPointer by 1
            sPointer ++;
            // Increment tPointer by 1
            tPointer ++;
        } else {
            // Otherwise only increment t pointer by 1
            tPointer ++;
        }
    }
    // If the length of s is greater than the length of indices, return false (because not all chars in s are in t)
    if (s.length > indices.length) return false
    // Create a variable sortedIndices and set it equal to the sorted version of indices
    let sortedIndices = indices.sort((a,b) => a-b);
    // If sorted indices is strictly equal to indices
    if (sortedIndices === indices){
        // return true
        return true;
    } else {
        // else, return false
        return false;
    }
}

s = "axc", t = "ahbgdc"
isSubsequence(s,t);


// Code from plan 1:
// function isSubsequence(s, t) {
//     let hashmap = {};
//     let sPointer = 0;
//     while (sPointer < s.length) {
//         if (t.indexOf(s[sPointer]) !== -1) {
//             hashmap[s[sPointer]] = t.indexOf(s[sPointer]);
//             sPointer ++;
//             console.log('hashmap: ', hashmap)
//             console.log('sPointer: ', sPointer)
//         } else {
//             return false;
//         }
//     }
//     const indices = Object.values(hashmap);
//     console.log('indices: ', indices)
//     const sortedIndices = indices.sort((a,b) => a-b);
//     console.log('sortedIndices: ', sortedIndices)
//     if (sortedIndices === indices) {
//         return true;
//     } else {
//         return false;
//     }
// }



// 
// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?