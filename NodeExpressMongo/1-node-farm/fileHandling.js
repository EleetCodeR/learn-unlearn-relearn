const fs = require("fs");

// Synchronous / Blocking
// let textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// let textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()} `;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

// Asynchronous / Non-Blocking
// error-first call back style in Node.
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  console.log(data1);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, (err) => {
        console.log("File has been written.");
      });
    });
  });
});
console.log("Reading File...");
