function isMonotonic(array) {
  let i = 0;
  let nonInc = false;
  let nonDec = false;
  if (array.length <= 2) {
    return true;
  }
  for (i = 0; i < array.length - 1; i++) {
    //console.log(`(i,j)-->(${i},${j})`);
    if (array[i] === array[i + 1]) {
      // do nothing
      //console.log("equal")
    } else if (array[i] > array[i + 1]) {
      //console.log(`non-Increasing-->(${array[i]} >= ${array[j]})`)
      if (nonDec) {
        //console.log('return false');
        return false;
      }
      nonInc = true;
    } else if (array[i] < array[i + 1]) {
      //console.log(`non-Decreasing-->(${array[i]} <= ${array[j]})`)
      if (nonInc) {
        //console.log('return false');
        return false;
      }
      nonDec = true;
    }
  }
  //console.log('return true');
  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
