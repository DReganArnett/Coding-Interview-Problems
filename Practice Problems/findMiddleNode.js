// FROM: AlgoExpert
// LEVEL: Easy

// PROBLEM: You're given a LinkedList with at least one node.  Write a function that returns the 
//          middle node of the LinkedList.  If there are two middle nodes (i.e., an even length
//          list), your function should return the second of these nodes. Each LinkedList node 
//          has an integer value as well as a next node pointing to the next node in the list or
//          to null if it's the tail of the list.
    

// CONSTRAINTS: Optimal Time & Space Complexity: O(n) time | O(1) space
   
// EXAMPLES GIVEN:  INPUT: linkedList = 2 -> 7 -> 3 -> 5
//                  OUTPUT: 3 -> 5

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        // Find the node in the very middle of the linkedList.  If the list has two middle nodes, 
        // return the second node
        
//     b.  WHAT ARE THE INPUTS?
        // A singley linkedList

//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
        // An integer 

//     d.  DO I HAVE ENOUGH INFORMATION?
        // I think so.  I might ask if we can assume that it's a singly linked list,
        // as well as clarify the format of the output.
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
        // INPUT: linkedList = 1 -> 2 -> 3 -> 4 -> 5
        // OUTPUT: 3
        
        // INPUT: 2 -> 4 -> 6 -> 8 -> 10 -> 12
        // OUTPUT: 6 -> 8
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.
        // 1. Initialize two pointers, one seeking the tail (tailSeeker), and one seeking the 
        //    middle (middleSeeker)
        // 2. Initialize a counter and set it equal to 0
        // 3. Use a while loop to that runs while tailSeeker is not null.
        // 4. Traverse the linkedList by advancing the tail seeker by two nodes per iteration, and 
        //    advancing the middleSeeker by one node per iteration. 
        // 5. Add 1 to count each time tail seeker advances one node
        // 6. Inside the while loop, after the tailSeeker has advanced by one node 
        //    and the count has been incremented by 1, check to see if tailSeeker.next is not null.
        // 7. If it is not null, advance both the tailSeeker and the middleSeeker by 1 and 
        //    increment the count by 1.
        // 8. If the tailSeeker.next is equal to null, break out of the while loop.
        // 9. Check to see if the count is odd.  
        // 10.If so, return middleSeeker.  
        // 11:If not, return middleSeeker AND middleSeeker.next.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
//  Here's my first attempt
//  function middleNode(linkedList) {
//     let count = 0;
//     let tailSeeker = linkedList.head;
//     let middleSeeker = linkedList.head;
//     while (tailSeeker !== null) {
//       tailSeeker = tailSeeker.next;
//       count += 1;
//       if (tailSeeker.next !== null) {
//         tailSeeker = tailSeeker.next;
//         count += 1;
//         middleSeeker = middleSeeker.next;
//       } else {
//         break;
//       }
//     }
//     if (count <= 1) return null;
//     if (count % 2 !== 0) {
//       return middleSeeker;
//     } else {
//       return middleSeeker.next;
//     }
//   }

// Below is the solution with one pointer and counter  
// O(n) time | O(1) space.  The time complexity is O(n)
// This is because we loop through the linked list 1.5 times, however, the loops are not nested, so 
// it is still O(n) time.  The space complexity is O(1) space because although we did create a
// counter, it does not scale with the length of the input, so the space complexity is constant.
function middleNode(linkedList) {
    // Initialize a count variable and set it to 0.  This will get the length of the 
    // linkedList after the while loop is finished.
    let count = 0;
    // Initialize a variable called currentNode to linkedList.
    let currentNode = linkedList;
    // Loop through the linkedList while the currentNode is not null
    while (currentNode !== null) {
        // Increment count by 1
        count += 1;
        // Advance the currentNode by 1
        currentNode = currentNode.next;
    }
    // Now, we know the length of the linkedList.  It is count
    // Initialize another variable called middleNode and set it equal to linkedList
    let middleNode = linkedList;
    // Loop through the first half of the linkedList
    for (let i=0; i<Math.floor(count/2); i++) {
        // Advance middleNode by 1 at each iteration
        middleNode = middleNode.next;
    }
    // When you reach the end of the loop, you are at the middleNode, so simply
    // return middleNode
    return middleNode;
  }

  // Below is the solution with a slow and a fast pointer.
  // O(n) time | O(1) space
  // This is because we loop through the entire linked list once, and although we did initialize two 
  // variables, they do not scale with the length of the input.
  function middleNode(linkedList) {
    // Initialize the two pointers.  Call one slow and the other fast because the fastNode
    // pointer will increment by 2 while the slowNode will increment by 1.
    let slowNode = linkedList;
    let fastNode = linkedList;
    // Loop through the linked list while both fastNode AND fastNode.next are not null
    while (fastNode !== null && fastNode.next !== null) {
        // Increment fastNode by two 
        fastNode = fastNode.next.next;
        // Increment slowNode by 1
        slowNode = slowNode.next;
    }
    // Because the fastNode travered the linkedList twice as fast as the slowNode, when the 
    // fastNode reaches the end of the linkedList, the slowNode will have travelled half
    // as far, putting it at the middle node, so we simply return slowNode. 
    return slowNode;
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