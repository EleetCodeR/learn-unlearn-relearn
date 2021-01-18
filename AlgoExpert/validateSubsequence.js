function isValidSubsequence(array, sequence) {
  // Write your code here.
  let aIndx = 0;
  let sIndx = 0;
  while (aIndx < array.length && sIndx < sequence.length) {
    if (array[aIndx] === sequence[sIndx]) sIndx++;
    aIndx++;
  }
  return sIndx === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
