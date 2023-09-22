// FROM: Leetcode
// LEVEL: easy

// PROBLEM: Given an array of nums of size n, return the majority element.
//          The majority element is the element that appears more than n/2 times.  
//          You may assume that the majority element always exists in the array.

// CONSTRAINTS:     n == nums.length
//                  1 <= n <= 5 * 104
//                  -109 <= nums[i] <= 109
   
// EXAMPLES GIVEN:      INPUT: nums = [3,2,3], n=3       INPUT: nums = [2,2,1,1,1,2,2], n=7
//                      OUTPUT: 3                        OUTPUT: 2

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//             Given an array of numbers with a length of n, return the number that appears
//              at least n/2 times.
        
//     b.  WHAT ARE THE INPUTS?
//              An array of numbers that has a length of n
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//              It should be a number
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//              I think so.  Questions:
//                   ~ Are all of the numbers whole numbers?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//              I'm thinking that this will involve a frequency counter, or a hash table, so 
//              I'll call that freq.  Also, the majorityElement could be called majFreq and 
//              equal n/2

// 2.  EXPLORE CONCRETE EXAMPLES
//              INPUT: [2,2,5,5,6,6,6,6,6] , n=9     
//              OUTPUT: 6
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//              If the array is empty, return null(?)
       
//     b. Create a step-by-step plan to solve the problem.
//          1. Create variable majFreq = n/2
//          2. Initialize an object called freq to keep track of the elements' frequencies
//          3. Loop through the array.  If the item at i is not in freq, then add it.  If it is 
//              in there, increment it  by 1.
//          4. When the loop finishes, find the value in the table that is greater than or equal to
//              majFreq.  
//          5. Return that element

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n) time - where n is the length of the input array nums. This is because the function iterates 
//      through the nums array once to calculate the frequency of each element.
// O(n) space - where n is the number of unique elements in the input array nums. This is because 
//              the function creates a frequency object freq to store the frequency of each element 
//              in nums. The size of this object will be equal to the number of unique elements in nums.
function majorityElement(nums) {
    // Create a hashmap to keep track of the frequency of each num
    let freq = {};
    // Use a for-loop to traverse nums
    for(let i=0; i<nums.length; i++) {
        // For each num, if it isn't in the hashmap, add it with a frequency 1, 
        // If it is in the hashmap, increment frequency by 1
        freq[nums[i]] = freq[nums[i]]+1 || 1; 
    };
    // Extract the frequencies from the hashmap and call the returned array frequencies
    let frequencies = Object.values(freq);
    // Find the maximum frequency in frequencies and call it majFreq
    let majFreq = Math.max(...frequencies);
    // Extract the keys from the hashmap and find the key whose value is equal to majFreq
    // Return this key
    return Object.keys(freq).find(key => freq[key] === majFreq)
}

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution? 
            // O(n) time || O(n) space
//     b. Are there parts of the solution that could be more efficient?
//          // If we could solve it without the freq object, it would use less space.
//          // If it's possible to solve it without the for-loop, that would make it faster, but 
//              I'm not sure if that's possible.  Let's try:


function majorityElement2(nums) {
    let topFreq = 0;
    let prev;
    let next;
    let maj;
    for (let i=0; i<nums.length; i++) {
        prev = i
        next = i+1;
        if (nums[prev] === nums[next]) {
            next += 1;
            if (next-prev > topFreq){
                topFreq += 1;
                maj = nums[i];
            }
        } else {
            let temp = next;
            prev = next;
            next = temp + 1
        }
        // console.log("prev: ", prev)
        // console.log("next: ", next)
        // console.log("maj: ", maj)
    }
    return maj;
}


nums = [2,2,1,1,1,2,2]
majorityElement2(nums);



//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?