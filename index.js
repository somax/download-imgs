const fs = require('fs');
const download = require("download");

let list = fs.readFileSync('imglist.txt').toString().split('\n');

Promise.all(list.map(x => download(x, 'dist'))).then(() => {
    console.log('files downloaded!');
});