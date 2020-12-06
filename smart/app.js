// 빠질 거 빠지고 아래와 같은 형태로만 남음
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var main = require('./router/main');
var join = require('./router/join');
var email = require('./router/email');
var router = require('./router/index');


app.listen(3000, function() {
  console.log("안녕! express server on port 3000");
})

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(router); //app.use('/', router); root url로 들어왔을때 -> /router/index
app.use('/main', main);
app.use('/email', email);
app.use('/join', join);


app.post('/ajax_send_value', function(req, res) {  
  console.log(req.body.email); 
  var responseData = {'value': req.body.email};
res.json(responseData);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/main.html");
});