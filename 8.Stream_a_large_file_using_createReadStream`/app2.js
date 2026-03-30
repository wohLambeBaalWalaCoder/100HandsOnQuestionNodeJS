const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("video.mp4");

  res.writeHead(200, { "Content-Type": "video/mp4" });

  stream.pipe(res);

  stream.on("error", (err) => {
    console.log(err);
    res.end("Error While Streaming File");
  });
});

 server.listen(3000 , ()=>{
    console.log('Server Started on port : 3000')
 })
