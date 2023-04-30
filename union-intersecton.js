const intersection = (ar1,ar2)=>{
    resi={}
    ari=[]
    for(let i=0;i<ar1.length;i++){
        if (ar2.indexOf(ar1[i]) !== -1 && !resi.hasOwnProperty(ar1[i])){
            resi[ar1[i]]=true;
            ari.push(ar1[i]);
        }
    }return ari;
}
console.log("intersection:",intersection([1,2,3,4,5,1],[1,2,3,4,5,1,7,6,4,3,8]))








const union = (ar1,ar2)=>{
    resi={}
    ari=[]
    for(let i=0;i<ar1.length;i++){
        if ( !resi.hasOwnProperty(ar1[i])){
            resi[ar1[i]]=true;
            ari.push(ar1[i]);
        }
    }
    for(let i=0;i<ar2.length;i++){
        if ( !resi.hasOwnProperty(ar2[i])){
            console.log(ar2[i])
            resi[ar2[i]]=true;
            ari.push(ar2[i]);
        }
    
}return ari;}


 console.log("union:",union([1,2,3,4,5,1],[1,2,3,4,5,1,7,6,4,3,8]))