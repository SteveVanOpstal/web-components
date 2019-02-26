const express = require('express');
const app = express();

app.all('*', (req, res) => {
  if(req.url.indexOf('thumb') > -1) {
    console.log(req.url);
      res.sendfile('assets' + req.url);
  } else {
    setTimeout(() => {
      res.sendfile('assets' + req.url);
    }, 3000);
  }
});

const port = 3000;
app.listen(port, () => console.log(`Running on port: ${port}`))
