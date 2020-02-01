const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const axios = require('axios');


const PORT = 3000;

const app = express();

app.use(bodyParse.json());


app.use(cors());

app.get('/', function(req, res){
    res.send('Hola server');

})

app.post('/citas', function(req,res){
    console.log(req.body);
    res.status(200).send({"message": "Data Received"});
})
app.get('/citas?=', function(req,res){
    console.log(req.body);
    res.status(200).send({"message": "Data Received"});
})


app.listen(PORT, function(){
    console.log("Server runing local" + PORT);
});