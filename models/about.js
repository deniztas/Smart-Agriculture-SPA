var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

var aboutSchema = new Schema({
    id: String,
    image: String,
    date: String,
    heading: String,
    description: String
}, { collection: 'about' });

var About = mongoose.model('about', aboutSchema);

module.exports = About;
