// FROM: Leetcode
// Level: Easy

// PROBLEM: You are given two integer arrays, nums1 and nums2, sorted in non-decreasing order, and 
//          two integers, m and n, representing the number of elements in nums1 and nums2 respectively.
//          Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted 
//          array should not be returned by the function, but instead be stored inside the array nums1.
//          To accommodate this, nums1  has a length of m+n, where the first m elements denote the elements
//          that should be merged, and the last n elements are set to 0 and should be ignored.  nums2
//          has a length of n.
    

// CONSTRAINTS:     nums1.length == m + n
//                  nums2.length == n
//                  0 <= m, n <= 200
//                  1 <= m + n <= 200
//                  -109 <= nums1[i], nums2[j] <= 109

// EXAMPLES GIVEN:  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//                  Output: [1,2,2,3,5,6]
//                  Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//                  The result of the merge is [1,2,2,3,5,6] 

//                  Input: nums1 = [1], m = 1, nums2 = [], n = 0
//                  Output: [1]
//                  Explanation: The arrays we are merging are [1] and [].
//                  The result of the merge is [1].

//                  Input: nums1 = [0], m = 0, nums2 = [1], n = 1
//                  Output: [1]
//                  Explanation: The arrays we are merging are [] and [1].
//                  The result of the merge is [1].
//                  Note that because m = 0, there are no elements in nums1. The 0 is only there to 
//                  ensure the merge result can fit in nums1.

// --------------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
            // You are given two arrays of integers sorted in increasing order (nums1 and nums2), and an 
            // integer for each array representing the array's length (m and n).  Merge nums2 into nums1
            // and return nums 1.

//     b.  WHAT ARE THE INPUTS?
            // Two sorted arrays of integers and two integers representing the arrays' lengths

//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          // nums1
       
//     d.  DO I HAVE ENOUGH INFORMATION?
            // Yes, I think so.
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
            // INPUT: nums1 = [2, 4, 6, 0, 0], m = 3, nums2 = [3, 5], n=2 
            // OUTPUT: [2, 3, 4, 5, 6]
            // The result of the merge is [2, 3, 4, 5, 6]       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
            // If the nums2 array is empty, return nums1

//     b. Create a step-by-step plan to solve the problem.
        // 1. If nums2 is empty, return nums1
        // 2. Slice the 0's off of the end of nums 1 (last n indices)
        // 3. Loop through nums2
        // 4  Using array.splice(m, 1, nums2[i]), meaning we are removing 1 item at index m and  inserting
        //    nums2[i] at index m 
        // 5. Increment m by 1
        // 6. Sort nums 1
        // 7. Return nums 1

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// My initial solution - this solution works, but is slow  O(m+n) time || O(1) space
function mergeSortedArray(nums1, nums2, m, n) {
   if (nums2.length < 1) return nums1;
   nums1.slice(-n);
   for (let i=0; i<nums2.length; i++) {
    nums1.splice(m, 1, nums2[i]);
    m++;
   }
   nums1.sort((a,b) => a - b);
   return nums1;
}

let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]
mergeSortedArray(nums1, nums2);

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution? 
            // O(m+n) time || O(1) space

//     b. Are there parts of the solution that could be more efficient?
            // Yes. We are looping twice

//     c. Are there parts of the solution that could be shorter?
            // Not sure about that

//     d. Consider other approaches to the problem.  Are any of them more efficient?

            // Here is a three pointer solution from Leetcode that seems faster:

            // 1.  Initialize two pointers that point to the index of the last element of nums 1 (m) and the 
            //     index of the last element of nums2 (n): 
            //          let i = m-1
            //          let j = n-1
            // 2.  Initialize  a pointer that points to the very last index with a 0 of nums1 (which is where 
            //     the largest integer should eventually be placed).
            //          let k = m+n-1
            // 3.  Initialize a while loop that runs while both i and j are greater than or equal to 0
            //          while(i >== 0 && j >= 0){
            // 4.   Compare the value of the element at num1[i] and num2[j]. Remember both nums1 and nums2 are 
            //      sorted, and since our pointers are at the END of nums1 and nums2, then  num1[i] is the largest 
            //      element in nums1 and nums2[j] is the largest element in nums2.  
            //      
            //      If num1[i] is greater than or equal to num2[j], then that means that nums1[i] is the largest element
            //      between both nums1 and nums2, so it should be placed at nums1[k].  So...
            //          if(num1[i] >= num1[i])
            // 5.   ... then place num2[j] at num1[k].. 
            //          nums1[k] = nums1[i];
            // 6.   ... and subtract 1 i to move the pointers to the left by one index
            //          i--;      
            // 7.   Else, place nums2[j] at nums1[k]...
            //          nums1[k] = nums2[j];
            // 8.   ... and subtract 1 from both k and i to move the pointers to the left by one index
            //          j--;
            // 9.   Once either nums1[i] or nums2[j is placed at nums1[k], subtract 1 from k to move the pointer to the left 1 index
            // 10.  Repeat until EITHER i < 0 OR j < 0;
            // 11.  If either i or j is still >= 0 at the end of the first loop, then that means that there are still elements 
            //      that need to be processed.  In that case, we know that the remaining numbers were not large enough to be 
            //      placed during the previous while-loop, so we will continue to place each element at num1[k] and subtract 1 from
            //      both k and whichever nums array we are still working with. So...
            //          while (j >=0) {
            // 12. While j is still greater than or equal to 0, place nums2[j] at nums1[k]... 
            //          nums1[k] = nums2[j];
            // 13. ...and subtract 1 from both k and j.
            //          k--;
            //          j--;
            // 14. Conversely, while i is still greater than or equal to 0... 
            //          while (i >= 0){    
            // 15. ...place nums1[i] at nums1[k]...
            //          nums1[k] = nums1[i];
            // 16. ... and subtract 1 from both k and i.
            //          k--;
            //          i--;

function mergeSortedArray2(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    } 
    while (i >= 0){
        nums1[k] = nums1[i];
        k--;
        i--;
    }
};

