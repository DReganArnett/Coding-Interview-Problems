// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the head of a linked list and an integer value, remove all of the node of the linked
//          list that have Node.val == val, and return the new head.
    

// CONSTRAINTS:  The number of nodes in the list is in the range [0, 104].
//               1 <= Node.val <= 50
//               0 <= val <= 50
   
// EXAMPLES GIVEN:   Input: head = [1,2,6,3,4,5,6], val = 6     Input: head = [], val = 1
//                   Output: [1,2,3,4,5]                        Output: []
//          
//                   1->2->6->3->4->5->6
//
//                      1->2->3->4->5

//                  Input: head = [7,7,7,7], val = 7
//                  Output: []
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          We are given the head of a linked list and a target value.  Find all occurrences of the
//          value and remove them from the linked list.  Return the head of the modified linked list
        
//     b.  WHAT ARE THE INPUTS?
//          The head of a linked list and a target integer value

//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          The head of the linked list after all occurrences of the target value have been removed

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//          I would ask if it is a singly or doubly linked list

        
// 2.  EXPLORE CONCRETE EXAMPLES
       
// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.
//   1. if head.val  ===  
//   1. Create a currentNode pointer and set it equal to head
//   2. Create a prevNode pointer and set it equal to null
//   3. Create a while loop that runs while currentNode is not null
//   4. If currentNode.next is not null and currentNode.val !== targetVal
//   5. PrevNode is reassigned to currentNode and currentNode is reassigned to currentnode.next
//   6. Otherwise reassign current to current.next (this drops the node at current)
//   7. Return head

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

//        h  h.n
//  null> 1 > 2 > 3 > 4 > 5 > null
//                        c     c.n
//                                 n
//        h
// null > 7 > 7 > 7 > null
//        

function removeElement(head, targetVal) {
    // While head is not null
    while (head) {
        // If the head node's value is equal to targetValue
        if (head.val === targetVal) {
            // Reassign head to head.next, which removes the current head
            head = head.next;
        } else {
            // Otherwise break out of the while-loop
            break;
        } 
    }
    // Create a pointer called curr and point it to head
    let curr = head;
    // While curr is not null and curr.next is not null
    while(curr !== null && curr.next !== null) {
        // Create a pointer called nextNode and point it to curr.next
        let nextNode = curr.next
        // If the value at nextNode is equal to the target value
        if (nextNode.val === targetVal) {
            // curr.next advances past the targetVal, while curr stays where it is, causing the targetVal to drop out
            // because the link from curr that was pointing to the targetVal is now pointing to the node following the targetVal
            curr.next = nextNode.next;
            nextNode = nextNode.next;
            // the loop continues
            continue;
        // If the value at nextNode is not equal to the target value
        } else {
        // Then curr and curr node both advance
        curr = curr.next;
        nextNode = nextNode.next;
        }
    }
    // When the while loop finishies (meaning curr and curr.next are both pointing to null), return the head
    return head
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