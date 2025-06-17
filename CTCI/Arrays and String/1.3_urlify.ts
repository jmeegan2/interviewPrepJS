
/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has 
sufficient space at the end to hold the additional characters,and that you are given the "true" length 
of the string. (Note: If implementing in Java,please use a character array so that you can perform this 
operation in place.)
*/



//initial solution
function urlify(string){

    string = string.split('')
    for(let i = 0; i < string.length; i++){
        if(string[i] === " "){
            // string[i] = "%20" didnt work, this was as just a string not an array 
            string.splice(i, 1, '%20')
        }
    }

  
    return string.join('')
}


/*
This:
• Splits on ' ' (space)
• Joins with "*20'
• Avoids messing with array splicing
• Is clean, readable, and correct for JS
*/
function urlifyV2(string){
    return string.split(' ').join('%20')
}



console.log(urlify('james meegan'))
console.log(urlifyV2('james meegan'))
