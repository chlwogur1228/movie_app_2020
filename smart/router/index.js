var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');

// 아래 코드는 app.js에서 다 가져옴
// router 폴더 안에 들어왔으므로 경로 수정
var main = require('./main');
var email = require('./email');
var join = require('./join/signup');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/main.html"));
});

router.use('/main', main);
router.use('/email', email);
router.use('/join', join); 
module.exports = router;