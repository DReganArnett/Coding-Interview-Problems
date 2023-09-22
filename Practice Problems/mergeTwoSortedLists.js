// FROM: Leetcode
// LEVEL: Easy

// PROBLEM:  You are given the heads of two sorted linked lists, list1 and list2.
//           Merge the two lists into one sorted list.  The list should be made by splicing together 
//           the nodes of the first two lists.  Return the head of the merged linked list.   
    

// CONSTRAINTS:  The number of nodes in both lists is in the range [0, 50].
//               -100 <= Node.val <= 100
//               Both list1 and list2 are sorted in non-decreasing order.
   
// EXAMPLES GIVEN:  INPUT: list1 = [1, 2, 4], list2 = [1, 3, 4]
//                  OUTPUT: [1, 1, 2, 3, 4, 4]

//                  INPUT: list1 = [], list 2 = []
//                  OUTPUT: []

//                  INPUT: list1 = [], list2 = [0]
//                  OUTPUT: [0]

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        //  Given the heads of two sorted linked lists, merge them into one sorted lists
//     b.  WHAT ARE THE INPUTS?
        // the heads of two sorted linked lists
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
        // the linked list resulting from merging the two lists
       
//     d.  DO I HAVE ENOUGH INFORMATION?
         // Yes
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES       
            // INPUT: list1 = [1,3,5], list2 = [2,4,6]
            // OUTPUT: [1,2,3,4,5,6]   
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          // If either list is empty, return the non-empty list
            // If both lists are empty, return an empty list
       
//     b. Create a step-by-step plan to solve the problem.
            // 1. If either list is empty, return the non-empty list
            // 2. If both lists are empty, return an empty list
            // 3. Initialize two pointers, and call them pointer1 and pointer2
            // 4. Compare the two input heads, and the one with the greatest value becomes the .next 
            //    node of the merged list.  
            // 
// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// ITERATIVE SOLUTION
//O(n) time - where n is the total number of nodes in both lists. This is because we iterate through 
//            both lists once, comparing the values and merging them into a new sorted list.

//O(1) space - because we only use a constant amount of extra space to store the new merged list. We do 
//             not create any additional data structures that grow with the input size.

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function mergeTwoSortedLists(list1, list2) {
    let firstNode = new ListNode(0, null);
    let currentNode = firstNode;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next
    }
    currentNode.next = list1 || list2;
    return firstNode.next;
}

// RECURSIVE SOLUTION
// O(m+n) time | O(m+n) space 
function mergeTwoLists(list1, list2) {
    // If either list is empty, return the non-empty list
    if (!list1 || !list2) return list1 || list2;
     // Create a variable to reference the head of the merged list
     let merged;
     // If the value of the current node of list1 is less than the current node of list2
     if (list1.val <= list2.val) {
         // Make merged (the current node of the merged list) equal to the value of the current node of list1
         merged = list1;
         // To get the next value in the merged list, recursively call mergeTwoLists with list1.next as the 
         // current list1 node and the same node as the current list2 node 
         merged.next = mergeTwoLists(list1.next, list2);
     // Else if the value of the current node of list2 is less than the current node of list1
     } else {
         // Make merged (the current node of the merged list) equal to the value of the current node of list2
         merged = list2;
         // To get the next value in the merged list, recursively call mergeTwoLists with the same node as the 
         // current list1 node and list2.next as the current list2 node
        merged.next = mergeTwoLists(list1, list2.next);
     }
     // Once you reach the end of both lists, return merged
     return merged;
}

// Here is another solution using swapping in place and recursion: O(m+n) time | O(m+n) space

function mergeTwoLists2(list1, list2) {
    // If either list is empty, return the other list
    if(!list1 || !list2) return list1 || list2;
    // If the value at the current node of list1 is greater than the value at the current node of list2
    if (list1.val > list2.val) {
        // swap the values in place
        [list1, list2] = [list2, list1]
    } 
    // Advance the current node of list1 to list1.next and recursively call mergeTwoLists2 with list1.next and list2
    list1.next = mergeTwoLists2(list1.next, list2);
    // return list1
    return list1
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


function ListNode(val, next) {
    this.val = (val === undefined ? 0: val)
    this.next = (next === undefined ? null : next)
}

// Step 1: Create a new ListNode with avalue of 0 and a next of null. 
//         Call it firstMergedNode
// Step 2: Create a variable called currentNode and set it equal to 
//         firstMergedNode.  This will be the currentNode of the merged
//         list to which we will be attaching the nodes from list1 and list2.
// Step 3: Create a while loop that runs while the nodes at list1 and 
//         list2 are not null
// Step 4: If the value at the node at list1 is less than or equal to the 
//         node at list2...
// Step 5: ... set currentNode.next equal to list1.  In this step we are 
//         attaching the first node from list1 to the merged list. The first 
//         node from list1 is now the next node after the firstMergedNode we
//         we created to start the merged list
// Step 6: Advance to the next node in list1 by setting list1 equal to
//         list1.next
// Step 7: Else if list2.val is the smaller node, make currentNode.next equal
//         to the node at list2
// Step 8: advance to the next node in list2 by setting list2 equal to
//         list2.next
// Step 9: When you reach the end of one of the lists, the while loop is finished.  
//         We then advance currentNode to the next node (whose value will be 
//         determined in the next step)
// Step 10: Set currentNode.next equal to whichever list has nodes left in it.
//          Tjos appends the entire rest of the list to the end of our merged list
// Step 11: Return the firstMergedNode.next because that new node we created at the 
//          beginning was only a placeholder to get the merged list started.  The
//          actual start of the merged list (the firstnode from the two lists we are
//          merging) is actually firstMergedNode.next, so we return it.

function mergeTwoLinkedLists(list1, list2) {
    /** Step 1 */   let firstMergedNode = new ListNode(0, null);
    /** Step 2 */   let currentNode = firstMergedNode;
    /** Step 3 */   while (list1 && list2) {
    /** Step 4 */       if (list1.val <= list2.val) {
    /** Step 5 */           currentNode.next = list1;
    /** Step 6 */           list1 = list1.next;
                        } else {
    /** Step 7 */           currentNode.next = list2;
    /** Step 8 */           list2 = list2.next;
                        }
    /** Step 9 */       currentNode = currentNode.next
                    }
    /** Step 10 */  currentNode.next = list1 || list2
    /** Step 11 */  return firstMergedNode.next;
}