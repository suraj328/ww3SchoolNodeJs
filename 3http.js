// http is url request here,
// we recive our all http response through http pakage

//we have included http package to use it
const http = require('http');
const url =  require('url');


http.createServer((req,res)=>{  //it creates server connection
    res.writeHead(200,{'Content-Type':'text/html'}); //it determine our response type so it can be text or html

    res.write(`web is working ${req.url}<br/>`); // it will give response to our client side

    //filtering get or search request from http url
    // or
    // reciving get request data from url
    const q = url.parse(req.url,true).query; //create object of search data through url request
    console.log(q);
    const txt = q.year + " " + q.month; //accesing the object which is stored in q line 17 or search url data
    res.write(txt);

    res.end();//end thr responses

}).listen(8080,()=>{// this is host port 8080 it can be any as user define by devloper. 8080 is port to checkout website
    console.log(`http://localhost:8080/`);//just created a link to visit website
})