// configurasi express
const express = require('express');
let app = express();
let path = require('path');
const port = 8000;

//static file
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/js',express.static(__dirname+'public/js'));
app.use('/images',express.static(__dirname+'public/images'));
app.use('/modules',express.static(__dirname+'public/node_modules'));

//view engine
app.set('views','./views'); //difolder views
app.set('view engine','ejs'); //yang di pake engine ejs

//routing
app.get('/',(req,res)=>{
    const events =[
        {name:"Wisata", published: '04 April 2023', price: 15000, status:true},
        {name:"Kuliner", published: '20 Mei 2020', price: 16000, status:true},
        {name:"kebudayaan", published: '13 Agustus 2021', price: 17000, status:true},
    ]
    res.render('index',{
        events: events
    });
});

//server
app.listen(port, () =>{
    console.log('8000 is magic port');
});
