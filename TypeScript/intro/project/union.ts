type Combinable = number | string;
type ConversionDesc = "as-number" | "as-text";

function combine(
  in1: Combinable,
  in2: number | string,
  resultConversion: ConversionDesc
) {
  let result;
  if (
    (typeof in1 === "number" && typeof in2 === "number") ||
    resultConversion === "as-number"
  )
    result = +in1 + +in2;
  else result = in1.toString() + in2.toString();
  return result;
}

const combinedAges = combine(28, 28, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("28", "28", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Centi", "Meter", "as-text");
console.log(combinedNames);
