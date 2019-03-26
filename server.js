const express = require('express');
const fs = require('fs');
const app = express();
const Jimp = require('jimp');

const thumbs = [];

fs.readdir('assets', (err, filesnames) => {
  for (const filename of filesnames) {
    Jimp.read(__dirname + '/assets/' + filename).then((image) => {
      const thumb = image
        .resize(160, 120)
        .quality(60)
        .greyscale()
        .blur(1);
      thumb.getBufferAsync(Jimp.MIME_JPEG).then((data) => {
        thumbs.push({name: filename, data: data});
      });
    }).catch((err) => {
      console.error(err);
    });
  }
});

app.all('/assets/*', (req, res) => {
  setTimeout(() => {
    console.log('delaying: ' + req.url);
    res.sendfile(__dirname + '/' + req.url);
  }, 4000);
});

app.all('/thumb/*', (req, res) => {
  const thumb = thumbs.find(t => req.url.indexOf(t.name) > -1);
  res.contentType('jpeg');
  res.end(thumb.data, 'binary');
});

app.all('*', (req, res) => {
  res.sendfile(__dirname + '/' + req.url);
});

const port = 3200;
app.listen(port, () => console.log(`Running on port: ${port}`))
