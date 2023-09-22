// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given an integer array nums and an integer val, remove all occurrences of val in nums 
//          in-place.  The order of the elements may be changed.  Then return the number of elements
//          in nums which are NOT equal to val.
//          Consider the number of elemens in nums which are not equal to val to be k.  To get accepted
//          you need to do the following things:
//              - Change the array nums such that the first k elements of nums contains the elements 
//                which are not equal to val.  The remaining elements of nums are not important as well
//                as the suze of nums
//              - Return k.
    

// CONSTRAINTS: 0 <= nums.length <= 100
//              0 <= nums[i] <= 50
//              0 <= val <= 100     
   
// EXAMPLES GIVEN:   Input: nums = [0,1,2,2,3,0,4,2], val = 2
//                   Output: 5, nums = [0,1,4,0,3,_,_,_]
//                   Explanation: Your function should return k=5, with the first five elements of nums
//                                containging 0, 0, 1, 3, and 4.  Note that the five elements can be 
//                                returned in any order.  It does not atter what you leave beyond the 
//                                the returned k.

//                   Input: nums = [3,2,2,3], val = 3
//                   Output: 2, nums = [2, 2, _, _]
//                   Explanation: Your function should return k=2, with the first two elements of nums
//                                being 2.  It does not matter what you leave beyond the returned K.

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//      Given an array of integers and an integer value, remove all occurrences of the integer value
//      without creating a new array (i.e. don't use filter or map). Return the number of items left
//      in the array once all occurrences of val are removed, as well as the mutated array
        
//     b.  WHAT ARE THE INPUTS?
//          An array of integers and an integer value
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          An integer representing the number of values left in the array after all occurrences of val
//          are removed, as well as the newly-mutated array
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//          Might the array be empty?  
//          Might val not be in the array at all?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES

//      Input: nums = [3,2,4,4,6,4,7], val=4        Input: nums = [-2, 3, -3, -1, 5, 3], val=3
//      Output: 4, nums = [3,2,6,7,_,_,_]           Output: 4, nums = [-2, -2, -1, 5,_,_]

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//         If the array is empty, return 0 and an empty array
//         If val is not in the array, return the length of the array and the original array
       
//     b. Create a step-by-step plan to solve the problem.
//          My intuition is to traverse the array, and use array.remove() when we encounter val, 
//          and to have a count that increments each time an element is removed. Once the entire 
//          array is traversed and the elements are removed, we can sort the array and then return
//          the array along with count.  * Actually count is not necessary, as we will get the length 
//          of the mutated array at the end

//       
//      1. Set up a for-loop to traverse the array
//      2. If the value at i is equal to val, use array.splice() to remove that element
//      4. Decrement i by one so that when i increments automatically it accounts for the indes just removed.
//      5. When the loop is finished, create variable k and set it equal to nums.length.
//      6. Return k and the sorted array.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n) time - because we must traverse the entire array
// O(1) space - because we do not create any data structures that grow with the length of the input
function removeElement (nums, val) {
    for (let i=0; i<nums.length; i++) {
        // If the value at i is equal to val 
        if (nums[i] == val) {
            // Use array.splice() to remove it
            nums.splice(i, 1);
            // decrement i by 1 since we removed an element.  Otherwise it will skip over the next element.
            i--;
        }
    }
    // Create variable k and set it equal to the length of nums
    let k = nums.length;
    // return k
    return k;
}

let nums = [3,2,4,4,4,6,7]
let val = 4
removeElement(nums, val);

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?