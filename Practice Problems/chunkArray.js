// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given an array arr and a chunk size, return a chunked array.  A chunked array contains
//          the original elements in arr, but consists of subarrays each of length size.  The length
//          of the last subarray may be less than size if arr.length is not evenly divisible by size.
//          You may assume the array is the ouput of JSON.parse.  In other words, it is valid JSON
//          Please solve it without using lodash's _.chunk function.
    

// CONSTRAINTS:
//              arr is a valid JSON array
//              2 <= JSON.stringify(arr).length <= 105
//              1 <= size <= arr.length + 1
   
// EXAMPLES GIVEN:  Input: arr = [1,2,3,4,5], size = 1
//                  Output: [[1], [2], [3], [4], [5]]
//                  Explanation: The array has been split into subarays each with 1 element

//                  Input: arr = [1,9,6,3,2], size = 3
//                  Output: [[1,9,6], [3,2]
//                  Explanation: The array has been split into subarrays with 3 elements, however, 
//                               only two elements are left for the last array

//                  Input: arr = [8,5,3,2,6], size = 6
//                  Output: [[8,5,3,2,6]]
//                  Explanation: Size is greater than arr.length, so all elements are in the first 
//                               subarray

//                  Input: arr = [], size = 1
//                  Output: []
//                  Explanation: There are no elements to be chunked, so an empty array is returned

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//     We are given an array and an integer.  We must divide the original array up into subarrays that 
//     have a size equal to that number. If the length of the array is not divisible by the integer, than
//     the final subarray  may be smaller than size if the rest of the subarrays are equal to the inteer
        
//     b.  WHAT ARE THE INPUTS?
//      An array and an integer
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//      An array of subarrays

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//      I would ask what to do if the input array is smaller than the size integer

        
// 2.  EXPLORE CONCRETE EXAMPLES

//  Input: arr = [1,2,3,4,5,6,7,8], size = 2
//  Output: [[1,2],[3,4],[5,6],[7,8]]
       
//  Input: arr = [a,b,c,d,e,f,g], size = 2
//  Output: [[a,b], [c,d], [e,f], [g]]

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//      First create an array to hold the subarray.  Then iterate through arr using a while loop. 
//      Use array.slice() to slice arr into arrays with length=size and push them to the new array.
//      Return the new array.

//      1. Create a new array called chunksArr
//      2. Create a variable called numSubArrs and set it equal to the length of arr divided by size,
//         and then truncated.  
//      3. Create a while loop that runs while chunksArr.length is less than numSubArrs
//      4. Inside the while loop, use arr.splice(0,size) and then push the result into chunksArr
//      5. Once the while-loop is finished, push arr into chunksArr
//      6. Return  chunksArr

//     b. Create a step-by-step plan to solve the problem.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n) time | O(n) space

function chunk(arr, size) {
    // If the input array is empty, return an empty array
    if (arr.length === 0) return [];
    // Create a new array called chunkArr to hold the subarrays
    let chunkArr = [];
    // Find the number of full-length subarrays that will be pushed to chunkArr
    let numSubarrays = Math.trunc(arr.length/size);
    // If size is 1
    if (size === 1) {
        // Loop through arr and push each element as it's own array into chunkArr
        for (let i=0; i<arr.length; i++) {
            chunkArr.push([arr[i]])
        }
        // When the loop finishes, return chunkArr
        return chunkArr;
    }
    // If size is not 1, create a while-loop that runs while the length of chunkArr is less than numSubarrays
    while (chunkArr.length <= numSubarrays) {
        // Use array.splice to splice pieces off of arr whose length is equal to size, starting at the beginning
        chunkArr.push(arr.splice(0,size));
    }
    // If the length of the last subarray in chunkArray is less than one (if it is an empty array), pop it off
    if (chunkArr[chunkArr.length-1].length<1) chunkArr.pop()
    // Return chunkArr
    return chunkArr
}

// Here is a much shorter solution that does the same thing! Same time and space complexity though.
function chunk(arr, size) {
    // Create an empty array to push the chunks into
    let chunkArr = [];
    // Create a while loop that runs while arr is not empty
    while(arr.length) {
        // Splice off chunks of length size from the begining of the array and push them to chunkArr
        chunkArr.push(arr.splice(0, size))
    }
    // Return chunkArr;
    return chunkArr
}

arr = [1,2,3,4,5,6,7], size = 2
//console.log(chunk(arr, size))

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