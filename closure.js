// function outer(){
//     var outervar = "manas";
//     function inner(){
//         console.log(outervar);
//     }return inner
// }

// var res = outer()
// console.log(res)

function outer(x){
    return function inner(y){
        if (!y){
            return x
        }else{return outer(x+y)}
    }
}
var my = outer(5)(2)(5)(5000000000)(999858)
console.log(my())