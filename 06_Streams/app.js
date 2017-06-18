var fs = require('fs');

// read file then write file
fs.createReadStream('test.txt').pipe(fs.createWriteStream('out_test.txt'));