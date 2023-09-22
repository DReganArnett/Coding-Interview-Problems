// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the head of a sorted linked list, delete all duplicates such that each element
//          appears only once.  Return the linked list sorted as well.
    

// CONSTRAINTS:  The number of nodes in the list is in the range [0, 300].
//               -100 <= Node.val <= 100
//               The list is guaranteed to be sorted in ascending order.
   
// EXAMPLES GIVEN: Input: head = [1,1,2]        Input: head = [1,1,2,3,3]
//                 Output: [1,2]                Output: [1,2,3]
//                 
//                 1>1>2  => 1>2                1>1>2>3>3    =>  1>2>3
  

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Given the head of a sorted linked list, remove the duplicates and return the 
//          linked list
        
//     b.  WHAT ARE THE INPUTS?
//          The head of a sorted linked list
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          The sorted linked list with the duplicates removed

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
         
        
// 2.  EXPLORE CONCRETE EXAMPLES

//     Input: head = [3,3,5,6,6,7,8]                    Input: head = [1,1,1,1]
//     Output: [3,5,6,7,8]                              Output: [1]

//        3>3>5>6>6>7>8 => 3>5>6>7>8                    1>1>1>1> => 1

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.
//     Since the list is already sorted, we just need to iterate through the list and remove the dupes
//     as they come up.

//          1. If head.next = null, return head
//          2. Create a left pointer and set it equal to head
//          3. Create a right pointer and set it equal to head.next
//          4. If the value at left equals the value of right, then make head.next = head.next.next.
//          5. Else left  = left.next  and right = right.next

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY



// O(n) time - where n is the number of nodes in the linked list.  We traverse the entire list before returning, so that means the time complexity is O(n)
// O(1) space - because we do not create any data structures that scale with the input.

function removeDuplicates (head) {
    // We create a curr pointer and set it equal to head.  This variable will only be reassigned if we come across a duplicate
    let curr = head
    // We create a while-loop that runs while the node that curr is pointing to.   
    while (curr) {
        // If the next node after the curr node is not null AND it's value is the same as the value at curr node, then we've found a duplicate.
        if (curr.next !==null && curr.val === curr.next.val) {
            // We advance curr.next, while leaving curr where it is.  We are dropping the value at curr.next by reassigning curr.next to the following value and leaving curr where it is.
            curr.next = curr.next.next;
        }
        else {
            // If the value at curr is not equal to the value of curr.next, then we advance the curr pointer by one node and continue iterating through the list
            curr = curr.next 
        }
    }
    // Once we have traversed the whole list and dropped the duplicates, return the head
    return head;
};

  


// console.log ('TEST CASES:') 
// let head = [3,3,5,6,6,7,8]  
// console.log('TEST CASE 1:')
// console.log('head: ', head)
// solution = [3,5,6,7,8]    
// console.log('solution: ', solution)
// output = removeDuplicates(head);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }

// console.log('');
// head = [1,1,2]
// console.log('TEST CASE 2:')
// console.log('head: ', head)
// solution = [1,2]    
// console.log('solution: ', solution)
// output = removeDuplicates(head);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');


// console.log('');
// head = [1,1,2,3,3]
// console.log('TEST CASE 3:')
// console.log('head: ', head)
// solution = [1,2,3]    
// console.log('solution: ', solution)
// output = removeDuplicates(head);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log(''); 

// console.log('');
// head = [1,1,1,1]
// console.log('TEST CASE 4:')
// console.log('head: ', head)
// solution = [1]    
// console.log('solution: ', solution)
// output = removeDuplicates(head);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log(''); 

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient? -->