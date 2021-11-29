/* In this challenge, an array is provided and stored in a variable, create a function which evaluates the strings in the array by adding a preceding 0 to single numbers (6 => 06, 5 => 05). Double figures remain as is. 
This code challenge from https://scotch.io/bar-talk/code-challenge-12-javascript-string-manipulation#toc-requirement)*/

// Pad given single numbers in array to look like "10", "05", "16", "02"

/* iterate through the array and evaluate each string
//use map method on each string
if the string is a single digit then add a 0 to the front of the number
if the number is double digit then do not change the string
*/
const nums = ['2', '4', '25', '10', '3']

/**** BRUTE FORCE DECLARATIVE ****/
// const paddedNum = (nums) => {
//   let paddedStringArray = [];
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] <= 9){
//       paddedStringArray.push(0 + nums[i])
//     } else if(nums[i] > 9){
//       paddedStringArray.push(nums[i])
//     }
//   }
//   return paddedStringArray;
// }
// console.log(paddedNum(nums))


/*** Imperative ***/
const paddedNum = (nums) => {
  let paddedStringArray = []
  nums.forEach(num => {
    if(num <= 9){
      paddedStringArray.push(0 + num)
    } else if(num > 9){
      paddedStringArray.push(num)
    }
    console.log(paddedStringArray)
  });
}
paddedNum(nums);