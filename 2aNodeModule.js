const http =  require('http');

const dt = require('./2nodejsModule');

// console.log(myDateTime());

port = process.env.PORT || 8000;

const server =  http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  console.log(req.url);
  res.end(myDateTime());
});

server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
});