const express=require('express');
const app=express();
const server=require('http').createServer(app);
const io= require('socket.io').listen(server);
const path = require('path');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/public/views'));
app.use(express.static('public'));
app.get('/', (req, res)=> {
    const tableau= ['a','b','c','d'];
    res.render('index.pug',{tab:tableau});
});
let users= [];
server.listen(5000);
console.log("bienvenue");