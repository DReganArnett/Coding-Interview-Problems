// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the head of a singly linked list, reverse the list and return the reversed list.
    

// CONSTRAINTS: The number of nodes in the list is the range [0, 5000].
//              -5000 <= Node.val <= 5000
   
// EXAMPLES GIVEN:  Input: head = [1,2,3,4,5]       Input: head = [1,2]     Input: head = []
//                  Output: [5,4,3,2,1]             Output: [2,1]           Output: []
//  
//                  1 -➤ 2 -➤ 3 -➤ 4 -➤ 5           1 -➤ 2
//                            ⬇︎                      ⬇︎
//                  5 -➤ 4 -➤ 3 -➤ 2 -➤ 1           2 -➤ 1
 
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//      We are given the head of a singly-linked list.  Return the head of the same list in reverse.   
//     b.  WHAT ARE THE INPUTS?
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//      A singly-linked list that is the reverse of the input linked list
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
//          Input: head = [2,1,7,3,8]       Input: head = [3]         Input: head = [2,1,7,9]
//          Output: [8,3,7,1,2]             Output: [3]               Output" [9,7,1,2]

//          2 -➤ 1 -➤ 7 -➤ 3 -➤ 8                                     2 -➤ 1 -➤ 7 -➤ 9  
//                    ⬇︎                                                      ⬇︎
//          8 -➤ 3 -➤ 7 -➤ 1 -➤ 2                                     9 -➤ 7 -➤ 1 -➤ 2

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          If the list is empty, return an empty array
//          If the list has only one item, return that item

//     b. Create a step-by-step plan to solve the problem.
//          I'm thinking that we could create a new array, iterate through the list and instead of using array.push() 
//          to add the items front to back, we could use array.unshift() to add them in back to front.
//        0. Account for above edge cases
//        1. Create a variable called reversedList and set it equal to an array containing the head of the list 
//        2. While-loop that runs while head is not null
//        3. Add head to reversedList by using reversedList.unshift(head)
//        4. Move on to the next node by setting head equal to head.next
//        5. When the entire list has been traversed (as in, when the while loop finishes), return reversedList

//      I couldn't get the above solution to work
// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function reverseList (head) {
   // Create a pointer called cur (for current), and set it equal to the head
   let cur = head;
   // Create a pointer called prev (for previous), and set it equal to null
   let prev = null;
   // Create a pointer called temp to store the cur.next value while we reassign the pointers as we traverse the list.  Set it equal to null
   let temp = null;
   // Create a while-loop that runs while cur is not null
   while (cur) {     
       // Re-assign cur.next to temp so we don't lose the value as we move pointers around
       temp = cur.next;    
       // Our cur.next becomes prev
       cur.next = prev  
       // Our prev become cur
       prev = cur;     
       // cur becomes the temp value we saved as we advance to the next node in the list
       cur = temp;              
  }
  // When we finish traversing the list, return prev, which is the head of our reversed list
  return prev;
}

// Reverse a linked list in place.
//    let curr = head
// 1. create a prev node and set equal null
// 2. create temp node and set equal to head.next
// 2. prev = head
// 2. head = temp
// 3. 

// function revLL(head) {
//     let curr = head
//     let temp = head.next
//     let prev = null
  
//     while (curr !== null) {
//       curr.next = prev;
//       prev = curr
//       curr = temp
//     
//     }
//     return prev;
//   }
  
//   console.log(revLL(head))


// Here is a recursive solution
// O(n) time where n is the number of nodes in the linked list (since we traverse the entire list)
// O(n) space since we make n recursive calls and so it uses n amount of space on the call stack.

function reverseList2(head, prev = null) {
    // If the head of the list is empty, return null
    if (!head) return prev;
    // Save head.next to next for later use
    const next = head.next;
    // reassign head.next to be the new prev
    head.next = prev;
    return reverseList2(next, head);
}




// function reverseList (head) {
//     if (!head) return null;
//     let reversedVals = [];
//     let reversedList = new ListNode(0, null);
//     while (head !== null) {
//         reversedVals.unshift(head.val);
//         head = head.next
//         console.log('reversedVals: ', reversedVals)
//     }
//     for (let i=0; i<reversedVals.length; i++) {
//         let nextNode = new ListNode(reversedList[i], null);
//         reversedList.next = nextNode;
//     }
//     console.log('reversedList: ', reversedList)
//     reversedList.head = reversedList.next;
//     return reversedList;
// }

let head = [1,2,3,4,5];
reverseList(head);

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?