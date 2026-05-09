const buf1 = Buffer.from("Hello, World!");
const buf2 = Buffer.from("Hello", "utf8"); // default encoding
const buf3 = Buffer.from("48656c6c6f", "hex"); // from hex string

console.log(buf1, buf2, buf3);

console.log(buf1.toString());

const fs = require("fs");

fs.createReadStream("Readme.md").on("data", (chunk) => {
  console.log(chunk); // <Buffer 89 50 4e 47 ...>  raw PNG bytes
});

// 2. Encode image to base64 for sending in JSON API
const fs = require("fs");
const img = fs.readFileSync("photo.jpg"); // returns a Buffer
const b64 = img.toString("base64");
