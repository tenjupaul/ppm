var express = require('express')
var path = require('path')

var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static( __dirname + '/client/public/dist/public' ));

require('./server/config/mongoose.js');
require('./server/config/routes')(app)
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/public/dist/public/index.html"))
});

app.listen(8000,function(){
    console.log("listening on port 8000")
})