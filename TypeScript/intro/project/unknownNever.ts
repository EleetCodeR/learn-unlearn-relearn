let inputUnknown: unknown;
let inputAny: any;
let inputString: string;

inputUnknown = 5;
inputUnknown = "Max";

inputString = inputAny;
//inputString = inputUnknown;

if (typeof inputUnknown === "string") {
  inputString = inputUnknown;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
