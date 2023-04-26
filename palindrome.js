const palindrome =(input)=>{
    if (typeof input != 'string'){
        return "not valid input"
    }
    input = input.toLowerCase()
    // Check if the input string is empty or has only one character
    if (input.length < 2) {
        return true;
    }
    let l = Math.floor((input.length)/2);
    for(let i=0;i<l;i++){
        if (input[i] != input[input.length - i - 1]){
            return false
        }
    }
    return true
}

//driver code
const sentence ="Hello Mam, How are you. Madam do you know racecar?";
let arr = sentence.split(" ");
let resar=[]
for(let i=0;i<arr.length;i++){
    let a =arr[i].replace(/[^a-zA-Z0-9]/g, '');    
    if (palindrome(a)){
        resar.push(a)
    }
}
// output1
console.log ('array of palindrome:',resar);

// find largest
const large =(ary)=>{
    let big =''
    for(let i=0;i<ary.length;i++){
        if (ary[i].length>big.length){
            big = ary[i];
        }
    }
    return big
}

console.log("biggest palindrome;",large(resar));