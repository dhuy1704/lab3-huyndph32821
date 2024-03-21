const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sinhhvienRoute = require('./routes/sinhvienRoute');

const app = express();//tao doi tuong moi
//ket noi mongodb
mongoose.connect('mongodb+srv://huyndph32821:*****@cluster0.y3ae671.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/db1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("ket noi thanh cong voi server");
}).catch((err) =>{
    console.log(err);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/', sinhhvienRoute);
//su dung route

//goi den file ejs
app.set('view engine', 'ejs');
//tao port
const PORT = process.env.PORT||5000;
//chay server
app.listen(PORT, ()=>{
    console.log("server dang chay o cong 5000");
})