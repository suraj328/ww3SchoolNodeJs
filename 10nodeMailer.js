const nodeMailer =  require('nodemailer');

const mailConfig = nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user:'estoresupernova@gmail.com',
        pass:'lgddsyfsdqklvevl'
    }
});

var mailOption = {
    from:'estoresupernova@gmail.com',
    to:'shahsuraj328@gmail.com',
    subject:'node js mail',
    text:'you have recived mail from node js'
};


mailConfig.sendMail(mailOption,(err,info)=>{
    if(err){
        console.log(err);
    }
    console.log(info.response + '<br/>');
    console.log("mail sent successfully");
});