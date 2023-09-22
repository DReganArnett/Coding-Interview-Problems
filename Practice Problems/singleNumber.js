// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given a non-empty array of integers nums, every element appears twice except for one.
//          Find that single one.  You must implement a solution with a linear runtime complexity
//          and use only constant space.
    

// CONSTRAINTS: 1 <= nums.length <= 3 * 104
//              -3 * 104 <= nums[i] <= 3 * 104
//              Each element in the array appears twice except for one element which appears only once.
   
// EXAMPLES GIVEN:  Input: nums = [2,2,1]       Input: nums = [4,1,2,1,2]       Input: nums = [1]
//                  Output: 1                   Output: 4                       Output: 1
// ------------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//         We are given an array of integers called nums. Nums is not empty.  There is only one element 
//         that does NOT appear twice.  Return that element. It must run in O(n) time | O(1) space.
        
//     b.  WHAT ARE THE INPUTS?
//          An array of integers
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          an integer

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//          Yes

//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
//     Input: nums = [2,3,4,2,4]        Input: nums = [22, 5, 7, 22, 5]
//     Output: 3                        Output: 7       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//         If the input array contains only one element, return that element

//     b. Create a step-by-step plan to solve the problem.
//        Since this needs to use constant space, we cannot use a hash table to solve this problem.
//        We can try solving it with two pointers.

//      1.  Account for the edge case above.
//      2.  Sort the array
//      3.  Create two pointers called left and right. Set left equal to 0 and right equal to 1. 
//      4.  Create a while loop that runs while right is less than nums.length.
//      5.  Compare the values at the left and right pointers.  If the values at the pointers are 
//          equal, increment left and right each by two.
//      6.  If the values at the pointers are not equal, return the value at the left pointer.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n log n) time - where n is the length of the input array nums. This is because the function 
//            first sorts the array using the Array.prototype.sort() method, which has a time complexity 
//            of O(n log n). Then, it iterates through the sorted array once, which has a time complexity of O(n).

// O(1) space - because it only uses a constant amount of extra space to store the left and right pointers. 
//              The sorting is done in-place, so it does not require any additional space.

function singleNumber(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let left = 0;
    let right = 1;
    nums.sort((a,b) => a-b);
    while (right <= nums.length) {
        if(nums[left] === nums[right]) {
            left += 2;
            right += 2;
        } else {
            if (nums[right + 1] === null) {
               return nums[right]
            } else {return nums[left] }
        }
    }
}

// // TEST CASES: 

// console.log('TEST CASE 1:')
// nums = [4,1,2,1,2]
// console.log('nums: ', nums)
// solution = 4
// console.log('solution: ', solution)
// output = singleNumber(nums);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// console.log('TEST CASE 2:')
// nums = [2,2,1]
// console.log('nums: ', nums)
// solution = 1
// console.log('solution: ', solution)
// output = singleNumber(nums);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// console.log('TEST CASE 3:')
// nums = [1]
// console.log('nums: ', nums)
// solution = 1
// console.log('solution: ', solution)
// output = singleNumber(nums);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// console.log('TEST CASE 4:')
// nums = [2,3,4,2,4]
// console.log('nums: ', nums)
// solution = 3
// console.log('solution: ', solution)
// output = singleNumber(nums);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// console.log('TEST CASE 5:')
// nums = [22, 5, 7, 22, 5]
// console.log('nums: ', nums)
// solution = 7
// console.log('solution: ', solution)
// output = singleNumber(nums);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log('');

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?