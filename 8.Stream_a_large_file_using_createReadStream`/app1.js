// Cretaing a Example for createReadStream()

const fs = require("fs");


//Create a readable stream for a large file 
const readStream = fs.createReadStream("largeFile.txt", {
  encoding: "utf-8",
  highWaterMark: 64 * 1024,
});


console.log(readStream)

//Event Triggered when a chunk of data is available 
readStream.on('data' , (chunk)=>{
    // console.log( "skjfbhkjlsfjkdjsifoj :  " ,chunk)
    console.log('Received Chunk of Size : ', chunk.length)
})

//Event Triggered when the entire file has been read
readStream.on('end' , ()=>{
    console.log('Finished Reading File');
})

readStream.on('error' , (err)=>{
    console.error('Error While Handlling the file : ' , err)
})




