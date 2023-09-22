// FROM: Springboard
// LEVEL: none given

// PROBLEM: Write a function called sameFrequency.  Given two positive integers, find out if the two numbers have the same 
//          frequency of digits
    

// CONSTRAINTS: Time complexity: O(N+M)
   
// EXAMPLES GIVEN:
            // sameFrequency(182,281) // true
            // sameFrequency(34,14) // false
            // sameFrequency(3589578, 5879385) // true
            // sameFrequency(22,222) // false
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//             Given two numbers, determine if they have the same number of each digit
        
//     b.  WHAT ARE THE INPUTS?
//              Two integers
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//              true or false
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//              yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//              two objects: freq1 and freq2
        
// 2.  EXPLORE CONCRETE EXAMPLES
       //  sameFrequency(3774, 4737) // true
       //  sameFrequency(228, 882) // false
       //  sameFrequency(117, 17) // false

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//            If the two numbers do not have the same number of digits, return false
       
//     b. Create a step-by-step plan to solve the problem.
           // 1. Convert the two integers to strings
           // 2. Determine if the two strings have the same number of digits.  If not, return false.
           // 3. Initialize two objects to count the frequency of digits in each number, freq1={}, freq2={}
           // 4. Loop through each string, adding each digit to the frequency counter with a count of 1 if they don't exist
           //       yet, or adding one to the count if they do exist.  
           // 5. Compare the counts of the digits in the two objects.  
           // 6. Loop through the first frequency counter and compare the freqA[key] to freqB[key].
           // 7. If any of the keys are not equal, return false
           // 8. If the loop exits without returning false, return true


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY


function sameFrequency(a, b) {
    // convert the input integers into strings
    let strA = a.toString()
    let strB = b.toString();
    // If the two strings are not the same length, return false
    if (strA.length !== strB.length) return false;
    // Initialize two objects to keep track of the frequencies of the digits
    let freqA = {};
    let freqB = {};
    // Loop through strA and add each digit to the frequency counter.
    // If the digit doesn't yet exist, add it with a count of 1, otherwise increment 
    // the count by 1
    for (let i=0; i<strA.length; i++) {
        freqA[strA[i]] = (freqA[strA[i]]++ || 1);   
    }
    // Loop through strA and add each digit to the frequency counter.
    // If the digit doesn't yet exist, add it with a count of 1, otherwise increment 
    // the count by 1
    for (let j=0; j<strB.length; j++) {
        freqB[strB[j]] = (freqB[strB[j]]++ || 1);
    }
    // compare the frequencies of each digit in the two strings.
    // If they are not equal, return false, otherwise return true.
    for(let key in freqA) {
        if(freqA[key] !== freqB[key]) return false;
    }
    return true
}

let a=3774
let b=3747
sameFrequency(a, b)



// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
            // I'm stuck at the part where we compare the two frequency counters
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?