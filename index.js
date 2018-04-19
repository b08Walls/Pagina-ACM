const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5002

var app = require('express')();
var http = require('http').Server(app);
var mqtt = require('mqtt');

app.get('/',function(req,res)
{
	//res.send('<h1>Hello world</h1>');
	res.sendFile(__dirname+'/index.html');
});


app.get('/app.js',function(req,res)
{
	//res.send('<h1>Hello world</h1>');
	res.sendFile(__dirname+'/app.js');
});


app.use(express.static(__dirname+'/public'))

http.listen(PORT,function(){console.log("INIT OK!")})


// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))




