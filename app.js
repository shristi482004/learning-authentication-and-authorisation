const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
app.use(cookieParser());
app.get('/',(req,res)=>{
    //res.cookie("name","Shristi");
    // bcrypt.genSalt(10, function(err, salt) {
    // bcrypt.hash('password', salt, function(err, hash) {
    //    console.log(hash);
    //    console.log(salt);
    //});
//});
    //
let token=jwt.sign({email:"shristi@shristi.com"},'secretkey',function(err,token){
    res.cookie('token',token);
    console.log(token);
    res.send('Done Authentication and Authorisation Learning App');
});


});

app.get('/read',(req,res)=>{
    let data =jwt.verify(req.cookies.token,'secretkey');
        console.log(data);
        res.send('Done Authentication and Authorisation Learning App');

    });
    // bcrypt.compare('password', '$2b$10$9MXWbH94i6pHmHwUhvze2u1bSt9hWcKSK9xTIKDl3rDBCxdJsPv0.', function(err, result) {
    //     console.log(result);
    

    

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});