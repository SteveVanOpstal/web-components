var fs = require('fs');

const fileName = 'dist/angular-load-image.js';

fs.readFile(fileName, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/webpackJsonp/g, 'angularLoadImageJsonp');

  fs.writeFile(fileName, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
