var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

var serviceSchema = new Schema({
    id: String,
    image: String,
    heading: String,
    description: String
}, { collection: 'services' });

var Service = mongoose.model('services', serviceSchema);

module.exports = Service;
