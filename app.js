console.log('se inicio codigo del proyecto final');

require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res){

    res.sendFile(__dirname+ '/public/index.html');

});


app.get('*', function(req, res){
    res.sendFile(__dirname+ '/public/views/404.html');
   
});



app.listen(process.env.PORT, ()=> {
    console.log('Servidor corriendo en el puerto', process.env.PORT);
});