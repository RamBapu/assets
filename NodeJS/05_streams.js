const fs = require("fs");

// Without pipe — manual and error-prone

// Without pipe - Back pressure problem
// Backpressure is what happens when the writer is faster than the reader.
// Without it, data piles up in memory and your process crashes.

const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");
readable.on("data", (chunk) => writable.write(chunk));
readable.on("end", () => writable.end());

// With pipe — clean and automatic -fixes backpressure
fs.createReadStream("input.txt").pipe(fs.createWriteStream("output.txt"));

const fs = require("fs");
const zlib = require("zlib");

// Read file → compress → write compressed file
fs.createReadStream("video.mp4")
  .pipe(zlib.createGzip()) // Transform: compress
  .pipe(fs.createWriteStream("video.mp4.gz"));

// Read compressed file → decompress → write
fs.createReadStream("video.mp4.gz")
  .pipe(zlib.createGunzip()) // Transform: decompress
  .pipe(fs.createWriteStream("video.mp4"));

// if a stream in the middle errors, the others aren't automatically cleaned up and you get memory leaks.
// pipeline() fixes this and used in production

const { pipeline } = require("stream/promises");
const fs = require("fs");
const zlib = require("zlib");

async function compressFile() {
  await pipeline(
    fs.createReadStream("input.txt"),
    zlib.createGzip(),
    fs.createWriteStream("input.txt.gz"),
  );
  console.log("compression complete");
}

// If ANY stream errors → all are destroyed and error is thrown
compressFile().catch(console.error);
