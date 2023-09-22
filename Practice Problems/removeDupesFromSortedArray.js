// FROM: Leetcode
// LEVEL: easy

// PROBLEM: Given an integer array, nums that is sorted in increasing order, remove the duplicates 
//            in-place such that each element appears only once.  The relative order of the elements
//            shoule be kept the same.  Return the number of unique elements in the array.  Consider 
//            the number of unique elements to be k
    

// CONSTRAINTS:   1 <= nums.length <= 3 * 104
//                -100 <= nums[i] <= 100
//                nums is sorted in non-decreasing order.
   
// EXAMPLES GIVEN:
//      Input: nums = [1,1,2]
//      Output: 2, nums = [1,2,_]
//      Explanation: Your function should return k=2, with the first two elements of nums being 1 and 2 respectively.  
//                   It does not matter what you leave beyond the return k.

//      Input: nums = [0,0,1,1,1,2,2,3,4,]
//      Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
//      Explanation: Your function should retur k=5, with the first five elements of nums being 0, 1, 2, 3 and 4 respectively.
//                   It does not matter what you leave beyond the returned k.
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//    a.  CAN I RESTATE THE PROBLEM?
//          Remove all duplicates in the array and return only unique numbers. This should be done in-place        
//    b.  WHAT ARE THE INPUTS?
//          An array of integers        
//    c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          The number of unique elements in the array
//    d.  DO I HAVE ENOUGH INFORMATION?
//           Yes         
//    e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//            Leetcode wants the number of unique elements to be called k        
// 2.  EXPLORE CONCRETE EXAMPLES
//            Input: [2,4,5,5,7,8,8,9]      Input: []           Input: [4]
//            Output: [2,4,5,7,8,9]         Output: []          Output: [4]

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//    a.  Can I eliminate the circumstances where the output would automatically be false? 
//        Alternatively, what would need to be true or false in order for the output to be correct? 
//          If the input array has 1 or fewer elements, return the input array.   
//    b. Create a step-by-step plan to solve the problem.
//          Step 1: Initialize variable i to equal 0, because the value at that index is the last unique element we've seen
//          Step 2: Create a for-loop beginning at index 1 to iterate through the whole array.  
//          Step 3: Compare the value of nums[i] to the value of nums[j].
//          Step 4: If they are equal, simply allow the loop to advance j by one index
//          Step 5: If they are not equal, increment i by one and update the value at nums[i] to be the value at nums[j] since the value at j is now the last unique element we've seen 
//          Step 5: When you reach the end of the array, return i+1 because that is that length of the modified array.

function removeDuplicatesFromSortedArray(nums) {
    // nums[i] represents the last unique element seen
    let i=0;
    // j represents the current element being examined
    for (let j=1; j<nums.length; j++) {
        // if the value at i is equal to the value at j, then we simply let the loop increment j by 1
        // if the value at i is NOT equal to the value at j...
        if (nums[i] !== nums[j]) {
            // ... then we increment i by 1
            i++;
            // and we update the value at nums[i] to equal the value at nums[j] since the value at j is now the last 
            // unique element we've seen 
            nums[i] = nums[j]
        }
    }
    // When we reach the end of the array, we return i+1 because it is the length of the modified array.
    return i+1;
}     


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//    a. Identify the part of the problem where you are stuck
    
//    b. Ignore that part and solve everything else

//    c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//    a. What is the time/space complexity for your solution?

//    b. Are there parts of the solution that could be more efficient?

//    c. Are there parts of the solution that could be shorter?

//    d. Consider other approaches to the problem.  Are any of them more efficient? -->
