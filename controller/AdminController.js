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
var Project = require('../models/project.js');
var About = require('../models/about');
var Team = require('../models/team.js');
var Message = require('../models/message');

var http = require('http');
var url = require('url');
var mongo = require('mongodb');

var services = [];

var projects = [];

var about = [];

var team = [];

var messages = [];



module.exports.index = function (req, res) {

    Promise.all([servicePromise(), projectPromise(), aboutPromise(), teamPromise(), messagePromise()]).then(function (values) {
        res.render('adminPanel', {
            services: services,
            projects: projects,
            about: about,
            team: team,
            messages: messages
        });
    });
};

module.exports.deleteMessage = function (req, res) {
    /*console.log("ADJASKLDL")
    console.log(req.body)
    var params = '';
    req.on('data', function (data) {
        params += '/deneme?' + data;
        console.log(params);
    });

    req.on('end', function () {
        var queryData = getParamQuery(params);

        var newMessage = new Message(queryData);
        
        Message.findByIdAndRemove(queryData.id, function (err) {
            if (err) {
                console.log(err+ "hata");
            }
            else {
                console.log('mesaj silindi');
            }
        });
    });
    Promise.all([servicePromise(), projectPromise(), aboutPromise(), teamPromise(), messagePromise()]).then(function (values) {
        res.render('adminPanel', { services: services, projects: projects, about: about, team: team, messages: messages });
    });*/
    var id = req.body.id
    Message.findByIdAndRemove({
        '_id': id
    }, function (err) {
        if (err) {
            console.log(err + "hata");
            return res.json({
                'success': true
            })
        } else {
            console.log('mesaj silindi');
            return res.json({
                'success': false
            })
        }
    });
};


module.exports.insertProject = function (req, res) {
    var image = req.body.image
    var title = req.body.title
    var subtitle = req.body.subtitle
    var description = req.body.description
    var date = req.body.date

    var newProject = new Project()

    newProject.image = image
    newProject.title = title
    newProject.subtitle = subtitle
    newProject.description = description
    newProject.date = date

    newProject.save((err, data) => {
        if (data) {
            return res.json({
                'success': true
            })
        } else {
            return res.json({
                'success': false
            })
        }
    })

}

module.exports.deleteProject = function (req, res) {
    var id = req.body.id
    Project.findByIdAndRemove({
        '_id': id
    }, function (err) {
        if (err) {
            console.log(err + "hata");
            return res.json({
                'success': true
            })
        } else {
            console.log('proje silindi');
            return res.json({
                'success': false
            })
        }
    });

};


module.exports.updateProject = function (req, res) {
    if (req.method == 'GET') {
        var id = req.query.id
        Project.findById({ '_id': id}, function (err, data) {
            if (data) {
                return res.json({success: true,projectData: data})
            } else
                return res.json({success: false })
        })
    } else {
        var id = req.body.project.id
        var image = req.body.project.image
        var title = req.body.project.title
        var subtitle = req.body.project.subtitle
        var description = req.body.project.description
        var date = req.body.project.date

        Project.findOne({'_id' : id},function(err,data){
            if(data){
                data.set({
                    image: image,
                    title: title,
                    subtitle : subtitle,
                    description : description,
                    date : date                   
                })
                data.save(function (err, updatedData) {
                    if (err) {
                        return res.json({
                            success: false
                        })
                    } else {
                        return res.json({
                            success: true
                        })
                    }
                })
            }
            
        })
        
    }

}


module.exports.insertTeam = function (req, res) {

    var image = req.body.team.image
    var name = req.body.team.name
    var surname = req.body.team.surname
    var authority = req.body.team.authority
    var title = req.body.team.title
    var username = req.body.team.username
    var password = req.body.team.password
    var twitter = req.body.team.twitter
    var facebook = req.body.team.facebook
    var linkedin = req.body.team.linkedin

    var newTeam = new Team()

    newTeam.image = image
    newTeam.name = name
    newTeam.surname = surname;
    newTeam.authority = authority;
    newTeam.title = title;
    newTeam.username = username;
    newTeam.password = password;
    newTeam.twitter = twitter;
    newTeam.facebook = facebook;
    newTeam.linkedin = linkedin;
    
    console.log(newTeam)
    newTeam.save(function (err,data) {
        if (err) {
            return res.json({'success' : false})
            console.log(err);
        } else {
            return res.json({'success' : true})
            console.log('New team member was saved');
        }
    });

}

module.exports.deleteTeam = function (req, res) {

    var id = req.body.id

    Team.findByIdAndRemove({
        '_id': id
    }, function (err) {
        if (err) {
            console.log(err + "hata");
            return res.json({
                'success': true
            })
        } else {
            console.log('takım üyesi silindi');
            return res.json({
                'success': false
            })
        }
    });



};


module.exports.updateTeam = function (req, res) {
    if (req.method == 'GET') {
       
        var id = req.query.id
        console.log(id)
        Team.findById({ '_id': id}, function (err, data) {
            if (data) {
                return res.json({success: true,teamData: data})
            } else
                return res.json({success: false })
        })
    } else {
        var id = req.body.team.id
        var image = req.body.team.image
        var name = req.body.team.name
        var surname = req.body.team.surname
        var authority = req.body.team.authority
        var title = req.body.team.title
        var username = req.body.team.username
        var password = req.body.team.password
        var twitter = req.body.team.twitter
        var facebook = req.body.team.facebook
        var linkedin = req.body.team.linkedin

        Team.findOne({'_id' : id},function(err,data){
            if(data){
                data.set({
                    
                    image : image,
                    name : name,
                    surname :surname,
                    authority :authority,
                    title  : title,
                    username : username,
                    password :password,
                    twitter  : twitter,
                    facebook :facebook,
                    linkedin :linkedin
                })
                data.save(function (err, updatedData) {
                    if (err) {
                        return res.json({
                            success: false
                        })
                    } else {
                        return res.json({
                            success: true
                        })
                    }
                })
            }
            
        })
        
    }

}


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

function messagePromise() {
    return new Promise(function (resolve, reject) {
        Message.find(function (err, results) {
            messages = results;
            resolve(true);
        });
    });
}



function getParamQuery(getParams) {
    var queryData = url.parse(getParams, true).query;
    console.log(queryData);
    return queryData;
}