// O(n) time and O(1) space complexity.

function longestPeak(array) {
  let peak = 0;
  let currHeight = 1;
  let left = 0;
  let right = 1;
  let inc = false;
  let dec = false;

  while (right < array.length) {
    if (array[left] < array[right]) {
      if (!dec) {
        // increasing phase
        console.log(" ");
        left++;
        right++;
        inc = true;
        currHeight++;
      } else {
        // New Peak starts
        console.log(" ");
        left++;
        right++;
        inc = true;
        dec = false;
        peak = peak < currHeight ? currHeight : peak;
        currHeight = 2;
      }
    } else if (array[left] > array[right]) {
      // increasing phase is over
      // peak is reached , start decrease.
      if (inc) {
        dec = true;
        left++;
        right++;
        currHeight++;
      } else {
        left++;
        right++;
      }
    } else {
      // hit plateu
      // reset all flags and restart.
      if (inc && dec) {
        peak = peak < currHeight ? currHeight : peak;
      }
      inc = false;
      dec = false;
      left++;
      right++;
      currHeight = 1;
    }
  }
  if (inc && dec) {
    peak = peak < currHeight ? currHeight : peak;
  }

  return peak;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
