/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. 
A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement 
of letters. The palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)
*/

//initial solution 
function palPerm(str) {

    str = str.toLowerCase().replaceAll(" ", "")

    let map = new Map()
    let oddCount = 0;

    for(let letter of str){
        if(map.has(letter)){
            map.get(letter).val++
        } else {
            map.set(letter, {val: 1})
        }
    }

    for(let char of map){
        if(char[1]['val'] % 2 !== 0){
            oddCount++
        }
    }

    return oddCount <= 1
}

/*
Why it works:
Palindromes mirror around a center.

So all characters must appear an even number of times, except possibly one in the middle (odd-length palindrome).

This function enforces that rule efficiently.
*/

function palPermV2(str) {
    str = str.toLowerCase().replaceAll(" ", "");

    const map = new Map();
    let oddCount = 0;

    for(const char of str) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    for(const count of map.values()) {
        if (count % 2 !== 0) {
            oddCount++;
            if (oddCount > 1) return false
        }
    }

    return true;
}


// console.log(palPerm('aabbcccddd'))

console.log(palPermV2("Tact Coa"));    // true
console.log(palPermV2("aabbc"));       // true
console.log(palPermV2("racecar"));     // true

console.log(palPermV2("abc"));         // false
console.log(palPermV2("aabbcd"));      // false
console.log(palPermV2("hello world")); // false
