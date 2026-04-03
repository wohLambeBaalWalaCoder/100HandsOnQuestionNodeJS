//Understand the phases on EVnet Loop

const fs = require("fs");

//The Sync phase code
console.log("1. The Starting Phase");

//1. Timers Phase
setTimeout(() => {
  console.log(" 6. [Timers Phase] The Timers Phase: ");
}, 0);

//2. Check Phase
setImmediate(() => {
  console.log("7. [Check Phase] setImmediate Excecuted");
});

//I/O Polling Phase
//This File Reads the Current File , which introduces a delay depending on disk speed

fs.readFile("example.txt", () => {
  console.log("Enterd I/O Polling Phase (File Read Complete)");
  console.log("8. [I/O CallBack Phase] I/O Callback Executed");

  




});

//MicroTask Queue - Promises
Promise.resolve().then(() => {
  console.log("4. [MicroTask Queue] Promise Resolved");
  process.nextTick(() => {
    console.log("5. [MicroTask Queue] Process.nextTick() inside promises");
  });
});

//MicroTask Queue - nextTick
process.nextTick(() => {
  console.log("3. [MicroTask Queue] process.nextTick ExeCuted");
});

console.log("2. End of Synchronous Script");
