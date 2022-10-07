const http = require('http');
const fs = require('fs');



http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('file system <br/>');

    // file system

    // 1.readfile
    // fs.readFile('./sample.txt',(err,data)=>{
    //     res.write('this is readfile data:\r'+ data + ',<br/>');
    //     res.end();
    // });


    // 2.readfileSync
    // var data1 = fs.readFileSync('./sample.txt');
    // res.write(data1);
    // res.end();


    // 3.appendFile
    // to add a file to existing file
    // fs.appendFile('./sample.txt','new text added',(err,data)=>{

    //     console.log('file merged:');
        
    // });
    // console.log("running");

    // res.end();



    // 4.fs .open file with w flag
    // it helps to create new file
    // fs.open('./hello','w',(err,file)=>{
    //     if(err) throw err;
    //     console.log("file opened");
    //     res.end();
    // })


    // 5.writeFile
    // to replace a content of existing file
    // fs.writeFile('./hello.txt', 'This is my text', function (err) {
    //     if (err) throw err;
    //     console.log('Replaced!');
    //   });
    //   res.end();


    // 6.unlink file
    //delete file 
    // fs.unlink('./joinSample.txt',(err,data)=>{
    //     if (err) throw err;
    //     console.log("file deleted");
    // })
    // res.end();

    // 7.fs.rename()
    // fs.rename('./hello.txt','change.txt',(err,data)=>{
    //     if (err) throw err;
    //     console.log("your file name changed");
    // });
    // res.end();



}).listen(8080);
