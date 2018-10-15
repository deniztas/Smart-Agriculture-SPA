var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

var projectSchema = new Schema({
    id: String,
    image: String,
    title: String,
    subtitle: String,
    description: String,
    date: String
}, { collection: 'project' });

var Project = mongoose.model('Project', projectSchema);
/*
module.exports = {
    Schema: function () {
        return mongoose.model('Project', projectSchema);
    },
    Project : function(){
        return Project
    }
}*/
module.exports = Project;
