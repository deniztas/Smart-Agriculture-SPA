/*var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());*/


//Models
var Service = require('../models/service');
var Project = require('../models/project');
var About = require('../models/about');
var Team = require('../models/team');
var Message = require('../models/message');


var http = require('http');
var url = require('url');
var mongo = require('mongodb');

var services = [];

var projects = [];

var about = [];

var team = [];



module.exports.index = function (req, res) {

    Promise.all([servicePromise(), projectPromise(), aboutPromise(), teamPromise()]).then(function (values) {
        res.render('index', { services: services, projects: projects, about: about, team: team });
    });
};

module.exports.indexSendMessage = function (req, res) {
    var params = '';
    req.on('data', function (data) {
        params += '/deneme?' + data;
        console.log(params);
    });

    req.on('end', function () {
        var queryData = getParamQuery(params);

        var newMessage = new Message(queryData);

        newMessage.save(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('yeni mesaj geldi');
            }
        });
    });

    Promise.all([servicePromise(), projectPromise(), aboutPromise(), teamPromise()]).then(function (values) {
        res.render('index', { services: services, projects: projects, about: about, team: team });
    });
};

////////////////////!!Promisess!!///////////////////////////
function servicePromise() {
    return new Promise(function (resolve, reject) {
        Service.find(function (err, results) {
            services = results;
            resolve(true);
        });
    });
}

function projectPromise() {
    return new Promise(function (resolve, reject) {
        Project.find(function (err, results) {
            projects = results;
            resolve(true);
        });
    });
}

function aboutPromise() {
    return new Promise(function (resolve, reject) {
        About.find(function (err, results) {
            about = results;
            resolve(true);
        });
    });
}

function teamPromise() {
    return new Promise(function (resolve, reject) {
        Team.find(function (err, results) {
            team = results;
            resolve(true);
        });
    });
}



function getParamQuery(getParams) {
    var queryData = url.parse(getParams, true).query;
    console.log(queryData);
    return queryData;
}













/////Deneme kısmı
module.exports.deneme = function (req, res) {
    console.log("req method: \t " + req.method);
    console.log("req url: \t " + req.url);
    var queryData = url.parse(req.url, true).query;
    
    console.log(queryData);

    res.render('deneme');
};

module.exports.denemeSendMessage = function (req, res) {
    console.log("req method: \t " + req.method);
    var jsonString = '';

    req.on('data', function (data) {
        jsonString += data;
        jsonString = '/deneme?' + jsonString;
    });

    req.on('end', function () {
        var queryData = url.parse(jsonString, true).query;
        console.log(queryData);
    });
    res.render('deneme');
};
