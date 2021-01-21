// Brute-Force approach
function firstDuplicateValue(array) {
  let indx = array.length;
  // edge cases:
  if (indx === 0 || indx === 1) {
    return -1;
  }
  // main logic
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      //Match
      if (array[i] === array[j]) {
        if (j < indx) {
          indx = j;
        }
      }
    }
  }

  return indx !== array.length ? array[indx] : -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
