// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//          An anagram is a word or phrase formed by rearranging the letters of a different word 
//          or phrase, typically using all the original letters exactly once.

// CONSTRAINTS: 1 <= s.length, t.length <= 5 * 104
//              s and t consist of lowercase English letters.
   
// EXAMPLES GIVEN:  Input: s = "anagram",  t = "nagaram"
//                  Output: true

//                  Input: s = "rat", t = "car"
//                  Output: false
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//         Return true if all of the letters in s are present in t once, and only once, with no other 
//         letters included in t.
        
//     b.  WHAT ARE THE INPUTS?
//          Two strings of lowercase, English letters
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          Outputs are true or false
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//          Yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES

//          Input: s = "danielle", t = "elldanei"
//          Output: true

//          Input: s = "ssss", t = "sss"
//          Output: false
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//        - If the two strings are not the same length, return false
       
//     b. Create a step-by-step plan to solve the problem.
//  isAnagram1() - sorting
//      1. Check to see if the two strings are the same length.  If not return false.
//      2. Split s and t in to arrays of their characters 
//      3. Sort letters in sArr alphabetically
//      4. Sort letters in tArr alphabetically
//      5. Loop through sortedS
//      6. Check if the value at each index is the same as the value at the 
//         same index in sortedT.  
//      7. If the check ever returns false, return false
//      8. If the loop ends without returning false, return true

//   isAnagram2() - hashmap
//      1. Check to see if the two strings are the same length.  If not return false.
//      2. Create a hashmapS using an empty object
//      3. Create a hashmapT using an empty object
//      4. Loop through s
//      5. If s[i] in not already in the hashmapS, add it with a value of 1
//      6. If s[i] is already in the hashmapS, increment the value by 1
//      7. Loop through t
//      7. If t[i] is not already in the hashmapT, add it with a value of 1
//      8. If t[i] is already in the hashmapT, increment the value by 1
//      9. let k=0 
//      9. Initiate a while loop that runs while k < s.length
//     10. If hashmapS[k] is not equal to hashmapT[k], return false
//     11. Otherwise add 1 to k
//     12. If the loop finishes without returning false, return true

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function isAnagram2(s, t) {
    if (s.length !== t.length) return false;
    let hashmapS = {};
    let hashmapT = {};
    for (let i=0; i<s.length; i++) {
        if (!hashmapS[s[i]]) {
            hashmapS[s[i]] = 1;
        } else {
            hashmapS[s[[i]]] = hashmapS[s[i]] + 1;
        }
    }
    for (let j=0; j<t.length; j++) {
        if (!hashmapT[t[j]]) {
            hashmapT[t[j]] = 1;
        } else {
            hashmapT[t[[j]]] = hashmapT[t[j]] + 1;
        }
    }
    let k = 0;
    while (k < s.length) {
        if (hashmapS[k] !== hashmapT[k]) {
            return false;
        } else {
            k++;
        }
    }
    return true;
}

// O(n log n) time - where n is the length of the input strings. This is because the function uses the sort() 
//                   method, which has a time complexity of O(n log n) in the average case.

// O(n) space - where n is the length of the input strings. This is because the function creates two arrays, 
//              sArr and tArr, each with a length of n. Additionally, the function creates two sorted arrays, 
//              sortedS and sortedT, each with a length of n. Therefore, the total space complexity is 
//              O(n + n + n + n) = O(4n), which simplifies to O(n).
function isAnagram1(s, t) {
    if (s.length !== t.length) return false;
    s.split('').sort();
    t.split('').sort();
    for (let i=0; i<s.length; i++) {
        if (s[i] !== t[i]) return false;
    }
    return true;
}


// // TEST CASES: 

// <!-- console.log('TEST CASE 1:')

// console.log('nums: ', nums)
// solution = 
// console.log('solution: ', solution)
// output = singleNumber(nums);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log(''); -->

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient? -->