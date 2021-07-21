function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }

printResult(add(12, 25));

// let combineValues; // type: any

// to avoid the issues mentioned below, we can define a variables as type 'function'
// let combineValues: Function;

let combineValues: (a: number, b: number) => number;

combineValues = add; // copying function pointer into a variable.

// but now this is allowed,
// combineValues = printResult; // which does not throw compile time errors.
// as a solution to this we use function-types for more strict definition. line 21.

// However, below code, if executed will give runtime error.
// combineValues = 5; // allowed since combineValues is of type 'any'.
console.log(combineValues(8, 8));

// Function type and Call-back
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
