// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the head of a singly linked list, return true if it is a palindrome, or else false.

// CONSTRAINTS: The number of nodes in the list is in the range [1, 105].
//              0 <= Node.val <= 9
   
// EXAMPLES GIVEN:  Input: head = [1,2,2,1]             Input: head = [1,2]
//                  Output: true                        Output: false

//                  1 > 2 > 2 > 1                           1 > 2

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//     Given the head of a singly linked list, return true if the values of the nodes in the list make 
//     a palindrome.  Otherwise return false
        
//     b.  WHAT ARE THE INPUTS?
//     The head of a singly linked list
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//     true or false
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//      No questions other than whether I should create classes for ListNode and LinkedList to build my examples.
         

// 2.  EXPLORE CONCRETE EXAMPLES

class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    addNode (val) {
        // create a new node
        let node = new ListNode(val);
        // create variable current
        let current;
        // if the head of the LL is null, make the new node the head
        if (this.head === null) {
            this.head = node;
        // otherwise   
        } else {
            // make current equal to the head
            current = this.head;
            // traverse the list until current.next is null
            while(current.next !== null) {
                current = current.next;
            }
            // and set current.next equal to the new node.
            current.next = node;
        }
        // Increment the size property of the list by one.
        this.size ++
    }
}
 


// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.
//  My approach is to create an empty array to push the list values to, and then check if the array is a palindrome by
//  using left and right pointers to iterate from the outside in, using a while loop that runs while left < right, 
//  checking if the left and right values are equal. If at any point during the loop the two pointers are not equal, then 
//  return false.  If the loop finishes without returning false, then return true.

//  1. Create an empty array called lLArr.
//  2. Create a pointer called current and set it equal to head
//  3. Create a while loop that runs while current.next is not null
//  4  At each iteration, push current.val to lLArr
//  5. Increment current by 1
//  6. Once the while loop has finished, create a left pointer and set it equal to 0
//  7. Create a right pointer and set it equal to the length of lLArr-1
//  8. Create a while loop that runs while left is less than right
//  9. If left and right are not equal, return false
// 10. Else increment left by 1 and decrement right by 1
// 11. If the while loop finishes without returning false, return true


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY





//  Create Test Cases: 

// 1 > 2 > 2 > 1 > null
let linkedList1 = new LinkedList();
linkedList1.addNode(1);
linkedList1.addNode(2);
linkedList1.addNode(2);
linkedList1.addNode(1);

// 1 > 2 > null
let linkedList2 = new LinkedList();
linkedList2.addNode(1);
linkedList2.addNode(2);

// 1 > 2 > 3 > 2 > 1 > null
let linkedList3 = new LinkedList();
linkedList3.addNode(1);
linkedList3.addNode(2);
linkedList3.addNode(3);
linkedList3.addNode(2);
linkedList3.addNode(1);

// 1 > 1> 2 > 3 > 1 > 1 > null
let linkedList4 = new LinkedList();
linkedList4.addNode(1);
linkedList4.addNode(2);
linkedList4.addNode(3);
linkedList4.addNode(1);
linkedList4.addNode(1);

// 1 > null
let linkedList5 = new LinkedList();
linkedList5.addNode(1);

// O(n) time - where n is the number of elements in the list.  This is because we iterate through the entirelist to create an array representationof the list.

// O(n) space - where n is the number of elements in the list.  This is because we create a new array that scales with the size of the input linked list.

var isPalindrome = function(head) {
    // Create an array called listArr to store the values of the list nodes
    let listArr = []
    // Create a pointer called current and point it to the head 
    let current = head;
    // While the node current points to is not null
    while (current !== null){
        //  Add the value of the node at which current is pointing to the listArr
        listArr.push(current.val)
        // Advance the current pointer to the next list node
        current = current.next
    }
    // Once the whole list has been traversed, create a pointer called left that points to the first index of the listArr
    let left = 0;
    // Create a pointer called right that points to the last index of listarr
    let right = listArr.length-1;
    // While left is less than right (meaning before they cross over one another)
    while (left < right) {
        // If the value at the left index is not equal to the value at the right index
        if (listArr[left] === listArr[right]) {
            // return false 
            return false;
        } else {
            // otherwise, increment left 
            left++;
            // decrement right
            right--;
        }
    }
    // if the while loop finishes without returning false, return true
    return true
};



// console.log('TEST CASE 1:')
// console.log('1 > 2 > 2 > 1 > null')
// console.log('Input: ', linkedList1.head)
// head = linkedList1.head
// solution = true
// console.log('solution: ', solution)
// output = isPalindrome(head);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');
// console.log('TEST CASE 2:')
// console.log('1 > 2 > null')
// console.log('Input: ', linkedList2.head)
// head = linkedList2.head
// solution = false
// console.log('solution: ', solution)
// output = isPalindrome(head);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');
// console.log('TEST CASE 3:')
// console.log('1 > 2 > 3 > 2 > 1 > null')
// console.log('Input: ', linkedList3.head)
// solution = true
// console.log('solution: ', solution)
// output = isPalindrome(head)
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');
// console.log('TEST CASE 4:')
// console.log('1 > 1> 2 > 3 > 1 > 1 > null')
// console.log('Input: ', linkedList4.head)
// head = linkedList4.head
// solution = false
// console.log('solution: ', solution)
// output = isPalindrome(head)
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');
// console.log('TEST CASE 5:')
// console.log('1 > null')
// console.log('Input: ', linkedList5.head)
// head = linkedList5.head
// solution = true
// console.log('solution: ', solution)
// output = isPalindrome(head)
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');


// TEST CASES: 

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