// FROM:
// LEVEL:

// PROBLEM: Given the array nums, obtain a subsequence of the array whose sum of elements is strictly 
//          greater than the sum of the non included elements in such subsequence. If there are multiple 
//          solutions, return the subsequence with minimum size and if there still exist multiple solutions, 
//          return the subsequence with the maximum total sum of all its elements. A subsequence of an array 
//          can be obtained by erasing some (possibly zero) elements from the array. 

//          Note that the solution with the given constraints is guaranteed to be unique. Also return the 
//          answer sorted in non-increasing order.
    
// CONSTRAINTS: 1 <= nums.length <= 500
//              1 <= nums[i] <= 100
   
// EXAMPLES GIVEN:

//  Input: nums = [4,3,10,9,8]
//  Output: [10,9] 
//  Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is 
//               strictly greater than the sum of elements not included. However, the subsequence [10,9] 
//               has the maximum total sum of its elements. 

//  Input: nums = [4,4,7,6,7]
//  Output: [7,7,6] 
//  Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly 
//               greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the 
//               subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence 
//               has to be returned in non-decreasing order.  

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//     We are given an array of numbers.  We must return a subsequence of numbers that is greater than 
//     the sum of the numbers not in the subsequence.  If there are multiple solutions, return the shortest
//     subsequence, and if there are still multiple solutions, return the one with the largest sum.
//     The nums in the subsequence should be returned in non-increasing order

//     b.  WHAT ARE THE INPUTS?
//      An array of numbers
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//      A subsequence of numbers whose sum is greater than the sum of the numbers that are not included 
//      in the subsequence
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//      I would ask what to return if there is only one item in the array.

             
// 2.  EXPLORE CONCRETE EXAMPLES

//      Input: nums = [1,7,5,2,8,9]
//      Output: [9,8]
//      Explanation: The subsequence, [9,8] has a sum of 17.  The sum of the rest of the elements is 15,
//                   which is strictly less than 17 (or 17 is strictly greater than 15.
       
//      Input: nums = [4,5,7,8,6]
//      Output: []
// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.

//   I'm thinking we should sort the array first, and then we can have two pointers, just one element
//   apart, which we can use to sum up the two largest elements.  We'll have the variables sumSub
//   as well as sumOfRest. We can get sum of two largest by using left and right pointers set equal to array[0] and array[1], 
//   and then we iterate through the remaining array elements to get the sumOfRest.  
//   If sumOfRest is larger than sumOfSub, then we try incrementing the right pointer by one and 
//   re-calculating the sumOfSub and sumOfRest to see if sumOfSub is larger.

//   There is probably a recursive solution that works well too

// nums = [4,3,10,9,8]  sortedNums = [10,9,8,4,3]

///     1. If the array's length is less than two, return -1
//     2. Sort the array
//     3. Create an empty array sub
//     3. Create two pointer, left at arr[0] and right at arr[1].
//     4. Create a variable called sumOfSub and set it equal to left + right
//     5. Create a variable called sumOfRest.
//     6. Iterate through the array beginning at index 3 and adding each value
//        to sumOfRest
//     7. When the loop finishes, compare sumOfSub to sumOfRest and if sumOfSub is greater than 
//        sumOfRest, push arr[right] and arr[left] into the sub array and return sub
//     8.  If sumOfRest is greater, increment right by 1 and re-calculate sumOfSub and sumOfRest 

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

var minSubsequence = function (nums) {
    nums.sort((a,b) => b-a) 
    let left = 0;
    let right = 1;
    let sub = [];
    let sumOfSub = nums[left] + nums[right];
    let sumOfRest = 0;
    for (let i=2; i<nums.length; i++) {
        sumOfRest += nums[i]
    }
    
    if (sumOfSub > sumOfRest) {
        sub.push(nums[left], nums[right]);
        return sub;
    } else {
        let third = right + 1
        sumOfSub = sumOfSub + nums[third]
        sumOfRest = sumOfRest - nums[third]
        console.log('nums: ', nums, 'sumOfSub: ', sumOfSub, 'sumOfRest: ', sumOfRest)
        sub.push(nums[third])
    }
    return sub
}

//  [8,7,6,5,]
nums = [4,4,7,6,7]
minSubsequence(nums)

// // TEST CASES: 

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