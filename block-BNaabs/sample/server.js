let express = require('express');

let app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
})

app.post('/new', (req, res) => {
  res.send(req.body);
})

app.get('/users/:username', (req, res) => {
  let username = req.params.username;
  res.send(username);
});

app.listen(4000, () => {
  console.log('server is listening on port:4000');
})