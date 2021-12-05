let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());

app.use('/about', (req, res, next) => {
  res.cookie('username', 'sumit');
  next();
})

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use(logger('dev'));

app.get('/about', (req, res) => {
  res.send('welcome to express server');
});

app.listen(4000, () => {
  console.log('server is listening on port:4000');
});