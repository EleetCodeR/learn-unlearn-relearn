// O(n) solution (but not optimal)
function moveElementToEnd(array, toMove) {
  let count = -1;
  let el = 0;
  if (array.length > 0) {
    while (el < array.length) {
      if (array[el] !== toMove) {
        count++;
        array[count] = array[el];
        el++;
      } else if (array[el] === toMove) {
        el++;
      }
    }
    for (i = count + 1; i < array.length; i++) {
      array[i] = toMove;
    }
  }
  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
