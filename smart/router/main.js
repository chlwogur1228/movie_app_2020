// localhost:3000/main 으로 접속했을 때의 처리
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/main.html"));
});

module.exports = router;