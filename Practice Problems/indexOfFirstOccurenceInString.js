// FROM: LeetCode
// LEVEL: Easy

// PROBLEM: Given two strings, needle and haystack, return the index of the first occurrence of 
//          needle in haystack, or -1 if needle is not part of haystack.
    
// CONSTRAINTS: 1 <= haystack.length, needle.length <= 104
//              haystack and needle consist of only lowercase English characters.
   
// EXAMPLES GIVEN:  INPUT: haystack = "sadbutsad", needle = "sad"
//                  OUTPUT: 0
//                  EXPLANATION: "sad" occurs at index 0 and 6.  The first occurrence is at index 0,
//                                so we return 0.

//                  INPUT: haystack = "leetcode", needle = "leeto"
//                  OUTPUT: -1
//                  EXPLANATION: "leeto" did not occur in "leetcode", so we return -1.

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        // We are given two strings.  If the second string is part of the first string, we should 
        // return the index where that second string FIRST occurs.  Otherwise, return -1.

//     b.  WHAT ARE THE INPUTS?
        // Two strings
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
       // Either the index where the second string occurs within the first string, or -1 if the second
       // string is not within the first string

//     d.  DO I HAVE ENOUGH INFORMATION?
        // Yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?

        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
            // If either string is empty, return -1.

//     b. Create a step-by-step plan to solve the problem.
        // 1. If either string is empty, return -1.
        // 2. Create a pointer for each string.  Call them pointerH and pointerN, and make them equal to 0.
        // 3. Create a variable to hold first occurence of needle[0] called first
        // 4. Create a while loop to traverse haystack.
        // 5. If the value at pointerH is equal to the value at pointerN, then
        //     - if pointerN = 0,  make first = pointerH, 
        //     - add 1 to pointerH
        //     - add 1 to pointerN
        //     - if pointerN = needle.length-1, return first.
        // 6. Else simply allow the loop to continue without altering pointerN or first.
        // 7. If we haven't pointed to all characters in needle, return -1.
        // 8. Else return first.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// This solution passed many of the test cases, but not all of them
function iOfFirstInString(haystack, needle) {  //O(n) time where n is the length of the haystack string | O(1) space
    // If either strings are empty, return -1
    if (!haystack || !needle) return -1;
    // Create a variable to hold the index of the first occurrence
    // of needle.
    let first;
    // Create a variable to point to the index of haystack that 
    // we are evaluating, and make it equal to 0 (staring index)
    let pointerH = 0;
    // Create a variable to point to the index of needle that we
    // are evaluating, and make it equal to 0 (starting index)
    let pointerN = 0;
    // Traverse haystack
    while (pointerH < haystack.length) {
        // If the character at pointerH is equal to the character 
        // at pointerN...
        if (haystack[pointerH] === needle[pointerN]) {
        // If the character at pointerH is equal to the first 
        // character of needle, then store it in the first variable
            if (pointerN === 0) first = pointerH;
            // Advance pointerH by 1
            pointerH ++;
            // if pointerN is the last index of needle, 
            // return first
            if (pointerN === needle.length-1) return first;
            // Advance pointerN by 1
            pointerN ++;
        }
        // Otherwise, simply advance both pointers
        pointerH ++;
        pointerN ++;
    }
    // When you reach the end of haystack, if pointerN has not 
    // reached the last index of needle, return -1 because 
    // the entire needle string is not contained in haystack.
    if (pointerN !== needle.length-1) return -1;
    // Otherwise return first, because we know we have checked
    // that all characters in needle are contained in haystack.
    return first;
}

function iOfFirstInString2(haystack, needle) { // O(n*m) time | O(1) space
    // If haystack is shorter than needle, return -1
    if (haystack.length < needle.length) return -1;

    // Initialize pointers for the index of the first occurrence /
    // of needle (firstIdx), the value we are evaluating in haystack
    // (pointerH), and the value we are evaluating in needle 
    // (pointerN)
    let firstIdx = 0;
    let pointerH = 0;
    let pointerN = 0

    // While the index of the first occurrence of needle is less than
    // the length of haystack
    while (firstIdx < haystack.length) {
        
        // While the values at the indexes of the two pointers are  //
        // equal
        while (needle[pointerN] == haystack[pointerH]) {
            // advance the two pointers by 1
            pointerN ++;
            pointerH ++;
            // If pointerN is pointing to the value just after 
            // the last value in needle, return firstIdx
            if (pointerN == needle.length) return firstIdx;
            // If pointerH is pointing to the value just after
            // the last value in haystack, return -1
            if (pointerH == haystack.length) return -1;
        } 
        // If the values at the indexes of the two pointers are not 
        // equal
        if (needle[pointerN] != haystack[pointerH] )
            // Advance firstIdx by 1
            firstIdx++;
            // Set pointerH equal to the index that firstIdx is now
            // pointing to
            pointerH = firstIdx;
            // Set pointerN back to 0
            pointerN = 0;
    }
    // If our comparisons bring the index of firstIdx beyond the end 
    // of haystack, return -1
    return -1;
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