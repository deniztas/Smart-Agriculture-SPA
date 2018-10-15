var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

var teamSchema = new Schema({
    id: String,
    image: String,
    name: String,
    surname: String,
    authority: String,
    title: String,
    username: String,
    password: String,  
    twitter: String,
    facebook: String,
    linkedin: String
    
}, { collection: 'team' });

var Team = mongoose.model('Team', teamSchema);

module.exports = Team;
