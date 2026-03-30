const fs = require("fs").promises;

// ❌❌❌❌❌❌❌❌❌❌This Code is for Asycn Operation of Reading File
// console.log("========> Started ");
// const data = fs.readFile("example.txt", "utf-8", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//     return console.log(data);
// });

// // console.log(data);

// console.log(" ========> Done For Async");

// ❌❌❌❌❌❌❌❌❌❌❌❌❌ Writing a file

// fs.writeFile('example2.txt' ,'Hello Async' , (err)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log('File Writen')
// })

// ❌❌❌❌❌❌❌❌❌❌❌❌ Creating a File Using Promises

async function createFileOps() {
  try {
    await fs.writeFile("example3.txt", "Hello Async from Promises");

    const data = await fs.readFile("example3.txt", "utf-8");

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

createFileOps();
