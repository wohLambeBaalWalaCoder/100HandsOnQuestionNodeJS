const http = require("http");
const { exit } = require("process");
const server = http.createServer((req, res) => {
  if (req.url === "/error") {
    throw new Error("SYNC eror Triggered from /error Request");
  }

  if (req.url === "/promise-error") {
    Promise.reject(new Error("Async Promise Rejection Triggered"));
    res.writeHead(500);
    return res.end("Promise Rejection Triggered");
  }

  res.writeHead(200);
  console.log(
    "Server Running Normally . Visit /error OR /promise-error to test",
  );

  res.end( () => {
    console.log("Server is running Normally");
  });
});

server.listen(3000, () => {
  console.log("Server Started");
  console.log("To See the result for unCaught Exception : Hit the URL /error");
  console.log(
    "To See the result for unHandled Rejection : Hit the URL /promise-error",
  );
});

function shutDownGraceFully(exitCode) {
  //Close the server to stop accespting the new Request
  server.close(() => {
    process.exit(exitCode);
  });

  //FallBack: forceFully ShutDown if cleanUp Takes Longer then 10 Seconds
  setTimeout(() => {
    console.log("Could not Close Connection in time ");
    process.exit(exitCode);
  }, 10000).unref();
}

// handling unhandled exception
process.on("uncaughtException", (error) => {
  console.log("Critical Uncaught Exceptionn Caught");
  console.error("The Error is : ", error.message);
  console.error("The ErrorStack is : ", error.stack);

  shutDownGraceFully(1);
});

// Handle Unhandled Promise Rejection
process.on("unhandledRejection", (error) => {
  console.log("Critical Unhandled Rejection Caught");
  console.error("The Error is : ", error.message);
  console.error("The ErrorStack is : ", error.stack);

  shutDownGraceFully(1);
});

//Hadnle Standard process termination signals (CTRL+C or Kill Commands)

process.on("SIGTERM", () => {
  console.log("\mSIGTERM received");
  shutDownGraceFully(0);
});

process.on("SIGINT", () => {
  console.log("\nSIgINT received");
  shutDownGraceFully(0);
});
