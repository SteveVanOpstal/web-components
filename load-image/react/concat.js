const fs = require('fs');
const glob = require('glob');

glob('./build/static/js/*.js', {}, function (_err, files) {
  const fileContents = files.map((file)=> fs.readFileSync(file));
  fs.writeFileSync('./build/static/js/react.js', fileContents.join('\n'));
});

glob('./build/static/css/*.css', {}, function (_err, files) {
  const fileContents = files.map((file)=> fs.readFileSync(file));
  fs.writeFileSync('./build/static/css/react.css', fileContents.join('\n'));
});
