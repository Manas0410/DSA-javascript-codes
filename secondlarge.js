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


//second method
const largestNumber = (arr) => {
    let tempobj={}
    for (let i = 0; i < arr.length; i++) {
            tempobj[arr[i]] = i;
        }

        temparr = Object.keys(tempobj)
    
    return temparr[temparr.length-2]
}
console.log(largestNumber([41, 2, 3, 4, 5, 6, 7, 12, 40, 33, 10]))

//third method
const secondlargestNumber = (arr) => {
    
    let largest = arr[0]
    let secLargest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>largest) {
            secLargest = largest
            largest = arr[i]}
        else if (arr[i] > secLargest && arr[i] < largest) {
            secLargest = arr[i];
        }}
    return secLargest
}
console.log(secondlargestNumber([41, 45, 3, 4, 5, 6, 7, 12, 40, 33, 10,]))

