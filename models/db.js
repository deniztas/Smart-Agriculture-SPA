var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/precision_agriculture';

mongoose.connect(mongoDB, function (err, ) {
    if (err) {
        console.log('mongoose veritabani baglantisi kuruldu kurulamadi');
        return;
    }
    else {
        console.log('mongoose veritabani baglantisi kuruldu' + mongoDB);
    }
});