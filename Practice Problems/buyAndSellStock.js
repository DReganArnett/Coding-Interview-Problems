// From: Leetcode 
// Level: easy

// PROBLEM: You are given an array of prices where prices[i] is the price of a given stock on the ith day.  
//          You want to maximizer your profit by choosing a single day to buy one stock and choosing a different 
//          in the future to sell that stock.  
//          Return the maximum profit you can achieve from this transaction.  If you cannot achieve any profit, return 0. 
//          * You must buy before you sell - i.e. you can't buy on day 2 and sell on day 1!
    

// CONSTRAINTS: 1 <= prices.length <= 10^5
//              0 <= prices[i] <= 10^4
   
// EXAMPLES GIVEN:
//   1) Input: prices = [7, 1, 5, 3, 6, 4]
//      Output: 5
//      Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

//   2) Input: prices = [7, 6, 4, 3, 1]
//      Output: 0
//      Explanation: In this case, no transactions are done and the max profit = 0.
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM? 
//              Given an array of numbers where the values represent the prices of a stock and the indexes represent the day the 
//              stock was at that price, determine which days(indexes) to buy and sell the stock to maximize the profit.        
//     b.  WHAT ARE THE INPUTS?
//              An array of numbers.
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//              A value representing the maximum possible profit for a transaction made during the period of days represented by the array.
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//              I think so.  I would ask if all prices are integers, if they are all positive values, and if duplicate values are possible.
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//              prices[i] = stock price
//              i = day
//              high = highest price
//              low  = lowest price
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  What patterns jump out at you about the problem's prompt, inputs, or outputs?
//          ~ If the values of the input array are in descending order, then it is not possible to make a profit.
//          ~ The maximum profit will be the two values with the greatest difference when subtracting the value with the higher index from the value 
//              of the lower index.

//     b. Create a step-by-step plan to solve the problem.
//          ~ One approach could be to iterate through the array and figure out all of the possible differences, then take the greatest positive difference as our output.
//              That doesn't seem like it will be a very efficient approach though. 
//          ~ We could start by finding the lowest value and the highest value.  If the highest value's index is greater than the lowest value's 
//              index, then the difference between the two values should be the output.  However, if the lowest value is close to the end or is the last value in the array, 
//              then that's not helpful.  Likewise, if the highest value is at the beginning or is the first value in the array, then that's not helpful either.
//              With this approach we could use pointers on the low and high values, compare the difference and move the pointers accordingly to maximize the difference.
//              Let's explore this approach.  
//                  Step 1: Create variables for the buy and sell pointers.  
//                  Step 2: Create a variable for the max profit we've seen, maxProfit
//                  Step 3: Create a while loop.  While the sell pointer is less than the length of the prices array
//                  Step 4: If the value at the buy index is less than the value at the sell index
//                  Step 5: Calculate the current profit.
//                  Step 6: If the current profit is greater than the maxProfit, reassign maxProfit to the currentProfit value
//                  Step 7: If the value at the buy index is greater than the value at the sell index
//                  Step 8: Reassign the buy index to be the current sell index
//                  Step 9: Advance the sell index by 1
//                  Step 10: Continue until you have reached the end of the array and return the maxProfit.

// O(n) time - because we traverse the entire prices array
// O(1) space - because we do not create any data structures that grow with the size of the input
function maxProfit (prices) {
    // maxProfit so far
    let maxProfit = 0;
    // index of potential buy price
    let buy = 0; 
    // index of potential sell price
    let sell = 1; 
    // while the index of sell is less than the length of the prices array
    while (sell < prices.length) {
        // if the buy price is less than the sell price
        if (prices[buy] < prices[sell]) { 
            // calculate the currentProfit
            let currentProfit = prices[sell] - prices[buy]; 
            // if the currentProfit is greater than the maxProfit, update maxProfit to equal currentProfit
            if (currentProfit > maxProfit) maxProfit = currentProfit; 
        } else { 
            // if the sell price is less than then buy price, update the buy pointer to where the sell pointer is
            buy = sell;
        }
        // advance the sell pointer by one index
        sell += 1; 
    }
    // continue until you have iterated through the whole array and return maxProfit
    return maxProfit;    
};

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?

