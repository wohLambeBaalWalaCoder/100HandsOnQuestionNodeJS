const { error } = require("console");
const http = require("http");

//This was a Simple Server

                        // const server = http.createServer((req, res) => {
                        //   //Handling the Route
                        //   if (req.url === "/" && req.method === "POST") {
                        //     console.log(req.method);
                        //     res.writeHead(200 , {'Content-Type' : 'text/plain'})
                        //     res.end("Welcome to HomePage");
                        //   } else if (req.url === "/about") {
                        //     console.log(req.method);
                        //     res.end("Welcome to AboutPage");
                        //   } else {
                        //     console.log(req.url)
                        //     res.writeHead(404 , {'Content-Type' : 'text/plain'});
                        //     res.end("Page Not Found");

                        //   }
                        // });



// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================


//JSOn + Method Handling

                        // const server = http.createServer((req, res) => {
                        // if (req.method === "POST" && req.url === "/api/user") {
                        //     const user = {
                        //     id: 1,
                        //     name: "Alice",
                        //     role: "Node Js Developer",
                        //     };

                        //     res.writeHead(200, { "Content-Type": "text/plain" });
                        //     res.end(JSON.stringify(user));
                        // }else{
                        //     res.writeHead(404 , {'Content-Type' : 'text/plain'})
                        //     res.end('Page Not Found')
                        // }

                        // });

//Defining the port
const PORT = 4000;

//Starting the server
server.listen(PORT, () => {
  console.log(`Server Listening on PORT:  ${PORT}`);
});
