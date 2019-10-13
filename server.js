const express = require('express');
const fs = require('fs');
const app = express();
const Jimp = require('jimp');

const thumbs = [];

fs.readdir('assets', (err, filesnames) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  for (const filename of filesnames) {
    Jimp.read(__dirname + '/assets/' + filename).then((image) => {
      const thumb = image
        .resize(image.getWidth() / 20, image.getHeight() / 20)
        .quality(60)
        .greyscale()
        .blur(1);
      thumb.getBufferAsync(Jimp.MIME_JPEG).then((data) => {
        thumbs.push({ name: filename, data: data });
      });
    }).catch((err) => {
      console.error(err);
    });
  }
});

// mimicking a slow connection
const requests = [];
app.get('/assets/*', (req, res) => {
  if (!requests.includes(req.url)) {
    // requests.push(req.url);
    // setTimeout(() => {
    // console.log('delaying: ' + req.url);
    res.sendFile(__dirname + '/' + req.url);
    // }, 3000);
  } else {
    res.sendFile(__dirname + '/' + req.url);
  }
});

app.get('/thumbs/*', (req, res) => {
  const thumb = thumbs.find(t => req.url.indexOf(t.name) > -1);
  res.contentType('jpeg');
  res.end(thumb.data, 'binary');
});

app.all('*', (req, res) => {
  res.sendFile(__dirname + '/' + req.url);
});

const port = 3200;
app.listen(port, () => console.log(`Running on port: ${port}`))
