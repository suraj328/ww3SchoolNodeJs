const uc =  require('upper-case');
const http =  require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(uc.upperCase('i am capital'));
    res.end();
}).listen(8080);
