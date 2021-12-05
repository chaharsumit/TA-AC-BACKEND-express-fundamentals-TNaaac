let express = require('express');

let app = express();

app.use((req, res, next) => {
  if(req.url === '/error'){
    return next('An Error Occured!');
  }
  next();
});

app.get('/', (req, res) => {
  res.send('welcome to home page');
});

app.get('/about', (req, res) => {
  res.send('welcome to about page');
})

app.use((req, res, next) => {
  res.send('404 page not found!!');
});

app.use((err, req, res, next) => {
  res.send(err);
})

app.listen(4000, () => {
  console.log('server is listening on port:4000');
})