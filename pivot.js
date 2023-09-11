const pivotIndex = (nums) => {
    let leftHalf = 0;
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
      totalSum += nums[i];
    }
    console.log(totalSum); //28
    for (let i = 0; i < nums.length; i++) {
      if (leftHalf === totalSum - leftHalf - nums[i]) {
      
        return i;
      } else {
        leftHalf += nums[i];
      }
    //   console.log(leftHalf === totalSum - leftHalf - nums[i]);
    }return "not found"
  };

  console.log(pivotIndex([1, 7, 3, 6, 5, 6]));