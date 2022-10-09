const express = require('express');
const multer = require('multer');

const app = express();

const fileStorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'--'+file.originalname);
    }
});

const upload =  multer({storage:fileStorageEngine});


app.get('/', (req, res) => {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="POST" enctype="multipart/form-data">');
        res.write('<input type="file" name="file"/><br/>');
        res.write('<input type="submit" />');
        res.write('</form>');
        res.end();
});

app.get('/mul', (req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="/multiple" method="POST" enctype="multipart/form-data">');
    res.write('<input type="file" name="file"/><br/>');
    res.write('<input type="file" name="file"/><br/>');
    res.write('<input type="submit" />');
    res.write('</form>');
    res.end();
});

app.post('/fileupload',upload.single("file"),(req,res)=>{
    console.log(req.file);
    console.log(req.file.originalname);
    res.send('file uploaded');
});


app.post('/multiple',upload.array("file",2),(req,res)=>{
    console.log(req.files);
    res.send('file uploaded mul');
});

app.listen(5000);