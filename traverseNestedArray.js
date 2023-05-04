const Nestedarr = (arr) =>{
    let res =[]
    for(let i =0 ;i<arr.length;i++){
        if (Array.isArray(arr[i])){
            res = res.concat(Nestedarr(arr[i]))
        }
    else{
        res.push(arr[i])}
    }return res
}
console.log(Nestedarr([["a","b"],["c","d"],["e","f",["g","h",["i",["j"]]]]]))