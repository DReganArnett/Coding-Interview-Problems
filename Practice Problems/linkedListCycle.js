// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the head of a linked list, determine if the linked list has a cycle in it.
//          There is a cycle in a linked likst if there is some node in the list that can be reached
//          again by continuously following the next pointer.  Internally, pos is used to denote the
//          index of the node that tail's next pointer is connected to.  Note tat pos is not passed
//          as a parameter.  Return true if there is a cycle in the linked list.  Otherwise, 
//          return false.
    

// CONSTRAINTS:
   
// EXAMPLES GIVEN:

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

// O(n) time | O(n) space 
function linkedListCycle(head){
    // Create hashmap to store nodes we've visited
	let visited = new Set();
	// Create a variable for the current node we are evaluating
	let current = head;
	// Create a while loop to run while there is a current node in the list
	while(current){
		// If the current node is in the hashmap... 
		if(visited.has(current)){
			  // ...return true
				return true
			// else...
		} else {
			// ... add the current node to the hashmap
			visited.add(current); 
			// move on to the next node
			current = current.next;
		}
	}
	// If the while loop ends without returning true, return false.
	return false;
}

// Here's another solution that uses a slow and fast pointer:
// O(n) time (because we traverse the whole list) | O(1) space (because we did not create any data structures
// whose size is dependent on the size of the input)
function linkedListCycle(head) {
    // if the list is empty, return false
	if(head === null){return false}
	// Create a slow pointer and set it equal to head
    let slow = head;
	// Create a fast pointer and set it equal to head.next 
    let fast = head.next;
    // Create a while loop that runs while following conditions are NOT true:  	 // the nodes at fast and slow are equal, 
	// the node at fast is null, 
	// the node at fast.next is null
    while(!(fast === slow || fast === null || fast.next === null)){
		// increment slow by one node
        slow = slow.next;
		// increment fast by two nodes (twice as fast)
        fast = fast.next.next;
    }
	// If fast and slow are ever pointing to the same node, return true
    if(fast === slow){return true}
	// else return false
	return false
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