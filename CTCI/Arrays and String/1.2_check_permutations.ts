/* 
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.
*/


function checkPerm(string1, string2){


    if(string1.length !== string2.length) return false 
    
    return string1.split('').sort().join('') === string2.split('').sort().join('')
}

console.log(checkPerm('acbc', 'accb'))