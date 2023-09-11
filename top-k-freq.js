function topK(nums,k){
    tobj = {}
    for(let i =0;i<nums.length;i++){
        if(tobj.hasOwnProperty(nums[i])){ tobj[nums[i]]+=1}
        else{tobj[nums[i]] = 1};
    }console.log(tobj)
}
console.log(topK([1,1,1,2,2,3], 2))