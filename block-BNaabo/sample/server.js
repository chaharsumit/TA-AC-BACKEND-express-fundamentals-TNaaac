let express = require('express');

let app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
})



app.use(express.json());
app.use(express.urlencoded({ extened : false }));
app.use(express.static(__dirname + '/public'));

/*
app.get('/images/img1.jpg', (req, res) => {
  res.send(req.body);
})

app.get('/stylesheets/styles.css', (req, res) => {
  res.send(req.body);
})
*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(4000, () => {
  console.log('server is listening on port:4000');
});