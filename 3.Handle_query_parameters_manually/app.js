const http = require("http");
// const url = require("url");  ✅✅✅✅✅✅ For Normal URL

const { URL } = require("url");

//❌❌❌❌❌❌❌❌❌❌ By Using URL Module
// const server = http.createServer((req,res) => {

//     //Parse URL
//     const parsedUrl = url.parse(req.url ,true)
//     // console.log('parsedUrl == ' ,parsedUrl)

//     const query = parsedUrl.query;
//     // console.log('query == ' ,query)

//     const name = query.name || 'Guest'
//     const age = query.age || 'Unknown'

//     res.writeHead(200 , {'Content-Type' : 'text/plain'});

//     res.end(JSON.stringify({
//         message : 'Query Params Handled manually',
//         name ,
//         age
//     }))

// })

//❌❌❌❌❌❌❌❌❌❌ By Not Using URL module
// const server = http.createServer((req, res) => {
//   const urlParts = req.url.split("?");
//   // console.log("urlParts === " ,urlParts)

//   // urlParts.split('?')
//   //  console.log("urlParts === " ,urlParts)

//   let query = {};

//   if (urlParts[1]) {
//     const pairs = urlParts[1].split("&");
//     // console.log(pairs)

//     pairs.forEach((pair) => {
//       //console.log(pair)
//       // console.log(pair.split('='))
//       const [key, value] = pair.split("=");
//       query[key] = decodeURIComponent(value);
//     });
//   }

//   console.log(query);

//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(JSON.stringify(query));
// });





//❌❌❌❌❌❌❌❌❌❌ By Using URL of object
// const server = http.createServer((req, res) => {
//   const myUrl = new URL(req.url, `http://${req.headers.host}`);
//   // console.log( "myUrl ==== " , myUrl)

//   const name = myUrl.searchParams.get("name");
//   console.log("name ==== ", name);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World");
// });

server.listen(3000, () => {
  console.log("Server listeing on PORT:3000");
});
