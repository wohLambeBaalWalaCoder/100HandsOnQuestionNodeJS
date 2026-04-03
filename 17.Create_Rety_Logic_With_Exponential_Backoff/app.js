const http = require("http");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retyrWithBackOff(fn, retries = 5, delay = 100) {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }

    console.log(`Retrying in ${delay}ms... ${retries} retries left`);

    await wait(delay);

    return retyrWithBackOff(fn, retries - 1, delay * 2); // Exponential increase
  }
}

async function unStableAPI() {
  if (Math.random() < 0.7) {
    throw new Error("API Failed");
  }

  return "Success";
}

const server = http.createServer((req, res) => {
  if (req.url === "/okay") {
    retyrWithBackOff(unStableAPI).then(console.log).catch(console.error);
    res.writeHead(200);
  }

  res.end("To Continue understanding the BACKOFF logic go to /okay endpoint")
  
});

server.listen(3000, () => {
  console.log("Creating Retry Logic");
});
