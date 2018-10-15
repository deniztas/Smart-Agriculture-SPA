var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = Schema.Types;

var kullaniciSchema = new Schema({
        ad: String,
        soyad: String,
        yas: Number,
        telefon: Array
    }, {collection:'kullanicilar'});

var Kullanici = mongoose.model('Kullanici', kullaniciSchema);

module.exports = Kullanici;