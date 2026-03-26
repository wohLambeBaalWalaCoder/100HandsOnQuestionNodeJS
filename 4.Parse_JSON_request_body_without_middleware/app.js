const http = require("http");
const { resolve } = require("path");

//Now Making a Function ofd Parsing Request Body

function parsedRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject("Invalid JSON");
      }
    });

    req.on("error", (err) => reject(err));
  });
}

const server = http.createServer((req, res) => {


  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌ // By making use of promise
  // if (req.method === "POST" && req.url === "data") {
  //   parsedRequestBody(req)
  //     .then((data) => {
  //       res.end(data);
  //     })
  //     .catch((err) => {
  //       res.end(err);
  //     });
  // } else {
  //   res.writeHead(404);
  //   res.end("Route Not Found");
  // }



  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌ // By Normal Method


    if (req.method === "POST" && req.url === "/data") {
      let body = "";

      //Recive data in chunks
      req.on("data", (chunk) => {
        //   console.log(chunk)
        body += chunk.toString(); //convert Buffer to String
        //   console.log(body)
      });

      //End of Data
      req.on("end", () => {
        try {
          const parsedData = JSON.parse(body);
          // console.log("Parsed JSON : ", parsedData);
          //  throw Error('Thrown from Try Block');
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              message: "Data Recieved Succesfully",
              data: parsedData,
            }),
          );
        } catch (err) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error: "Invalid JSON",
              message: err.message,
            }),
          );
        }
      });

      req.on("error", () => {
        res.writeHead(500);
        res.end("Server Error");
      });
    } else {
      res.writeHead(400);
      res.end("Route Not Found");
    }
});

server.listen(3000, () => {
  console.log("Listening on PORT : 3000");
});
