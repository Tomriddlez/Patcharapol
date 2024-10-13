const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('D:/kiw')));

app.get('/', function(req,res){
    res.sendFile(path.join('D:/kiw/index.html'))
});
app.get('/index', function(req,res){
    res.sendFile(path.join('D:/kiw/index.html'))
});
app.get('/Experience', function(req,res){
    res.sendFile(path.join('D:/kiw/Experience.html'))
});
app.get('/Projects', function(req,res){
    res.sendFile(path.join('D:/kiw/Projects.html'))
});
app.get('/Contact', function(req,res){
    res.sendFile(path.join('D:/kiw/Contact.html'))
});
app.listen(3000, function(){
    console.log('Server listening on port http://localhost:3000/')
});