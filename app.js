const express = require('express');
const app = express();
const data = require('./data.json');

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { data: data });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
