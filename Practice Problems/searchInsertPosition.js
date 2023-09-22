// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given a sorted array of distinct integers and a target value, return the index if the 
//          target is found.  If not, return the index where it would be if it were inserted in order.
//          Your algorithm must run with o(log n) time complexity.

// CONSTRAINTS:  1 <= nums.length <= 104
//               -104 <= nums[i] <= 104
//               nums contains distinct values sorted in ascending order.
//               -104 <= target <= 104
   
// EXAMPLES GIVEN:  Input: nums = [1,3,5,6], target = 5        Input: [1,3,5,6], target = 2
//                  Output: 2                                  Output: 1

//                  Input: nums = [1,3,5,6], target = 7
//                  Output: 4          

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//        We are given a sorted array of integers, and a target integer value.  We must return the index
//        of the target if it is in the array, and if not, we should return the index of where it would
//        go, were we to insert it into the array and keep the array sorted.
        
//     b.  WHAT ARE THE INPUTS?
//         An array of integers sorted from least => greatest, and a target integer
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//         An integer value that represents the index where the target is, or where it should be placed
       
//     d.  DO I HAVE ENOUGH INFORMATION?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
//      Input: nums = [2,4,6,8,9], target = 6           Input: [2,4,6,8,9], target = 1
//      Output: 2                                       Output: 0

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          If the target value is less than the value at nums[0], return 0
//          If the target value is more than the value at nums[nums.length-1] return nums.length

//     b. Create a step-by-step plan to solve the problem.
//         A divide and conquer approach makes the most sense to me
//         1. Account for edge cases above
//         2. Create a left pointer and a right pointer
//         3. Find the middle index of nums, and save it to variable midIdx
//         4. Create a while loop that runs while the left and right pointers are not equal
//         4. Check to see if target is equal to nums[midIdx].  If so, return midIdx
//         5. Else if target is less than midIdx, then make right pointer = midIdx-1
//         6. Else if target is more than midIdx, then make left pointer = midIdx +1
//         7. If the two pointers meet before an index is returned (meaning, once the while loop has finished)
//         8. If target is greater than the value at the index where the two pointers met, return pointerIdx +1
//         9. If the target is less than the value where the two pointers met, return pointerIdx -1. 

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(log n) time - because it uses binary search to find the target position in the sorted array. 
//                 In each iteration of the while loop, the search space is divided in half, resulting in a 
//                 logarithmic time complexity.

// O(1) space - The space complexity of this function is O(1) because it only uses a constant amount of extra 
//              space to store the left pointer, right pointer, and midIdx variables.
function searchInsertPosition(nums, target) {
    // Create a left pointer set equal to 0 
    let leftPointer = 0;
    // Create a right pointer set equal to nums.length-1
    let rightPointer = nums.length - 1;
    // Create a while-loop that runs while the left pointer is less than or equal to the right pointer
    while(leftPointer <= rightPointer){
        // Calculate the middle index
        let midIdx = Math.floor(leftPointer + (rightPointer-leftPointer)/2);
        // if the value at midIdx equals the target
        if(nums[midIdx] == target){
            // return midIdx
            return midIdx;
        // else if the value at midIdx less than the target
        } else if (nums[midIdx] < target){
          // set leftPointer equal to midIdx+1
          leftPointer = midIdx + 1;
          // else 
        } else {
            // set the right pointer equal to midIdx-1
           rightPointer = midIdx - 1;
        }
    }
    // If the while loop finishes without returning anything, return the leftPointer
    return leftPointer;
}

// Here's another solution from Leetcode that it much simpler, but slightly slower and takes up more space.
// O(n log n) time -  because it uses the sort method, which has a time complexity of O(n log n). 
// O(n) space -  because it creates a new array with the spread operator.
function searchInsert (nums, target) {
    // Use array.includes() method to check if the target is in the array.   
    // If so, use array.indexOf(target) method to get the index of the target and return it
    if(nums.includes(target))return nums.indexOf(target); //returns index method//
    // If the target is not in the array, add it to the end of the array using the spread operator,
    // Then sort the array once again, and use array.indexOf(target) to get the index where the target is
    // and return it
    return [...nums, target].sort((a,b) => a-b).indexOf(target); //return where it shold be inserted//
}
nums = [1,3,5,6]
let target = 5
searchInsertPosition(nums, target)


// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?