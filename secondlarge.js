// const largestNumber = (arr) => {
//     // let tempOb = {}
//     let largest = arr[0]
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>largest) {
            
//             largest = arr[i]
//         }

        
//     }
//     return largest
// }
// const arr = [41, 2, 3, 4, 5, 6, 7, 12, 40, 33, 10];
// let temp = largestNumber(arr);
// let secLargest=0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]== temp){
//         continue;
//     }
//     if (arr[i]>secLargest) {
            
//         secLargest = arr[i]
//     }
// }
// console.log(secLargest)

const largestNumber = (arr) => {
    let tempobj={}
    for (let i = 0; i < arr.length; i++) {
            tempobj[arr[i]] = i;
        }

        temparr = Object.keys(tempobj)
    
    return temparr[temparr.length-2]
}
console.log(largestNumber([41, 2, 3, 4, 5, 6, 7, 12, 40, 33, 10]))

// const obj ={
//     5:1,
//     3:5,
//     10:3
// };
// console.log(Object.keys(obj))