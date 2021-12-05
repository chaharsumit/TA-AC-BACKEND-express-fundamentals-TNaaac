let express = require('express');

let app = express();

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
})

app.get('/', (req, res) => {
  res.send('welcome to the home page');
})

app.listen(4000, () => {
  console.log('server is listening on port:4000');
});