var areDeeplyEqual = function(o1, o2) {
  if( o1===o2){return true}
  
  if (typeof o1 !== "object" || typeof o2 !== "object" ||  Array.isArray(o1) !== Array.isArray(o2)) {
    return false;
  }
  if(o1===null && o2===null ){
    return true
  }
  
if(Array.isArray(o1) === Array.isArray(o2)){
  if (o1.length !== o2.length){
    return false
  }
}
  for (let key in o1) {
    if (!o2.hasOwnProperty(key)) {
      return false;
    }

    if (o1[key] === null && o2[key] === null) {
      continue;
    }

    if (typeof o1[key] === "object" && typeof o2[key] === "object") {
      if (!areDeeplyEqual(o1[key], o2[key])) {
        return false;
      }
    } else if (o1[key] !== o2[key]) {
      return false;
    }
  }

  return true;
};
console.log(areDeeplyEqual({"x":null,"L":[1,2,3]},{"x":null,"L":[1,2,3]}));
console.log(areDeeplyEqual({"x":null,"L":[1,2,3]},{"x":null,"L":["1","2","3"]}));