// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */

 let sum = 0 //declear a variable sum and asign 0 to it

function sumOfNumbers(arrayOfNumbers) {

    //loop through the array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // add each element of array and store it in sum 
        sum += arrayOfNumbers[i]; 
    }

    // return sum
    return sum;

}
 assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
let count = 0 ////declare a variable count and asign 0 to it
function countEvenNumbers(arrayOfNumbers) {
    //loop through the array
    // for (let i = 0; i < arrayOfNumbers.length; i++){
    //      // check fro the element in the array that is even
    //     if (arrayOfNumbers[i] % 2 == 0){
    //         //increment count
    //         count++
    //     }
    // }
    // return count

    // return arrayOfNumbers.length;
}
 //assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
let arrOfFahrenheit = [] //declare an empty array
function celsiusToFahrenheit(arrayOfNumbers) {
    //loop through arrayOfNumbers
    for (let i = 0; i < arrayOfNumbers.length; i++){
        // convert the temperature of each elements and store it tempInFahrenheit
       var tempInFahrenheit = Math.floor((arrayOfNumbers[i] * (9/5)) + 32)
       // push each tempInFahrenheit to arrOfFahrenheit
       arrOfFahrenheit.push(tempInFahrenheit)

   }
    // return arrOfFahrenheit;
      return arrOfFahrenheit
        
}
 assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

