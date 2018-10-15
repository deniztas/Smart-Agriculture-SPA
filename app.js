var express = require('express');
var path = require('path');
var app = express();
var db = require('./models/db');
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/view'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

var router = require('./router/routerManager');
app.use('/', router);

app.listen(8005);
