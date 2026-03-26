// const levels ={
//  INFO : 'INFO',
//  WARN : 'WARN',
//  ERROR : 'ERROR',
//  DEBUG : 'DEBUG'
// }

// function getTimeStamp(){
//     return new Date().toISOString();
// }

// function log(level , message){
//     return console.log(` [ ${getTimeStamp()} ] [ ${level} ] - "${  message }" `);
// }

// module.exports =  {
//     info : (msg) => log(levels.INFO , msg),
//     warn : (msg) => log(levels.WARN , msg),
//     error : (msg) => log(levels.ERROR , msg),
//     debug : msg => log(levels.DEBUG , msg)
// }

// ❌❌❌❌❌❌❌❌❌❌❌ Add File logging ((Persist Log))

// const { info, log } = require("console");
const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "app.log");

function getTimeStamp() {
  return new Date().toISOString();
}

function writeToFile(message) {
  fs.appendFileSync(logFilePath, message + `\n`);
}

function log(level, message) {
  const formatted = `[${getTimeStamp()}] [${level}] - "${message}"`;
  console.log(formatted);

  writeToFile(formatted);
}

module.exports = {
  info: (msg) => log("INFO", msg),
  warn: (msg) => log("WARN", msg),
  error: (msg) => log("ERROR", msg),
  debug: (msg) => log("DEBUG", msg),
};
