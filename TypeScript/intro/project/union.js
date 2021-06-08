function combine(in1, in2) {
    var result;
    if (typeof in1 === "number" && typeof in2 === "number")
        result = in1 + in2;
    else
        result = in1.toString() + in2.toString();
    return result;
}
var combinedAges = combine(28, 28);
console.log(combinedAges);
var combinedNames = combine("Centi", "Meter");
console.log(combinedNames);
