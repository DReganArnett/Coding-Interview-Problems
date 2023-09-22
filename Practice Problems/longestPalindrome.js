// FROM: LeetCode   
// LEVEL: Easy

// PROBLEM: Given a string s which consists of lowercase or uppercase letters, return the length of the 
//          longest palindrome that can be built with those letters. 
//          Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// CONSTRAINTS: 1 <= s.length <= 2000
//              s consists of lowercase and/or uppercase English letters only.
   
// EXAMPLES GIVEN:  
//        Case #1:  Input: s = "abccccdd"
//                  Output: 7
//                  Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

//        Case #2   Input: s = "a"
//                  Output: 1
//                  Explanation: The longest palindrome that can be built is "a", whose length is 1.
// -----------------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//      We are given a string of lowercase and uppercase letters.  We must return the length of the longest 
//      palindrome that can be created from the letters in the string
        
//     b.  WHAT ARE THE INPUTS?
//          a string
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          an integer 
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//      No questions for this one
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES

//  Case #3: Input: s = 'aabaacaab' 
//           Output: 9
//           Explanation: 'aabacabaa' is a palindrom that can be made with all of the letters from input s    

//  Case #4: Input: s = ''
//           Output: 0
//           Explanation: Because string s is empty, no palindromes can be made from 0 characters, so return 0

//  Case #5: Input: 'aabbbccccde'
//           Output: 9   
//           Explanation: 'acbcbcbca' OR 'acbcdcbca' OR 'acbcecbca' are all palindromes of length 9 made with the input

//  Case $6: Input: "aaBbccDe"
//           Output: 5 
//           Explanation: "acBca", "cabac", "acDca", and 'caeca' are all palindromes of length 5 that can be made with the input

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          If the length of the string is 0, return 0
//          If the length of the string is 1, return 1
//          If the length of the string is two and the two characters are not strictly equal, return 0
       
//     b. Create a step-by-step plan to solve the problem.

//          1. Create a hashmap using a pojo. This will store the frequency of each character in the string with 
//             character as key and the frequency count as value
//          2. Create a counter called lengthOfLongest and initialize to zero. This will keep track of the characters that would be a part 
//             of any palindrome created by the characters in the string
//          3. Iterate through the string, if the character is not already in the hashmap, add it with a count of 1. 
//             If the character is already in the hashmap, add one to the count.
//          4. Create a counter called leftovers and set it equal to 0.  This will keep track of the number of characters 
//             left over after each count is determined to be divisible by 2.  (If the count is divisible by two, it means 
//             that all of that character should be counted towards the length of the longest palindrome)
//          5. Once the loop terminates, create an array of all of the values using Object.values
//          6. Iterate through the values array.  For each count, determine if it is divisible by two.  
//          7. If the value is divisible by two, add the entire value to lengthOfLongest.
//          8. If the value is not divisible by two, add the value-1 to lengthOfLongest and add one to leftovers     
//          9. Once we have iterated through the entire values array, if leftovers equal 0, return lengthOfLongest
//          10. Else, return lengthOfLongest+1;  

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// O(n) time - where n is the length of the input string. This is because the 
//      function iterates through the input string once to count the occurrences 
//      of each character.

// O(k) space - where k is the number of unique characters in the input string. 
//      This is because the function uses an object (charCounts) to store the 
//      counts of each character. In the worst case scenario, where all characters 
//      in the input string are unique, the object will have k key-value pairs.

function lengthOfLongestPalindrome(s) {
    let charCounts = {};
    let lengthOfLongest = 0;
    for (let i=0; i<s.length; i++) {
        if (!charCounts[s[i]]) {
            charCounts[s[i]] = 1;
        } else {
            charCounts[s[i]] = charCounts[s[i]]+ 1;
        }
    }
    //console.log('charCounts: ', charCounts);
    let counts = Object.values(charCounts);
    let leftovers = 0;
    for (let i=0; i<counts.length; i++) {
        if (counts[i] % 2 === 0) {
            lengthOfLongest += counts[i];
        } else if (counts[i] % 2 !== 0) {
            lengthOfLongest += Math.trunc(counts[i] / 2) * 2
            leftovers ++;
        }
    }
    // console.log('counts: ', counts);
    // console.log('leftovers: ', leftovers);
    if (leftovers === 0) {
        return lengthOfLongest;
    } else {
        return lengthOfLongest + 1;
    }
}


// // Case #1:   Solution: 7    Pass? Y
// let s = "abccccdd"
// console.log(lengthOfLongestPalindrome(s));

// // Case # 2:  Solution: 1    Pass? Y
// s = s = "a"
// console.log(lengthOfLongestPalindrome(s));

// // Case # 3:   Solution: 9   Pass? Y
// s = 'aabaacaab'
// console.log(lengthOfLongestPalindrome(s));

// // Case # 4:   Solution: 0   Pass? Y
// s = s = ''
// console.log(lengthOfLongestPalindrome(s));

// // Case # 5:   Solution: 9   Pass? N
// s = 'aabbbccccde'
// console.log(lengthOfLongestPalindrome(s));

// // Case # 6:   Solution: 5   Pass? Y
// s = "aaBbccDe" 
// console.log(lengthOfLongestPalindrome(s));

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?