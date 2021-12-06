let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());

app.use(express.urlencoded({ extended : false }));

app.use(express.json());

app.use((req, res, next) => {
  if(req.url === '/error'){
    return next('Unknown page');
  }
  next();
})

app.use((req, res, next) => {
  res.cookie("username", "sumit");
  next();
})

app.get('/', (req, res) => {
  res.send(`<h2>welcome to express</h2>`);
});

app.get('/about', (req, res) => {
  res.send('My Name Is Querty');
})

app.post('/form', (req, res) => {
  res.json(req.body);
})

app.post('/json', (req, res) => {
  res.json(req.body);
})

app.get('/users/:username', (req, res) => {
  res.send(req.params.username);
})

app.use((req, res) => {
  res.send('404 Page Not Found');
})

app.use((err, res, req, next) => {
  res.send(err);
})

app.use(logger('dev'));

app.listen(3000, () => {
  console.log('server is listening on port:3000');
})