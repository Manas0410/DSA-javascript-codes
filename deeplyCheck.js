const areDeeplyEqual = (o1, o2) => {
  if (o1 === o2) {
    return true;
  }
  if (
    typeof o1 !== "object" ||
    typeof o2 !== "object" ||
    o1 === null ||
    o2 === null ||
    Array.isArray(o1) !== Array.isArray(o2)
  ) {
    return false;
  }
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
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

var aareDeeplyEqual = function (o1, o2) {
    if (o1 === o2) {
        return true;
      }
    if (
        typeof o1 !== "object" || typeof o2 !== "object" ||  o1 === null || o2 === null || 
         Array.isArray(o1) !== Array.isArray(o2)
      ) {
        return false;
      }
      if(Array.isArray(o1) === Array.isArray(o2)){
        if(o1.length !== o2.length){
            return false
        }
        for(let i=0;i<o1.length;i++){
            if (o1[i]!==o2[i]){
                return false
            }
        }return true
      }
  for (let key in o1) {
    if (o2.hasOwnProperty(key)) {
        if (typeof o1[key] === "object" && typeof o2[key] === "object") {
      if (!areDeeplyEqual(o1[key], o2[key])) {
        return false;
      }
    }
      if (o1[key] !== o2[key]) {
        return false;
      }
    }
  }
  return true;
};
