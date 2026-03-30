//Application for Copying Files Using Streams

const fs = require("fs");

const readStream = fs.createReadStream("input.txt", "utf-8");

// readStream.on('data' , (chunk)=>{
//     console.log(chunk)
//     // console.log(typeof(chunk))
// })

// readStream.on('end',()=>{
//     console.log('Finished Reading Data: ')
// })
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);

// console.log(writeStream)

// console.log(typeof(writeStream))

writeStream.on("finish", (chunk) => {
  console.log("File copied Successfully");
  //   console.log(typeof writeStream);
  //   console.log(writeStream);
});
