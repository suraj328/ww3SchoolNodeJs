const url =  require('url');
const http = require('http');
const fs =  require('fs');

// to get url info
const adr = 'http://localhost:8080/default.htm?year=2017&month=february&date=9th';
const filter =  url.parse(adr,true);
console.log(filter.host);
console.log(filter.pathname);
console.log(filter.search);

// to get search data
const search =  filter.query;
console.log(search.date + " "+search.month + " " + search.year);


//hosting file
http.createServer((req,res)=>{
    const filterLink = url.parse(req.url,true);
    const searchLink = filterLink.query;

    
    if(filterLink.pathname == '/winter.html'){
        fs.readFile('./winter.html',(err,data)=>{
            if (err){
                res.writeHead(404,{'Content-Type':'html/text'});
                return res.end("page not found");
            }
            res.write(data);
            res.end();
        });
    }else{

        fs.readFile('./summer.html',(err,data)=>{
            if (err){
                res.writeHead(404,{'Content-Type':'html/text'});
                return res.end("page not found");
            }
            res.write(data);
            res.end();
        });
    }



}).listen(8080);