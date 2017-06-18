var fs = require('fs');

// Synchronous read file
var contents = fs.readFileSync('test.txt').toString();
console.log(contents);

// Asyncronous read file
fs.readFile('test.txt', function(err, buf) {
    console.log(buf.toString());
});