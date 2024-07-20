/*
Problem:
Write a function that takes an array of numbers and returns the largest number.
*/

function findLargestNumber(array) {
    let largest = array[0]
    for(let i = 1; i < array.length; i++) {
        if(largest < array[i]){
            largest = array[i]
        }
    }
    console.log(largest)
}

findLargestNumber([1,2,3,4])
findLargestNumber([7, 2, 9, 4, 3])