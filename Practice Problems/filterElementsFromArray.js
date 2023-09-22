// FROM: Leetcode   
// LEVEL: Easy

// PROBLEM: Given an integer array arr, and a filtering function fn, return a filtered array
//          filteredArr.  The fn function takes in one or two arguments: 
//              - arr[i] - number from the arr
//              - i - index of arr[i]

//          filteredArr should only contain elements from the arr for which the expression 
//          fn(arr[i], i) evaluates to a truthy value.  A truthy value is a value where 
//          Boolean(value) returns true
//          PLEASE SOLVE IT WITHOUT THE BUILT-IN ARRAY.FILTER METHOD>

// CONSTRAINTS: 0 <= arr.length <= 1000
//              -109 <= arr[i] <= 109
   
// EXAMPLES GIVEN:  
//                  Input: arr = [0, 10, 20, 30], fn = function greaterThan10(n) { return n > 10; }
//                  Output: [20, 30]
//                  Explanation: const newArray = filter(arr, fn); // [20,30]
//                               The function filters out values that are not greater than 10

//                  Input: arr = [1,2,3], fn = function firstIndex(n, i) {return i === 0; }
//                  Output: [1]
//                  Explanation: fn can also accept the index of each element.  In this case, the 
//                               removes elements not at index 0

//                  Input: arr = [-2, -1, 0, 1, 2], fn = function plusOne(n) { return n+1 }
//                  Output: [-2, 0, 1, 2]
//                  Explanation: Falsey values such as 0 should be filtered out

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//        We are given an array of integers, and a function that evaluates to true or false.  We should 
//        create an algorithm that returns a array called filteredArr that contains ONLY the arr items 
//        that evalute to a truthy value
        
//     b.  WHAT ARE THE INPUTS?
//          An array of integers called array and a function that evaluates to a Boolean value        

//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          The filtered version of the input array called filteredArray that contains only the items
//          that return truthy from the given function
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//          I believe so.  

        
// 2.  EXPLORE CONCRETE EXAMPLES

//                  Input: arr = [1,2,3,4,5,6], fn = function isEven(n) { return n % 2 === 0}
//                  Output: [2,4,6]
//                  Explanation: All values that are not divisible by two should be filtered out
//
//                  Input: arr = [1, -2, -3, 0, 4, 5, -6, 7, -8], fn = function isNotNeg(n) { return n >= 0 }
//                  Output: [1,0,4,5,7]
//                  Explanation:  All negative values are filtered out

//                  Input: arr = [1, -2, 0, 4, 5, -6], fn = function squareNum(n) { return n^2 }
//                  Output: [1, -2, 4, 5, -6]
//                  Explanation: The only number that when squared evaluates to a falsey value is 0, so 
//                               the function should only filter out zeros


// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//      If the given array is empty, return an empty array
       
//     b. Create a step-by-step plan to solve the problem.

//          1. Create a variable called filteredArr and set it equal to an empty array
//          2. Create a for-loop to iterate through arr from front to back
//          4. At each iteration, put arr[i] through fn.  
//          5. If the return value is truthy, then push arr[i] to filtered arr
//          6. If the return value is falsey, move on
//          7. When the for-loop is finished (meaning we have iterated through all indices in arr),
//             return filteredArr

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n) time - where n is the length of the input array. This is because the function iterates through
//             each element of the array once in the for loop.

// O(m) space - where m is the number of elements that pass the filter condition. This is because the 
//              function creates a new array, filteredArr, to store the filtered elements. The size of 
//              this array depends on the number of elements that pass the filter condition.

// function filteredArr(arr, fn){
//     let filteredArr = [];
//     for (let i = 0; i<arr.length; i++) {
//         if (fn(arr[i], i)) {
//             filteredArr.push(arr[i])
//         } 
//     }
//     return filteredArr
// }


// O(n) time - where n is the length of the input array. This is because the function iterates through
//             each element of the array once in the for loop.

//O(1) space = because no new data structures are created.
function filteredArr(arr, fn){
    for (let i = arr.length-1; i>=0; i--) {
        if (!fn(arr[i], i) || !fn(arr[i]) || !fn(i)) {
            arr.splice(i,1)   
        }
    }
    return arr;
}

// // TEST CASES: 

//  console.log('TEST CASE 1:')
//  arr = [0, 10, 20, 30], fn = function greaterThan10(n) { return n > 10; }
//  console.log('arr : ', arr, 'fn: ', fn)
//  solution = [20, 30]
//  console.log('solution: ', solution)
//  output = filteredArr(arr, fn);
//  console.log('output: ', output)
//  console.log('');

//  console.log('TEST CASE 2:')
//  arr = [1,2,3], fn = function firstIndex(n, i) {return i === 0; }
//  console.log('arr : ', arr, 'fn: ', fn)
//  solution = [1]
//  console.log('solution: ', solution)
//  output = filteredArr(arr, fn);
//  console.log('output: ', output)
//  console.log('');

//  console.log('TEST CASE 3:')
//  arr = [-2, -1, 0, 1, 2], fn = function plusOne(n) { return n+1 }
//  console.log('arr : ', arr, 'fn: ', fn)
//  solution = [-2, 0, 1, 2]
//  console.log('solution: ', solution)
//  output = filteredArr(arr, fn);
//  console.log('output: ', output)
//  console.log('')

//  console.log('TEST CASE 4:')
//  arr = [1,2,3,4,5,6], fn = function isEven(n) { return n % 2 === 0}
//  console.log('arr : ', arr, 'fn: ', fn)
//  solution = [2,4,6]
//  console.log('solution: ', solution)
//  output = filteredArr(arr, fn);
//  console.log('output: ', output)
//  console.log('');

//  console.log('TEST CASE 5:')
//  arr = [1, -2, -3, 0, 4, 5, -6, 7, -8], fn = function isNotNeg(n) { return n > 0 }
//  console.log('arr : ', arr, 'fn: ', fn)
//  solution = [1,0,4,5,7]
//  console.log('solution: ', solution)
//  output = filteredArr(arr, fn);
//  console.log('output: ', output)
//  console.log('');

 



// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?
// O(n) time - where n is the length of the input array. This is because the function iterates through
//             each element of the array once in the for loop.

// O(m) space - where m is the number of elements that pass the filter condition. This is because the 
//              function creates a new array, filteredArr, to store the filtered elements. The size of 
//              this array depends on the number of elements that pass the filter condition.

//     b. Are there parts of the solution that could be more efficient?
//      Yes.  I think we could use less memory by using array.splice() to remove elements that don't pass 
//      the filter function, which would avoid creating a new array.

//     c. Are there parts of the solution that could be shorter?
//      The if-statement could be a little bit shorter since there is no explicit 'else' statement

//     d. Consider other approaches to the problem.  Are any of them more efficient? -->


function filteredArr(arr, fn){
    for (let i = arr.length-1; i=0; i++) {
        if (!fn(arr[i], i)) arr.splice(arr[i],1)   
    }
    return arr;
}