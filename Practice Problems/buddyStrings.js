// FROM : Leetcode
// LEVEL: easy

// PROBLEM: Given two strings 's' and 'goal, return true if you can swap two letters in 's' so the 
//          result is equal to 'goal'.  Otherwise return false.
//          Swapping letters is defined as taking two indices i and j and swapping the characters 
//          at s[i] and s[j].
    

// CONSTRAINTS: 1 <= s.length, goal.length <= 2 * 104
//              s and goal consist of lowercase letters.
   
// EXAMPLES GIVEN: 
//          INPUT: s = 'ab', goal = 'ba'
//          OUTPUT: true
//          EXPLANATION: You can swap s[0]='a' and s[1]='b' to get 'ba', which is 
//                       equal to goal.

//          INPUT: s='ab', goal='ab'
//          OUTPUT: false
//          EXPLANATION: The only letters you can swap are s[0]='a' and s[1]='b', which results
//                       'ba', which !== 'ab'.

//          INPUT: s='aa', goal='aa'
//          OUTPUT: true
//          EXPLANATION: You can swap s[0]='a' and s[1]='a' to get 'aa' which === 'aa'

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Given two strings, figure out if there are two characters that can be swapped in order to 
//          make the first string equal to the second string
        
//     b.  WHAT ARE THE INPUTS?
//          two strings              
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          true or false
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//          Questions: 
//              ~ Are all characters letters? (wait, this is clarified in the constraints)
//              ~ Are 's' and 'goal' the same length? (I notice that all examples are of the same length)
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
//          INPUT: s='erut', goal='true'        INPUT: s='felsu', goal='false
//          OUTPUT: true                        OUTPUT: false
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  What do you notice about the problem.  Any patterns?
//         Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct?
//              * I'm going to assume s and goal are of the same length    
//              * Actually they would have to be the same length to get them to match by swapping two characters, 
//                  so if they are not of the same length, we can return false right away.      
//              * In order for there to be two letters that can be swapped to make the two strings equal, all other letters 
//                must be at the same index in both strings, so we could compare the characters at each index in the two strings,
//                If the two strings match exactly, then you can return true
//                If there is either only one index that doesn't match or more than two are not matches, then return false.
//                If there are exactly two indexes that don't match, determine if swapping the letters at those indexes
//                causes s and goal to be equal.  If so, return true, otherwise return false.
       
//     b. Create a step-by-step plan to solve the problem.
//          * My initial impulse: Loop through both strings to see if they have the same characters. However maybe it's possible to 
//          figure it out by looping through only s and then comparing the value of s at each index the value of goal at that same 
//          index to see if the characters match.
//          
//          * Another idea is to sort the two strings first. 
//          * After racking my brain, I found a solution that is similar to my initial impulse:

//          Step 1: First we return false if the two strings are not the same length, because if so, then there's no way to make them equal 
//                  by swapping two characters.
//          Step 2: Next think about  the two possible cases: either s === goal OR s !== goal
//                  If s === goal...
//          Step 3: Check to see if there are any duplicate values in s.  To do this, convert s to a Set (and call this set 'noDupes') and 
//                  find the number of elements in the Set.  
//          Step 4: Compare the number of elements in noDupes with the length of s.  If they are not equal, it means that there are, in fact,
//                  duplicates in s, which means that it is possible to maintain s === goal by swapping the duplicates with one another, so we
//                  return true. If the Set and s are equal, then it means that there are no duplicates in s, so swapping two elements will cause 
//                  s to no longer be equal to goal, so we return false.
//          Step 5: Now we examine the case where s !== goal.  We initialize an empty array to store the indexes where the values of the two strings
//                  do not match (call it difIdxs).
//          Step 6: Then we loop through s, and compare the value of s at the current index, (i), with the value of goal at the current index.
//          Step 7: If they don't match, we push the current index (i) into difIdxs.  
//          Step 8: When the loop finishes, check the length of difIdxs.  If the length is greater than 2, then return false because it will not be
//                  possible to make s === goal by swapping two elements since there are more than two elements between the two strings that are different.
//          Step 9: If the length of difIdxs === 2, then that means that there are exactly two indexes that do not match between the two strings.  If 
//                  swapping the values at those indexes makes s === goal (meaning the value of s at the first index in diffIdxs is equal to the value of 
//                  goal at the second index in diffIdxs AND vice versa, then return true.  Otherwise return false

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function buddyStrings(s, goal) {
    if (s.length !== goal.length) return console.log(false);
   
    if (s === goal) {
        let noDupes = new Set([...s]).size;
        return noDupes !== s.length;
    }

    let difIdxs = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] !== goal[i]){
            difIdxs.push(i);
        }
        if (difIdxs.length > 2) return false; 
    }
    return (difIdxs.length == 2) && (s[difIdxs[0]] == goal[difIdxs[1]]) && (s[difIdxs[1]] == goal[difIdxs[0]]);
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