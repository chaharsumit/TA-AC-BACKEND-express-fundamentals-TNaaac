let express = require('express');

let app = express();


app.use((req, res, next) => {
  console.log(req.method, req.url, new Date());
  next();
});

app.use((req,res, next) => {
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  })
  req.on('end', () => {
    let parsedData = JSON.parse(store);
    req.body = parsedData;
    res.send(req.body);
  });
  next();
})

app.use((req, res, next) => {
  req.url = __dirname + '/public' + req.url;
  res.send(req.url);
})

app.listen(4000, () => {
  console.log('server is listening on port:4000');
})