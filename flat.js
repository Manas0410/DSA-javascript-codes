// WAP that flattens the array :
//const givenArr = [1, [2], [3, [4, [3]], [1]], [2], [[[{}, "bc", ""], 2]], 3];
// result [1,2,3,4,3,1,2,"abc",2,3]

const flat = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] === "number" ||
      (typeof arr[i] === "string" && arr[i].length > 0)
    ) {
      res.push(arr[i]);
    } else {
      res.push(flat(arr[i]));
    }
  }
  return res;
};
console.log(flat([1, [2], [3, [4, [3]], [1]], [2], [[[{}, "bc", ""], 2]], 3]));
