const fm = require('formidable');
const http =  require('http');
const fs = require('fs');

http.createServer((req,res)=>{

    var webForm = ()=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="POST" enctype="multipart/form-data">');
        res.write('<input type="file" name="file"/><br/>');
        res.write('<input type="submit" name="submit"/>');
        res.write('</form>');
    }

    if (req.url == '/fileupload'){
        var formData = new fm.IncomingForm();
        
        formData.parse(req,(err,fields,files)=>{

            var oldPath = files.file.filepath;
            var newPath = "C:/Users/Suraj Sah/OneDrive/Desktop/suraj/" + files.file.originalFilename;

            console.log(oldPath,newPath);
            fs.rename(oldPath,newPath,(err)=>{
                if(err) throw err;
                res.write("file uploaded or moved sucessfully");
                res.end();
            });
        });

    }else{
        webForm();
        res.end();
    }

    
}).listen(8080,()=>{
    console.log("http://localhost:8080/");
});