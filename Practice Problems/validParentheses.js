// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine 
//          if the input string is valid.

//          An input string is valid if:

//          Open brackets must be closed by the same type of brackets.
//          Open brackets must be closed in the correct order.
//          Every close bracket has a corresponding open bracket of the same type.

    

// CONSTRAINTS:
   
// EXAMPLES GIVEN:
//              Input: s = "()"         Input: s = "()[]{}"         Input: s = "(]"
//              Output: true            Output: true                Output: false

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        
//     b.  WHAT ARE THE INPUTS?
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
       
//     d.  DO I HAVE ENOUGH INFORMATION?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n) time - where n is the length of the input string. This is because the function iterates through 
//             each character in the string once.

//O(n) space - where n is the length of the input string. This is because the function uses a stack to 
//             keep track of the opening parentheses. In the worst case scenario, all characters in the 
//             string are opening parentheses, so the stack will have a maximum size of n.
function isValidParentheses(s) {
    // Split string into an array
    s = s.split("");
    // Create an empty stack
    let stack = [];
    // Iterate through s
    for (let i of s) {
        // If i is an open parentheses, push to stack
        if (i === "(" || i === "{" || i === "[") stack.push(i);
        // Define top as the last item in the stack array
        let top = stack[stack.length - 1];
        // If i is a close paren, and top is the corresponding opening paren
        if (i === ")" && top === "(" || i === "]" && top === "[" || i === "}" && top === "{") { 
            // pop the top item off of the stack
                stack.pop();
        } else {
            // otherwise return false
             return false;
        }    
        // End loop when stack is empty
        return stack.length === 0;
    }
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