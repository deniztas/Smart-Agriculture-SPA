var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

var messageSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    message: String
}, { collection: 'message' });

var Message = mongoose.model('message', messageSchema);

module.exports = Message;
