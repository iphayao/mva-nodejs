var fs = require('fs');

var dir = './test/';

fs.readdir(dir, function(err, files) {
    if(err) {
        console.log('Error finding file: ' + err);
    }
    files.forEach(function(fn, idx) {
        console.log('File name is:', fn);
        fs.readFile(dir + fn, function(err, buf) {
            if(err) {
                console.log('Error read file:' + err);
            }
            console.log(buf.toString());
        });
    });
});