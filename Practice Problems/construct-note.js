// FROM: Springboard
// LEVEL: none specified

// PROBLEM: Build two frequency counters.  If any of the 'message' characters are not found in the 
//          'letters' characters, or if there are not enough of them, return false.  Otherwise return true.
    

// CONSTRAINTS: None given
   
// EXAMPLES GIVEN: None

// ----------------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Given two strings(?) called 'message' and 'letters', figure out if all of the characters in 'message'
//          are also present in 'letters'.  If so, return true.  If not return false.  If there are duplicate 
//          letters in 'message', then there must be the same number of that letter in letters in order for the 
//          function to return true.  Build two frequency counters to solve this probem.

//     b.  WHAT ARE THE INPUTS?
//          Two strings?  Perhaps two arrays?
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          true or false

//     d.  DO I HAVE ENOUGH INFORMATION?
//          The problem is pretty vague, so I'd have to ask some questions such as:
//            ~ What are the data types of the inputs?  Strings? Arrays? Sets?
//            ~ Can there be extra letters in 'letters', or must it have all the same letters as 'message'?
//            ~ Are there spaces in message and/or letters?

//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//          Since the problem requires two frequency counters, I would label them msgFreq and ltrsFre,
//          and I'd probably have them be JavaScript Objects.
        
// 2.  EXPLORE CONCRETE EXAMPLES
//          INPUTS: message = "hello world"
//                  letters = "lleoow rdlh"
//          OUTPUT: true

//          INPUTS : message = "no upper limits"
//                   letters = "nouerlimts"
//          OUTPUT: false
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  What do you notice about this problem?  What patterns to you see?
//         Can you eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//            If the length of 'letters' is less than the length of 'message', then the output is false.       

       
//     b. Create a step-by-step plan to solve the problem.
//            Step 1: Create two objects to store the letter: frequency pairs for 'message' and 'letters'
//            Step 2: Loop through 'letters' and 'message'
//            Step 3: Increment the count by 1 if the character exists in the counter object, or if the character
//                    isn't in the couter object yet, add it with a count of 1
//            Step 4: Compare the two counter objects.  Check that all letters from 'message' are present in 'letters'
//                    If not, return false, if so move on to the next step.
//            Step 5: Check that each character's count in 'letters' is greater than or equal to that same character's 
//                    count in 'message'.  
//            Step 6: If so, return true.  If not, return false


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function constructNote(message, letters) {
      let msgFreq = {};
      let ltrsFreq = {};
      if (message.length < letters.length) return false;
      for (let char of message) {
        msgFreq[char] = msgFreq[char]++ || 1;
        // console.log(msgFreq)
      }
      for (let char of letters) {
        ltrsFreq[char] = ltrsFreq[char]++ || 1;
        // console.log(ltrsFreq)
      }
      for (let char in msgFreq) {
        if ( !ltrsFreq[char]) {
          // return console.log(false)
        }
      }
      // return console.log(true);
}

// let message = "jupiter"
// let letters = "trepuji"
// constructNote(message, letters)

let message = "hello world"
let letters = "dlrowolleh"
constructNote(message, letters)


// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?







/**
 * Build two frequency counters. If any of the message characters are not
 *  found in the 'letters' characters, or if there are not enough of them,
 *  return false. Otherwise return true.
 */
// function constructNote(message, letters) {
//   const lettersFreq = {};
//   const messageFreq = {};

//   // build frequency counter of letters
//   for (let char of letters) {
//     lettersFreq[char] = ++lettersFreq[char] || 1;
//   }

//   // build frequency counter of message
//   for (let char of message) {
//     messageFreq[char] = ++messageFreq[char] || 1;
//   }

//   // final comparison of message frequency with letters frequency
//   for (let char in messageFreq) {
//     if (!lettersFreq[char]) {
//       return false;
//     }
//     if (messageFreq[char] > lettersFreq[char]) {
//       return false;
//     }
//   }

//   return true;
// }

