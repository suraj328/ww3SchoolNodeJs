const http =  require('http');
const fs =  require('fs');

port = process.env.PORT || 8000;

const server =  http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  console.log(req.url);
  if(req.url == '/'){
    res.end('welcome page');
  }
  if(req.url == '/about'){
    res.end('about page');
  }
  if(req.url == '/tail'){
    const data = fs.readFileSync('./index.html');
    res.end(data);
  }
});

server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
});