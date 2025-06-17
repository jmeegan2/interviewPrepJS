/*

Is Unique: Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

*/







function uniqueCharChecker(input: string) {
    
    //look up how to set type of map <>
    let hashMap = new Map<string, number>()
 
    let strToArr = input.split('');

    for (let i = 0; i < strToArr.length; i++) {
        if (hashMap.has(strToArr[i])) {
            return false
        }
        else {
            hashMap.set(strToArr[i], i)
        }
    }

    return true
}




function noDataStructure(input: string) {



    //iterate from first character
    for(let i = 0; i < input.length - 1; i++){
        //inner loop start from second character since u only need to compare to next char
        for(let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]){
                return false //duplicate found 
            }
        }
    }

    return true;
}

