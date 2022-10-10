const bcrypt = require('bcryptjs');

const pass = "suraj123";


bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(pass,salt,(err,hash)=>{
        if (err) throw err;
        hashPass = hash;

        bcrypt.compare(pass,hashPass, async  (err,isMatch)=>{
            if(isMatch){
                console.log("you are log in\n");
                console.log(`password = ${pass}\nencrypted = ${hashPass}`);
            }
            if(!isMatch){
                console.log("you are not log in");
            }
        });

    });
    
    
});