let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();

app.use(cookieParser());

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended : false }));

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  if(req.url === '/error'){
    return next('An Error Occurred');
  }
  next();
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.use((req, res, next) => {
  res.cookie("username", "sumit");
  next();
});

app.get('/', (req, res) => {
  res.send('welcome to home page');
});

app.get('/users', (req, res) => {
  res.send('welcome to users page');
})

app.post('/form', (req, res) => {
  res.send(req.body);
});

app.post('/json', (req, res) => {
  res.json(req.body);
})

app.use((req, res) => {
  res.send('page not found');
})

app.use((err, req, res, next) => {
  res.send(err);
})

app.listen(4000, () => {
  console.log('server is listening on port:4000');
})